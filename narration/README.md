# Editing the tour narration

This folder holds every word passengers hear on the tour, in six languages.
This guide explains how to change them safely.

One thing to know before you start: saving a change here does not update the
live page on its own. Someone has to run one command afterward to rebuild it —
`node scripts/build-index.mjs --sync-index`. If that means nothing to you, it
doesn't need to; just tell a developer your edits are ready.

## The files

There is one file per language:

| File | Language |
| --- | --- |
| `en.js` | English |
| `es.js` | Spanish |
| `fr.js` | French |
| `it.js` | Italian |
| `pt.js` | Portuguese |
| `zh.js` | Chinese |

`stops.js` is the seventh file. It sets the order of the stops and how long
each line stays on screen, and it contains no wording at all. **Leave it to a
developer.**

## What a stop looks like

Open `en.js` and you will find the tour written out one stop at a time, like
this:

```js
  brutalism: {
    title: "Brutalism",
    caption: "Concrete Cambridge",
    lines: [
      "The first line the guide says here.",
      "The second line.",
      "The third line.",
      "The fourth line.",
    ],
  },
```

`title` is the heading passengers see, `caption` is the small label under the
photo, and `lines` is what the guide actually says, in order.

## How to change the wording

Change the words **inside** the quotation marks. Leave everything outside them
exactly as it is — the quotation marks themselves, the commas after them, the
square brackets, and the short name at the top (`brutalism:` above). That short
name is how the text finds its photo and its place on the map, so renaming it
breaks the stop.

Two characters need care inside a line. If you need a **double quote**, write
`\"` — a bare `"` ends the line early and breaks the page. An apostrophe is
fine on its own: `it's` needs nothing special. Accented letters and Chinese
characters are all fine to type or paste normally.

## The one rule that matters most

**Keep the same number of lines.** Each line is timed to a specific moment on
the river, so the count has to stay put:

- Editing the words in a line is always safe.
- Making a line longer or shorter is fine, though very long lines may rush the
  guide.
- **Adding or deleting a line breaks the tour's timing** and knocks every later
  line out of step with the boat's position.

If a stop genuinely needs another line, or one fewer, ask a developer. It has
to be added to all six languages and to `stops.js` together.

Right now every language has 49 stops and 193 lines. Those two numbers should
match across all six files at all times.

The good news is that this mistake cannot reach passengers. The rebuild checks
the counts first and refuses to run if they don't line up, telling you exactly
which stop and which language is off. A miscount costs you a confusing message,
not a broken tour.

## Translating

The six files are independent, so you can update one language without touching
the others. They can drift apart in wording, but not in structure — same stop
names, same number of lines, in the same order.

## Before you hand it off

Reread your change and check that every line still begins and ends with a
quotation mark and has a comma after it. Then tell a developer, who will rebuild
the page and put your words in front of passengers.
