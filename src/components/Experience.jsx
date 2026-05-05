import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { profileData } from '../data/profileData'
import '../styles/Experience.css'

const Experience = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const [expandedId, setExpandedId] = useState(null)

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
    <section id="experience" className="experience">
      <div className="container">
        <motion.div
          ref={ref}
          className="experience-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="section-header">
            <h2>Expérience Professionnelle</h2>
            <div className="header-divider">
              <div className="constellation-line"></div>
            </div>
          </motion.div>

          {/* Timeline */}
          <div className="timeline">
            {profileData.experience.map((exp, idx) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className={`timeline-item ${expandedId === exp.id ? 'expanded' : ''}`}
              >
                {/* Timeline Dot */}
                <div className="timeline-marker">
                  <motion.div
                    className="marker-dot"
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.9 }}
                  />
                  {idx < profileData.experience.length - 1 && <div className="timeline-line" />}
                </div>

                {/* Content */}
                <motion.div
                  className="timeline-content"
                  onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
                  whileHover={{ x: 10 }}
                >
                  <div className="experience-header">
                    <div>
                      <h3 className="experience-title">{exp.title}</h3>
                      <p className="experience-company">
                        {exp.company} • {exp.location}
                      </p>
                      <p className="experience-dates">{exp.dates}</p>
                    </div>
                    <motion.div
                      className="expand-icon"
                      animate={{ rotate: expandedId === exp.id ? 180 : 0 }}
                    >
                      ▼
                    </motion.div>
                  </div>

                  {/* Expandable Details */}
                  <motion.div
                    className="experience-details"
                    initial={{ opacity: 0, height: 0 }}
                    animate={
                      expandedId === exp.id
                        ? { opacity: 1, height: 'auto' }
                        : { opacity: 0, height: 0 }
                    }
                    transition={{ duration: 0.3 }}
                  >
                    <p className="experience-description">{exp.description}</p>

                    <div className="missions">
                      <h4>Missions clés</h4>
                      <ul>
                        {exp.missions.map((mission, mIdx) => (
                          <li key={mIdx}>{mission}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="tech-stack">
                      <h4>Stack technologique</h4>
                      <div className="tech-badges">
                        {exp.technologies.map((tech, tIdx) => (
                          <span key={tIdx} className="tech-badge">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
