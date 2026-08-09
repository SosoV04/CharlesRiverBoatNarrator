# Charles River Boat Company — Tour Narration Site

This is the narration site for the Charles River sightseeing tour. It holds the
words our guides deliver, the photos passengers see alongside them, and the
web page that puts the two together.

## If you are here to change the wording

Open the **`narration`** folder. Everything you need is in there and nothing
else in this repository concerns you. Each language has its own file — `en.js`
for English, `es.js` Spanish, `fr.js` French, `it.js` Italian, `pt.js`
Portuguese, and `zh.js` Chinese — and inside each one you will find the tour
laid out stop by stop, with the spoken lines written out in plain quotation
marks. The README inside that folder walks you through editing them, and it is
worth reading once before your first change. One important thing to know: your
edit does not reach the live page by itself. Someone has to rebuild the page
afterward, which is a single command, so let a developer know once your changes
are saved.

## What's in this repository

**`narration`** — the tour text in all six languages, and the running order of
the stops. This is the editors' folder.

**`photos`** — every image the tour uses, including the numbered river map and
the QR codes in the `qr` subfolder.

**`data`** — the positions of the numbered circles on the map, worked out
automatically so the map's buttons land in the right places.

**`scripts`** — developer tools: one builds the live page from the `narration`
folder, the other recalculates the map positions when the artwork is redrawn.

**`docs`** — the full tour script as a PDF and a plain text file, handy for
printing or reading away from a computer.

**`archive`** — older versions of the tour page and retired images, kept for
reference. Nothing here is live.

**`index.html`** — the live web page itself. It is built automatically from the
`narration` folder, so please leave this one to a developer; editing it by hand
gets overwritten on the next rebuild.
