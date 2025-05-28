import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "JavaScript",
    "React",
    "TypeScript",
    "TailwindCSS",
    "Next.js",
  ];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border border-white/10 hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6 text-center">
              Passionate developer skilled in building scalable web apps and crafting
              seamless, innovative digital experiences.
            </p>

            {/* ✅ Centered Frontend Section */}
            <div className="flex justify-center">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all text-center">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {frontendSkills.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Education & Work Experience Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2 text-left p-2">
                <li>
                  <strong>Computer Engineering</strong> – The Federal Polytechnic Ilaro (2012–2017)
                </li>
                <li>
                  Related Coursework: Data Engineering, Blockchain Development, Python
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Work Experience</h3>
              <div className="space-y-4 text-gray-300">
                <div className="text-left p-2">
                  <h4 className="font-semibold">Frontend Developer at YOUFUNDIN (2024–Present)</h4>
                  <p>
                    Built and scaled components for a multi-featured web app, including
                    dynamic dashboards and event listing interfaces.
                  </p>
                </div>
                <div className="text-left p-2">
                  <h4 className="font-semibold">Frontend Developer at RENAGER (2022–2024)</h4>
                  <p>
                    Worked closely with UI/UX designers to translate event wireframes into
                    responsive pages.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
