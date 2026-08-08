# data/

Generated data that the tour UI reads at runtime.

## map-coordinates.js

Where each numbered circle sits on the tour map, as percentages of the image's
width and height.

`COORDS` is keyed by map number, which joins to `mapNumber` in
[`narration/stops.js`](../narration/stops.js) — map button `12` and `stop-12` are
the same beat. All 45 numbers are present.

Coordinates are percentages, not pixels, so they hold at any display size.

### Regenerate — never hand-edit

```
node scripts/extract-map-coords.mjs --emit
```

That prints the `COORDS` block to paste in. Hand-editing invites drift between
this file and the image it describes, which is exactly the failure that produced
the previous version of this file (28 of 45 markers landed in blank map space).

### When regeneration is required

**Required** if the map is **redrawn or reshaped** — new artwork, markers moved,
cropped, or a different aspect ratio. The percentages are tied to where the
circles sit inside the frame, and all of those change the answer.

**Not required** for re-encoding the same artwork at the same aspect ratio —
PNG→JPEG for file size, or scaling to different pixel dimensions. Percentages
are resolution-independent, so they survive that unchanged.

Current source: `map.png` at repo root, 1090 × 762, aspect 1.430.

### If you do regenerate

The script finds *where* the circles are, not *which number* is in each. If the
map is redrawn, the detector's index order changes and the `DIGIT_ORDER` list in
the script becomes wrong. Re-read it:

```
node scripts/extract-map-coords.mjs --crops
```

then open `.map-extract/markers-montage.png` (gitignored), read the numbers
left-to-right and top-to-bottom, and update `DIGIT_ORDER`. `--emit` will refuse to
run if that list stops being a bijection over 1–45, but it cannot detect digits
that merely moved — only a human looking at the montage can.

To confirm the result, re-crop in map-number order:

```
node scripts/extract-map-coords.mjs --verify
```

`.map-extract/markers-verify.png` should read 1, 2, 3 … 45 in sequence, each crop
centered on its circle. That is the check that catches a wrong `DIGIT_ORDER`.
