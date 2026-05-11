import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import StarsBackground from './StarsBackground'
import { profileData } from '../data/profileData'
import '../styles/Hero.css'

const Hero = ({ onCtaClick }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section id="home" className="hero">
      <StarsBackground />

      <motion.div
        className="hero-cursor-glow"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
        animate={{ opacity: 1 }}
      />

      <div className="container hero-content">
        <motion.div
          className="hero-inner"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Availability Badge */}
          <motion.div variants={itemVariants} className="hero-badge">
            <span className="badge available">
              <span className="pulse-dot">●</span>
              {profileData.personal.availability}
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.div variants={itemVariants}>
            <h1 className="hero-title">
              <span className="gradient-text">Sarra Ben Sedrine</span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.div variants={itemVariants}>
            <p className="hero-subtitle">{profileData.personal.title}</p>
          </motion.div>

          {/* Tagline */}
          <motion.div variants={itemVariants}>
            <p className="hero-tagline">{profileData.about.summary.split('\n')[0]}</p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="hero-buttons">
            <button className="btn btn-primary" onClick={() => onCtaClick('projects')}>
              <span>Voir mes projets</span>
              <span className="arrow">↓</span>
            </button>
            <button className="btn btn-secondary" onClick={() => onCtaClick('contact')}>
              <span>Parlons!</span>
              <span className="arrow">→</span>
            </button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="scroll-indicator"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span>Scroll pour continuer</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M10 2v12M10 16l-4-4m4 4l4-4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="hero-decoration">
        <div className="orbit orbit-1"></div>
        <div className="orbit orbit-2"></div>
      </div>
    </section>
  )
}

export default Hero
