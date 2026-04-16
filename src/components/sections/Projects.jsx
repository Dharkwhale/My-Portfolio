import { RevealOnScroll } from "../RevealOnScroll";
import projectrip from '../../assets/projectrip.PNG'
import projectcart from '../../assets/projectcart.PNG'
import projectark from '../../assets/projectark.PNG'
import projectportt from '../../assets/projectportt.PNG'

export const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Project 1 */}
            <div className="text-left p-4 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <img
                src={projectark}
                alt="Crypto Token Analyzer"
                className="rounded-xl mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-xl font-bold mb-2">Crypto Token Analyzer</h3>
              <p className="text-gray-400 mb-4">
                Built a comprehensive tool for analyzing cryptocurrency tokens, providing real-time data visualization and market insights to empower informed investment decisions.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "TailwindCSS", "JavaScript"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href="https://ark-nine.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-200 transition-colors"
              >
                View Project
              </a>
            </div>

            {/* Project 2 */}
            <div className="text-left p-4 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <img
                src={projectrip}
                alt="Trip Itinerary Planner"
                className="rounded-xl mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-xl font-bold mb-2">Trip Itinerary Planner</h3>
              <p className="text-gray-400 mb-4">
                Built a responsive itinerary planner that allows users to schedule trips, manage budgets, book hotels and flights, and explore destinations with integrated maps and timeline views.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "TailwindCSS", "JavaScript"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href="https://new-travel-app.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-200 transition-colors"
              >
                View Project
              </a>
            </div>

            {/* Project 3 */}
            <div className="text-left p-4 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <img
                src={projectcart}
                alt="Shopping Cart"
                className="rounded-xl mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-xl font-bold mb-2">Shopping Cart</h3>
              <p className="text-gray-400 mb-4">
                Designed and developed a complete shopping cart system allowing users to add items, adjust quantities, view real-time subtotals, and navigate between shopping and checkout—all powered by React and Context API.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "TailwindCSS", "JavaScript"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href="https://shopping-cart-dharkwhales-projects.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-200 transition-colors"
              >
                View Project
              </a>
            </div>
            {/* Project 4 */}
            <div className="text-left p-4 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <img
                src={projectportt}
                alt="Shopping Cart"
                className="rounded-xl mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-xl font-bold mb-2">Portfolio Website</h3>
              <p className="text-gray-400 mb-4">
                designed a fully functional portfolio website using React and TailwindCSS, showcasing projects, skills, and experience with a modern, responsive design and smooth animations.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "TailwindCSS", "JavaScript"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href="https://chris-portfolio-demo.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-200 transition-colors"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
