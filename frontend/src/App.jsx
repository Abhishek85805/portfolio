import Navbar from "./components/Navbar"
import About from "./pages/About"
import Home from "./pages/Home"
import Projects from "./pages/Projects"


function App() {
  return (
    <div className="font-sans h-screen">
      <Navbar/>
      <Home/>
      <About/>
      <Projects/>
    </div>
  )
}

export default App
