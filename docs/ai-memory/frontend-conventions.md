# Frontend conventions — "Field Notes" design system

Chosen 2026-07-11 (Direction C of `docs/design/design-directions.html`, user sign-off).
The portfolio is a **working engineering document**: title-block hero, revision-history
tables, case studies as issued documents. Utilitarian on the surface, meticulous up close.

## Concept rules (these are the design system)

- **No cards, no pills, no chips.** Data-shaped content becomes an honest table or ruled list.
- **Hierarchy from rules, scale, and space** — 1.5px ink borders for structure, 1px hairlines
  for rows, never boxes-with-shadows.
- **Red is reserved**: stamps, links, and the single most important action per view. If red
  appears more than ~3 times per viewport, something is wrong.
- **No atmosphere layers**: no grain, no vignette, no gradients, no glow, no blur.
- **The stamp device is rare** — hero "AVAILABLE" stamp and at most one other appearance.
- **Mono is lowercase and data-only** (labels, dates, table headers). Never tracked-out
  uppercase eyebrows. Never mono for prose.
- Banned tics from the old site: accent-colored heading periods, typewriter/JSX loader,
  scroll-cue arrow, identical section scaffolds, arrow-nudge hover on everything,
  perpetual motion (pulsing dots, marquees, bouncing arrows), zero-padded counters ("04").

## Color tokens

| Token        | Value     | Role                                         |
|--------------|-----------|----------------------------------------------|
| `--paper`    | `#FAFAF6` | page background ("bone")                     |
| `--field`    | `#F0F0E8` | recessed fields, hover tint, table zebra     |
| `--ink`      | `#171713` | primary text, structural borders             |
| `--annotation` | `#62625A` | secondary text, mono labels (≥4.5:1 on paper) |
| `--rule`     | `rgba(23,23,19,0.18)` | hairline row rules              |
| `--stamp`    | `#C8102E` | accent: stamps, links, primary action (≈5.9:1 on paper) |

Dark mode: none. The document is paper. (Deliberate — the light category is the differentiator.)

## Type

- **Schibsted Grotesk** (Google Fonts, variable 400–900) — everything: display, headings, body, UI.
- **Fragment Mono** (Google Fonts) — data only: labels, dates, table headers, revision cells.
- Display/name: weight 800, `letter-spacing: -0.035em`, `line-height: 0.94`.
- Headings: weight 700, `letter-spacing: -0.02em`, sit on a 1.5px top rule.
- Body: weight 400, `line-height: 1.65–1.7`, measure 54–62ch, color `--annotation`
  for standfirsts, `--ink` for emphasis.

### Scale (fluid, clamp-only — never fixed per-breakpoint jumps)

| Token       | Value                                  |
|-------------|----------------------------------------|
| `--text-display` | `clamp(3.4rem, 10vw, 8rem)`       |
| `--text-h2` | `clamp(1.9rem, 4vw, 2.6rem)`           |
| `--text-h3` | `clamp(1.2rem, 1.1rem + 0.5vw, 1.45rem)` |
| `--text-body` | `clamp(1rem, 0.95rem + 0.3vw, 1.125rem)` (mobile ~2px smaller than desktop) |
| `--text-meta` | `0.8125rem` (13px)                   |
| `--text-mono` | `0.75rem–0.8125rem`, lowercase       |

## Spacing & structure

- Base-4 scale: `4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 144`.
- Section rhythm: `py` uses the 96/144 steps; sections separated by 1.5px ink rules,
  not padding voids.
- Container: `max-w-6xl` retained; intermediate `sm:`/`md:` steps required between
  mobile and desktop (no straight mobile→lg jumps).
- Structural borders `1.5px solid var(--ink)`; row rules `1px solid var(--rule)`.
- Radius: `0` (structural), `3px` max (stamp outline only). Shadows: none.

## Motion (see progress.md — proposed Phase 2, apply once signed off)

- Timing tokens: `--dur-fast: 180ms`, `--dur-base: 300ms`, `--dur-entrance: 450ms`.
- Easing: `--ease-crisp: cubic-bezier(0.2, 0, 0, 1)`; stamp uses a stiff framer spring once.
- Only `transform` + `opacity` animate. No perpetual/looping animation anywhere.
- `prefers-reduced-motion`: all entrances become opacity-only ≤150ms.

## Components

- **Title block** (hero): ruled frame, name cell + data cells (discipline / stack /
  location / revision), rotated red AVAILABLE stamp. This *is* the evolved colophon.
- **Revision table** (experience): mono rev/period columns + grotesk entries.
- **Issued document** (project case study): document header (title, date, live link) →
  abstract → problem / approach / the hard decision / impact. Narrative content is
  user-written; placeholders until then.
- Contact form keeps all four states (loading/error/empty/success) — restyle only.
