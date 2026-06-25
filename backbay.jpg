# Charles River Boat Company — Follow-the-Tour web app

A mobile web app that lets passengers follow the live English narration in their
own language. The guide speaks; each line highlights and auto-advances at roughly
the real cruise pace (~70 min). Passengers can pause, change speed, tap any line
to jump, or open the stop list.

**Free to host, free to run.** It's a static site — no server, no database, no
per-use cost. The only thing you ever edit is `tour.js`.

---

## What's in this folder

```
index.html   the app (design + player logic)
tour.js      ALL tour content — text, timing, images, languages (edit this)
imgs/        building photos (extracted from your 2026 narration deck)
qr-placeholder.png   sample QR; regenerate once you have your real URL
```

---

## Deploy to Vercel (one time, ~5 min, free)

1. Make a free account at vercel.com.
2. Easiest path: install the CLI (`npm i -g vercel`), open this folder in a
   terminal, run `vercel`, and accept the defaults. You'll get a URL like
   `charles-tour.vercel.app`.
   - No-terminal path: zip this folder, create a new Vercel project, and drag
     the zip into the dashboard.
3. (Optional) In the project's Domains settings, add a custom domain such as
   `tour.charlesriverboat.com`.

That URL is your tour. Re-deploying after an edit is the same one command.

## Make the QR code

Use any free QR generator (e.g. qr-code-generator.com) and point it at your
Vercel URL. Print it on table cards / seat-backs. `qr-placeholder.png` shows the
style; replace it with one encoding your real URL.

---

## Editing the tour (the only maintenance)

Open `tour.js` in any text editor. Three things live there:

- **`LANGS`** — the languages on the picker.
- **`UI`** — interface words (buttons, labels) per language.
- **`TOUR`** — the ordered list of stops.

### Change wording or fix a translation
Find the stop, edit the text inside the `{en:"…", fr:"…", es:"…"}` block.

### Adjust pacing
Each line has `sec:` = how many seconds the guide spends on it.
Each stop has `travel:` = the silent cruising gap before the boat reaches it.
Narration (~24 min) + travel (~47 min) ≈ 70 min. After a real run-through with a
guide, nudge these numbers so the highlight matches their actual delivery.
(The in-app speed control absorbs day-to-day drift.)

### Add a language (e.g. Portuguese)
1. Add it to `LANGS`: `{code:"pt", label:"Português", native:"Portuguese"}`.
2. Add a `pt:{…}` block to `UI` (copy the English one and translate).
3. Add a `pt:"…"` line to every text/title/caption block in `TOUR`.
That's it — the picker and player pick it up automatically.

### Swap a photo
Drop a new JPG in `imgs/` and update that stop's `img:` path. Keep images
~800px wide and compressed so they load fast on cellular.

---

## Known limits / next steps
- **Pacing needs one calibration pass** with a real guide; current `sec`/`travel`
  values are good estimates from the script, not measured.
- Photos are the ones embedded in the 2026 deck. Higher-res originals would look
  sharper on big phones.
- If you ever want spoken audio in each language, pre-generate MP3s once and host
  them alongside `imgs/`; the player can be extended to play them. Not needed for
  the follow-along design you asked for.
