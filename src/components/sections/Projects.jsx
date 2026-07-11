import { RevealOnScroll, RuleReveal } from "../RevealOnScroll";
import projectrip from "../../assets/projectrip.PNG";
import projectark from "../../assets/projectark.PNG";
import projectasap from "../../assets/projectasap.PNG";
import sentinelimg from "../../assets/sentinelimg.jpeg";

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
    image: sentinelimg,
    stack: "python · fastapi · react · splunk sdk · claude opus 4.8",
    link: "https://github.com/Dharkwhale/sentinel-threat-hunter",
    linkLabel: "view the source",
    story: {
      problem:
        "Static detection rules react to thresholds — a patient attack chain that never trips one walks straight past the SOC.",
      approach:
        "An agent reasoning loop on Claude Opus 4.8 that works like an analyst: forms hypotheses, writes its own Splunk queries, weighs the evidence, and revises its confidence before escalating or dismissing. Around it: a synthetic attack dataset, a React SOC dashboard streaming the agent's reasoning live over SSE, and an automated report generator. Built entirely solo.",
      decision:
        "Making the agent genuinely reason rather than just summarize. Early versions accepted weak evidence and confirmed everything. I restructured the prompt to force a real confirm-or-deny judgment on each query, which produced authentic confidence revision in both directions — the difference between an actual agent and a glorified search.",
      impact:
        "In testing, it uncovered a full attack chain — credential stuffing, brute force, lateral movement, and database compromise — that static rules miss.",
    },
  },
  {
    title: "Trip Itinerary Planner",
    abstract:
      "Trips, budgets, hotels and flights on one timeline — an interface-dense build that lives or dies on how cleanly it consumes its APIs.",
    image: projectrip,
    stack: "react · tailwindcss · javascript",
    link: "https://new-travel-app.netlify.app/",
    // Honest register: an assessment build gets a note, not a war story.
    note: "Assessment build, kept for what it demonstrates: dense UI composition and disciplined endpoint consumption — every list, filter and timeline view is API-fed. Rotates out as new documents land.",
  },
  {
    title: "Ark Analytics",
    abstract:
      "A crypto market dashboard that consolidates live prices, trending coins and market activity into one clean read — built for everyday users, not trading desks.",
    image: projectark,
    stack: "next.js · react · typescript · tailwindcss · coinmarketcap api",
    link: "https://ark-nine.vercel.app/",
    story: {
      problem:
        "Crypto traders juggle exchange apps, X threads, Telegram groups, CoinMarketCap and separate charting sites just to know what the market is doing — a fragmented workflow that fails exactly when volatility demands speed. Ark puts the key signals on one dashboard: not a pro terminal, a faster read for everyday users.",
      approach:
        "A responsive dashboard first: Next.js, React, TypeScript and Tailwind with reusable components, a backend endpoint feeding each section only the data it needs — no bulk loads into the UI — and the CoinMarketCap API driving live prices on the scrolling hero. The structure optimizes for speed, readability, and room to add analytics later.",
      decision:
        "How often to refresh prices. Crypto moves every second, but chasing every tick means re-render storms across every component sharing the data. I chose controlled-interval fetches from the backend over continuous updates — prices can run a few seconds behind the market, but charts and scrolling stay smooth. Performance over ultra-high-frequency accuracy was the practical call for v1.",
      impact:
        "It proved the idea: one developer-built dashboard consolidating live prices and trending data without overwhelming the user. Honestly an early-stage product — no on-chain analysis, whale tracking or portfolio tools yet — but the architecture validated the real-time workflow and gave later iterations a foundation worth building on.",
    },
  },
];

// A document either tells its four-slot story, or carries an honest note
// (e.g. assessment builds) — never a fabricated narrative.
const StorySlots = ({ doc, wide }) => {
  if (doc.note) {
    return (
      <div className="mt-7">
        <p className="data-label">note</p>
        <p className="mt-1.5 max-w-[52ch] text-[14px] leading-relaxed text-annotation">
          {doc.note}
        </p>
      </div>
    );
  }
  return (
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
};

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
            {documents.length} documents
          </span>
        </div>
        <p className="mt-4 max-w-[58ch] text-[15px] leading-relaxed text-annotation">
          Each project is written up as a working document — the problem, the
          approach, the one hard decision, the impact.
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
