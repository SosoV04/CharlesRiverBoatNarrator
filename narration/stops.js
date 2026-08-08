// narration/stops.js
// -----------------------------------------------------------------------------
// Charles River Boat Company — tour route manifest
//
// One entry per narration beat, in the order the guide delivers them.
// This file is the SINGLE SOURCE OF TRUTH for stop ordering, timing, and
// map-number linkage. Language files (en.js, fr.js, es.js) will reference
// each beat by its `id` and provide the narration text.
//
// SCHEMA
//   id                  Stable identifier used by language files and map buttons.
//                       `stop-N`    — beats that appear on the map (N = map number, 1–45).
//                       `flow-slug` — beats that stay in the audio flow but do NOT
//                                     appear on the map.
//   mapNumber           Integer 1–45 for on-map beats, null otherwise. This is what
//                       the map's clickable buttons will resolve to.
//   title               English display title. Translated titles live in language files.
//   image               Filename inside assets/images/. null if no photo yet assigned.
//                       See IMAGE MAPPING NOTES at the bottom of this file.
//   narrationMin        Spoken duration in decimal minutes (guide talking time only).
//   trailingSilenceMin  Boat-travel / observation time AFTER this beat ends, before
//                       the next beat begins. See TIMING SUMMARY.
//
// TIMING SUMMARY
//   Sum of narrationMin:        39.40 min  (spoken content)
//   Sum of trailingSilenceMin:  30.60 min  (boat travel between beats)
//   Total tour length:          70.00 min  (dock-to-dock)
//
//   trailingSilenceMin is a placeholder from Option (a) — evenly distributed
//   across all 46 inter-beat gaps at ~0.66522 min per gap. The final beat
//   (flow-thank-you) is set to 0 because the tour ends there — no more travel.
//   This is NOT measured data. It's a starting point that gets refined once we
//   time a real cruise with a live guide.
//
//   Per-beat total on-screen time = narrationMin + trailingSilenceMin.
// -----------------------------------------------------------------------------

// Even-split placeholder — replace per-beat after calibration.
// Derivation: 30.6 min of total travel time ÷ 46 inter-beat gaps ≈ 0.66522 min.
// (47 beats, but the final one carries no trailing silence, so 46 gaps.)
const T = 30.6 / 46;

export const STOPS = [
  // stop-1 is a merged beat (see commit 2c107ed): welcome/safety (1.5) + boating
  // terms (0.6) + history of the Charles (1.4) delivered as one block = 3.5 min.
  { id: "stop-1",                 mapNumber: 1,    title: "Welcome & Safety",         image: "welcome.jpg",        narrationMin: 3.5, trailingSilenceMin: T },
  { id: "stop-2",                 mapNumber: 2,    title: "Mass General Brigham",     image: "mgb.jpg",            narrationMin: 1.4, trailingSilenceMin: T },
  { id: "stop-3",                 mapNumber: 3,    title: "Brutalism",                image: "brutalism.jpg",      narrationMin: 0.8, trailingSilenceMin: T },
  { id: "stop-4",                 mapNumber: 4,    title: "Longfellow Bridge",        image: "longfellow.jpg",     narrationMin: 1.3, trailingSilenceMin: T },
  { id: "stop-5",                 mapNumber: 5,    title: "Community Boating",        image: "community.jpg",      narrationMin: 0.8, trailingSilenceMin: T },
  { id: "stop-6",                 mapNumber: 6,    title: "The Esplanade",            image: "esplanade.jpg",      narrationMin: 0.9, trailingSilenceMin: T },
  { id: "stop-7",                 mapNumber: 7,    title: "The Old, Old Hancock",     image: "berkeley.jpg",       narrationMin: 1.1, trailingSilenceMin: T },
  { id: "stop-8",                 mapNumber: 8,    title: "Hancock Tower",            image: "hancock.jpg",        narrationMin: 1.1, trailingSilenceMin: T },
  { id: "stop-9",                 mapNumber: 9,    title: "111 Huntington Ave",       image: "huntington.jpg",     narrationMin: 0.7, trailingSilenceMin: T },
  { id: "stop-10",                mapNumber: 10,   title: "Prudential Tower",         image: "pru.jpg",            narrationMin: 0.9, trailingSilenceMin: T },
  { id: "stop-11",                mapNumber: 11,   title: "One Dalton",               image: "onedalton.jpg",      narrationMin: 0.8, trailingSilenceMin: T },
  { id: "stop-12",                mapNumber: 12,   title: "John Harvard Bridge",      image: "harvardbridge.jpg",  narrationMin: 0.8, trailingSilenceMin: T },
  { id: "stop-13",                mapNumber: 13,   title: "CITGO Sign",               image: "citgo.jpg",          narrationMin: 0.9, trailingSilenceMin: T },
  { id: "stop-14",                mapNumber: 14,   title: "A College Town",           image: null,                 narrationMin: 0.6, trailingSilenceMin: T },
  { id: "stop-15",                mapNumber: 15,   title: "Boston University",        image: "bu.jpg",             narrationMin: 0.9, trailingSilenceMin: T },
  { id: "stop-16",                mapNumber: 16,   title: "BU Alumni",                image: null,                 narrationMin: 0.8, trailingSilenceMin: T },
  { id: "stop-17",                mapNumber: 17,   title: "BU Data Sciences",         image: null,                 narrationMin: 0.7, trailingSilenceMin: T },
  { id: "stop-18",                mapNumber: 18,   title: "Marsh Chapel & BU Law",    image: "marsh.jpg",          narrationMin: 0.6, trailingSilenceMin: T },
  { id: "stop-19",                mapNumber: 19,   title: "Head of the Charles",      image: null,                 narrationMin: 0.7, trailingSilenceMin: T },
  { id: "stop-20",                mapNumber: 20,   title: "BU Bridge",                image: "bubridge.jpg",       narrationMin: 0.9, trailingSilenceMin: T },
  { id: "stop-21",                mapNumber: 21,   title: "That Dirty Water",         image: null,                 narrationMin: 1.1, trailingSilenceMin: T },
  { id: "stop-22",                mapNumber: 22,   title: "Magazine Beach",           image: "magazine.jpg",       narrationMin: 0.9, trailingSilenceMin: T },
  { id: "stop-23",                mapNumber: 23,   title: "Riverside Boat Club",      image: "riverside.jpg",      narrationMin: 0.6, trailingSilenceMin: T },
  { id: "stop-24",                mapNumber: 24,   title: "Old Polaroid HQ",          image: "polaroid.jpg",       narrationMin: 0.7, trailingSilenceMin: T },
  { id: "stop-25",                mapNumber: 25,   title: "Resilience Plant",         image: "resilience.jpg",     narrationMin: 0.9, trailingSilenceMin: T },
  { id: "stop-26",                mapNumber: 26,   title: "Harvard University",       image: null,                 narrationMin: 0.9, trailingSilenceMin: T },
  { id: "stop-27",                mapNumber: 27,   title: "Harvard Alumni",           image: null,                 narrationMin: 0.7, trailingSilenceMin: T },
  { id: "stop-28",                mapNumber: 28,   title: "Harvard Houses",           image: "harvardhouses.jpg",  narrationMin: 0.6, trailingSilenceMin: T },
  { id: "stop-29",                mapNumber: 29,   title: "Weeks Footbridge",         image: "weeks.jpg",          narrationMin: 0.6, trailingSilenceMin: T },
  { id: "stop-30",                mapNumber: 30,   title: "Harvard Boathouses",       image: "boathouses.jpg",     narrationMin: 0.6, trailingSilenceMin: T },
  { id: "stop-31",                mapNumber: 31,   title: "Baker Library",            image: null,                 narrationMin: 0.4, trailingSilenceMin: T },
  { id: "flow-halfway-break",     mapNumber: null, title: "Halfway Break",            image: null,                 narrationMin: 0.5, trailingSilenceMin: T },
  { id: "stop-32",                mapNumber: 32,   title: "Nickerson Field",          image: "nickerson.jpg",      narrationMin: 0.7, trailingSilenceMin: T },
  { id: "stop-33",                mapNumber: 33,   title: "Old Ford Plant",           image: "ford.jpg",           narrationMin: 0.9, trailingSilenceMin: T },
  { id: "stop-34",                mapNumber: 34,   title: "Best View in Boston",      image: null,                 narrationMin: 0.4, trailingSilenceMin: T },
  { id: "stop-35",                mapNumber: 35,   title: "Hyatt & DeWolfe",          image: "hyatt.jpg",          narrationMin: 0.5, trailingSilenceMin: T },
  { id: "stop-36",                mapNumber: 36,   title: "The Smoot Marks",          image: "smoot.jpg",          narrationMin: 0.8, trailingSilenceMin: T },
  { id: "stop-37",                mapNumber: 37,   title: "MIT",                      image: null,                 narrationMin: 1.1, trailingSilenceMin: T },
  { id: "stop-38",                mapNumber: 38,   title: "MIT Hacks",                image: null,                 narrationMin: 0.6, trailingSilenceMin: T },
  { id: "stop-39",                mapNumber: 39,   title: "MIT Alumni",               image: null,                 narrationMin: 0.5, trailingSilenceMin: T },
  { id: "stop-40",                mapNumber: 40,   title: "MIT Green Building",       image: "mitgreen.jpg",       narrationMin: 0.8, trailingSilenceMin: T },
  { id: "stop-41",                mapNumber: 41,   title: "Finger Islands",           image: "finger.jpg",         narrationMin: 0.7, trailingSilenceMin: T },
  { id: "stop-42",                mapNumber: 42,   title: "State House",              image: "statehouse.jpg",     narrationMin: 0.7, trailingSilenceMin: T },
  { id: "stop-43",                mapNumber: 43,   title: "Liberty Hotel",            image: "liberty.jpg",        narrationMin: 0.8, trailingSilenceMin: T },
  { id: "stop-44",                mapNumber: 44,   title: "Zakim Bridge",             image: "zakim.jpg",          narrationMin: 0.9, trailingSilenceMin: T },
  { id: "stop-45",                mapNumber: 45,   title: "Museum of Science",        image: "museum.jpg",         narrationMin: 0.8, trailingSilenceMin: T },
  { id: "flow-thank-you",         mapNumber: null, title: "Thank You",                image: null,                 narrationMin: 0.5, trailingSilenceMin: 0 }
];

// Convenience totals — useful for the loader and for calibration checks.
export const TOTAL_NARRATION_MIN = STOPS.reduce((sum, s) => sum + s.narrationMin, 0);
export const TOTAL_SILENCE_MIN   = STOPS.reduce((sum, s) => sum + s.trailingSilenceMin, 0);
export const TOTAL_TOUR_MIN      = TOTAL_NARRATION_MIN + TOTAL_SILENCE_MIN;
export const MAP_STOP_COUNT      = STOPS.filter(s => s.mapNumber !== null).length;
export const FLOW_STOP_COUNT     = STOPS.filter(s => s.mapNumber === null).length;

// Per-beat on-screen time (narration + trailing silence). This is what the
// loader should use to schedule auto-advance.
export const beatTotalMin = (stop) => stop.narrationMin + stop.trailingSilenceMin;

// -----------------------------------------------------------------------------
// IMAGE MAPPING NOTES
//
// Confident matches (image name closely mirrors stop title):
//   welcome, mgb, brutalism, longfellow, community, esplanade, hancock,
//   huntington, pru, onedalton, harvardbridge, citgo, bu, marsh, bubridge,
//   magazine, riverside, polaroid, resilience, harvardhouses, weeks, boathouses,
//   nickerson, ford, hyatt, smoot, mitgreen, finger, statehouse, liberty, zakim,
//   museum, berkeley (→ stop-7 "The Old, Old Hancock")
//
// No image yet assigned (image: null) — need a source photo before the beat
// can render with a picture:
//   stop-14 "A College Town", stop-16 "BU Alumni",
//   stop-17 "BU Data Sciences", stop-19 "Head of the Charles",
//   stop-21 "That Dirty Water", stop-26 "Harvard University",
//   stop-27 "Harvard Alumni", stop-31 "Baker Library",
//   flow-halfway-break, stop-34 "Best View in Boston",
//   stop-37 "MIT", stop-38 "MIT Hacks", stop-39 "MIT Alumni",
//   flow-thank-you
//
// Images from REMOVED or MERGED segments — no longer referenced by any beat
// (do NOT reuse without renaming):
//   backbay.jpg       (was for the deleted "Back Bay & Landfill")
//   esplanadehist.jpg (was for the deleted "History of the Esplanade")
//   history.jpg       (was for "History of the Charles", now merged into stop-1;
//                      keep or archive — undecided)
// -----------------------------------------------------------------------------
