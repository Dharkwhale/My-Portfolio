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

**App-level state** (`App.jsx`): manages `isLoading` and `menuOpen`. The loading screen animates a typewriter intro for ~3s, then fades out revealing the main content. The Navbar is fixed and receives `menuOpen`/`setMenuOpen` as props to coordinate mobile overlay and body scroll lock.

**Section components** (`src/components/sections/`): each exports a named component and is a self-contained full-viewport section (`min-h-screen`). They are all stateless except `Contact`, which holds form state and sends email via `emailjs-com`.

**`RevealOnScroll`** (`src/components/RevealOnScroll.jsx`): wrapper that uses `IntersectionObserver` to add a `visible` CSS class when the element enters the viewport. The `.reveal` / `.reveal.visible` transition is defined in `index.css`. Wrap any new section content with this component.

**Styling**: Tailwind CSS v4 (imported via `@import "tailwindcss"` in `index.css`). The design language is dark (`#0a0a0a` background), blue accent (`blue-500` / `cyan-400` gradients), monospace font (`Space Grotesk`), and subtle hover lift animations (`hover:-translate-y-1`).

**Email contact form**: requires three environment variables — `VITE_SERVICE_ID`, `VITE_TEMPLATE_ID`, `VITE_PUBLIC_KEY` — from EmailJS. Create a `.env` file at the root with these values to make the contact form functional locally.

**Project images** are stored in `src/assets/` as `.PNG` files and imported directly into `Projects.jsx`.
