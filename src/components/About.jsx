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
                <h3>Parcours</h3>
                <p>Ingénieure de l'ESPRIT + semestre en Allemagne. J'adore apprendre en voyageant!</p>
              </div>
              <div className="highlight-box">
                <h3>Ce que je fais</h3>
                <p>Full-Stack web, IA, DevOps. Je code en anglais, je pense en français, je déploie avec Docker.</p>
              </div>
              <div className="highlight-box">
                <h3>Ma mission</h3>
                <p>Créer du code qui marche vraiment et qui plaît aux utilisateurs. Rejoindre une équipe cool en France!</p>
              </div>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div variants={itemVariants} className="about-stats">
            <div className="stat">
              <h4>1+</h4>
              <p>An d'expérience pro</p>
            </div>
            <div className="stat">
              <h4>5</h4>
              <p>Projets qui me rendent fière</p>
            </div>
            <div className="stat">
              <h4>15+</h4>
              <p>Techs que j'aime utiliser</p>
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
