import "./App.css"
import "./index.css"
import { useState, useEffect } from "react"
import { AnimatePresence } from "framer-motion"
import { LoadingScreen } from "./components/LoadingScreen"
import { Navbar } from "./components/Navbar"
import { Home } from "./components/sections/Home"
import { About } from "./components/sections/About"
import { Projects } from "./components/sections/Projects"
import { Contact } from "./components/sections/Contact"

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const [cursor, setCursor] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const move = (e) => setCursor({ x: e.clientX, y: e.clientY })
    window.addEventListener("mousemove", move, { passive: true })
    return () => window.removeEventListener("mousemove", move)
  }, [])

  return (
    <>
      {/* AnimatePresence here keeps LoadingScreen mounted until its exit animation finishes */}
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen key="loading" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <div
        className={`min-h-screen transition-opacity duration-700 ${
          !isLoading ? "opacity-100" : "opacity-0"
        } bg-[#0a0a0a] text-slate-100`}
      >
        {/* Cursor spotlight */}
        <div
          className="pointer-events-none fixed inset-0 z-30 transition-all duration-200"
          style={{
            background: `radial-gradient(600px at ${cursor.x}px ${cursor.y}px, rgba(59,130,246,0.07), transparent 80%)`,
          }}
        />

        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  )
}

export default App
