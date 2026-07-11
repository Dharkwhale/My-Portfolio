import { motion, useReducedMotion } from "framer-motion";
import { EASE_CRISP } from "../../lib/motion";

const RESUME_URL =
  "https://drive.google.com/file/d/1Sgsp-4_BvTLWR4TjYlLHYOhWE6FYUaiI/view?usp=drive_link";

// Title-block data (the evolved colophon). Discipline wording pending
// user sign-off on positioning copy — see docs/ai-memory/progress.md.
const titleBlockData = [
  { k: "discipline", v: "Frontend · AI" },
  { k: "stack", v: "React / Next.js / TS" },
  { k: "location", v: "Nigeria · Remote" },
  { k: "revision", v: "2026.07" },
];

export const Home = () => {
  const reduce = useReducedMotion();

  // Rules draw in; content rises; the stamp hits last. Runs once, ~1.1s total.
  const drawRule = (delay = 0, vertical = false) => ({
    initial: reduce ? { opacity: 0 } : { [vertical ? "scaleY" : "scaleX"]: 0 },
    animate: reduce ? { opacity: 1 } : { [vertical ? "scaleY" : "scaleX"]: 1 },
    transition: { duration: reduce ? 0.15 : 0.45, delay: reduce ? 0 : delay, ease: EASE_CRISP },
  });

  const rise = (delay = 0) => ({
    initial: { opacity: 0, y: reduce ? 0 : 12 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: reduce ? 0.15 : 0.45, delay: reduce ? 0 : delay, ease: EASE_CRISP },
  });

  return (
    <section
      id="home"
      className="relative flex min-h-[100dvh] items-center scroll-mt-16 px-6 pt-24 pb-16"
    >
      <div className="mx-auto w-full max-w-6xl">
        {/* ================= Title block ================= */}
        <div className="relative">
          {/* Frame rules — drawn, not painted */}
          <motion.span {...drawRule(0)} className="absolute inset-x-0 top-0 h-[1.5px] origin-left bg-ink" />
          <motion.span {...drawRule(0.1)} className="absolute inset-x-0 bottom-0 h-[1.5px] origin-right bg-ink" />
          <motion.span {...drawRule(0.05, true)} className="absolute inset-y-0 left-0 w-[1.5px] origin-top bg-ink" />
          <motion.span {...drawRule(0.15, true)} className="absolute inset-y-0 right-0 w-[1.5px] origin-bottom bg-ink" />

          <div className="grid md:grid-cols-[1fr_250px] lg:grid-cols-[1fr_280px]">
            {/* Name cell */}
            <div className="p-6 sm:p-8 lg:p-10">
              <motion.h1
                {...rise(0.15)}
                className="font-display text-[clamp(3.2rem,10vw,7.5rem)] font-extrabold leading-[0.94] tracking-[-0.035em] text-ink"
              >
                Salman
                <br />
                Sanusi
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
                    : { type: "spring", stiffness: 500, damping: 26, delay: 0.8 }
                }
                className="mt-6 inline-block rounded-[3px] border-2 border-stamp px-3 py-1.5 font-mono text-[13px] tracking-[0.04em] text-stamp"
              >
                AVAILABLE
              </motion.span>
            </div>

            {/* Data column */}
            <div className="relative">
              {/* Divider: vertical on md+, horizontal on mobile */}
              <motion.span {...drawRule(0.2, true)} className="absolute inset-y-0 left-0 hidden w-[1.5px] origin-top bg-ink md:block" />
              <motion.span {...drawRule(0.2)} className="absolute inset-x-0 top-0 h-[1.5px] origin-left bg-ink md:hidden" />

              <dl className="grid grid-cols-2 md:grid-cols-1">
                {titleBlockData.map(({ k, v }, i) => (
                  <motion.div
                    key={k}
                    {...rise(0.3 + i * 0.06)}
                    className="border-b border-rule px-6 py-4 last:border-b-0 md:px-6 md:py-5 [&:nth-last-child(2)]:max-md:border-b-0"
                  >
                    <dt className="data-label">{k}</dt>
                    <dd className="mt-1 text-[14.5px] font-medium text-ink">{v}</dd>
                  </motion.div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        {/* ================= Standfirst + actions ================= */}
        {/* Positioning copy: current shipped line retained pending user-approved
            AI framing. Draft options live in the conversation — do not finalize here. */}
        <motion.p
          {...rise(0.5)}
          className="mt-10 max-w-[54ch] text-[clamp(1.05rem,1rem+0.4vw,1.25rem)] leading-relaxed text-annotation"
        >
          Frontend engineer building fast, considered web interfaces — turning
          complex products into clean, reliable UI with React, Next.js and
          TypeScript.
        </motion.p>

        <motion.div
          {...rise(0.6)}
          className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4"
        >
          <a href="#projects" className="doc-link doc-link--red text-[15px] font-medium">
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
    </section>
  );
};
