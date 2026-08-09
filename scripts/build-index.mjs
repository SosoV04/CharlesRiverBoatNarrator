// scripts/build-index.mjs
// -----------------------------------------------------------------------------
// Compile narration/ + photos/ into the generated blocks of index.html.
//
// USAGE
//   node scripts/build-index.mjs --check         # fail if index.html has drifted
//   node scripts/build-index.mjs --sync-index    # regenerate the blocks in place
//   node scripts/build-index.mjs --print         # write the TOUR block to stdout
//
// WHY THIS EXISTS
//   index.html is a single self-contained file: every photo is an inlined base64
//   data URI and every string of narration is inlined too. That is deliberate —
//   passengers load it from a QR code on a boat, and once the page is open it
//   needs the network for nothing. Splitting it into runtime fetches would put
//   six extra requests exactly where the signal is worst.
//
//   The cost of that choice is that the text an editor changes in narration/ has
//   to be compiled in. This script is that compile step.
//
// WHAT IT GENERATES
//   TOUR           the whole tour: order, timing, photos and all six languages
//   MAP_STOP_IDS   TOUR ids in map-number order, derived from stops.js mapNumber
//
//   Both live between /* NAME:BEGIN … */ and /* NAME:END */ markers, the same
//   convention scripts/extract-map-coords.mjs uses for MAP_COORDS. The two
//   scripts touch disjoint blocks and can be run in either order.
//
//   Everything else in index.html — the UI strings, the player, the map wiring —
//   is hand-maintained and never touched here.
//
// THE SHAPE OF TOUR IS LOAD-BEARING
//   The block is emitted as compact JSON.stringify output. Key order (id, img,
//   travel, title, caption, lines) and language order (en, fr, es, pt, it, zh)
//   are what make the output byte-reproducible, so they are set explicitly below
//   rather than left to object-literal ordering.
// -----------------------------------------------------------------------------

import fs from "fs";
import path from "path";
import { pathToFileURL } from "url";

const ROOT = path.resolve(import.meta.dirname, "..");
const INDEX = path.join(ROOT, "index.html");
const PHOTOS = path.join(ROOT, "photos");

// Language order is part of the generated output, not an implementation detail:
// it must match the order index.html has always shipped.
const LANGS = [
  ["en", "EN"], ["fr", "FR"], ["es", "ES"],
  ["pt", "PT"], ["it", "IT"], ["zh", "ZH"],
];

const load = (rel) => import(pathToFileURL(path.join(ROOT, rel)).href);

// Compare on content, not line endings — index.html comes back as CRLF on a
// Windows checkout while everything generated here uses "\n". Same trap the
// map-coords script hit.
const sameBlock = (a, b) => a.replace(/\r\n/g, "\n") === b.replace(/\r\n/g, "\n");

async function loadNarration() {
  const { STOPS } = await load("narration/stops.js");
  const text = {};
  for (const [code, exp] of LANGS) {
    const mod = await load(`narration/${code}.js`);
    if (!mod[exp]) throw new Error(`narration/${code}.js does not export ${exp}`);
    text[code] = mod[exp];
  }
  return { STOPS, text };
}

// Fail loudly and specifically. A silent mismatch here would ship a tour with a
// line missing or a photo from the wrong stop, which is exactly the class of bug
// that made the photos need re-extracting in the first place.
function validate(STOPS, text) {
  const problems = [];
  const seen = new Set();

  for (const stop of STOPS) {
    if (seen.has(stop.id)) problems.push(`${stop.id}: duplicate id`);
    seen.add(stop.id);

    if (!Number.isInteger(stop.travelSec) || stop.travelSec < 0)
      problems.push(`${stop.id}: travelSec must be a non-negative integer`);
    if (!fs.existsSync(path.join(PHOTOS, `${stop.id}.jpg`)))
      problems.push(`${stop.id}: photos/${stop.id}.jpg is missing`);

    for (const [code] of LANGS) {
      const entry = text[code][stop.id];
      if (!entry) { problems.push(`${stop.id}: missing from ${code}.js`); continue; }
      if (!entry.title) problems.push(`${stop.id} (${code}): no title`);
      if (!entry.caption) problems.push(`${stop.id} (${code}): no caption`);
      if (entry.lines.length !== stop.beats.length)
        problems.push(`${stop.id} (${code}): ${entry.lines.length} lines but ${stop.beats.length} beats`);
    }
  }

  // Stops present in a language file but not in stops.js would silently never
  // play, so they are an error rather than dead weight.
  for (const [code] of LANGS)
    for (const id of Object.keys(text[code]))
      if (!seen.has(id)) problems.push(`${id}: in ${code}.js but not in stops.js`);

  const nums = STOPS.filter(s => s.mapNumber !== null).map(s => s.mapNumber);
  const dupes = nums.filter((n, i) => nums.indexOf(n) !== i);
  if (dupes.length) problems.push(`duplicate mapNumbers: ${[...new Set(dupes)].join(", ")}`);

  if (problems.length) {
    console.error(`Refusing to build — ${problems.length} problem(s):`);
    problems.forEach(p => console.error(`  ${p}`));
    process.exit(1);
  }
}

function renderTour(STOPS, text) {
  const tour = STOPS.map(stop => {
    const img = fs.readFileSync(path.join(PHOTOS, `${stop.id}.jpg`)).toString("base64");
    const byLang = (pick) => {
      const o = {};
      for (const [code] of LANGS) o[code] = pick(text[code][stop.id]);
      return o;
    };
    return {
      id: stop.id,
      img: `data:image/jpeg;base64,${img}`,
      travel: stop.travelSec,
      title: byLang(e => e.title),
      caption: byLang(e => e.caption),
      lines: stop.beats.map((beat, i) => ({
        sec: beat.sec,
        text: byLang(e => e.lines[i]),
      })),
    };
  });
  return `const TOUR = ${JSON.stringify(tour)};`;
}

function renderMapStopIds(STOPS) {
  const ids = STOPS.filter(s => s.mapNumber !== null)
    .sort((a, b) => a.mapNumber - b.mapNumber)
    .map(s => s.id);
  const rows = [];
  for (let i = 0; i < ids.length; i += 5)
    rows.push("  " + ids.slice(i, i + 5).map(id => `"${id}"`).join(", "));
  return "const MAP_STOP_IDS = [\n" + rows.join(",\n") + "\n];";
}

// Returns the text between a marker pair, plus the offsets needed to replace it.
function readBlock(html, name) {
  const begin = `/* ${name}:BEGIN`;
  const end = `/* ${name}:END */`;
  const b = html.indexOf(begin), e = html.indexOf(end);
  if (b === -1 || e === -1) throw new Error(`${name} markers not found in index.html`);
  const afterComment = html.indexOf("*/", b) + 2;
  return { afterComment, e, body: html.slice(afterComment, e).trim() };
}

const BLOCKS = [
  { name: "TOUR", render: ({ STOPS, text }) => renderTour(STOPS, text) },
  { name: "MAP-STOP-IDS", render: ({ STOPS }) => renderMapStopIds(STOPS) },
];

const args = process.argv.slice(2);
const narration = await loadNarration();
validate(narration.STOPS, narration.text);

if (args.includes("--print")) {
  process.stdout.write(renderTour(narration.STOPS, narration.text));
  process.exit(0);
}

if (!args.includes("--check") && !args.includes("--sync-index")) {
  console.error("Usage: node scripts/build-index.mjs [--check | --sync-index | --print]");
  process.exit(2);
}

let html = fs.readFileSync(INDEX, "utf8");
const eol = html.includes("\r\n") ? "\r\n" : "\n";
const results = [];

for (const { name, render } of BLOCKS) {
  const want = render(narration);
  const { afterComment, e, body } = readBlock(html, name);
  const matches = sameBlock(body, want);
  results.push({ name, matches });
  if (!matches && args.includes("--sync-index"))
    html = html.slice(0, afterComment) + eol + want + eol + html.slice(e);
}

const drifted = results.filter(r => !r.matches);

if (args.includes("--check")) {
  if (!drifted.length) {
    console.log(`OK — index.html matches narration/ (${narration.STOPS.length} stops, ` +
                `${narration.STOPS.reduce((n, s) => n + s.beats.length, 0)} beats, ${LANGS.length} languages)`);
    process.exit(0);
  }
  console.error(`DRIFT — ${drifted.map(r => r.name).join(", ")} out of date in index.html`);
  console.error("Run: node scripts/build-index.mjs --sync-index");
  process.exit(1);
}

if (!drifted.length) {
  console.log("index.html already up to date");
} else {
  fs.writeFileSync(INDEX, html);
  console.log(`index.html updated: ${drifted.map(r => r.name).join(", ")}`);
}
