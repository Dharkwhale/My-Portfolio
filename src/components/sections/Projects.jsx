import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import { RevealOnScroll } from "../RevealOnScroll";
import projectrip from "../../assets/projectrip.PNG";
import projectark from "../../assets/projectark.PNG";
import projectportt from "../../assets/projectportt.PNG";
import projectasap from "../../assets/projectasap.PNG";

const projects = [
  {
    title: "Delivery Platform",
    desc: "A delivery platform connecting customers with local stores, offering seamless online ordering, real-time tracking, and efficient delivery management.",
    image: projectasap,
    tags: ["React", "Next.js", "Zustand", "TailwindCSS", "JavaScript"],
    link: "https://asap-you.vercel.app/",
  },
  {
    title: "Trip Itinerary Planner",
    desc: "A responsive itinerary planner for scheduling trips, managing budgets, booking hotels and flights, and exploring destinations with timeline views.",
    image: projectrip,
    tags: ["React", "TailwindCSS", "JavaScript"],
    link: "https://new-travel-app.netlify.app/",
  },
  {
    title: "Crypto Token Analyzer",
    desc: "A comprehensive tool for analyzing cryptocurrency tokens, providing real-time data visualization and market insights for informed investment decisions.",
    image: projectark,
    tags: ["React", "TailwindCSS", "JavaScript"],
    link: "https://ark-nine.vercel.app/",
  },
  {
    title: "Portfolio Website",
    desc: "A fully functional portfolio website using React and TailwindCSS, showcasing projects, skills, and experience with a modern, responsive design.",
    image: projectportt,
    tags: ["React", "TailwindCSS", "JavaScript"],
    link: "https://chris-portfolio-demo.netlify.app/",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-28">
      <div className="max-w-6xl mx-auto px-6 w-full">

        {/* Heading */}
        <RevealOnScroll>
          <div className="text-center mb-20">
            <p className="text-blue-400 font-mono text-sm tracking-[0.25em] uppercase mb-3">
              What I&apos;ve built
            </p>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">Featured Projects</h2>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <RevealOnScroll key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -7 }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
                className="group flex flex-col rounded-2xl bg-white/[0.03] border border-white/10 overflow-hidden hover:border-blue-500/30 hover:shadow-[0_10px_40px_rgba(59,130,246,0.1)] transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d]/90 via-[#0d0d0d]/20 to-transparent" />
                  <span className="absolute top-3 right-3 font-mono text-xs text-slate-500 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-lg">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Body */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-1">{project.desc}</p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-blue-400 transition-colors font-medium group/link"
                  >
                    View Project
                    <FiExternalLink
                      size={13}
                      className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                    />
                  </a>
                </div>
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>

      </div>
    </section>
  );
};
