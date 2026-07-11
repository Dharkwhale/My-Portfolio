import { motion, useReducedMotion } from "framer-motion";
import { RevealOnScroll, RuleReveal } from "../RevealOnScroll";
import { staggerParent, staggerRow } from "../../lib/motion";

// Experience as revision history — newest revision first.
const revisions = [
  {
    rev: "C",
    period: "2024 — now",
    entry: "Frontend Developer, YOUFUNDIN",
    desc: "Built and scaled components for a multi-featured web app, including dynamic dashboards and event-listing interfaces.",
  },
  {
    rev: "B",
    period: "2022 — 2024",
    entry: "Frontend Developer, RENAGER",
    desc: "Translated wireframes into responsive, pixel-perfect pages in close collaboration with UI/UX designers.",
  },
  {
    rev: "A",
    period: "2012 — 2017",
    entry: "B.Tech Computer Engineering",
    desc: "The Federal Polytechnic, Ilaro.",
  },
];

// Capabilities replace the toolkit pill wall. Honest weighting per positioning:
// frontend primary · AI solid · backend working knowledge. AI row content is a
// placeholder — the user supplies the real substance; never invent it.
const capabilities = [
  {
    area: "frontend",
    detail: "React · Next.js · TypeScript · Tailwind · Zustand · Framer Motion",
    weight: "primary",
  },
  {
    area: "ai / llm",
    detail: "[Placeholder — your actual AI work: integrations, LLM-powered features, what you've shipped. We write this together.]",
    weight: "solid",
    placeholder: true,
  },
  {
    area: "backend",
    detail: "REST API design & consumption",
    weight: "working knowledge",
  },
];

export const About = () => {
  const reduce = useReducedMotion();
  const row = staggerRow(reduce);

  return (
    <section id="about" className="relative scroll-mt-16 px-6 py-24 md:py-32">
      <div className="mx-auto w-full max-w-6xl">
        <RevealOnScroll>
          <RuleReveal />
          <h2 className="font-display mt-4 text-[clamp(1.9rem,4vw,2.6rem)] font-bold tracking-[-0.02em] text-ink">
            Frontend, end to end
          </h2>
          {/* Prose below is the previously shipped copy — flagged for the
              user's own rewrite; structure only changed here. */}
          <p className="mt-5 max-w-[60ch] text-[clamp(1rem,0.95rem+0.3vw,1.125rem)] leading-relaxed text-annotation">
            I&apos;m a frontend engineer who likes the unglamorous parts — state
            that behaves, layouts that hold up, motion that earns its place. I
            turn complex problems into interfaces that feel obvious to use.
          </p>
        </RevealOnScroll>

        <div className="mt-14 grid gap-12 md:grid-cols-12 md:gap-10 lg:gap-12">
          {/* Method */}
          <RevealOnScroll delay={0.05} className="md:col-span-5">
            <div>
              <h3 className="data-label">method</h3>
              <ul className="mt-3">
                {[
                  "Ship readable, maintainable React — components that the next developer can pick up without a map.",
                  "Treat performance and accessibility as features, not afterthoughts.",
                  "Sweat the details users never consciously notice — the ones that make software feel right.",
                ].map((item) => (
                  <li
                    key={item}
                    className="border-b border-rule py-3.5 text-[15px] leading-relaxed text-ink last:border-b-0"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </RevealOnScroll>

          {/* Experience — revision history */}
          <RevealOnScroll delay={0.1} className="md:col-span-7">
            <div>
              <h3 className="data-label">revision history</h3>
              <motion.table
                variants={staggerParent}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-40px" }}
                className="mt-3 w-full border-collapse"
              >
                <thead>
                  <tr className="border-b border-rule text-left">
                    <th className="data-label w-12 py-2.5 font-normal">rev</th>
                    <th className="data-label w-32 py-2.5 font-normal max-sm:w-24">
                      period
                    </th>
                    <th className="data-label py-2.5 font-normal">entry</th>
                  </tr>
                </thead>
                <tbody>
                  {revisions.map(({ rev, period, entry, desc }) => (
                    <motion.tr
                      key={rev}
                      variants={row}
                      className="group border-b border-rule align-top transition-colors duration-200 last:border-b-0 hover:bg-field"
                    >
                      <td className="py-4 pr-3 font-mono text-[12.5px] text-annotation">
                        {rev}
                      </td>
                      <td className="py-4 pr-3 font-mono text-[12.5px] text-annotation">
                        {period}
                      </td>
                      <td className="py-4">
                        <p className="text-[15px] font-medium text-ink">{entry}</p>
                        <p className="mt-1.5 max-w-[48ch] text-[14px] leading-relaxed text-annotation">
                          {desc}
                        </p>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </motion.table>
            </div>
          </RevealOnScroll>
        </div>

        {/* Capabilities — replaces the toolkit pill wall */}
        <RevealOnScroll delay={0.05}>
          <div className="mt-16">
            <h3 className="data-label">capabilities</h3>
            <div className="mt-3">
              {capabilities.map(({ area, detail, weight, placeholder }) => (
                <div
                  key={area}
                  className="grid grid-cols-[100px_1fr] items-baseline gap-4 border-b border-rule py-4 last:border-b-0 sm:grid-cols-[120px_1fr_160px]"
                >
                  <span className="font-mono text-[12.5px] text-ink">{area}</span>
                  <span
                    className={
                      placeholder
                        ? "placeholder-copy"
                        : "text-[14.5px] text-ink"
                    }
                  >
                    {detail}
                  </span>
                  <span className="data-label max-sm:col-start-2">{weight}</span>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
