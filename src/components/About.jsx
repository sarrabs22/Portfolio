import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { profileData } from '../data/profileData'
import '../styles/About.css'

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          ref={ref}
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="section-header">
            <h2>À propos de moi</h2>
            <div className="header-divider">
              <div className="constellation-line"></div>
            </div>
          </motion.div>

          {/* Two Column Layout */}
          <div className="about-grid">
            <motion.div variants={itemVariants} className="about-text">
              <p className="about-intro">{profileData.about.summary}</p>
              <p className="about-description">{profileData.about.description}</p>
            </motion.div>

            <motion.div variants={itemVariants} className="about-highlights">
              <div className="highlight-box">
                <h3>Formation</h3>
                <p>Diplôme d'ingénieur de l'ESPRIT (Tunis) + Échange académique en Allemagne</p>
              </div>
              <div className="highlight-box">
                <h3>Expertise</h3>
                <p>Full-Stack Web Development, IA Integration, DevOps & Cloud</p>
              </div>
              <div className="highlight-box">
                <h3>Objectif</h3>
                <p>Contribuer à des projets innovants en France</p>
              </div>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div variants={itemVariants} className="about-stats">
            <div className="stat">
              <h4>1+</h4>
              <p>Année d'expérience</p>
            </div>
            <div className="stat">
              <h4>5</h4>
              <p>Projets majeurs</p>
            </div>
            <div className="stat">
              <h4>15+</h4>
              <p>Technologies maîtrisées</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="about-decoration">
        <div className="floating-element floating-1"></div>
        <div className="floating-element floating-2"></div>
      </div>
    </section>
  )
}

export default About
