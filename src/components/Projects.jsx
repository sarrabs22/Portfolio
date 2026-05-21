import React, { useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { profileData } from '../data/profileData'
import InterfacePreview from './InterfacePreview'
import PortfolioIcon from './PortfolioIcon'
import '../styles/Projects.css'

const projectPreviewVariants = {
  1: {
    variant: 'api',
    subtitle: 'API finance dashboard',
    accent: '#22d3ee',
    image: 'project-previews/expense-splitter.png',
  },
  2: {
    variant: 'ai',
    subtitle: 'AI matching platform',
    accent: '#8b5cf6',
    image: 'project-previews/opportunites-emploi.png',
  },
  3: {
    variant: 'garden',
    subtitle: 'Eco community web app',
    accent: '#34d399',
    image: 'project-previews/jardinage-urbain.png',
  },
  4: {
    variant: 'devops',
    subtitle: 'Pipeline monitor',
    accent: '#f97316',
    image: 'project-previews/pipeline-jenkins.png',
  },
  5: {
    variant: 'campus',
    subtitle: 'Campus portal',
    accent: '#60a5fa',
    image: 'project-previews/residences-universitaires.png',
  },
  6: {
    variant: 'commerce',
    subtitle: 'Freelance fashion e-commerce',
    accent: '#d4d4d4',
    image: 'project-previews/monochrome-ecommerce.png',
  },
}

const getCoverClass = (index, currentIndex) => {
  const diff = index - currentIndex

  if (diff === 0) return 'active'
  if (diff === -1) return 'side-left'
  if (diff === 1) return 'side-right'
  if (diff === -2) return 'far-left'
  if (diff === 2) return 'far-right'
  return 'hidden'
}

const Projects = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [filter, setFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [dragDelta, setDragDelta] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [hideHint, setHideHint] = useState(false)
  const activeIndexRef = useRef(0)
  const trackRef = useRef(null)
  const dragStartRef = useRef(0)
  const dragDeltaRef = useRef(0)

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

  const allTechs = [...new Set(profileData.projects.flatMap((p) => p.technologies))]

  const filteredProjects = useMemo(
    () =>
      filter === 'all'
        ? profileData.projects
        : profileData.projects.filter((p) => p.technologies.includes(filter)),
    [filter]
  )

  const goTo = (index) => {
    const nextIndex = Math.max(0, Math.min(filteredProjects.length - 1, index))
    activeIndexRef.current = nextIndex
    setActiveIndex(nextIndex)
    setDragDelta(0)
    dragDeltaRef.current = 0
  }

  useEffect(() => {
    goTo(0)
  }, [filter])

  useEffect(() => {
    const timer = window.setTimeout(() => setHideHint(true), 4000)
    return () => window.clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') goTo(activeIndexRef.current - 1)
      if (event.key === 'ArrowRight') goTo(activeIndexRef.current + 1)
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [filteredProjects.length])

  const startDrag = (clientX) => {
    setIsDragging(true)
    setHideHint(true)
    dragStartRef.current = clientX
    dragDeltaRef.current = 0
    setDragDelta(0)
  }

  const moveDrag = (clientX) => {
    if (!isDragging) return
    const nextDelta = clientX - dragStartRef.current
    dragDeltaRef.current = nextDelta
    setDragDelta(nextDelta)
  }

  const endDrag = () => {
    if (!isDragging) return
    setIsDragging(false)

    const cardWidth = trackRef.current?.querySelector('.cf-card')?.offsetWidth || 360
    const threshold = cardWidth * 0.22

    if (dragDeltaRef.current < -threshold) {
      goTo(activeIndexRef.current + 1)
    } else if (dragDeltaRef.current > threshold) {
      goTo(activeIndexRef.current - 1)
    } else {
      setDragDelta(0)
      dragDeltaRef.current = 0
    }
  }

  const trackStyle = {
    transform: `translateX(calc((100vw - var(--cf-card-w)) / 2 - ${activeIndex} * (var(--cf-card-w) + var(--cf-gap)) + ${dragDelta}px))`,
  }

  const getPreview = (projectId) =>
    projectPreviewVariants[projectId] || {
      variant: 'product',
      subtitle: 'Product interface',
      accent: '#8b5cf6',
    }

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
          <motion.div variants={itemVariants} className="section-header">
            <h2>Projets</h2>
            <div className="header-divider">
              <div className="constellation-line"></div>
            </div>
          </motion.div>
{/*           <motion.div variants={itemVariants} className="filter-buttons">
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
          </motion.div> */}
        </motion.div>
      </div>
      <div className="coverflow-section">
        <div className="coverflow-sticky">
          <div className="coverflow-header">
            <div>
              <p className="projects-focus-hint"></p>
              <h3></h3>
            </div>

            <div className="coverflow-nav">
              <button
                type="button"
                className="nav-btn"
                onClick={() => goTo(activeIndex - 1)}
                disabled={activeIndex === 0}
                aria-label="Projet précédent"
              >
                <PortfolioIcon name="arrowRight" className="nav-btn__icon nav-btn__icon--prev" size={19} />
              </button>
              <span className="nav-counter">
                {activeIndex + 1} / {filteredProjects.length}
              </span>
              <button
                type="button"
                className="nav-btn"
                onClick={() => goTo(activeIndex + 1)}
                disabled={activeIndex === filteredProjects.length - 1}
                aria-label="Projet suivant"
              >
                <PortfolioIcon name="arrowRight" className="nav-btn__icon" size={19} />
              </button>
            </div>
          </div>

          <div className="coverflow-track-wrapper">
            <div
              className={`coverflow-track ${isDragging ? 'dragging' : ''}`}
              ref={trackRef}
              style={trackStyle}
              onMouseDown={(event) => {
                event.preventDefault()
                startDrag(event.clientX)
              }}
              onMouseMove={(event) => moveDrag(event.clientX)}
              onMouseUp={endDrag}
              onMouseLeave={endDrag}
              onTouchStart={(event) => startDrag(event.touches[0].clientX)}
              onTouchMove={(event) => {
                if (!isDragging) return
                event.preventDefault()
                moveDrag(event.touches[0].clientX)
              }}
              onTouchEnd={endDrag}
            >
              {filteredProjects.map((project, idx) => {
                const preview = getPreview(project.id)
                const coverClass = getCoverClass(idx, activeIndex)

                return (
                  <div
                    key={project.id}
                    className={`cf-card ${coverClass}`}
                    onClick={() => goTo(idx)}
                    style={{ '--accent': preview.accent }}
                  >
                    <div className="cf-card-inner">
                      <button
                        type="button"
                        className="cf-card-visual"
                        onClick={(event) => {
                          event.stopPropagation()
                          if (idx === activeIndex) {
                            setSelectedProject(project)
                          } else {
                            goTo(idx)
                          }
                        }}
                        aria-label={`Voir un aperçu visuel du projet ${project.title}`}
                      >
                        <div className="cf-visual-bg"></div>
                        <InterfacePreview
                          title={project.title}
                          subtitle={preview.subtitle}
                          variant={preview.variant}
                          tags={project.technologies}
                          imageSrc={preview.image}
                          imageAlt={`Capture du projet ${project.title}`}
                          placeholderLabel={`Ajoute ${preview.image?.split('/').pop()} dans public/project-previews/`}
                          compact
                        />
                      </button>

                      <div className="cf-card-info">
                        <div className="cf-tags">
                          {project.technologies.slice(0, 3).map((tech) => (
                            <span key={tech}>{tech}</span>
                          ))}
                        </div>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="cf-meta">
                          <span>{project.year}</span>
                          <span>·</span>
                          <span>{project.features[0]}</span>
                        </div>
                        <button
                          type="button"
                          className="cf-cta"
                          onClick={(event) => {
                            event.stopPropagation()
                            setSelectedProject(project)
                          }}
                        >
                          Voir l'aperçu
                          <PortfolioIcon name="arrowRight" size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="cf-dots">
              {filteredProjects.map((project, idx) => (
                <button
                  key={project.id}
                  type="button"
                  className={`cf-dot ${idx === activeIndex ? 'active' : ''}`}
                  onClick={() => goTo(idx)}
                  aria-label={`Aller au projet ${idx + 1}`}
                />
              ))}
            </div>

            <div className={`drag-hint ${hideHint ? 'hidden' : ''}`}>
              Drag or use arrows to browse
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="project-preview-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label={`Aperçu du projet ${selectedProject.title}`}
          >
            <motion.div
              className="project-preview-panel"
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.96 }}
              transition={{ duration: 0.25 }}
            >
              <button
                type="button"
                className="project-preview-close"
                onClick={() => setSelectedProject(null)}
                aria-label="Fermer l'aperçu du projet"
              >
                x
              </button>

              <InterfacePreview
                title={selectedProject.title}
                subtitle={getPreview(selectedProject.id).subtitle}
                variant={getPreview(selectedProject.id).variant}
                tags={selectedProject.technologies}
                imageSrc={getPreview(selectedProject.id).image}
                imageAlt={`Capture du projet ${selectedProject.title}`}
                placeholderLabel={`Ajoute ${getPreview(selectedProject.id).image?.split('/').pop()} dans public/project-previews/`}
              />

              <div className="project-preview-copy">
                <span>{selectedProject.year}</span>
                <h3>{selectedProject.title}</h3>
                <p>{selectedProject.details}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {filteredProjects.length === 0 && (
        <motion.div variants={itemVariants} className="no-results">
          <p>Aucun projet trouvé avec cette technologie.</p>
        </motion.div>
      )}

      <div className="projects-decoration">
        <div className="deco-element deco-1"></div>
        <div className="deco-element deco-2"></div>
      </div>
    </section>
  )
}

export default Projects
