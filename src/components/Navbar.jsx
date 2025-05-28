import { useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      document.body.style.overflow = menuOpen ? "hidden" : "";
    } else {
      document.body.style.overflow = ""; // Always allow scroll on desktop
    }

    // Optional: Reset scroll lock when component unmounts
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 z-40 w-full bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg text-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Brand */}
          <a href="#home" className="font-mono font-bold text-xl text-white">
            Salman<span className="text-blue-500">.Tech</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#home" className="hover:text-white text-gray-300 transition-colors">
              Home
            </a>
            <a href="#about" className="hover:text-white text-gray-300 transition-colors">
              About
            </a>
            <a href="#projects" className="hover:text-white text-gray-300 transition-colors">
              Projects
            </a>
            <a href="#contact" className="hover:text-white text-gray-300 transition-colors">
              Contact
            </a>
          </div>

          {/* Hamburger Icon - Mobile */}
          <div
            className="md:hidden text-2xl cursor-pointer z-50 pr-6"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <IoMdClose /> : <RxHamburgerMenu />}
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="md:hidden fixed top-16 left-0 w-full h-screen bg-black/90 backdrop-blur-sm flex flex-col items-center justify-center space-y-8 text-xl z-30">
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
};
