import { useRef } from "react"
import Navbar from "./components/Navbar"
import About from "./pages/About"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Contacts from "./pages/Contacts"

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactsRef = useRef(null);
  return (
    <div className="font-sans h-screen">
      <Navbar
        homeRef={homeRef} 
        aboutRef={aboutRef} 
        projectsRef={projectsRef} 
        contactsRef = {contactsRef}
      />
      <Home homeRef={homeRef}/>
      <About aboutRef={aboutRef}/>
      <Projects projectsRef={projectsRef}/>
      <Contacts contactsRef={contactsRef} />
    </div>
  )
}

export default App
