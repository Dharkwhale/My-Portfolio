import { RevealOnScroll } from "../RevealOnScroll";
import { motion } from "framer-motion";

const skills = [
  "JavaScript", "TypeScript", "React", "Next.js",
  "TailwindCSS", "HTML / CSS", "Zustand", "REST APIs", "Git",
];

const experience = [
  {
    role: "Frontend Developer",
    company: "YOUFUNDIN",
    period: "2024 – Present",
    desc: "Built and scaled components for a multi-featured web app, including dynamic dashboards and event listing interfaces.",
  },
  {
    role: "Frontend Developer",
    company: "RENAGER",
    period: "2022 – 2024",
    desc: "Worked closely with UI/UX designers to translate wireframes into responsive, pixel-perfect pages.",
  },
];

export const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-28">
      <div className="max-w-6xl mx-auto px-6 w-full">

        {/* Heading */}
        <RevealOnScroll>
          <div className="text-center mb-20">
            <p className="text-blue-400 font-mono text-sm tracking-[0.25em] uppercase mb-3">
              Get to know me
            </p>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">About Me</h2>
          </div>
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 gap-14 items-start">

          {/* Left — bio + skills */}
          <RevealOnScroll delay={0.1}>
            <div>
              <p className="text-slate-300 text-lg leading-relaxed mb-10">
                I&apos;m a passionate frontend developer focused on building scalable,
                high-performance web applications. I love turning complex problems
                into clean, intuitive interfaces that users enjoy interacting with.
              </p>

              <h3 className="text-lg font-semibold text-white mb-5">Tech Stack</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.055, duration: 0.3 }}
                    whileHover={{ y: -3, scale: 1.05 }}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm text-slate-300 hover:border-blue-500/40 hover:text-blue-400 hover:bg-blue-500/10 transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          {/* Right — experience + education */}
          <RevealOnScroll delay={0.2}>
            <div className="space-y-10">

              {/* Experience timeline */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-7">Experience</h3>
                <div className="relative space-y-6 before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-px before:bg-white/10">
                  {experience.map((job, i) => (
                    <div key={i} className="pl-8 relative">
                      <div className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-blue-500 bg-[#0a0a0a] shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                      <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-colors">
                        <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                          <h4 className="font-semibold text-white">{job.role}</h4>
                          <span className="text-xs font-mono text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-md">
                            {job.period}
                          </span>
                        </div>
                        <p className="text-sm text-blue-400 font-medium mb-2">{job.company}</p>
                        <p className="text-sm text-slate-400 leading-relaxed">{job.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Education</h3>
                <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
                  <h4 className="font-semibold text-white">B.Tech, Computer Engineering</h4>
                  <p className="text-sm text-blue-400 mt-1 font-medium">The Federal Polytechnic Ilaro</p>
                  <p className="text-xs text-slate-500 mt-1.5 font-mono">2012 – 2017</p>
                </div>
              </div>

            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};
