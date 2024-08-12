import { useRef } from "react"
import Navbar from "./components/Navbar"
import About from "./pages/About"
import Home from "./pages/Home"
import Projects from "./pages/Projects"

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  return (
    <div className="font-sans h-screen">
      <Navbar
        homeRef={homeRef} 
        aboutRef={aboutRef} 
        projectsRef={projectsRef} 
      />
      <Home homeRef={homeRef}/>
      <About aboutRef={aboutRef}/>
      <Projects projectsRef={projectsRef}/>
    </div>
  )
}

export default App
