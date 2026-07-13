import { motion, useReducedMotion } from "framer-motion";
import { EASE_CRISP } from "../../lib/motion";

const RESUME_URL =
  "https://drive.google.com/file/d/1Sgsp-4_BvTLWR4TjYlLHYOhWE6FYUaiI/view?usp=drive_link";

// Title-block data (the evolved colophon). Revision cell cut 2026-07-11
// per user — conceit, not information.
const titleBlockData = [
  { k: "discipline", v: "Frontend Engineering" },
  { k: "stack", v: "React / Next.js / TS" },
  { k: "location", v: "Nigeria · Remote" },
];

// Rotating document seal — circular text around a star. The site's
// personality mark. Slow, pausable-by-eye, off under reduced motion.
const Seal = ({ reduce }) => (
  <motion.svg
    viewBox="0 0 120 120"
    aria-hidden="true"
    className="absolute -top-10 right-6 z-20 h-24 w-24 sm:-right-8 md:h-28 md:w-28"
    animate={reduce ? undefined : { rotate: 360 }}
    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
  >
    <defs>
      <path
        id="seal-circle"
        d="M60,60 m-45,0 a45,45 0 1,1 90,0 a45,45 0 1,1 -90,0"
        fill="none"
      />
    </defs>
    <circle cx="60" cy="60" r="57" fill="var(--color-paper)" stroke="var(--color-stamp)" strokeWidth="1.5" />
    <circle cx="60" cy="60" r="33" fill="none" stroke="var(--color-stamp)" strokeWidth="1" />
    <text
      fill="var(--color-stamp)"
      fontSize="11"
      fontFamily="Fragment Mono, monospace"
      letterSpacing="1.5"
    >
      {/* textLength pins the text to the circle's exact circumference so the
          tail never wraps over the start */}
      <textPath href="#seal-circle" textLength="281" lengthAdjust="spacingAndGlyphs">
        frontend engineer ✦ ai depth ✦ remote ✦
      </textPath>
    </text>
    <text
      x="60"
      y="66"
      textAnchor="middle"
      fill="var(--color-stamp)"
      fontSize="18"
    >
      ✦
    </text>
  </motion.svg>
);

export const Home = () => {
  const reduce = useReducedMotion();

  // Rules draw in; content rises; the stamp hits last. Runs once.
  const drawRule = (delay = 0, vertical = false) => ({
    initial: reduce ? { opacity: 0 } : { [vertical ? "scaleY" : "scaleX"]: 0 },
    animate: reduce ? { opacity: 1 } : { [vertical ? "scaleY" : "scaleX"]: 1 },
    transition: { duration: reduce ? 0.15 : 0.5, delay: reduce ? 0 : delay, ease: EASE_CRISP },
  });

  const rise = (delay = 0) => ({
    initial: { opacity: 0, y: reduce ? 0 : 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: reduce ? 0.15 : 0.6, delay: reduce ? 0 : delay, ease: EASE_CRISP },
  });

  // Per-letter name entrance — the signature typographic moment. Runs once.
  const nameContainer = {
    hidden: {},
    show: {
      transition: reduce
        ? { delayChildren: 0.1 }
        : { staggerChildren: 0.045, delayChildren: 0.15 },
    },
  };
  const nameLetter = {
    hidden: { opacity: 0, y: reduce ? 0 : "0.35em" },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0.15 : 0.5, ease: EASE_CRISP },
    },
  };

  return (
    <section
      id="home"
      className="relative flex min-h-[100dvh] items-center scroll-mt-16 px-6 pt-24 pb-16"
    >
      <div className="relative mx-auto w-full max-w-6xl">
        {/* ================= Title block (paper sheet) ================= */}
        <div className="relative bg-paper" style={{ boxShadow: "var(--shadow-panel)" }}>
          <Seal reduce={reduce} />
          {/* Frame rules — drawn, not painted */}
          <motion.span {...drawRule(0)} className="absolute inset-x-0 top-0 z-10 h-[1.5px] origin-left bg-ink" />
          <motion.span {...drawRule(0.1)} className="absolute inset-x-0 bottom-0 z-10 h-[1.5px] origin-right bg-ink" />
          <motion.span {...drawRule(0.05, true)} className="absolute inset-y-0 left-0 z-10 w-[1.5px] origin-top bg-ink" />
          <motion.span {...drawRule(0.15, true)} className="absolute inset-y-0 right-0 z-10 w-[1.5px] origin-bottom bg-ink" />

          <div className="grid md:grid-cols-[1fr_260px] lg:grid-cols-[1fr_300px]">
            {/* Name cell */}
            <div className="p-7 sm:p-9 lg:p-12">
              <motion.h1
                variants={nameContainer}
                initial="hidden"
                animate="show"
                aria-label="Salman Sanusi"
                className="font-display text-[clamp(3.2rem,9.5vw,7rem)] font-extrabold leading-[0.94] tracking-[-0.035em] text-ink"
              >
                {["Salman", "Sanusi"].map((line) => (
                  <span key={line} aria-hidden="true" className="block">
                    {line.split("").map((ch, i) => (
                      <motion.span
                        key={`${line}-${i}`}
                        variants={nameLetter}
                        className="inline-block"
                      >
                        {ch}
                      </motion.span>
                    ))}
                  </span>
                ))}
              </motion.h1>

              {/* The stamp — hits once, never repeats */}
              <motion.span
                initial={
                  reduce
                    ? { opacity: 0 }
                    : { opacity: 0, scale: 1.4, rotate: -8 }
                }
                animate={
                  reduce
                    ? { opacity: 1 }
                    : { opacity: 1, scale: 1, rotate: -3 }
                }
                transition={
                  reduce
                    ? { duration: 0.15, delay: 0.2 }
                    : { type: "spring", stiffness: 500, damping: 26, delay: 1.15 }
                }
                className="mt-7 inline-block rounded-[3px] border-2 border-stamp px-3 py-1.5 font-mono text-[13px] tracking-[0.04em] text-stamp"
              >
                AVAILABLE
              </motion.span>
            </div>

            {/* Data column */}
            <div className="relative">
              <motion.span {...drawRule(0.2, true)} className="absolute inset-y-0 left-0 hidden w-[1.5px] origin-top bg-ink md:block" />
              <motion.span {...drawRule(0.2)} className="absolute inset-x-0 top-0 h-[1.5px] origin-left bg-ink md:hidden" />

              <dl className="grid h-full grid-cols-2 content-start md:grid-cols-1">
                {titleBlockData.map(({ k, v }, i) => (
                  <motion.div
                    key={k}
                    {...rise(0.3 + i * 0.08)}
                    className="border-b border-rule px-6 py-5 last:border-b-0 max-md:last:col-span-2 md:py-6"
                  >
                    <dt className="data-label">{k}</dt>
                    <dd className="mt-1 text-[14.5px] font-medium text-ink">{v}</dd>
                  </motion.div>
                ))}
              </dl>
            </div>
          </div>

          {/* ============ Row 2: standfirst + actions, inside the frame ============ */}
          <div className="relative">
            <motion.span {...drawRule(0.3)} className="absolute inset-x-0 top-0 h-[1.5px] origin-left bg-ink" />
            <div className="flex flex-col gap-6 p-7 sm:p-9 md:flex-row md:items-center md:justify-between lg:px-12 lg:py-8">
              {/* Positioning line user-approved 2026-07-11. */}
              <motion.p
                {...rise(0.45)}
                className="max-w-[46ch] text-[clamp(1rem,0.95rem+0.35vw,1.2rem)] leading-relaxed text-annotation"
              >
                Frontend engineer with AI depth: strong interfaces first,
                working knowledge of everything the model needs behind them.
              </motion.p>

              <motion.div
                {...rise(0.55)}
                className="flex flex-wrap items-center gap-x-8 gap-y-4"
              >
                <a href="#projects" className="doc-link doc-link--red whitespace-nowrap text-[15px] font-medium">
                  Read the case studies
                </a>
                <a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="doc-link text-[15px] font-medium"
                >
                  Résumé
                </a>
                <span className="flex items-center gap-6 font-mono text-[12.5px]">
                  <a
                    href="https://github.com/Dharkwhale"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="doc-link"
                  >
                    github
                  </a>
                  <a
                    href="https://linkedin.com/in/salman-sanusi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="doc-link"
                  >
                    linkedin
                  </a>
                </span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
