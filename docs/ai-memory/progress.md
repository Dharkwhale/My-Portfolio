# Progress log

## 2026-07-11 — Portfolio revamp, Phases 0–1

**Context:** prior session fixed layout bugs (About narrow columns, Contact overlap — root
cause: grid col-spans on grandchildren instead of grid children via RevealOnScroll wrapper)
and verified identity consistency (Salman Sanusi / Dharkwhale / tstundes@gmail.com). Those
fixes are done; do not revisit.

**Phase 0 — diagnosis (signed off).** Site read as AI-generated: near-black + amber + mono
uniform; accent-period heading tic ×5; typewriter "Hello, recruiter" loader gating content
~2.4s; values-asserting copy; identical section scaffold ×4; one hover (arrow-nudge) and one
reveal (rise-fade) repeated everywhere; perpetual motion ×3; projects as blurb+pills;
positioning said only "Frontend Engineer" (no AI depth); TOOLKIT pill wall with HTML/CSS/Git.

**Phase 1 — direction (signed off).** Three directions rendered as real specimen boards in
`docs/design/design-directions.html` (Galley / Machine Room / Field Notes). Live reference
pulls failed (godly.website 403s via redirect; Framer gallery is a JS shell) — synthesis was
from training knowledge, stated honestly. **User chose C · "Field Notes"** — the living spec
sheet. Tokens saved to `docs/ai-memory/frontend-conventions.md`.

**Positioning (user-stated, immutable):** frontend engineer with genuine AI depth; strong
frontend / working backend / solid AI-LLM. Never overstate backend. All narrative copy and
project stories are USER-written — leave marked placeholders, never fabricate metrics,
projects, or AI features.

**Phase 2 — motion language (signed off).** "The document is still; the reading moves."
One orchestrated hero entrance (rules draw → name/cells rise → stamp hits, ~1.1s, content
visible from frame one), three reveal patterns (8px rise / rule draw / 30ms row stagger),
four state transitions. Nothing loops. LoadingScreen deletion approved and executed.

**Phase 3 — rebuild (this session).** All sections rebuilt on Field Notes:
- `index.css` full token rewrite; grain/vignette/marquee/dot-pulse deleted.
- Fonts → Schibsted Grotesk + Fragment Mono; theme-color → paper.
- `App.jsx`: loader + atmosphere removed; `LoadingScreen.jsx` deleted.
- `src/lib/motion.js` added (EASE_CRISP, stagger variants — react-refresh clean).
- Home: title-block hero (evolved colophon) + stamp; scroll cue gone; standfirst is the
  previously shipped copy pending user-approved AI positioning (drafts offered in chat).
- About: method list, experience as revision table, capabilities table (frontend primary /
  ai-llm placeholder / backend working-knowledge) replaces toolkit pill wall.
- Projects: issued-document structure — header/figure/abstract + problem/approach/
  hard-decision/impact placeholder slots for user-written stories.
- Contact: ruled channel table + document-field form (all four states kept), footer colophon.
- CLAUDE.md styling/architecture sections updated to Field Notes.

**Open items:** user to write hero positioning line (AI framing), AI-capability row,
method rewrite, and per-project stories; `projectportt.PNG` shows a third-party demo
identity — user will swap the asset later.
