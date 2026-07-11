import { RevealOnScroll, RuleReveal } from "../RevealOnScroll";
import projectrip from "../../assets/projectrip.PNG";
import projectark from "../../assets/projectark.PNG";
import projectportt from "../../assets/projectportt.PNG";
import projectasap from "../../assets/projectasap.PNG";

// Each project is an issued document: header → figure → abstract → story.
// The story slots (problem / approach / the hard decision / impact) are
// PLACEHOLDERS — the user writes the real narrative. Never invent it.
const STORY_SLOTS = [
  { label: "problem", hint: "[What was broken or missing, and why it mattered]" },
  { label: "approach", hint: "[How you attacked it — the shape of the solution]" },
  { label: "the hard decision", hint: "[The trade-off you had to call, and why]" },
  { label: "impact", hint: "[What changed — numbers if real, honest outcome if not]" },
];

const documents = [
  {
    title: "Delivery Platform",
    abstract:
      "A delivery platform connecting customers with local stores — seamless online ordering, real-time tracking, and efficient delivery management.",
    image: projectasap,
    stack: "react · next.js · zustand · tailwindcss",
    link: "https://asap-you.vercel.app/",
    featured: true,
  },
  {
    title: "Trip Itinerary Planner",
    abstract:
      "Plan trips, manage budgets, book hotels and flights, and explore destinations with timeline views.",
    image: projectrip,
    stack: "react · tailwindcss · javascript",
    link: "https://new-travel-app.netlify.app/",
  },
  {
    title: "Crypto Token Analyzer",
    abstract:
      "Analyze crypto tokens with real-time data visualization and market insights for informed decisions.",
    image: projectark,
    stack: "react · tailwindcss · javascript",
    link: "https://ark-nine.vercel.app/",
  },
  {
    title: "Portfolio Website",
    abstract:
      "A modern, responsive portfolio in React and TailwindCSS showcasing projects, skills and experience.",
    image: projectportt,
    stack: "react · tailwindcss · javascript",
    link: "https://chris-portfolio-demo.netlify.app/",
  },
];

const Document = ({ doc, flip }) => (
  <article className="border-b border-rule py-12 last:border-b-0 md:py-16">
    {/* Document header */}
    <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
      <div className="flex items-baseline gap-4">
        <h3 className="font-display text-[clamp(1.4rem,2.6vw,1.9rem)] font-bold tracking-[-0.02em] text-ink">
          {doc.title}
        </h3>
        {doc.featured && (
          <span className="font-mono text-[11px] text-stamp">featured</span>
        )}
      </div>
      <a
        href={doc.link}
        target="_blank"
        rel="noopener noreferrer"
        className="doc-link doc-link--red font-mono text-[12.5px]"
      >
        view the build
      </a>
    </div>

    <div className="mt-7 grid gap-8 md:grid-cols-12 md:gap-10">
      {/* Figure */}
      <div className={`md:col-span-6 ${flip ? "md:order-2" : ""}`}>
        <figure>
          <div className="border-[1.5px] border-ink">
            <img
              src={doc.image}
              alt={`${doc.title} — screenshot`}
              loading="lazy"
              className="aspect-[16/10] w-full object-cover object-top"
            />
          </div>
          <figcaption className="mt-2.5 flex items-baseline justify-between gap-4">
            <span className="font-mono text-[11.5px] text-annotation">
              {doc.stack}
            </span>
          </figcaption>
        </figure>
      </div>

      {/* Abstract + story */}
      <div className={`md:col-span-6 ${flip ? "md:order-1" : ""}`}>
        <p className="data-label">abstract</p>
        <p className="mt-2 max-w-[52ch] text-[15px] leading-relaxed text-ink">
          {doc.abstract}
        </p>

        <div className="mt-7 grid gap-x-8 gap-y-5 sm:grid-cols-2">
          {STORY_SLOTS.map(({ label, hint }) => (
            <div key={label}>
              <p className="data-label">{label}</p>
              <p className="placeholder-copy mt-1.5">{hint}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </article>
);

export const Projects = () => (
  <section id="projects" className="relative scroll-mt-16 px-6 py-24 md:py-32">
    <div className="mx-auto w-full max-w-6xl">
      <RevealOnScroll>
        <RuleReveal />
        <div className="mt-4 flex flex-wrap items-baseline justify-between gap-4">
          <h2 className="font-display text-[clamp(1.9rem,4vw,2.6rem)] font-bold tracking-[-0.02em] text-ink">
            Selected work
          </h2>
          <span className="font-mono text-[12px] text-annotation">
            {documents.length} documents · narratives in progress
          </span>
        </div>
        <p className="mt-4 max-w-[58ch] text-[15px] leading-relaxed text-annotation">
          Each project is written up as a working document — the problem, the
          approach, the one hard decision, the impact. The stories are being
          written; the builds are live now.
        </p>
      </RevealOnScroll>

      <div className="mt-6">
        {documents.map((doc, i) => (
          <RevealOnScroll key={doc.title} delay={0.05}>
            <Document doc={doc} flip={i % 2 === 1} />
          </RevealOnScroll>
        ))}
      </div>
    </div>
  </section>
);
