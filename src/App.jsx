import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import SpaceGuideBot from './components/SpaceGuideBot'
import './App.css'

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = window.localStorage.getItem('portfolio-theme')
    if (savedTheme === 'light' || savedTheme === 'dark') {
      document.documentElement.setAttribute('data-theme', savedTheme)
      return savedTheme
    }

    const preferredTheme = window.matchMedia('(prefers-color-scheme: light)').matches
      ? 'light'
      : 'dark'
    document.documentElement.setAttribute('data-theme', preferredTheme)
    return preferredTheme
  })
  const [showBackToTop, setShowBackToTop] = useState(false)
  const heroRef = useRef(null)

  // Handle theme toggle
  const handleThemeToggle = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
    window.localStorage.setItem('portfolio-theme', newTheme)
  }

  // Handle scroll for back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle navigation clicks
  const handleNavClick = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="App" data-theme={theme}>
      {/* Navigation */}
      <Navigation onNavClick={handleNavClick} theme={theme} onThemeToggle={handleThemeToggle} />

      {/* Main Content */}
      <main className="main-content">
        {/* Hero Section */}
        <Hero onCtaClick={handleNavClick} ref={heroRef} />

        {/* About Section */}
        <About />

        {/* Skills Section */}
        <Skills />

        {/* Experience Section */}
        <Experience />

        {/* Projects Section */}
        <Projects />

        {/* Education Section */}
        <Education />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p className="footer-text">
              © 2025 Sarra Ben Sedrine. Développeuse Web Full-Stack.
            </p>
            <p className="footer-tagline">
              Créé avec React + Vite + Framer Motion
            </p>
          </div>
        </div>
      </footer>

      {/* Space Guide Bot */}
      <SpaceGuideBot />

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            className="back-to-top"
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Back to top"
          >
            <span>▲</span>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
