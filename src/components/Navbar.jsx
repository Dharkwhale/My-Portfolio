import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { EASE_CRISP } from "../lib/motion";

const NAV_LINKS = ["home", "about", "projects", "contact"];

// Document running-header: mono wordmark left, plain links right,
// red marker under the active section. Solid paper + ink rule once scrolled.
export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = NAV_LINKS.map((id) => document.getElementById(id));
      const idx = sections.findIndex((el) => {
        if (!el) return false;
        const { top, bottom } = el.getBoundingClientRect();
        return top <= 120 && bottom >= 120;
      });
      if (idx !== -1) setActive(NAV_LINKS[idx]);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow =
      menuOpen && window.innerWidth < 768 ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: EASE_CRISP }}
      style={{ zIndex: "var(--z-nav)" }}
      className={`fixed top-0 w-full transition-[background-color,box-shadow] duration-300 ${
        scrolled
          ? "bg-paper/85 backdrop-blur-md shadow-[0_1px_0_0_var(--color-rule)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Wordmark — a document's running header */}
          <a href="#home" className="font-mono text-[13px] text-ink">
            salman sanusi
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link}`}
                className={`relative py-1 text-[14px] font-medium capitalize transition-colors duration-200 ${
                  active === link ? "text-ink" : "text-annotation hover:text-ink"
                }`}
              >
                {link}
                {active === link && (
                  <motion.span
                    layoutId="nav-marker"
                    className="absolute -bottom-0.5 left-0 h-[2px] w-full bg-stamp"
                    transition={
                      reduce
                        ? { duration: 0 }
                        : { type: "spring", stiffness: 480, damping: 36 }
                    }
                  />
                )}
              </a>
            ))}
          </div>

          {/* Mobile button — mono text, no icon */}
          <button
            className="z-10 p-2 font-mono text-[13px] text-ink md:hidden"
            onClick={() => setMenuOpen((p) => !p)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? "[close]" : "[menu]"}
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: EASE_CRISP }}
            style={{ zIndex: "var(--z-overlay)" }}
            className="fixed left-0 top-16 flex h-[calc(100dvh-4rem)] w-full flex-col items-start justify-center gap-3 bg-paper px-10 md:hidden"
          >
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link}
                href={`#${link}`}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: reduce ? 0 : 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.03 * i, duration: 0.3, ease: EASE_CRISP }}
                className="font-display border-b border-rule pb-3 text-5xl font-bold capitalize text-ink transition-colors hover:text-stamp"
              >
                {link}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
