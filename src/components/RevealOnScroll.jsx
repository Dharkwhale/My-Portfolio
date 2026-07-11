import { motion, useReducedMotion } from "framer-motion";
import { EASE_CRISP } from "../lib/motion";

// Field Notes motion: subtle to the point of deniability.
// 8px rise, 400ms, crisp ease, triggered early so nothing feels withheld.
// Reduced motion → opacity-only, 150ms. (Spec: docs/ai-memory/frontend-conventions.md)
export const RevealOnScroll = ({ children, delay = 0, className }) => {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: reduce ? 0.15 : 0.4,
        delay: reduce ? 0 : delay,
        ease: EASE_CRISP,
      }}
    >
      {children}
    </motion.div>
  );
};

// Section rule that draws in as it enters the viewport — quiet, structural.
export const RuleReveal = ({ className = "rule-ink" }) => {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      style={{ transformOrigin: "left" }}
      initial={{ scaleX: reduce ? 1 : 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, ease: EASE_CRISP }}
    />
  );
};
