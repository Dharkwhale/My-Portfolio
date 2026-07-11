# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (Vite, localhost:5173)
npm run build     # Production build
npm run preview   # Preview production build
npm run lint      # Run ESLint
```

There are no tests in this project.

## Architecture

Single-page React portfolio — one scrollable page with four full-viewport sections mounted sequentially in `App.jsx`: `Home → About → Projects → Contact`.

**App-level state** (`App.jsx`): manages `menuOpen` only. There is deliberately **no loading screen** — the page renders from the first frame and the hero title-block entrance is the designed first impression. The Navbar is fixed and receives `menuOpen`/`setMenuOpen` as props to coordinate mobile overlay and body scroll lock.

**Section components** (`src/components/sections/`): each exports a named component and is a self-contained section. They are all stateless except `Contact`, which holds form state and sends email via `emailjs-com`.

**`RevealOnScroll` / `RuleReveal`** (`src/components/RevealOnScroll.jsx`): framer-motion wrappers. `RevealOnScroll` fades/rises content 8px over 400ms when it enters the viewport; `RuleReveal` draws a structural rule via `scaleX`. Shared easing/variants live in `src/lib/motion.js`. Grid col-span classes go on the `RevealOnScroll` wrapper via its `className` prop (it is the grid child — spans on inner elements are inert).

**Styling**: Tailwind CSS v4 (imported via `@import "tailwindcss"` in `index.css`). Design language is **"Field Notes"**: the portfolio as a working engineering document — paper, ink, one stamp-red accent. Full conventions and rationale: `docs/ai-memory/frontend-conventions.md`. Tokens are registered in `index.css` via `@theme` and used as utilities — never hardcode hex in components:
- Surfaces: `paper` (`#fafaf6`), `field` (`#f0f0e8`). Text: `ink` (`#171713`), `annotation` (`#62625a`, ≥4.5:1 on paper). Hairline: `rule`. Accent: `stamp` (`#c8102e`) — reserved for stamps, links, and one primary action per view.
- Fonts: `font-sans`/`font-display` (Schibsted Grotesk — everything), `font-mono` (Fragment Mono — data only: labels, dates, tables; always lowercase). Loaded via `<link>` in `index.html`.
- Structure: no cards, no pills, no shadows, no radius (3px max, stamp only). Hierarchy from 1.5px ink rules (`.rule-ink`), 1px hairlines (`.rule-hair`), scale, and space. Data-shaped content becomes tables/ruled lists.
- Motion: timing tokens `--dur-fast/base/entrance` + `--ease-crisp`; framer easing array `EASE_CRISP` from `src/lib/motion.js`. Only `transform`/`opacity` animate; **nothing loops, ever**. All motion respects `prefers-reduced-motion` (framer `useReducedMotion`).
- Banned (removed as "AI slop" and must not return): dark near-black + amber uniform, gradient text, glows, blurred orbs, grain/vignette layers, tracked-caps mono eyebrows, accent-colored heading periods, typewriter/loader intros, scroll-cue arrows, numbered `01/02/03` scaffolding, identical card grids, pill walls, perpetual motion (pulsing dots, marquees, bouncing arrows).
- Placeholders: user-authored narrative slots (project stories, AI-capability line, hero positioning) render with `.placeholder-copy` and square brackets. Never replace them with invented content — the user writes these.

**Email contact form**: requires three environment variables — `VITE_SERVICE_ID`, `VITE_TEMPLATE_ID`, `VITE_PUBLIC_KEY` — from EmailJS. Create a `.env` file at the root with these values to make the contact form functional locally.

**Project images** are stored in `src/assets/` as `.PNG` files and imported directly into `Projects.jsx`.
