# darkpalad1n.github.io

Persönliche Webseite – gebaut mit [Astro](https://astro.build), gehostet auf GitHub Pages.

## Inhalte bearbeiten

| Was | Wo |
|---|---|
| Name, Bio, Links, Status, Foto, Resume-PDF | `src/data/site.ts` → `site` |
| Forschungsfokus & Interessen | `src/data/site.ts` → `research` |
| Publikationen | `src/data/site.ts` → `publications` |
| Projekte | `src/data/site.ts` → `projects` |
| Lebenslauf | `src/data/site.ts` → `education`, `experience`, `researchExperience`, `teaching`, `leadership` |
| Fun Facts | `src/data/site.ts` → `funFacts` |
| Blogartikel | neue `.md`-Datei in `src/content/blog/` (Blog ein/aus: `blog` in `site.ts`) |
| Foto / Resume-PDF | Datei in `public/` legen, Pfad in `site.ts` eintragen |

Alle Platzhalter sind mit `TODO` markiert: `grep -rn TODO src`

### Neuer Blogartikel

```md
---
title: 'Titel'
description: 'Ein Satz Zusammenfassung.'
pubDate: 2026-11-01
tags: ['deep learning']
draft: false   # true = wird nicht veröffentlicht
---

Text in Markdown …
```

## Lokal ansehen

```bash
npm install
npm run dev      # → http://localhost:4321
```

## Veröffentlichen

Jeder Push auf `main` baut und deployt die Seite automatisch
(`.github/workflows/deploy.yml`). In den Repo-Einstellungen muss
**Settings → Pages → Source: GitHub Actions** gesetzt sein.

## Design

- Farben: `src/styles/global.css` (oben, `:root` = hell, `[data-theme='dark']` = dunkel)
- Schriften: `astro.config.mjs` (Space Grotesk + JetBrains Mono)
- Anomalie-Signal (Designmotiv): `src/components/Signal.astro`
