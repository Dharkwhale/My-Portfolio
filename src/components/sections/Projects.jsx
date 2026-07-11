import { RevealOnScroll, RuleReveal } from "../RevealOnScroll";
import projectrip from "../../assets/projectrip.PNG";
import projectark from "../../assets/projectark.PNG";
import projectportt from "../../assets/projectportt.PNG";
import projectasap from "../../assets/projectasap.PNG";

// Each project is an issued document: header → figure → abstract → story.
// Story slots (problem / approach / the hard decision / impact) hold the
// user's own narrative where supplied; otherwise a marked placeholder.
// Never invent the missing ones.
const STORY_SLOTS = [
  { key: "problem", label: "problem", hint: "[What was broken or missing, and why it mattered]" },
  { key: "approach", label: "approach", hint: "[How you attacked it — the shape of the solution]" },
  { key: "decision", label: "the hard decision", hint: "[The trade-off you had to call, and why]" },
  { key: "impact", label: "impact", hint: "[What changed — numbers if real, honest outcome if not]" },
];

const documents = [
  {
    title: "Delivery Platform",
    abstract:
      "A delivery platform connecting customers with local stores — seamless online ordering, real-time tracking, and efficient delivery management.",
    image: projectasap,
    stack: "react · next.js · tanstack query · tailwindcss",
    link: "https://asap-you.vercel.app/",
    featured: true,
    story: {
      problem:
        "Chowdeck, Heyfood and Glovo capture the major stores and restaurants — but the small neighborhood outlets people buy from daily stay offline. The goal: bring those outlets in and make ordering and delivery easy for the people around them.",
      approach:
        "Three distinct users — customer, vendor, rider — so I built from the inside out: shared UI primitives and the multi-step auth flows first, where the role-based logic lives. With ~80% of the app driven by server data, I built the data layer on TanStack Query and paired React Hook Form with Zod schemas for type-safety from input field to API endpoint.",
      decision:
        "Short-polling over WebSockets for live rider tracking. Sockets stream instantly but demand a stateful server, mobile drop-handling and early scaling work. TanStack Query's refetchInterval polls coordinates every 5 seconds over plain HTTP while Framer Motion smooths the map marker between updates — a live feel at a fraction of the overhead.",
      impact:
        "Shipped the MVP to a pilot group of 50+ test users and riders; the platform processed its first live end-to-end delivery orders. Query caching cut redundant requests and kept the tracking map smooth on standard mobile networks.",
    },
  },
  {
    title: "Sentinel — AI Threat Hunting Agent",
    meta: "Splunk Agentic Ops Hackathon 2026 · solo build",
    abstract:
      "An autonomous agent that hunts security logs for attacks before any alert fires — reasoning like an analyst instead of reacting to thresholds.",
    // SOC dashboard screenshot: waiting for the user to drop the file into
    // src/assets/sentinel.PNG — then import it here like the others.
    image: null,
    stack: "python · fastapi · react · splunk sdk · claude opus 4.8",
    link: "https://github.com/Dharkwhale/sentinel-threat-hunter",
    linkLabel: "view the source",
    story: {
      problem:
        "Static detection rules react to thresholds — a patient attack chain that never trips one walks straight past the SOC.",
      approach:
        "An agent reasoning loop on Claude Opus 4.8 that works like an analyst: forms hypotheses, writes its own Splunk queries, weighs the evidence, and revises its confidence before escalating or dismissing. Around it: a synthetic attack dataset, a React SOC dashboard streaming the agent's reasoning live over SSE, and an automated report generator. Built entirely solo.",
      impact:
        "In testing, it uncovered a full attack chain — credential stuffing, brute force, lateral movement, and database compromise — that static rules miss.",
    },
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

const StorySlots = ({ doc, wide }) => (
  <div
    className={`mt-7 grid gap-x-8 gap-y-5 sm:grid-cols-2 ${
      wide ? "lg:grid-cols-4" : ""
    }`}
  >
    {STORY_SLOTS.map(({ key, label, hint }) => {
      const text = doc.story?.[key];
      return (
        <div key={key}>
          <p className="data-label">{label}</p>
          <p
            className={
              text
                ? "mt-1.5 text-[14px] leading-relaxed text-ink"
                : "placeholder-copy mt-1.5"
            }
          >
            {text ?? hint}
          </p>
        </div>
      );
    })}
  </div>
);

const Document = ({ doc, flip }) => (
  <article className="border-b border-rule py-12 last:border-b-0 md:py-16">
    {/* Document header */}
    <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
        <h3 className="font-display text-[clamp(1.4rem,2.6vw,1.9rem)] font-bold tracking-[-0.02em] text-ink">
          {doc.title}
        </h3>
        {doc.featured && (
          <span className="font-mono text-[11px] text-stamp">featured</span>
        )}
        {doc.meta && (
          <span className="font-mono text-[11px] text-annotation">{doc.meta}</span>
        )}
      </div>
      {doc.link && (
        <a
          href={doc.link}
          target="_blank"
          rel="noopener noreferrer"
          className="doc-link doc-link--red font-mono text-[12.5px]"
        >
          {doc.linkLabel ?? "view the build"}
        </a>
      )}
    </div>

    {doc.image ? (
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
          <StorySlots doc={doc} />
        </div>
      </div>
    ) : (
      /* No figure yet — the document runs full-width, story slots 4-up */
      <div className="mt-7">
        <p className="data-label">abstract</p>
        <p className="mt-2 max-w-[62ch] text-[15px] leading-relaxed text-ink">
          {doc.abstract}
        </p>
        <StorySlots doc={doc} wide />
        <p className="mt-6 font-mono text-[11.5px] text-annotation">
          {doc.stack}
        </p>
      </div>
    )}
  </article>
);

export const Projects = () => {
  // Alternate figure sides among documents that have figures
  let figureCount = 0;
  const docsWithFlip = documents.map((doc) => ({
    doc,
    flip: doc.image ? figureCount++ % 2 === 1 : false,
  }));

  return (
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
        {docsWithFlip.map(({ doc, flip }) => (
          <RevealOnScroll key={doc.title} delay={0.05}>
            <Document doc={doc} flip={flip} />
          </RevealOnScroll>
        ))}
      </div>
    </div>
  </section>
  );
};
