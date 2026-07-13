import { motion, useReducedMotion } from "framer-motion";
import { EASE_CRISP } from "../lib/motion";

// Field Notes motion, "noticeable but composed": a clear 24px rise you can
// actually see, crisp ease, triggered early so nothing feels withheld.
// Reduced motion → opacity-only, 150ms. Nothing loops, ever.
export const RevealOnScroll = ({ children, delay = 0, className }) => {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: reduce ? 0.15 : 0.65,
        delay: reduce ? 0 : delay,
        ease: EASE_CRISP,
      }}
    >
      {children}
    </motion.div>
  );
};

// Section rule that visibly draws itself in as it enters the viewport.
export const RuleReveal = ({ className = "rule-ink" }) => {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      style={{ transformOrigin: "left" }}
      initial={{ scaleX: reduce ? 1 : 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.8, ease: EASE_CRISP }}
    />
  );
};
