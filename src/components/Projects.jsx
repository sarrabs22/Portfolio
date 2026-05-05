import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { profileData } from '../data/profileData'
import '../styles/Projects.css'

const Projects = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [filter, setFilter] = useState('all')
  const [hoveredProject, setHoveredProject] = useState(null)

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  // Get unique technologies for filters
  const allTechs = [...new Set(profileData.projects.flatMap((p) => p.technologies))]

  // Filter projects
  const filteredProjects =
    filter === 'all'
      ? profileData.projects
      : profileData.projects.filter((p) => p.technologies.includes(filter))

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div
          ref={ref}
          className="projects-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="section-header">
            <h2>Projets</h2>
            <div className="header-divider">
              <div className="constellation-line"></div>
            </div>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div variants={itemVariants} className="filter-buttons">
            <motion.button
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Tous les projets
            </motion.button>
            {allTechs.slice(0, 5).map((tech) => (
              <motion.button
                key={tech}
                className={`filter-btn ${filter === tech ? 'active' : ''}`}
                onClick={() => setFilter(tech)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tech}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div className="projects-grid">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                className="project-card"
                variants={itemVariants}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                whileHover={{ y: -8 }}
              >
                {/* Card Background */}
                <div className="card-background"></div>

                {/* Year Badge */}
                <div className="project-year">{project.year}</div>

                {/* Card Content */}
                <div className="card-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  {/* Features */}
                  <div className="project-features">
                    {project.features.slice(0, 3).map((feature, idx) => (
                      <span key={idx} className="feature-tag">
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="project-technologies">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-pill">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Hover Details */}
                  <motion.div
                    className="card-hover-details"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="details-text">{project.details}</p>
                  </motion.div>
                </div>

                {/* Card Footer */}
                <div className="card-footer">
                  <motion.button
                    className="btn btn-tertiary btn-small"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Voir plus →
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div variants={itemVariants} className="no-results">
              <p>Aucun projet trouvé avec cette technologie.</p>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Decorative Background */}
      <div className="projects-decoration">
        <div className="deco-element deco-1"></div>
        <div className="deco-element deco-2"></div>
      </div>
    </section>
  )
}

export default Projects
