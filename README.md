# Ankush Garg & Pulkit Garg — Site Starter

A static site (plain HTML/CSS/JS, no build step) — same deployment model as
Pulkit's existing portfolio, hosted for free on GitHub Pages.

## Files

- `index.html` — all page content and structure
- `styles.css` — the design system (colors, type, layout)
- `script.js` — small nav scroll behavior
- `assets/images/` — put photos here (`ankush.jpg`, `pulkit.jpg`)

## What still needs your input

Search `index.html` for `TODO` and text in *italics inside brackets* —
those are the placeholders:

1. **Your Momentum strategy project** — name, what it trades, the signal
   logic, timeframe/universe, and a result you're comfortable sharing.
2. **Your MBS project** — what it analyzed/modeled and the outcome.
3. **Your headshot** — drop a photo at `assets/images/ankush.jpg`
   (falls back to an "AG" monogram if missing — same for Pulkit).
4. **Your links** — LinkedIn, GitHub, resume, email in the Team and
   Contact sections.
5. The **"Why together"** paragraph is a starting draft — rewrite it once
   you're both happy with how you want to frame the partnership.

Pulkit's section is filled in with his real, publicly listed info/projects
(confirmed OK to reuse) — check it over and adjust tone/wording as you like.

## Design notes

- Dark "ledger" background with a warm parchment used for the team and
  contact sections, so the page alternates rhythm rather than running one
  flat tone top to bottom.
- Four domain tags (FIN / ECON / MKT / ENGY) are used consistently as a
  color-coded classification system across capabilities and project
  cards — so a client scanning quickly can find the domain they care about.
- The hero's two intertwining lines are the signature element: gold
  (Ankush) and teal (Pulkit) diverge and meet at a marked point, visualizing
  "two independent reads that converge."
- Respects `prefers-reduced-motion` (the hero animation is skipped).

## Running locally

No build tools needed — just open `index.html` in a browser, or serve it:

```bash
python3 -m http.server 8000
```

## Deploying to GitHub Pages (same as Pulkit's site)

1. Create a new GitHub repo (e.g. `Team-Portfolio`).
2. Push these files to the `main` branch.
3. In the repo's **Settings → Pages**, set the source to `main` / root.
4. Your site will be live at `https://<username>.github.io/<repo-name>/`.
