import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
            Hi, I'm Salman Sanusi
          </h1>

          <p className="text-gray-500 text-lg mb-8 max-w-lg mx-auto">
            I'm a frontend developer passionate about building clean, scalable web
            apps that deliver high performance and seamless user experiences.
            I turn complex ideas into bold, intuitive interfaces.
          </p>

          
          <div className="flex justify-center space-x-4 mb-4">
            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-5 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
            >
              Contact Me
            </a>
          </div>

          
          <div className="flex justify-center">
            <a
              href="https://app.enhancv.com/share/596ff0c4/?utm_medium=growth&utm_campaign=share-resume&utm_source=dynamic" // Replace this with your actual resume link
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cyan-400/10 text-white py-3 px-5 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              Checkout My Resume
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
