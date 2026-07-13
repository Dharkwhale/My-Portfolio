import "./App.css"
import "./index.css"
import { useState } from "react"
import { Navbar } from "./components/Navbar"
import { Marquee } from "./components/Marquee"
import { Home } from "./components/sections/Home"
import { About } from "./components/sections/About"
import { Projects } from "./components/sections/Projects"
import { Contact } from "./components/sections/Contact"

// No loading screen: the document is visible from the first frame.
// The hero's title-block entrance is the designed first impression.
function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-paper text-ink">
      {/* Paper texture over everything — the warmth v1's flat white lacked */}
      <div className="paper-grain" aria-hidden="true" />

      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        <Home />
        <Marquee />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default App
