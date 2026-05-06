import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.13, delayChildren: 0.25 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const socials = [
  { icon: <FiGithub size={20} />, href: "https://github.com/Dharkwhale", label: "GitHub" },
  { icon: <FiLinkedin size={20} />, href: "https://linkedin.com/in/salman-sanusi", label: "LinkedIn" },
  { icon: <FiMail size={20} />, href: "#contact", label: "Email" },
];

export const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        <div className="orb-1 absolute top-1/4 left-1/4 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl" />
        <div className="orb-2 absolute bottom-1/3 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="orb-3 absolute top-1/2 right-1/3 w-64 h-64 bg-violet-600/10 rounded-full blur-3xl" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
      >
        {/* Label */}
        <motion.p
          variants={item}
          className="text-blue-400 font-mono text-sm md:text-base mb-5 tracking-[0.25em] uppercase"
        >
          Frontend Developer
        </motion.p>

        {/* Headline */}
        <motion.h1
          variants={item}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[1.05]"
        >
          Hi, I&apos;m{" "}
          <span className="gradient-text">Salman</span>
          <br />
          <span className="text-slate-400 text-3xl md:text-5xl lg:text-6xl font-light mt-2 inline-block">
            Sanusi
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={item}
          className="text-slate-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          I build clean, scalable web apps that deliver high performance and
          seamless user experiences — turning complex ideas into bold, intuitive
          interfaces.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={item}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <a
            href="#projects"
            className="group relative px-8 py-3.5 bg-blue-500 text-white rounded-xl font-semibold overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]"
          >
            <span className="relative z-10">View Projects</span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>

          <a
            href="#contact"
            className="px-8 py-3.5 border border-blue-500/40 text-blue-400 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400 hover:bg-blue-500/10 hover:shadow-[0_0_25px_rgba(59,130,246,0.15)]"
          >
            Contact Me
          </a>

          <a
            href="https://app.enhancv.com/share/596ff0c4/?utm_medium=growth&utm_campaign=share-resume&utm_source=dynamic"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 border border-white/10 text-slate-300 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/5"
          >
            Resume
          </a>
        </motion.div>

        {/* Social icons */}
        <motion.div variants={item} className="flex justify-center gap-4">
          {socials.map(({ icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              aria-label={label}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              whileHover={{ y: -3, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="p-3 rounded-full border border-white/10 text-slate-400 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/10 transition-colors"
            >
              {icon}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600"
      >
        <span className="text-[10px] font-mono tracking-[0.3em] uppercase">scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-slate-600 to-transparent"
        />
      </motion.div>
    </section>
  );
};
