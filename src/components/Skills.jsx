import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { profileData } from '../data/profileData'
import '../styles/Skills.css'

const Skills = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5 },
    },
  }

  const skillCategories = [
    {
      title: 'Frontend',
      skills: profileData.skills.frontend,
      color: '#00d9ff',
    },
    {
      title: 'Backend',
      skills: profileData.skills.backend,
      color: '#9d4edd',
    },
    {
      title: 'Bases de données',
      skills: profileData.skills.database,
      color: '#ffd60a',
    },
    {
      title: 'DevOps',
      skills: profileData.skills.devops,
      color: '#ff006e',
    },
    {
      title: 'IA & Data',
      skills: profileData.skills.ai,
      color: '#00f5ff',
    },
    {
      title: 'Outils',
      skills: profileData.skills.tools,
      color: '#5a189a',
    },
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.div
          ref={ref}
          className="skills-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="section-header">
            <h2>Compétences Techniques</h2>
            <div className="header-divider">
              <div className="constellation-line"></div>
            </div>
          </motion.div>

          {/* Skills Grid */}
          <div className="skills-grid">
            {skillCategories.map((category, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="skill-category"
                style={{ '--category-color': category.color }}
              >
                <div className="category-header">
                  <h3>{category.title}</h3>
                  <div className="category-icon"></div>
                </div>

                <div className="skills-list">
                  {category.skills.map((skill, skillIdx) => (
                    <motion.div
                      key={skillIdx}
                      className="skill-item"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="skill-name">{skill}</span>
                      <span className="skill-indicator"></span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills */}
          <motion.div variants={itemVariants} className="additional-skills">
            <h3>Méthodologies</h3>
            <div className="methodology-items">
              {profileData.skills.other.map((skill, idx) => (
                <motion.span
                  key={idx}
                  className="methodology-badge"
                  whileHover={{ scale: 1.1 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
