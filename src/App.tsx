import { useReveal } from './hooks/useReveal'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  const revealRef = useReveal()

  return (
    <div ref={revealRef}>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  )
}

export default App
