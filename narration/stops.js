// narration/stops.js
// -----------------------------------------------------------------------------
// Charles River Boat Company — tour route manifest
//
// One entry per narration beat, in the order the guide delivers them.
// This file is the SINGLE SOURCE OF TRUTH for stop ordering, timing, and
// map-number linkage. It contains NO TEXT OF ANY KIND — every human-readable
// string, titles included, lives in the language files (en.js, fr.js, es.js,
// pt.js, it.js, zh.js), which key off the same `id`.
//
// This file plus the language files plus photos/ is what scripts/build-index.mjs
// compiles into index.html's TOUR array. Edit here, then run:
//
//   node scripts/build-index.mjs --sync-index
//
// SCHEMA
//   id          Stable slug identifier, shared with the language files and the
//               map buttons. These are the same slugs index.html's TOUR array
//               uses, so the two join directly.
//   mapNumber   Integer 1–45 for on-map beats, null otherwise. This is what the
//               map's clickable buttons resolve to.
//   beats       Ordered per-line timing: `[{sec: N}, …]`, where N is the seconds
//               the guide spends on that line. Each language file holds a
//               parallel `lines` array indexed positionally against this one, so
//               `beats.length` is the contract every language file must satisfy.
//   travelSec   Boat-travel / observation time BEFORE this beat begins, in whole
//               seconds — the gap between the previous beat ending and this one
//               starting. The first beat carries 0 because nothing precedes it.
//
//   Three fields that used to live here are now derived rather than declared,
//   each for the same reason — a second copy is a copy that drifts:
//     image         → a beat's photo is `photos/<id>.jpg`. All 49 are present.
//     narrationMin  → computed from `beats` (see the export below).
//     title         → the English title is now just en.js[id].title, one of six.
//
// TIMING SUMMARY
//   Sum of beats.sec:  41.00 min  (spoken content, 2460 s)
//   Sum of travelSec:  53.33 min  (boat travel between beats, 3200 s)
//   Total:             94.33 min
//
//   TIMING FLAG: that total does not match the cruise. The tour is 70 minutes
//   dock-to-dock, and the welcome beat says so out loud ("the next 70 minutes").
//   These travelSec values are the ones index.html has always shipped, carried
//   over verbatim so the build could be proven a no-op — they are NOT measured
//   against a real cruise. Recalibrating them is a separate, deliberate step and
//   needs someone who has timed the boat with a live guide.
//
//   Per-beat total on-screen time = travelSec/60 + narrationMin(stop).
// -----------------------------------------------------------------------------

export const STOPS = [
  // Merged beat (commit 2c107ed): welcome/safety + boating terms + history of
  // the Charles, delivered as one block. Its 18 beats are that concatenation.
  { id: "welcome",         mapNumber: 1,     travelSec: 0,
    beats: [ {sec:15}, {sec:14}, {sec:11}, {sec:13}, {sec:12}, {sec:13},
             {sec:13}, {sec:8}, {sec:9}, {sec:9}, {sec:8}, {sec:11},
             {sec:12}, {sec:14}, {sec:13}, {sec:11}, {sec:13}, {sec:13} ] },
  { id: "mgb",             mapNumber: 2,     travelSec: 50,
    beats: [ {sec:13}, {sec:12}, {sec:13}, {sec:11}, {sec:12}, {sec:11},
             {sec:10} ] },
  { id: "brutalism",       mapNumber: 3,     travelSec: 40,
    beats: [ {sec:13}, {sec:11}, {sec:11}, {sec:12} ] },
  { id: "longfellow",      mapNumber: 4,     travelSec: 70,
    beats: [ {sec:13}, {sec:13}, {sec:15}, {sec:12}, {sec:14}, {sec:13} ] },
  { id: "community",       mapNumber: 5,     travelSec: 50,
    beats: [ {sec:12}, {sec:11}, {sec:11}, {sec:13} ] },
  { id: "esplanade",       mapNumber: 6,     travelSec: 80,
    beats: [ {sec:13}, {sec:12}, {sec:15}, {sec:14} ] },
  { id: "berkeley",        mapNumber: 7,     travelSec: 60,
    beats: [ {sec:13}, {sec:12}, {sec:14}, {sec:14}, {sec:12} ] },
  { id: "hancock",         mapNumber: 8,     travelSec: 50,
    beats: [ {sec:14}, {sec:9}, {sec:14}, {sec:15}, {sec:13} ] },
  { id: "huntington",      mapNumber: 9,     travelSec: 50,
    beats: [ {sec:13}, {sec:13}, {sec:13} ] },
  { id: "pru",             mapNumber: 10,    travelSec: 50,
    beats: [ {sec:14}, {sec:14}, {sec:13}, {sec:14} ] },
  { id: "onedalton",       mapNumber: 11,    travelSec: 50,
    beats: [ {sec:13}, {sec:11}, {sec:12}, {sec:9} ] },
  { id: "harvardbridge",   mapNumber: 12,    travelSec: 90,
    beats: [ {sec:14}, {sec:15}, {sec:16} ] },
  { id: "citgo",           mapNumber: 13,    travelSec: 80,
    beats: [ {sec:13}, {sec:15}, {sec:13}, {sec:14} ] },
  { id: "collegetown",     mapNumber: 14,    travelSec: 30,
    beats: [ {sec:9}, {sec:12}, {sec:13} ] },
  { id: "bu",              mapNumber: 15,    travelSec: 40,
    beats: [ {sec:14}, {sec:15}, {sec:13}, {sec:10} ] },
  { id: "bualumni",        mapNumber: 16,    travelSec: 20,
    beats: [ {sec:8}, {sec:13}, {sec:12}, {sec:12} ] },
  { id: "bucds",           mapNumber: 17,    travelSec: 30,
    beats: [ {sec:14}, {sec:14}, {sec:13} ] },
  { id: "marsh",           mapNumber: 18,    travelSec: 50,
    beats: [ {sec:14}, {sec:12}, {sec:8} ] },
  { id: "headofcharles",   mapNumber: 19,    travelSec: 40,
    beats: [ {sec:15}, {sec:12}, {sec:13} ] },
  { id: "bubridge",        mapNumber: 20,    travelSec: 80,
    beats: [ {sec:11}, {sec:16}, {sec:12}, {sec:13} ] },
  { id: "dirtywater",      mapNumber: 21,    travelSec: 40,
    beats: [ {sec:13}, {sec:14}, {sec:12}, {sec:15}, {sec:12} ] },
  { id: "magazine",        mapNumber: 22,    travelSec: 90,
    beats: [ {sec:11}, {sec:15}, {sec:15}, {sec:13} ] },
  { id: "riverside",       mapNumber: 23,    travelSec: 90,
    beats: [ {sec:11}, {sec:14}, {sec:11} ] },
  { id: "polaroid",        mapNumber: 24,    travelSec: 90,
    beats: [ {sec:14}, {sec:11}, {sec:15} ] },
  { id: "resilience",      mapNumber: 25,    travelSec: 90,
    beats: [ {sec:14}, {sec:12}, {sec:16}, {sec:11} ] },
  { id: "harvard",         mapNumber: 26,    travelSec: 120,
    beats: [ {sec:14}, {sec:13}, {sec:14}, {sec:14} ] },
  { id: "harvardalumni",   mapNumber: 27,    travelSec: 20,
    beats: [ {sec:12}, {sec:14}, {sec:14} ] },
  { id: "harvardhouses",   mapNumber: 28,    travelSec: 30,
    beats: [ {sec:14}, {sec:15}, {sec:9} ] },
  { id: "weeks",           mapNumber: 29,    travelSec: 60,
    beats: [ {sec:10}, {sec:16}, {sec:12} ] },
  { id: "boathouses",      mapNumber: 30,    travelSec: 60,
    beats: [ {sec:13}, {sec:11}, {sec:13} ] },
  { id: "baker",           mapNumber: 31,    travelSec: 70,
    beats: [ {sec:9}, {sec:14} ] },
  { id: "break",           mapNumber: null,  travelSec: 40,
    beats: [ {sec:8}, {sec:11}, {sec:12} ] },
  { id: "nickerson",       mapNumber: 32,    travelSec: 90,
    beats: [ {sec:11}, {sec:14}, {sec:16} ] },
  { id: "ford",            mapNumber: 33,    travelSec: 100,
    beats: [ {sec:11}, {sec:13}, {sec:15}, {sec:13} ] },
  { id: "bubridgeview",    mapNumber: 34,    travelSec: 90,
    beats: [ {sec:12}, {sec:12} ] },
  { id: "hyatt",           mapNumber: 35,    travelSec: 90,
    beats: [ {sec:15}, {sec:12} ] },
  // These two carry no map circle and were once described as retired, but they
  // are still in the live playback and passengers still hear them. Retiring them
  // for real means deleting them here and from the six language files.
  { id: "esplanadehist",   mapNumber: null,  travelSec: 90,
    beats: [ {sec:14}, {sec:16}, {sec:16} ] },
  { id: "backbay",         mapNumber: null,  travelSec: 120,
    beats: [ {sec:13}, {sec:15}, {sec:16} ] },
  { id: "smoot",           mapNumber: 36,    travelSec: 110,
    beats: [ {sec:10}, {sec:16}, {sec:15}, {sec:9} ] },
  { id: "mit",             mapNumber: 37,    travelSec: 60,
    beats: [ {sec:12}, {sec:15}, {sec:12}, {sec:13}, {sec:13} ] },
  { id: "mithacks",        mapNumber: 38,    travelSec: 20,
    beats: [ {sec:8}, {sec:16}, {sec:11} ] },
  { id: "mitalumni",       mapNumber: 39,    travelSec: 20,
    beats: [ {sec:13}, {sec:15} ] },
  { id: "mitgreen",        mapNumber: 40,    travelSec: 60,
    beats: [ {sec:10}, {sec:15}, {sec:13}, {sec:8} ] },
  // CONTENT FLAG: the source photo for this beat is wrong — index.html inlined a
  // "Make Way for Ducklings" book cover, not the Finger Islands. photos/finger.jpg
  // is a faithful copy of that wrong image. Correcting the content is a separate
  // step; extraction deliberately preserved whatever TOUR carried.
  { id: "finger",          mapNumber: 41,    travelSec: 90,
    beats: [ {sec:14}, {sec:16}, {sec:13} ] },
  { id: "statehouse",      mapNumber: 42,    travelSec: 90,
    beats: [ {sec:13}, {sec:10}, {sec:16} ] },
  { id: "liberty",         mapNumber: 43,    travelSec: 80,
    beats: [ {sec:12}, {sec:16}, {sec:11}, {sec:12} ] },
  { id: "zakim",           mapNumber: 44,    travelSec: 120,
    beats: [ {sec:13}, {sec:12}, {sec:15}, {sec:16} ] },
  { id: "museum",          mapNumber: 45,    travelSec: 100,
    beats: [ {sec:11}, {sec:13}, {sec:13}, {sec:11} ] },
  { id: "closing",         mapNumber: null,  travelSec: 60,
    beats: [ {sec:9}, {sec:17}, {sec:14}, {sec:9}, {sec:16} ] },
];

// Spoken duration of a beat, in decimal minutes — derived from `beats`.
export const narrationMin = (stop) => stop.beats.reduce((sum, b) => sum + b.sec, 0) / 60;

// Convenience totals — useful for the build and for calibration checks.
export const TOTAL_NARRATION_MIN = STOPS.reduce((sum, s) => sum + narrationMin(s), 0);
export const TOTAL_TRAVEL_MIN    = STOPS.reduce((sum, s) => sum + s.travelSec, 0) / 60;
export const TOTAL_TOUR_MIN      = TOTAL_NARRATION_MIN + TOTAL_TRAVEL_MIN;
export const MAP_STOP_COUNT      = STOPS.filter(s => s.mapNumber !== null).length;
export const FLOW_STOP_COUNT     = STOPS.filter(s => s.mapNumber === null).length;
export const TOTAL_BEAT_COUNT    = STOPS.reduce((sum, s) => sum + s.beats.length, 0);

// Per-beat on-screen time (leading travel + narration).
export const beatTotalMin = (stop) => stop.travelSec / 60 + narrationMin(stop);

// -----------------------------------------------------------------------------
// PHOTO NOTES
//
// Photos are derived from the id: `photos/<id>.jpg`, one file per beat, all 49
// present. They were extracted from the base64 images inlined in index.html,
// which was the canonical source for tour content before the build script.
//
// They were NOT taken from the same-named .jpg files that used to sit in the repo
// root. Those were misnamed — every one of them held the photo belonging to a
// different beat — which is exactly why this field is derived rather than
// declared. Those root files have since been deleted; the bytes remain in git
// history. Three unused images and an old README are in archive/.
// -----------------------------------------------------------------------------
