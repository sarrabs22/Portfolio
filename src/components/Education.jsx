import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { profileData } from '../data/profileData'
import '../styles/Education.css'

const Education = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="education" className="education">
      <div className="container">
        <motion.div
          ref={ref}
          className="education-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="section-header">
            <h2>Formation & Certifications</h2>
            <div className="header-divider">
              <div className="constellation-line"></div>
            </div>
          </motion.div>

          {/* Two Column Layout */}
          <div className="education-grid">
            {/* Education */}
            <motion.div variants={itemVariants} className="education-column">
              <h3 className="column-title">Diplômes</h3>

              <div className="education-items">
                {profileData.education.map((edu) => (
                  <motion.div
                    key={edu.id}
                    className="education-item"
                    whileHover={{ x: 8 }}
                  >
                    <div className="edu-icon"></div>
                    <div className="edu-content">
                      <h4 className="school-name">{edu.school}</h4>
                      <p className="degree">{edu.degree}</p>
                      <p className="specialization">{edu.specialization}</p>
                      <p className="dates">{edu.dates}</p>
                      <p className="location">{edu.location}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Certifications */}
              {profileData.certifications.length > 0 && (
                <div className="certifications">
                  <h4 className="cert-title">Certifications</h4>
                  <div className="cert-items">
                    {profileData.certifications.map((cert, idx) => (
                      <motion.div
                        key={idx}
                        className="cert-item"
                        whileHover={{ scale: 1.02 }}
                      >
                        <span className="cert-badge">✓</span>
                        <div>
                          <p className="cert-name">{cert.name}</p>
                          <p className="cert-meta">
                            {cert.issuer} • {cert.year}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>

            {/* Languages */}
            <motion.div variants={itemVariants} className="languages-column">
              <h3 className="column-title">Langues</h3>

              <div className="languages-list">
                {profileData.languages.map((lang, idx) => (
                  <motion.div
                    key={idx}
                    className="language-item"
                    whileHover={{ x: 8 }}
                  >
                    <div className="language-header">
                      <h4 className="language-name">{lang.language}</h4>
                      <span className="language-level">{lang.level}</span>
                    </div>

                    {/* Progress Bar */}
                    <div className="progress-bar">
                      <motion.div
                        className="progress-fill"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${lang.percent}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: idx * 0.2 }}
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Additional Info */}
              <motion.div
                variants={itemVariants}
                className="language-info"
              >
                <h4>Intéressée par</h4>
                <p>Bilinguisme français-anglais, opportunités en France avec apprentissage continu de nouvelles compétences linguistiques.</p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education
