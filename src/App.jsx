
import "./App.css"
import { LoadingScreen } from "./components/LoadingScreen"
import "./index.css"
import { useState, useEffect } from "react"
import { Navbar } from "./components/Navbar"
import {Home} from "./components/sections/Home"
import {About} from "./components/sections/About"
import {Projects} from "./components/sections/Projects"
import { Contact } from "./components/sections/Contact"

function App() {
  // Initialize isLoading as a boolean (true means it's still loading)
  const [isLoading, setIsLoading] = useState(true)
  const [menuOpen, setMenuOpen] = useState(true)

  // Optional: Add a useEffect to automatically hide loading screen after a timeout
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000) // 3 seconds timeout as fallback

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      <div
        className={`min-h-screen transition-opacity duration-700 ${
          !isLoading ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  )
}

export default App
