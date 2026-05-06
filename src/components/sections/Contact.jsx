import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { FiGithub, FiLinkedin, FiMail, FiMapPin } from "react-icons/fi";
import { RevealOnScroll } from "../RevealOnScroll";

const socials = [
  {
    icon: <FiGithub size={18} />,
    label: "GitHub",
    href: "https://github.com/Dharkwhale",
    value: "github.com/Dharkwhale",
  },
  {
    icon: <FiLinkedin size={18} />,
    label: "LinkedIn",
    href: "https://linkedin.com/in/salman-sanusi",
    value: "linkedin.com/in/salman-sanusi",
  },
  {
    icon: <FiMail size={18} />,
    label: "Email",
    href: "mailto:tstundes@gmail.com",
    value: "tstundes@gmail.com",
  },
  {
    icon: <FiMapPin size={18} />,
    label: "Location",
    href: "#",
    value: "Nigeria",
  },
];

export const Contact = () => {
  const formRef = useRef();
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

  const inputClass =
    "w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/60 focus:bg-blue-500/5 transition-all duration-200";

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-28">
      <div className="max-w-6xl mx-auto px-6 w-full">

        {/* Heading */}
        <RevealOnScroll>
          <div className="text-center mb-20">
            <p className="text-blue-400 font-mono text-sm tracking-[0.25em] uppercase mb-3">
              Let&apos;s talk
            </p>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">Get In Touch</h2>
          </div>
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 gap-14 items-start">

          {/* Left — info */}
          <RevealOnScroll delay={0.1}>
            <div>
              <p className="text-slate-300 text-lg leading-relaxed mb-10">
                I&apos;m currently open to new opportunities. Whether you have a project
                in mind, a question, or just want to say hi — my inbox is always open.
              </p>

              <div className="space-y-5">
                {socials.map(({ icon, label, href, value }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-blue-400 group-hover:bg-blue-500/10 group-hover:border-blue-500/30 transition-all">
                      {icon}
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-mono uppercase tracking-wider">{label}</p>
                      <p className="text-slate-300 group-hover:text-white transition-colors text-sm mt-0.5">{value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          {/* Right — form */}
          <RevealOnScroll delay={0.2}>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm text-slate-400 mb-2 font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={inputClass}
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm text-slate-400 mb-2 font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={inputClass}
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-sm text-slate-400 mb-2 font-medium">Message</label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`${inputClass} resize-none`}
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === "sending"}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-blue-500 text-white py-3.5 px-6 rounded-xl font-semibold transition-all hover:bg-blue-400 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "sending"
                  ? "Sending..."
                  : status === "sent"
                  ? "Message Sent!"
                  : "Send Message"}
              </motion.button>

              {status === "error" && (
                <p className="text-red-400 text-sm text-center">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </RevealOnScroll>
        </div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-white/5 text-center">
          <p className="text-slate-600 text-sm font-mono">
            Designed &amp; built by{" "}
            <span className="gradient-text font-semibold">Salman Sanusi</span>
            {" "}· {new Date().getFullYear()}
          </p>
        </div>

      </div>
    </section>
  );
};
