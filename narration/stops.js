// narration/stops.js
// -----------------------------------------------------------------------------
// Charles River Boat Company — tour route manifest
//
// One entry per narration beat, in the order the guide delivers them.
// This file is the SINGLE SOURCE OF TRUTH for stop ordering, timing, and
// map-number linkage. Language files (en.js, fr.js, es.js, pt.js, it.js, zh.js)
// reference each beat by its `id` and provide the narration text.
//
// SCHEMA
//   id                  Stable slug identifier, shared with the language files and
//                       the map buttons. These are the same slugs index.html's TOUR
//                       array uses, so the two join directly.
//   mapNumber           Integer 1–45 for on-map beats, null otherwise. This is what
//                       the map's clickable buttons resolve to.
//   title               English display title. Translated titles live in language files.
//   beats               Ordered per-line timing: `[{sec: N}, …]`, where N is the
//                       seconds the guide spends on that line. Each language file
//                       holds a parallel text array indexed positionally against
//                       this one, so `beats.length` is the contract every language
//                       file must satisfy.
//   trailingSilenceMin  Boat-travel / observation time AFTER this beat ends, before
//                       the next beat begins. See TIMING SUMMARY.
//
//   There is no `image` field. A beat's photo is derived, not declared: it lives at
//   `photos/<id>.jpg`. Every one of the 47 beats has a file. Where several beats
//   share a view (the four MIT beats, for instance) each still gets its own copy, so
//   any one of them can be re-shot later without disturbing its neighbours.
//
//   There is no narration text here either — that is what the language files are for.
//
// TIMING SUMMARY
//   Sum of beats.sec:           39.50 min  (spoken content, 2370 s)
//   Sum of trailingSilenceMin:  30.50 min  (boat travel between beats)
//   Total tour length:          70.00 min  (dock-to-dock)
//
//   narrationMin is no longer a stored field. It is computed from `beats`, so the
//   per-line timings and the per-beat total can never disagree — they used to, by
//   6 s overall and by 35 s on the closing beat.
//
//   trailingSilenceMin is still an even-split placeholder, now 30.50 min spread
//   across the 46 inter-beat gaps. The final beat carries 0 because the tour ends
//   there. This is NOT measured data — it is a starting point to be refined once we
//   time a real cruise with a live guide.
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
  { id: "welcome",         mapNumber: 1,     title: "Welcome, Terms & History",    trailingSilenceMin: T,
    beats: [ {sec:15}, {sec:14}, {sec:11}, {sec:13}, {sec:12}, {sec:13}, {sec:13},
             {sec:8}, {sec:9}, {sec:9}, {sec:8}, {sec:11}, {sec:12}, {sec:14},
             {sec:13}, {sec:11}, {sec:13}, {sec:13} ] },
  { id: "mgb",             mapNumber: 2,     title: "Mass General Brigham",        trailingSilenceMin: T,
    beats: [ {sec:13}, {sec:12}, {sec:13}, {sec:11}, {sec:12}, {sec:11}, {sec:10} ] },
  { id: "brutalism",       mapNumber: 3,     title: "Brutalism",                   trailingSilenceMin: T,
    beats: [ {sec:13}, {sec:11}, {sec:11}, {sec:12} ] },
  { id: "longfellow",      mapNumber: 4,     title: "Longfellow Bridge",           trailingSilenceMin: T,
    beats: [ {sec:13}, {sec:13}, {sec:15}, {sec:12}, {sec:14}, {sec:13} ] },
  { id: "community",       mapNumber: 5,     title: "Community Boating",           trailingSilenceMin: T,
    beats: [ {sec:12}, {sec:11}, {sec:11}, {sec:13} ] },
  { id: "esplanade",       mapNumber: 6,     title: "The Esplanade",               trailingSilenceMin: T,
    beats: [ {sec:13}, {sec:12}, {sec:15}, {sec:14} ] },
  { id: "berkeley",        mapNumber: 7,     title: "The Old, Old Hancock",        trailingSilenceMin: T,
    beats: [ {sec:13}, {sec:12}, {sec:14}, {sec:14}, {sec:12} ] },
  { id: "hancock",         mapNumber: 8,     title: "Hancock Tower",               trailingSilenceMin: T,
    beats: [ {sec:14}, {sec:9}, {sec:14}, {sec:15}, {sec:13} ] },
  { id: "huntington",      mapNumber: 9,     title: "111 Huntington Ave",          trailingSilenceMin: T,
    beats: [ {sec:13}, {sec:13}, {sec:13} ] },
  { id: "pru",             mapNumber: 10,    title: "Prudential Tower",            trailingSilenceMin: T,
    beats: [ {sec:14}, {sec:14}, {sec:13}, {sec:14} ] },
  { id: "onedalton",       mapNumber: 11,    title: "One Dalton",                  trailingSilenceMin: T,
    beats: [ {sec:13}, {sec:11}, {sec:12}, {sec:9} ] },
  { id: "harvardbridge",   mapNumber: 12,    title: "John Harvard Bridge",         trailingSilenceMin: T,
    beats: [ {sec:14}, {sec:15}, {sec:16} ] },
  { id: "citgo",           mapNumber: 13,    title: "CITGO Sign",                  trailingSilenceMin: T,
    beats: [ {sec:13}, {sec:15}, {sec:13}, {sec:14} ] },
  { id: "collegetown",     mapNumber: 14,    title: "A College Town",              trailingSilenceMin: T,
    beats: [ {sec:9}, {sec:12}, {sec:13} ] },
  { id: "bu",              mapNumber: 15,    title: "Boston University",           trailingSilenceMin: T,
    beats: [ {sec:14}, {sec:15}, {sec:13}, {sec:10} ] },
  { id: "bualumni",        mapNumber: 16,    title: "BU Alumni",                   trailingSilenceMin: T,
    beats: [ {sec:8}, {sec:13}, {sec:12}, {sec:12} ] },
  { id: "bucds",           mapNumber: 17,    title: "BU Data Sciences",            trailingSilenceMin: T,
    beats: [ {sec:14}, {sec:14}, {sec:13} ] },
  { id: "marsh",           mapNumber: 18,    title: "Marsh Chapel & BU Law",       trailingSilenceMin: T,
    beats: [ {sec:14}, {sec:12}, {sec:8} ] },
  { id: "headofcharles",   mapNumber: 19,    title: "Head of the Charles",         trailingSilenceMin: T,
    beats: [ {sec:15}, {sec:12}, {sec:13} ] },
  { id: "bubridge",        mapNumber: 20,    title: "BU Bridge",                   trailingSilenceMin: T,
    beats: [ {sec:11}, {sec:16}, {sec:12}, {sec:13} ] },
  { id: "dirtywater",      mapNumber: 21,    title: "That Dirty Water",            trailingSilenceMin: T,
    beats: [ {sec:13}, {sec:14}, {sec:12}, {sec:15}, {sec:12} ] },
  { id: "magazine",        mapNumber: 22,    title: "Magazine Beach",              trailingSilenceMin: T,
    beats: [ {sec:11}, {sec:15}, {sec:15}, {sec:13} ] },
  { id: "riverside",       mapNumber: 23,    title: "Riverside Boat Club",         trailingSilenceMin: T,
    beats: [ {sec:11}, {sec:14}, {sec:11} ] },
  { id: "polaroid",        mapNumber: 24,    title: "Old Polaroid HQ",             trailingSilenceMin: T,
    beats: [ {sec:14}, {sec:11}, {sec:15} ] },
  { id: "resilience",      mapNumber: 25,    title: "Resilience Plant",            trailingSilenceMin: T,
    beats: [ {sec:14}, {sec:12}, {sec:16}, {sec:11} ] },
  { id: "harvard",         mapNumber: 26,    title: "Harvard University",          trailingSilenceMin: T,
    beats: [ {sec:14}, {sec:13}, {sec:14}, {sec:14} ] },
  { id: "harvardalumni",   mapNumber: 27,    title: "Harvard Alumni",              trailingSilenceMin: T,
    beats: [ {sec:12}, {sec:14}, {sec:14} ] },
  { id: "harvardhouses",   mapNumber: 28,    title: "Harvard Houses",              trailingSilenceMin: T,
    beats: [ {sec:14}, {sec:15}, {sec:9} ] },
  { id: "weeks",           mapNumber: 29,    title: "Weeks Footbridge",            trailingSilenceMin: T,
    beats: [ {sec:10}, {sec:16}, {sec:12} ] },
  { id: "boathouses",      mapNumber: 30,    title: "Harvard Boathouses",          trailingSilenceMin: T,
    beats: [ {sec:13}, {sec:11}, {sec:13} ] },
  { id: "baker",           mapNumber: 31,    title: "Baker Library",               trailingSilenceMin: T,
    beats: [ {sec:9}, {sec:14} ] },
  { id: "break",           mapNumber: null,  title: "Halfway Break",               trailingSilenceMin: T,
    beats: [ {sec:8}, {sec:11}, {sec:12} ] },
  { id: "nickerson",       mapNumber: 32,    title: "Nickerson Field",             trailingSilenceMin: T,
    beats: [ {sec:11}, {sec:14}, {sec:16} ] },
  { id: "ford",            mapNumber: 33,    title: "Old Ford Plant",              trailingSilenceMin: T,
    beats: [ {sec:11}, {sec:13}, {sec:15}, {sec:13} ] },
  { id: "bubridgeview",    mapNumber: 34,    title: "Best View in Boston",         trailingSilenceMin: T,
    beats: [ {sec:12}, {sec:12} ] },
  { id: "hyatt",           mapNumber: 35,    title: "Hyatt & DeWolfe",             trailingSilenceMin: T,
    beats: [ {sec:15}, {sec:12} ] },
  { id: "smoot",           mapNumber: 36,    title: "The Smoot Marks",             trailingSilenceMin: T,
    beats: [ {sec:10}, {sec:16}, {sec:15}, {sec:9} ] },
  { id: "mit",             mapNumber: 37,    title: "MIT",                         trailingSilenceMin: T,
    beats: [ {sec:12}, {sec:15}, {sec:12}, {sec:13}, {sec:13} ] },
  { id: "mithacks",        mapNumber: 38,    title: "MIT Hacks",                   trailingSilenceMin: T,
    beats: [ {sec:8}, {sec:16}, {sec:11} ] },
  { id: "mitalumni",       mapNumber: 39,    title: "MIT Alumni",                  trailingSilenceMin: T,
    beats: [ {sec:13}, {sec:15} ] },
  { id: "mitgreen",        mapNumber: 40,    title: "MIT Green Building",          trailingSilenceMin: T,
    beats: [ {sec:10}, {sec:15}, {sec:13}, {sec:8} ] },
  // CONTENT FLAG: the source photo for this beat is wrong — index.html inlines a
  // "Make Way for Ducklings" book cover, not the Finger Islands. photos/finger.jpg
  // is a faithful copy of that wrong image. Correcting the content is a separate
  // step; extraction deliberately preserved whatever TOUR carried.
  { id: "finger",          mapNumber: 41,    title: "Finger Islands",              trailingSilenceMin: T,
    beats: [ {sec:14}, {sec:16}, {sec:13} ] },
  { id: "statehouse",      mapNumber: 42,    title: "State House",                 trailingSilenceMin: T,
    beats: [ {sec:13}, {sec:10}, {sec:16} ] },
  { id: "liberty",         mapNumber: 43,    title: "Liberty Hotel",               trailingSilenceMin: T,
    beats: [ {sec:12}, {sec:16}, {sec:11}, {sec:12} ] },
  { id: "zakim",           mapNumber: 44,    title: "Zakim Bridge",                trailingSilenceMin: T,
    beats: [ {sec:13}, {sec:12}, {sec:15}, {sec:16} ] },
  { id: "museum",          mapNumber: 45,    title: "Museum of Science",           trailingSilenceMin: T,
    beats: [ {sec:11}, {sec:13}, {sec:13}, {sec:11} ] },
  { id: "closing",         mapNumber: null,  title: "Thank You",                   trailingSilenceMin: 0,
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
