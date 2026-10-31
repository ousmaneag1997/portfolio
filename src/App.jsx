import About from './components/About'
import Contact from './components/Contact'
import Cursor from './components/Cursor'
import Education from './components/Education'
import Experience from './components/Experience'
import Features from './components/Features'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import useReveal from './hooks/useReveal'

export default function App() {
  useReveal()
  return (
    <>
      <a className="skip-link" href="#a-propos">
        Aller au contenu
      </a>
      <Header />
      <main>
        <Hero />
        <Features />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <Cursor />
    </>
  )
}
