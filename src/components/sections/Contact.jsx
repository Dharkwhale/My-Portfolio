import { useState, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import emailjs from "emailjs-com";
import { RevealOnScroll, RuleReveal } from "../RevealOnScroll";
import { staggerParent, staggerRow } from "../../lib/motion";

const channels = [
  { label: "email", href: "mailto:tstundes@gmail.com", value: "tstundes@gmail.com" },
  { label: "github", href: "https://github.com/Dharkwhale", value: "github.com/Dharkwhale" },
  { label: "linkedin", href: "https://linkedin.com/in/salman-sanusi", value: "linkedin.com/in/salman-sanusi" },
  { label: "location", value: "Nigeria · Remote" },
];

export const Contact = () => {
  const formRef = useRef();
  const reduce = useReducedMotion();
  const row = staggerRow(reduce);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(""); // sending | sent | error

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        setStatus("sent");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus(""), 4000);
      })
      .catch(() => {
        setStatus("error");
        setTimeout(() => setStatus(""), 4000);
      });
  };

  // Document field: bottom rule only; focus = the rule turns stamp-red
  // (visible focus indicator — the global outline is replaced, not removed).
  const inputClass =
    "w-full border-0 border-b-[1.5px] border-ink bg-transparent px-0 py-2.5 text-[15px] text-ink placeholder:text-annotation/60 transition-colors duration-200 focus:border-stamp focus-visible:outline-none";

  return (
    <section id="contact" className="relative scroll-mt-16 px-6 py-20 md:py-24">
      <div className="mx-auto w-full max-w-6xl">
        <RevealOnScroll>
          <RuleReveal />
          <h2 className="font-display mt-4 text-[clamp(1.9rem,4vw,2.6rem)] font-bold tracking-[-0.02em] text-ink">
            Let&apos;s build something
          </h2>
          <p className="mt-5 max-w-[52ch] text-[clamp(1rem,0.95rem+0.3vw,1.125rem)] leading-relaxed text-annotation">
            I&apos;m open to frontend roles and freelance work. Have a project, a
            question, or just want to say hi? My inbox is open.
          </p>
        </RevealOnScroll>

        <div className="mt-14 grid gap-12 md:grid-cols-12 md:gap-10 lg:gap-12">
          {/* Channels — a ruled table, not a card list */}
          <RevealOnScroll delay={0.05} className="md:col-span-5">
            <div>
              <h3 className="data-label">channels</h3>
              <motion.ul
                variants={staggerParent}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-40px" }}
                className="mt-3"
              >
                {channels.map(({ label, href, value }) => (
                  <motion.li
                    key={label}
                    variants={row}
                    className="flex items-baseline justify-between gap-4 border-b border-rule py-4 last:border-b-0"
                  >
                    <span className="font-mono text-[12px] text-annotation">
                      {label}
                    </span>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="doc-link text-[14.5px]"
                      >
                        {value}
                      </a>
                    ) : (
                      <span className="text-[14.5px] text-ink">{value}</span>
                    )}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </RevealOnScroll>

          {/* Form — document fields */}
          <RevealOnScroll delay={0.1} className="md:col-span-7">
            <form ref={formRef} onSubmit={handleSubmit} className="panel p-6 sm:p-8">
              <h3 className="data-label">correspondence</h3>
              <div className="mt-3 grid gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="data-label mb-2 block">
                    name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    autoComplete="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={inputClass}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="data-label mb-2 block">
                    email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={inputClass}
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label htmlFor="message" className="data-label mb-2 block">
                  message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`${inputClass} resize-none`}
                  placeholder="Tell me about your project or role…"
                />
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-5">
                {/* The one red action in this view */}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="border-[1.5px] border-stamp px-6 py-3 text-[14.5px] font-medium text-stamp transition-colors duration-200 hover:bg-stamp hover:text-paper active:translate-y-px disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "sending" ? "Sending…" : "Send message"}
                </button>

                {/* Reserved height — status changes cause zero layout shift */}
                <p aria-live="polite" className="min-h-5 text-[14px]">
                  {status === "sent" && (
                    <span className="font-mono text-[12.5px] text-ink">
                      received. I&apos;ll get back to you soon.
                    </span>
                  )}
                  {status === "error" && (
                    <span className="font-mono text-[12.5px] text-stamp">
                      something went wrong. please try again.
                    </span>
                  )}
                </p>
              </div>
            </form>
          </RevealOnScroll>
        </div>

        {/* Footer — the document's closing line */}
        <div className="mt-24">
          <div className="rule-hair" />
          <p className="pt-6 text-center font-mono text-[12px] text-annotation">
            Designed &amp; built by Salman Sanusi · {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </section>
  );
};
