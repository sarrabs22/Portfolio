import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import PortfolioIcon from './PortfolioIcon'
import '../styles/Navigation.css'

const navigationItems = [
  { id: 'home', label: 'Accueil' },
  { id: 'about', label: 'À propos' },
  { id: 'skills', label: 'Compétences' },
  { id: 'experience', label: 'Expérience' },
  { id: 'projects', label: 'Projets' },
  { id: 'education', label: 'Formation' },
  { id: 'contact', label: 'Contact' },
]

const Navigation = ({ onNavClick, theme, onThemeToggle }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    let animationFrame = null

    const updateActiveSection = () => {
      setIsScrolled(window.scrollY > 50)

      const viewportAnchor = window.innerHeight * 0.35
      const sectionInView = navigationItems.find((item) => {
        const section = document.getElementById(item.id)
        if (!section) return false

        const rect = section.getBoundingClientRect()
        return rect.top <= viewportAnchor && rect.bottom > viewportAnchor
      })

      const closestSection =
        sectionInView ||
        navigationItems
          .map((item) => {
            const section = document.getElementById(item.id)
            if (!section) return null

            return {
              id: item.id,
              distance: Math.abs(section.getBoundingClientRect().top - viewportAnchor),
            }
          })
          .filter(Boolean)
          .sort((a, b) => a.distance - b.distance)[0]

      if (closestSection?.id) {
        setActiveSection(closestSection.id)
      }

      animationFrame = null
    }

    const handleScroll = () => {
      if (animationFrame) return
      animationFrame = window.requestAnimationFrame(updateActiveSection)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame)
      }
    }
  }, [])

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId)
    setIsOpen(false)
    onNavClick(sectionId)
  }

  const menuVariants = {
    hidden: { opacity: 0, x: -300 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
    exit: {
      opacity: 0,
      x: -300,
      transition: { duration: 0.2 },
    },
  }

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          {/* Logo */}
          <motion.div
            className="nav-logo"
            onClick={() => handleNavClick('home')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <PortfolioIcon name="sparkles" className="logo-icon" size={20} />
            <span className="logo-text">Sarra</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="nav-menu-desktop">
            {navigationItems.map((item) => (
              <motion.button
                key={item.id}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => handleNavClick(item.id)}
                whileHover={{ color: 'var(--electric-blue)' }}
                whileTap={{ scale: 0.95 }}
                aria-current={activeSection === item.id ? 'page' : undefined}
              >
                {item.label}
              </motion.button>
            ))}
          </div>

          {/* Theme Toggle & Hamburger */}
          <div className="nav-controls">
            <motion.button
              className="theme-toggle"
              onClick={onThemeToggle}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label={theme === 'dark' ? 'Activer le mode clair' : 'Activer le mode sombre'}
              title={theme === 'dark' ? 'Mode clair' : 'Mode sombre'}
            >
              <span className="theme-toggle-track" aria-hidden="true">
                <span className="theme-toggle-thumb">
                  <PortfolioIcon name={theme === 'dark' ? 'sun' : 'moon'} size={13} />
                </span>
              </span>
            </motion.button>

            <motion.button
              className={`hamburger ${isOpen ? 'open' : ''}`}
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.9 }}
              aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={isOpen}
            >
              <span></span>
              <span></span>
              <span></span>
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="nav-menu-mobile"
          variants={menuVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {navigationItems.map((item) => (
            <motion.button
              key={item.id}
              className={`nav-link mobile ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => handleNavClick(item.id)}
              whileHover={{ x: 10 }}
              whileTap={{ scale: 0.95 }}
              aria-current={activeSection === item.id ? 'page' : undefined}
            >
              {item.label}
            </motion.button>
          ))}
        </motion.div>
      )}
    </>
  )
}

export default Navigation
