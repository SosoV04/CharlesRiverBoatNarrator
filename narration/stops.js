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
// SCHEMA
//   id                  Stable slug identifier, shared with the language files and
//                       the map buttons. These are the same slugs index.html's TOUR
//                       array uses, so the two join directly.
//   mapNumber           Integer 1–45 for on-map beats, null otherwise. This is what
//                       the map's clickable buttons resolve to.
//   beats               Ordered per-line timing: `[{sec: N}, …]`, where N is the
//                       seconds the guide spends on that line. Each language file
//                       holds a parallel `lines` array indexed positionally against
//                       this one, so `beats.length` is the contract every language
//                       file must satisfy.
//   trailingSilenceMin  Boat-travel / observation time AFTER this beat ends, before
//                       the next beat begins. See TIMING SUMMARY.
//
//   Three fields that used to live here are now derived rather than declared, each
//   for the same reason — a second copy is a copy that drifts:
//     image         → a beat's photo is `photos/<id>.jpg`. All 47 are present.
//     narrationMin  → computed from `beats` (see the export below).
//     title         → the English title is now just en.js[id].title, one of six.
//
// TIMING SUMMARY
//   Sum of beats.sec:           39.50 min  (spoken content, 2370 s)
//   Sum of trailingSilenceMin:  30.50 min  (boat travel between beats)
//   Total tour length:          70.00 min  (dock-to-dock)
//
//   trailingSilenceMin is an even-split placeholder: 30.50 min spread across the
//   46 inter-beat gaps. The final beat carries 0 because the tour ends there. This
//   is NOT measured data — it is a starting point to be refined once we time a real
//   cruise with a live guide.
//
//   Per-beat total on-screen time = narrationMin(stop) + trailingSilenceMin.
// -----------------------------------------------------------------------------

// Even-split placeholder — replace per-beat after calibration.
// Derivation: 30.50 min of total travel time ÷ 46 inter-beat gaps.
// (47 beats, but the final one carries no trailing silence, so 46 gaps.)
const T = 30.50 / 46;

export const STOPS = [
  // Merged beat (commit 2c107ed): welcome/safety + boating terms + history of
  // the Charles, delivered as one block. Its 18 beats are that concatenation.
  { id: "welcome",         mapNumber: 1,     trailingSilenceMin: T,
    beats: [ {sec:15}, {sec:14}, {sec:11}, {sec:13}, {sec:12}, {sec:13}, {sec:13},
             {sec:8}, {sec:9}, {sec:9}, {sec:8}, {sec:11}, {sec:12}, {sec:14},
             {sec:13}, {sec:11}, {sec:13}, {sec:13} ] },
  { id: "mgb",             mapNumber: 2,     trailingSilenceMin: T,
    beats: [ {sec:13}, {sec:12}, {sec:13}, {sec:11}, {sec:12}, {sec:11}, {sec:10} ] },
  { id: "brutalism",       mapNumber: 3,     trailingSilenceMin: T,
    beats: [ {sec:13}, {sec:11}, {sec:11}, {sec:12} ] },
  { id: "longfellow",      mapNumber: 4,     trailingSilenceMin: T,
    beats: [ {sec:13}, {sec:13}, {sec:15}, {sec:12}, {sec:14}, {sec:13} ] },
  { id: "community",       mapNumber: 5,     trailingSilenceMin: T,
    beats: [ {sec:12}, {sec:11}, {sec:11}, {sec:13} ] },
  { id: "esplanade",       mapNumber: 6,     trailingSilenceMin: T,
    beats: [ {sec:13}, {sec:12}, {sec:15}, {sec:14} ] },
  { id: "berkeley",        mapNumber: 7,     trailingSilenceMin: T,
    beats: [ {sec:13}, {sec:12}, {sec:14}, {sec:14}, {sec:12} ] },
  { id: "hancock",         mapNumber: 8,     trailingSilenceMin: T,
    beats: [ {sec:14}, {sec:9}, {sec:14}, {sec:15}, {sec:13} ] },
  { id: "huntington",      mapNumber: 9,     trailingSilenceMin: T,
    beats: [ {sec:13}, {sec:13}, {sec:13} ] },
  { id: "pru",             mapNumber: 10,    trailingSilenceMin: T,
    beats: [ {sec:14}, {sec:14}, {sec:13}, {sec:14} ] },
  { id: "onedalton",       mapNumber: 11,    trailingSilenceMin: T,
    beats: [ {sec:13}, {sec:11}, {sec:12}, {sec:9} ] },
  { id: "harvardbridge",   mapNumber: 12,    trailingSilenceMin: T,
    beats: [ {sec:14}, {sec:15}, {sec:16} ] },
  { id: "citgo",           mapNumber: 13,    trailingSilenceMin: T,
    beats: [ {sec:13}, {sec:15}, {sec:13}, {sec:14} ] },
  { id: "collegetown",     mapNumber: 14,    trailingSilenceMin: T,
    beats: [ {sec:9}, {sec:12}, {sec:13} ] },
  { id: "bu",              mapNumber: 15,    trailingSilenceMin: T,
    beats: [ {sec:14}, {sec:15}, {sec:13}, {sec:10} ] },
  { id: "bualumni",        mapNumber: 16,    trailingSilenceMin: T,
    beats: [ {sec:8}, {sec:13}, {sec:12}, {sec:12} ] },
  { id: "bucds",           mapNumber: 17,    trailingSilenceMin: T,
    beats: [ {sec:14}, {sec:14}, {sec:13} ] },
  { id: "marsh",           mapNumber: 18,    trailingSilenceMin: T,
    beats: [ {sec:14}, {sec:12}, {sec:8} ] },
  { id: "headofcharles",   mapNumber: 19,    trailingSilenceMin: T,
    beats: [ {sec:15}, {sec:12}, {sec:13} ] },
  { id: "bubridge",        mapNumber: 20,    trailingSilenceMin: T,
    beats: [ {sec:11}, {sec:16}, {sec:12}, {sec:13} ] },
  { id: "dirtywater",      mapNumber: 21,    trailingSilenceMin: T,
    beats: [ {sec:13}, {sec:14}, {sec:12}, {sec:15}, {sec:12} ] },
  { id: "magazine",        mapNumber: 22,    trailingSilenceMin: T,
    beats: [ {sec:11}, {sec:15}, {sec:15}, {sec:13} ] },
  { id: "riverside",       mapNumber: 23,    trailingSilenceMin: T,
    beats: [ {sec:11}, {sec:14}, {sec:11} ] },
  { id: "polaroid",        mapNumber: 24,    trailingSilenceMin: T,
    beats: [ {sec:14}, {sec:11}, {sec:15} ] },
  { id: "resilience",      mapNumber: 25,    trailingSilenceMin: T,
    beats: [ {sec:14}, {sec:12}, {sec:16}, {sec:11} ] },
  { id: "harvard",         mapNumber: 26,    trailingSilenceMin: T,
    beats: [ {sec:14}, {sec:13}, {sec:14}, {sec:14} ] },
  { id: "harvardalumni",   mapNumber: 27,    trailingSilenceMin: T,
    beats: [ {sec:12}, {sec:14}, {sec:14} ] },
  { id: "harvardhouses",   mapNumber: 28,    trailingSilenceMin: T,
    beats: [ {sec:14}, {sec:15}, {sec:9} ] },
  { id: "weeks",           mapNumber: 29,    trailingSilenceMin: T,
    beats: [ {sec:10}, {sec:16}, {sec:12} ] },
  { id: "boathouses",      mapNumber: 30,    trailingSilenceMin: T,
    beats: [ {sec:13}, {sec:11}, {sec:13} ] },
  { id: "baker",           mapNumber: 31,    trailingSilenceMin: T,
    beats: [ {sec:9}, {sec:14} ] },
  { id: "break",           mapNumber: null,  trailingSilenceMin: T,
    beats: [ {sec:8}, {sec:11}, {sec:12} ] },
  { id: "nickerson",       mapNumber: 32,    trailingSilenceMin: T,
    beats: [ {sec:11}, {sec:14}, {sec:16} ] },
  { id: "ford",            mapNumber: 33,    trailingSilenceMin: T,
    beats: [ {sec:11}, {sec:13}, {sec:15}, {sec:13} ] },
  { id: "bubridgeview",    mapNumber: 34,    trailingSilenceMin: T,
    beats: [ {sec:12}, {sec:12} ] },
  { id: "hyatt",           mapNumber: 35,    trailingSilenceMin: T,
    beats: [ {sec:15}, {sec:12} ] },
  { id: "smoot",           mapNumber: 36,    trailingSilenceMin: T,
    beats: [ {sec:10}, {sec:16}, {sec:15}, {sec:9} ] },
  { id: "mit",             mapNumber: 37,    trailingSilenceMin: T,
    beats: [ {sec:12}, {sec:15}, {sec:12}, {sec:13}, {sec:13} ] },
  { id: "mithacks",        mapNumber: 38,    trailingSilenceMin: T,
    beats: [ {sec:8}, {sec:16}, {sec:11} ] },
  { id: "mitalumni",       mapNumber: 39,    trailingSilenceMin: T,
    beats: [ {sec:13}, {sec:15} ] },
  { id: "mitgreen",        mapNumber: 40,    trailingSilenceMin: T,
    beats: [ {sec:10}, {sec:15}, {sec:13}, {sec:8} ] },
  // CONTENT FLAG: the source photo for this beat is wrong — index.html inlined a
  // "Make Way for Ducklings" book cover, not the Finger Islands. photos/finger.jpg
  // is a faithful copy of that wrong image. Correcting the content is a separate
  // step; extraction deliberately preserved whatever TOUR carried.
  { id: "finger",          mapNumber: 41,    trailingSilenceMin: T,
    beats: [ {sec:14}, {sec:16}, {sec:13} ] },
  { id: "statehouse",      mapNumber: 42,    trailingSilenceMin: T,
    beats: [ {sec:13}, {sec:10}, {sec:16} ] },
  { id: "liberty",         mapNumber: 43,    trailingSilenceMin: T,
    beats: [ {sec:12}, {sec:16}, {sec:11}, {sec:12} ] },
  { id: "zakim",           mapNumber: 44,    trailingSilenceMin: T,
    beats: [ {sec:13}, {sec:12}, {sec:15}, {sec:16} ] },
  { id: "museum",          mapNumber: 45,    trailingSilenceMin: T,
    beats: [ {sec:11}, {sec:13}, {sec:13}, {sec:11} ] },
  { id: "closing",         mapNumber: null,  trailingSilenceMin: 0,
    beats: [ {sec:9}, {sec:17}, {sec:14}, {sec:9}, {sec:16} ] },
];

// Spoken duration of a beat, in decimal minutes — derived from `beats`.
export const narrationMin = (stop) => stop.beats.reduce((sum, b) => sum + b.sec, 0) / 60;

// Convenience totals — useful for the loader and for calibration checks.
export const TOTAL_NARRATION_MIN = STOPS.reduce((sum, s) => sum + narrationMin(s), 0);
export const TOTAL_SILENCE_MIN   = STOPS.reduce((sum, s) => sum + s.trailingSilenceMin, 0);
export const TOTAL_TOUR_MIN      = TOTAL_NARRATION_MIN + TOTAL_SILENCE_MIN;
export const MAP_STOP_COUNT      = STOPS.filter(s => s.mapNumber !== null).length;
export const FLOW_STOP_COUNT     = STOPS.filter(s => s.mapNumber === null).length;
export const TOTAL_BEAT_COUNT    = STOPS.reduce((sum, s) => sum + s.beats.length, 0);

// Per-beat on-screen time (narration + trailing silence). This is what the
// loader should use to schedule auto-advance.
export const beatTotalMin = (stop) => narrationMin(stop) + stop.trailingSilenceMin;

// -----------------------------------------------------------------------------
// PHOTO NOTES
//
// Photos are derived from the id: `photos/<id>.jpg`, one file per beat, all 47
// present. They were re-extracted from the base64 images inlined in index.html,
// which is the canonical source for tour content.
//
// They were NOT taken from the same-named .jpg files that used to sit in the repo
// root. Those were misnamed — every one of them held the photo belonging to a
// different beat — which is exactly why this field is now derived instead of
// declared. Four files that no longer belong to any beat were moved to _unused/:
// hyatt.jpg (a map graphic), history.jpg and esplanadehist.jpg (retired segments),
// and backbay.jpg, which was never an image at all but the project README saved
// under a .jpg extension (now _unused/OLD_README.md).
//
// Two segments were retired from the tour and have no beat and no photo here:
// "History of the Esplanade" and "Back Bay & Landfill".
// -----------------------------------------------------------------------------
