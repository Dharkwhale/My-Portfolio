# Frontend conventions — "Field Notes · Daylight" design system

Current as of 2026-07-12, after live iteration with the user (journey: light v1 →
Night dark variant → **Daylight**, the locked direction). The portfolio is a
**working engineering document with warmth**: toned paper, grain, print-red stamps,
a rotating seal, a living marquee. Character over austerity — the user's taste
runs warmer and more playful than the original spec-sheet concept; keep that.

## Concept rules

- **Document DNA is the differentiation — never remove it**: title-block hero,
  revision-history table, issued-document case studies, mono data labels, the
  AVAILABLE stamp, the rotating seal.
- **No cards/pills for data** — tables and ruled lists; but **panels are allowed**:
  `.panel` = field surface + hairline border + print-like shadow (`--shadow-panel`).
  Projects documents and the contact form are panels; the title block is a paper
  sheet with the same shadow.
- **Red is reserved**: stamp, seal, links, one primary action per view.
- **Personality devices (deliberate, keep rare)**: the rotating seal (hero, one
  place only), the tilted marquee (one strip, after the hero), paper grain
  (`.paper-grain`, fixed overlay, opacity .05 multiply).
- Mono is lowercase and data-only. No tracked-caps eyebrows.
- **No mid-text em dashes in visible copy** (user rule, 2026-07-12) — use colon,
  comma, semicolon, or parentheses. Date ranges (`2024 — now`) are data and exempt.
- Footer is exactly: `Designed & built by Salman Sanusi · {year}` (user copy).
- Still banned: gradient text, blue/cyan anything, blurred orbs, typewriter/loader
  intros, scroll-cue arrows, accent-period headings, numbered 01/02/03 scaffolding,
  identical card grids, pill walls.

## Color tokens (`@theme` in `src/index.css`)

| Token | Value | Role |
|---|---|---|
| `--color-paper` | `#f1ede3` | page + title block (genuinely toned, never white) |
| `--color-field` | `#e9e4d6` | panels, marquee strip, recessed cells |
| `--color-ink` | `#201d17` | text, structural 1.5px borders |
| `--color-annotation` | `#635d4e` | secondary text, labels (≥4.5:1 on paper) |
| `--color-rule` | `rgba(32,29,23,0.16)` | hairlines |
| `--color-stamp` | `#c8102e` | print-red accent |

`--shadow-panel`: print-like sheet shadow. Theme-color meta = paper.
History note: a dark "Night" variant (#131311/#edede4/#f0544c) was built and
rejected by the user — do not resurrect it.

## Type

- **Schibsted Grotesk** (400–900) everything; display = 800, tracking −0.035em.
- **Fragment Mono** data only, lowercase.
- Fluid `clamp()` everywhere; body ~2px smaller on mobile; intermediate `sm:`/`md:`
  steps required.

## Motion (revised — "noticeable but composed", user-tuned)

- Reveals: 24px rise / 650ms / `EASE_CRISP [0.2,0,0,1]` (`RevealOnScroll`);
  rules draw 800ms (`RuleReveal`); rows/slots stagger 80ms via
  `staggerParent`/`staggerRow` (`src/lib/motion.js`).
- Hero entrance: frame rules draw → **per-letter name build** (45ms stagger,
  aria-label on h1, letters aria-hidden) → data cells rise → stamp spring at ~1.15s.
- **Allowed loops (exactly two)**: the marquee (36s, pauses on hover) and the seal
  rotation (30s). Both must stay off under `prefers-reduced-motion`. Nothing else
  may loop, ever.
- Everything respects `useReducedMotion` → opacity-only ≤150ms.
- Hover: figure zoom 1.03/700ms, row tint to field, doc-link color shift. No
  arrow-nudge.

## Components

- **Title block** (Home): paper sheet, drawn 1.5px frame, name cell + 3 data cells
  (discipline / stack / location — revision cell was cut as conceit), standfirst +
  actions in a second ruled row inside the frame, AVAILABLE stamp, seal at top-right
  (`textLength` pins circular text to circumference — do not remove or the tail wraps).
- **Marquee** (`src/components/Marquee.jsx`): honest stack list ×2 for seamless
  −50% loop; `-rotate-1`; aria-hidden.
- **Issued document** (Projects): panel; header/meta/link → figure with ruled border
  → abstract → four story slots (user-authored) — or an honest `note` for
  assessment builds (Trip Planner). Never fabricate stories.
- **Contact**: channel table + document-field form (bottom-rule inputs, labels have
  `mb-2` so the focus outline clears them); all four request states; status line has
  reserved height (no CLS).
- EmailJS env vars (`VITE_SERVICE_ID/TEMPLATE_ID/PUBLIC_KEY`) — `.env` is local-only
  and gitignored; Vite reads it at startup only (restart dev server after edits).
