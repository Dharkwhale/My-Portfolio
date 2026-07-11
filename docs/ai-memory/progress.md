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

**Copy approved (2026-07-11):** hero standfirst = "Frontend engineer with AI depth —
strong interfaces first, working knowledge of everything the model needs behind them."
Discipline cell = "Frontend Engineering" (conservative; standfirst carries the AI claim).
Committed as 479756a; revamp itself is c4f7750.

**Content phase (72ea4a1):** Delivery Platform story landed (user-authored, lightly
edited: neighborhood-outlet gap → inside-out role-based build on TanStack Query/RHF/Zod →
polling-over-WebSockets decision → 50+ user pilot). New Sentinel document added
(Splunk Agentic Ops Hackathon 2026, solo: Claude Opus 4.8 agent reasoning loop, synthetic
attack dataset, SSE-streamed React SOC dashboard, auto reports — uncovered a full attack
chain in testing). ai/llm capabilities row real now (Claude API agents, SSE reasoning UIs,
event-interest recommendation modeling).

**User answers (2026-07-11):** DP stack corrected zustand → tanstack query. Sentinel repo
linked (github.com/Dharkwhale/sentinel-threat-hunter, "view the source"; no demo link).
Event-intelligence model stays OFF the projects list — it is company work under privacy
policies; the capabilities row line is the only public trace. Do not add it as a document.

**Open items:**
- Sentinel figure: user has the SOC dashboard screenshot; needs to save it to
  src/assets/sentinel.PNG, then wire the import in Projects.jsx (image swaps the document
  from full-width to the split figure layout automatically).
- Sentinel "hard decision" story slot still placeholder.
- Stories pending: Trip Itinerary Planner, Crypto Token Analyzer, Portfolio Website.
- Method bullets rewrite (About).
- `projectportt.PNG` shows a third-party demo identity — user will swap the asset later.
