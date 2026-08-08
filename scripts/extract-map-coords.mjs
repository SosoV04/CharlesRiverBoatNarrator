// scripts/extract-map-coords.mjs
// -----------------------------------------------------------------------------
// Charles River Boat Company — map marker coordinate extractor
//
// Regenerates the marker positions in data/map-coordinates.js from the source
// map image. Run this instead of hand-editing coordinates.
//
//   node scripts/extract-map-coords.mjs            # print a coordinate report
//   node scripts/extract-map-coords.mjs --json     # emit centroids as JSON
//   node scripts/extract-map-coords.mjs --crops    # write per-marker crops (see --out)
//   node scripts/extract-map-coords.mjs --overlay  # draw rings where hotspots will sit
//   node scripts/extract-map-coords.mjs --emit     # print the COORDS block for data/
//   node scripts/extract-map-coords.mjs --sync-index  # push coords into index.html
//   node scripts/extract-map-coords.mjs --check       # fail if index.html has drifted
//
// HOW IT WORKS
//   1. Decode map.png by hand — chunk walk, zlib inflate, scanline unfilter.
//      No image dependencies, so this runs on a bare Node install.
//   2. Mask the teal marker fill.
//   3. Group masked pixels into connected components (4-way, iterative).
//   4. Keep components that are marker-shaped, and take their centroids.
//
// WHAT IT DOES NOT DO
//   It finds WHERE the circles are, not WHICH NUMBER is printed inside each.
//   Digit assignment is a separate, human-verified step: run with --crops,
//   look at the enlarged montage, and record the digit for each index into
//   DIGIT_ORDER below. The mapping in data/map-coordinates.js was produced
//   that way, then cross-checked for bijection over 1-45.
// -----------------------------------------------------------------------------

import fs from "fs";
import zlib from "zlib";
import path from "path";

const ROOT = path.resolve(import.meta.dirname, "..");
const MAP = path.join(ROOT, "map.png");

// Teal marker fill. Tuned to the map's marker color; wide enough to survive
// the anti-aliased rim, tight enough to exclude the river's lighter blue.
const isTeal = (r, g, b) => g > 200 && b > 170 && r < 200 && g > r + 40 && b > r + 10;

// Marker-shaped: roughly circular, roughly 30px across.
const MIN_AREA = 300, MAX_AREA = 2500;
const MIN_SIDE = 18, MAX_SIDE = 44, MAX_SKEW = 8;

// The number printed inside each detected circle, in detector index order.
// Read by eye from the `--crops` montage against map.png (1090x762).
//
// THIS IS IMAGE-SPECIFIC. If the map is redrawn, the detector's index order
// changes and this list is meaningless until it is re-read from a fresh
// montage. `--emit` refuses to run if it stops being a bijection over 1-45,
// but that check cannot tell you the digits moved — only a human can.
export const DIGIT_ORDER = [
  27, 26, 28, 29, 30, 31, 45,
  25,  1, 44, 23, 24,  2, 22,
  39,  4, 43, 32, 40,  3, 21,
  37, 38, 33, 34, 35,  5, 20,
  41, 42, 18, 17, 16, 19, 36,
  12,  6, 15, 14, 13,  8, 10,
   7,  9, 11,
];

// --- PNG decode --------------------------------------------------------------

export function decodePng(file) {
  const buf = fs.readFileSync(file);
  if (buf.readUInt32BE(0) !== 0x89504e47) throw new Error(`${file} is not a PNG`);

  let p = 8, width, height, depth, colorType, interlace;
  const idat = [];
  while (p < buf.length) {
    const len = buf.readUInt32BE(p);
    const type = buf.toString("latin1", p + 4, p + 8);
    if (type === "IHDR") {
      width = buf.readUInt32BE(p + 8);
      height = buf.readUInt32BE(p + 12);
      depth = buf[p + 16];
      colorType = buf[p + 17];
      interlace = buf[p + 20];
    } else if (type === "IDAT") {
      idat.push(buf.subarray(p + 8, p + 8 + len));
    } else if (type === "IEND") break;
    p += 12 + len;
  }
  if (depth !== 8) throw new Error(`unsupported bit depth ${depth} (expected 8)`);
  if (interlace !== 0) throw new Error("interlaced PNG not supported");

  const channels = { 0: 1, 2: 3, 3: 1, 4: 2, 6: 4 }[colorType];
  if (!channels) throw new Error(`unsupported color type ${colorType}`);

  const bpp = channels;
  const stride = width * bpp;
  const raw = zlib.inflateSync(Buffer.concat(idat));
  const px = Buffer.alloc(height * stride);

  // Undo per-scanline filtering (PNG spec §9.2).
  for (let y = 0; y < height; y++) {
    const filter = raw[y * (stride + 1)];
    const line = raw.subarray(y * (stride + 1) + 1, (y + 1) * (stride + 1));
    for (let i = 0; i < stride; i++) {
      const left = i >= bpp ? px[y * stride + i - bpp] : 0;
      const up = y > 0 ? px[(y - 1) * stride + i] : 0;
      const upLeft = i >= bpp && y > 0 ? px[(y - 1) * stride + i - bpp] : 0;
      let v = line[i];
      if (filter === 1) v += left;
      else if (filter === 2) v += up;
      else if (filter === 3) v += (left + up) >> 1;
      else if (filter === 4) {
        const pa = Math.abs(up - upLeft), pb = Math.abs(left - upLeft);
        const pc = Math.abs(left + up - 2 * upLeft);
        v += pa <= pb && pa <= pc ? left : pb <= pc ? up : upLeft;
      }
      px[y * stride + i] = v & 255;
    }
  }
  return { width, height, bpp, stride, px };
}

// --- marker detection --------------------------------------------------------

export function findMarkers({ width, height, bpp, stride, px }) {
  const mask = new Uint8Array(width * height);
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const o = y * stride + x * bpp;
      if (isTeal(px[o], px[o + 1], px[o + 2])) mask[y * width + x] = 1;
    }
  }

  const label = new Int32Array(width * height).fill(-1);
  const comps = [];
  for (let seed = 0; seed < width * height; seed++) {
    if (!mask[seed] || label[seed] !== -1) continue;
    const id = comps.length;
    const stack = [seed];
    label[seed] = id;
    let n = 0, sx = 0, sy = 0;
    let minX = Infinity, maxX = -1, minY = Infinity, maxY = -1;
    while (stack.length) {
      const q = stack.pop();
      const x = q % width, y = (q / width) | 0;
      n++; sx += x; sy += y;
      if (x < minX) minX = x;
      if (x > maxX) maxX = x;
      if (y < minY) minY = y;
      if (y > maxY) maxY = y;
      if (x > 0 && mask[q - 1] && label[q - 1] === -1) { label[q - 1] = id; stack.push(q - 1); }
      if (x < width - 1 && mask[q + 1] && label[q + 1] === -1) { label[q + 1] = id; stack.push(q + 1); }
      if (y > 0 && mask[q - width] && label[q - width] === -1) { label[q - width] = id; stack.push(q - width); }
      if (y < height - 1 && mask[q + width] && label[q + width] === -1) { label[q + width] = id; stack.push(q + width); }
    }
    comps.push({ n, cx: sx / n, cy: sy / n, w: maxX - minX + 1, h: maxY - minY + 1, minX, minY });
  }

  const markers = comps
    .filter(c => c.n >= MIN_AREA && c.n <= MAX_AREA &&
                 c.w >= MIN_SIDE && c.w <= MAX_SIDE &&
                 c.h >= MIN_SIDE && c.h <= MAX_SIDE &&
                 Math.abs(c.w - c.h) <= MAX_SKEW);

  // Stable order: top-to-bottom, then left-to-right. This is a reading order for
  // the crop montage, NOT the map numbering.
  markers.sort((a, b) => (Math.round(a.cy / 20) - Math.round(b.cy / 20)) || (a.cx - b.cx));
  return markers.map((m, i) => ({
    index: i,
    x: +m.cx.toFixed(2),
    y: +m.cy.toFixed(2),
    x_pct: +((m.cx / width) * 100).toFixed(2),
    y_pct: +((m.cy / height) * 100).toFixed(2),
    area: m.n,
  }));
}

// --- minimal PNG encode (for --crops / --overlay artifacts) -------------------

function encodePng(width, height, rgb) {
  const stride = width * 3;
  const raw = Buffer.alloc(height * (stride + 1));
  for (let y = 0; y < height; y++) {
    raw[y * (stride + 1)] = 0; // filter: none
    rgb.copy(raw, y * (stride + 1) + 1, y * stride, (y + 1) * stride);
  }
  const chunk = (type, data) => {
    const b = Buffer.alloc(8 + data.length + 4);
    b.writeUInt32BE(data.length, 0);
    b.write(type, 4, "latin1");
    data.copy(b, 8);
    b.writeInt32BE(zlib.crc32 ? zlib.crc32(Buffer.concat([Buffer.from(type, "latin1"), data])) | 0 : crc32(type, data), 8 + data.length);
    return b;
  };
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8; ihdr[9] = 2; // 8-bit RGB
  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk("IHDR", ihdr),
    chunk("IDAT", zlib.deflateSync(raw)),
    chunk("IEND", Buffer.alloc(0)),
  ]);
}

let CRC_TABLE = null;
function crc32(type, data) {
  if (!CRC_TABLE) {
    CRC_TABLE = new Int32Array(256);
    for (let n = 0; n < 256; n++) {
      let c = n;
      for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
      CRC_TABLE[n] = c;
    }
  }
  let c = -1;
  const all = Buffer.concat([Buffer.from(type, "latin1"), data]);
  for (const byte of all) c = CRC_TABLE[(c ^ byte) & 0xff] ^ (c >>> 8);
  return c ^ -1;
}

// --- index.html sync ---------------------------------------------------------
// index.html is a self-contained monolith that cannot import ES modules over
// file://, so it carries an inlined copy of the coordinates. That copy is
// generated from data/map-coordinates.js and guarded by --check, so the two
// cannot drift apart unnoticed.

const INDEX = path.join(ROOT, "index.html");
const BEGIN = "/* MAP-COORDS:BEGIN";
const END = "/* MAP-COORDS:END */";

function renderInlineBlock(coords) {
  const nums = Object.keys(coords).map(Number).sort((a, b) => a - b);
  const lines = [];
  for (let i = 0; i < nums.length; i += 3) {
    lines.push("  " + nums.slice(i, i + 3)
      .map(n => `${String(n).padStart(2)}:{x:${coords[n].x_pct.toFixed(2)},y:${coords[n].y_pct.toFixed(2)}}`)
      .join(", "));
  }
  return "const MAP_COORDS = {\n" + lines.join(",\n") + "\n};";
}

function readInlineBlock() {
  const html = fs.readFileSync(INDEX, "utf8");
  const b = html.indexOf(BEGIN), e = html.indexOf(END);
  if (b === -1 || e === -1) throw new Error("MAP-COORDS markers not found in index.html");
  const afterComment = html.indexOf("*/", b) + 2;
  return { html, b, e, afterComment, body: html.slice(afterComment, e).trim() };
}

async function loadCoords() {
  const { COORDS } = await import(path.join(ROOT, "data", "map-coordinates.js").replace(/\\/g, "/").replace(/^([a-zA-Z]):/, "file:///$1:"));
  return COORDS;
}

// --- CLI ---------------------------------------------------------------------

const isMain = process.argv[1] && path.resolve(process.argv[1]) === path.resolve(import.meta.filename);
if (isMain) {
  const args = process.argv.slice(2);
  const outDir = (() => {
    const i = args.indexOf("--out");
    return i !== -1 ? args[i + 1] : path.join(ROOT, ".map-extract");
  })();

  // These two compare data/ against index.html and never touch the image.
  if (args.includes("--sync-index") || args.includes("--check")) {
    const want = renderInlineBlock(await loadCoords());
    const { html, afterComment, e, body } = readInlineBlock();
    if (args.includes("--check")) {
      if (body === want) {
        console.log("OK — index.html MAP_COORDS matches data/map-coordinates.js");
      } else {
        console.error("DRIFT — index.html MAP_COORDS does not match data/map-coordinates.js");
        console.error("Run: node scripts/extract-map-coords.mjs --sync-index");
        process.exit(1);
      }
    } else {
      if (body === want) {
        console.log("index.html already up to date");
      } else {
        fs.writeFileSync(INDEX, html.slice(0, afterComment) + "\n" + want + "\n" + html.slice(e));
        console.log("index.html MAP_COORDS updated from data/map-coordinates.js");
      }
    }
    process.exit(0);
  }

  const img = decodePng(MAP);
  const markers = findMarkers(img);

  if (args.includes("--json")) {
    console.log(JSON.stringify(markers, null, 2));
  } else if (args.includes("--emit")) {
    if (DIGIT_ORDER.length !== markers.length) {
      throw new Error(`DIGIT_ORDER has ${DIGIT_ORDER.length} entries but ${markers.length} markers were detected — re-read the montage`);
    }
    const seen = new Set(DIGIT_ORDER);
    if (seen.size !== markers.length || [...seen].some(n => n < 1 || n > markers.length)) {
      throw new Error("DIGIT_ORDER is not a bijection over 1..N — re-read the montage");
    }
    const byNumber = {};
    DIGIT_ORDER.forEach((n, i) => { byNumber[n] = markers[i]; });
    console.log("export const COORDS = {");
    for (let n = 1; n <= markers.length; n++) {
      const m = byNumber[n];
      console.log(`  ${String(n).padStart(2)}: { x_pct: ${m.x_pct.toFixed(2).padStart(5)}, y_pct: ${m.y_pct.toFixed(2).padStart(5)} },`);
    }
    console.log("};");
  } else if (args.includes("--overlay")) {
    // Draw a ring at every coordinate in data/map-coordinates.js. Each ring should
    // land concentrically on a printed circle — this is what index.html's hotspots
    // will sit on, rendered as an image so it can be checked without a browser.
    const coords = await loadCoords();
    fs.mkdirSync(outDir, { recursive: true });
    const { width: W, height: H, bpp, stride, px } = img;
    const out = Buffer.alloc(W * H * 3);
    for (let y = 0; y < H; y++) {
      for (let x = 0; x < W; x++) {
        const s = y * stride + x * bpp, d = (y * W + x) * 3;
        out[d] = px[s]; out[d + 1] = px[s + 1]; out[d + 2] = px[s + 2];
      }
    }
    const R = 15.8, T = 2.2;
    for (const n of Object.keys(coords)) {
      const cx = coords[n].x_pct / 100 * W, cy = coords[n].y_pct / 100 * H;
      for (let y = Math.floor(cy - R - T); y <= Math.ceil(cy + R + T); y++) {
        for (let x = Math.floor(cx - R - T); x <= Math.ceil(cx + R + T); x++) {
          if (x < 0 || y < 0 || x >= W || y >= H) continue;
          const dist = Math.hypot(x - cx, y - cy);
          if (dist < R - T || dist > R + T) continue;
          const d = (y * W + x) * 3;
          out[d] = 255; out[d + 1] = 0; out[d + 2] = 90; // magenta: absent from the map's palette
        }
      }
    }
    const f = path.join(outDir, "hotspot-overlay.png");
    fs.writeFileSync(f, encodePng(W, H, out));
    console.log(`wrote ${f} — ${Object.keys(coords).length} rings; each should sit concentrically on a printed circle`);
  } else if (args.includes("--crops") || args.includes("--verify")) {
    // --crops   crops in detector index order — used to READ the digits.
    // --verify  crops in map-number order — a correct mapping reads 1,2,3...N.
    let ordered = markers;
    if (args.includes("--verify")) {
      const byNumber = {};
      DIGIT_ORDER.forEach((n, i) => { byNumber[n] = markers[i]; });
      ordered = Array.from({ length: markers.length }, (_, i) => byNumber[i + 1]);
    }
    fs.mkdirSync(outDir, { recursive: true });
    const SCALE = 6, PAD = 20, COLS = 7;
    const cw = PAD * 2 * SCALE, chh = PAD * 2 * SCALE;
    const rows = Math.ceil(ordered.length / COLS);
    const W = COLS * cw, H = rows * chh;
    const out = Buffer.alloc(W * H * 3, 255);
    ordered.forEach((m, i) => {
      const gx = (i % COLS) * cw, gy = ((i / COLS) | 0) * chh;
      for (let dy = 0; dy < PAD * 2; dy++) {
        for (let dx = 0; dx < PAD * 2; dx++) {
          const sx = Math.round(m.x) - PAD + dx, sy = Math.round(m.y) - PAD + dy;
          let r = 255, g = 255, b = 255;
          if (sx >= 0 && sy >= 0 && sx < img.width && sy < img.height) {
            const o = sy * img.stride + sx * img.bpp;
            r = img.px[o]; g = img.px[o + 1]; b = img.px[o + 2];
          }
          for (let py = 0; py < SCALE; py++) {
            for (let pxx = 0; pxx < SCALE; pxx++) {
              const o = ((gy + dy * SCALE + py) * W + gx + dx * SCALE + pxx) * 3;
              out[o] = r; out[o + 1] = g; out[o + 2] = b;
            }
          }
        }
      }
    });
    const verify = args.includes("--verify");
    const f = path.join(outDir, verify ? "markers-verify.png" : "markers-montage.png");
    fs.writeFileSync(f, encodePng(W, H, out));
    console.log(`wrote ${f} (${ordered.length} crops, ${COLS} per row, order = ${verify ? "map number — should read 1..N" : "detector index"})`);
  } else {
    console.log(`map: ${img.width}x${img.height}  aspect ${(img.width / img.height).toFixed(3)}`);
    console.log(`detected ${markers.length} marker circles\n`);
    console.log("idx      px        pct");
    for (const m of markers) {
      console.log(
        String(m.index).padStart(3),
        `(${String(Math.round(m.x)).padStart(4)},${String(Math.round(m.y)).padStart(4)})`,
        `  ${m.x_pct.toFixed(2).padStart(6)}, ${m.y_pct.toFixed(2).padStart(6)}`
      );
    }
  }
}
