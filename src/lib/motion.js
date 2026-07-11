// Field Notes motion vocabulary — the only easings/variants the site uses.
// Spec: docs/ai-memory/frontend-conventions.md (Phase 2, signed off).
// Only transform + opacity ever animate. Nothing loops.

export const EASE_CRISP = [0.2, 0, 0, 1];

// Parent/child variants for table-row stagger (30ms — a scanning eye, not a typewriter).
export const staggerParent = {
  hidden: {},
  show: { transition: { staggerChildren: 0.03 } },
};

export const staggerRow = (reduce) => ({
  hidden: { opacity: 0, y: reduce ? 0 : 6 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: reduce ? 0.15 : 0.35, ease: EASE_CRISP },
  },
});
