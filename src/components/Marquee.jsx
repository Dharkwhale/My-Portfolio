// Living tech-stack strip — the site's one deliberate infinite loop.
// Slightly tilted, pauses on hover, static under prefers-reduced-motion
// (the CSS handles both; see .marquee-track in index.css).
const STACK = [
  "react",
  "next.js",
  "typescript",
  "javascript",
  "tailwindcss",
  "tanstack query",
  "zustand",
  "framer motion",
  "claude api",
  "rest apis",
];

export const Marquee = () => {
  // Track is doubled so translateX(-50%) loops seamlessly
  const items = [...STACK, ...STACK];

  return (
    <div aria-hidden="true" className="relative -mx-2 -rotate-1 overflow-hidden">
      <div className="marquee border-y-[1.5px] border-ink bg-field py-4">
        <div className="marquee-track">
          {items.map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="font-display flex items-center whitespace-nowrap px-5 text-[clamp(1.3rem,3vw,2rem)] font-bold tracking-[-0.02em] text-annotation"
            >
              {item}
              <span className="ml-10 text-[0.8em] text-stamp">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
