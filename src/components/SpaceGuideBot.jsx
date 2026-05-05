import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import '../styles/SpaceGuideBot.css'

const STORAGE_KEY = 'spaceGuideBotMode'
const LEGACY_HIDDEN_KEY = 'spaceGuideBotHidden'
const BOT_NAME = 'Astro'
const MESSAGE_COOLDOWN = 5200

const SECTION_CONFIG = [
  {
    id: 'home',
    mood: 'greeting',
    messages: [
      'Bienvenue dans mon univers ✨',
      'Je vais te guider dans cette mission 🚀',
      `${BOT_NAME} guide activé.`,
    ],
  },
  {
    id: 'about',
    mood: 'reading',
    messages: [
      'Voici l’histoire derrière le profil.',
      'Un parcours orienté produit, code et créativité.',
    ],
  },
  {
    id: 'skills',
    mood: 'reading',
    messages: [
      'Stack détectée 🛠️',
      'Frontend, backend, data… explore les compétences.',
    ],
  },
  {
    id: 'experience',
    mood: 'reading',
    messages: [
      'Mission log ouvert 🛰️',
      'Chaque expérience raconte une progression.',
    ],
  },
  {
    id: 'projects',
    mood: 'excited',
    messages: [
      'Zone projets activée 🌌',
      'Clique sur une carte pour explorer.',
      'C’est ici que la créativité rencontre le code.',
      `${BOT_NAME} recommande les projets.`,
    ],
  },
  {
    id: 'education',
    mood: 'reading',
    messages: [
      'Base académique confirmée 📚',
      'Formation, échange et apprentissage continu.',
    ],
  },
  {
    id: 'contact',
    mood: 'contact',
    messages: [
      'Prêt à collaborer ? 📩',
      'Tu peux passer à l’action ici.',
      'Un recruteur peut me contacter en quelques clics.',
    ],
  },
]

const HOVER_MESSAGES = [
  'Besoin d’un raccourci ?',
  'Clique-moi pour naviguer.',
  'Je peux te guider.',
]

const QUICK_ACTIONS = [
  { id: 'projects', label: 'Voir mes projets' },
  { id: 'skills', label: 'Voir mes compétences' },
  { id: 'contact', label: 'Me contacter' },
]

const clamp = (value, min, max) => Math.min(Math.max(value, min), max)

const getStoredMode = () => {
  if (typeof window === 'undefined') return 'expanded'
  const storedMode = window.localStorage.getItem(STORAGE_KEY)

  if (storedMode === 'minimized' || storedMode === 'expanded') {
    return storedMode
  }

  if (storedMode === 'hidden' || window.localStorage.getItem(LEGACY_HIDDEN_KEY) === 'true') {
    window.localStorage.setItem(STORAGE_KEY, 'minimized')
    window.localStorage.removeItem(LEGACY_HIDDEN_KEY)
    return 'minimized'
  }

  return 'expanded'
}

const SpaceGuideBot = () => {
  const prefersReducedMotion = useReducedMotion()
  const bubbleTimer = useRef(null)
  const moodTimer = useRef(null)
  const frameRequest = useRef(null)
  const lastScrollY = useRef(0)
  const lastScrollTime = useRef(Date.now())
  const lastMessageTime = useRef(0)
  const messageIndexes = useRef({})
  const projectsDwellTimer = useRef(null)
  const reachedEighty = useRef(false)
  const didGreet = useRef(false)
  const activeSectionRef = useRef('home')
  const [displayMode, setDisplayMode] = useState(getStoredMode)
  const [activeSection, setActiveSection] = useState('home')
  const [mood, setMood] = useState('greeting')
  const [bubbleOpen, setBubbleOpen] = useState(true)
  const [popoverOpen, setPopoverOpen] = useState(false)
  const [currentMessage, setCurrentMessage] = useState(SECTION_CONFIG[0].messages[0])
  const [scrollProgress, setScrollProgress] = useState(0)
  const [botTop, setBotTop] = useState(18)
  const [missionComplete, setMissionComplete] = useState(false)

  const isMinimized = displayMode === 'minimized'

  const sectionById = useMemo(
    () =>
      SECTION_CONFIG.reduce((sections, section) => {
        sections[section.id] = section
        return sections
      }, {}),
    []
  )

  const progressRadius = 45
  const progressCircumference = 2 * Math.PI * progressRadius
  const progressOffset =
    progressCircumference - (scrollProgress / 100) * progressCircumference

  const saveMode = useCallback((mode) => {
    window.localStorage.setItem(STORAGE_KEY, mode)
    window.localStorage.removeItem(LEGACY_HIDDEN_KEY)
    setDisplayMode(mode)
  }, [])

  const closeBubbleLater = useCallback((delay = 3600) => {
    window.clearTimeout(bubbleTimer.current)
    bubbleTimer.current = window.setTimeout(() => setBubbleOpen(false), delay)
  }, [])

  const showMessage = useCallback(
    (message, options = {}) => {
      const { mood: nextMood, force = false, duration = 3600, keepPopover = false } = options
      const now = Date.now()

      if (!force && now - lastMessageTime.current < MESSAGE_COOLDOWN) return

      lastMessageTime.current = now
      setCurrentMessage(message)
      setBubbleOpen(true)

      if (!keepPopover) setPopoverOpen(false)

      if (nextMood) {
        setMood(nextMood)
        window.clearTimeout(moodTimer.current)

        if (!['excited', 'contact', 'greeting'].includes(nextMood)) {
          moodTimer.current = window.setTimeout(() => {
            setMood(sectionById[activeSection]?.mood || 'idle')
          }, 1800)
        }
      }

      closeBubbleLater(duration)
    },
    [activeSection, closeBubbleLater, displayMode, sectionById]
  )

  const getNextSectionMessage = useCallback(
    (sectionId) => {
      const section = sectionById[sectionId] || SECTION_CONFIG[0]
      const currentIndex = messageIndexes.current[sectionId] || 0
      const message = section.messages[currentIndex % section.messages.length]
      messageIndexes.current[sectionId] = currentIndex + 1
      return message
    },
    [sectionById]
  )

  const scrollToSection = useCallback(
    (sectionId) => {
      const element = document.getElementById(sectionId)
      if (!element) return

      setPopoverOpen(false)
      setBubbleOpen(false)
      setMood('thinking')
      element.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' })

      window.setTimeout(() => {
        const label = sectionById[sectionId]?.messages[0] || 'Navigation lancée.'
        showMessage(label, { force: true, mood: sectionById[sectionId]?.mood || 'reading' })
      }, prefersReducedMotion ? 80 : 520)
    },
    [prefersReducedMotion, sectionById, showMessage]
  )

  useEffect(() => {
    activeSectionRef.current = activeSection
  }, [activeSection])

  useEffect(() => {
    if (displayMode !== 'expanded') return undefined

    const mobileQuery = window.matchMedia('(max-width: 720px)')
    const hasStoredPreference = window.localStorage.getItem(STORAGE_KEY)

    if (!hasStoredPreference && mobileQuery.matches) {
      setDisplayMode('minimized')
    }

    return undefined
  }, [displayMode])

  useEffect(() => {
    const updateProgress = () => {
      const now = Date.now()
      const scrollY = window.scrollY
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight
      const safeProgress = clamp(scrollableHeight > 0 ? scrollY / scrollableHeight : 0, 0, 1)
      const scrollDelta = scrollY - lastScrollY.current
      const timeDelta = Math.max(now - lastScrollTime.current, 16)
      const speed = Math.abs(scrollDelta) / timeDelta

      setScrollProgress(Math.round(safeProgress * 100))
      setBotTop(18 + safeProgress * 54)

      if (Math.abs(scrollDelta) > 24) {
        if (speed < 0.85 && displayMode === 'expanded') {
          showMessage('Lecture orbitale en cours…', { mood: 'reading' })
        } else if (scrollDelta > 0) {
          showMessage('On continue l’exploration ↓', { mood: 'idle' })
        } else {
          showMessage('Retour vers les étoiles ↑', { mood: 'idle' })
        }
      }

      if (!reachedEighty.current && safeProgress >= 0.8) {
        reachedEighty.current = true
        showMessage('Presque à la fin de la mission.', {
          force: true,
          mood: 'contact',
          duration: 4200,
        })
      }

      lastScrollY.current = scrollY
      lastScrollTime.current = now
      frameRequest.current = null
    }

    const handleScroll = () => {
      if (frameRequest.current) return
      frameRequest.current = window.requestAnimationFrame(updateProgress)
    }

    updateProgress()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
      if (frameRequest.current) window.cancelAnimationFrame(frameRequest.current)
    }
  }, [displayMode, showMessage])

  useEffect(() => {
    const sections = SECTION_CONFIG.map((section) =>
      document.getElementById(section.id)
    ).filter(Boolean)

    if (!sections.length) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (!visibleEntry?.target?.id) return

        const nextSection = visibleEntry.target.id

        if (activeSectionRef.current === nextSection) return

        const section = sectionById[nextSection] || SECTION_CONFIG[0]
        activeSectionRef.current = nextSection
        setActiveSection(nextSection)
        setMood(section.mood)
        showMessage(getNextSectionMessage(nextSection), {
          force: true,
          mood: section.mood,
          duration: nextSection === 'contact' ? 5200 : 3800,
        })
        setMissionComplete(nextSection === 'contact')

        window.clearTimeout(projectsDwellTimer.current)
        if (nextSection === 'projects') {
          projectsDwellTimer.current = window.setTimeout(() => {
            showMessage('Ce projet mérite un coup d’œil 👀', {
              force: true,
              mood: 'excited',
              duration: 3600,
            })
          }, 8500)
        }
      },
      {
        root: null,
        rootMargin: '-30% 0px -46% 0px',
        threshold: [0.22, 0.4, 0.58],
      }
    )

    sections.forEach((section) => observer.observe(section))

    return () => {
      observer.disconnect()
      window.clearTimeout(projectsDwellTimer.current)
    }
  }, [getNextSectionMessage, sectionById, showMessage])

  useEffect(() => {
    if (didGreet.current) return undefined

    didGreet.current = true

    showMessage(`${BOT_NAME} guide activé.`, {
      force: true,
      mood: 'greeting',
      duration: 4200,
    })

    return () => {
      window.clearTimeout(bubbleTimer.current)
      window.clearTimeout(moodTimer.current)
    }
  }, [showMessage])

  const handleBotClick = () => {
    if (isMinimized) {
      saveMode('expanded')
      setPopoverOpen(true)
      showMessage(`${BOT_NAME} est de retour aux commandes.`, {
        force: true,
        mood: 'greeting',
        duration: 3000,
        keepPopover: true,
      })
      return
    }

    setMood('thinking')
    setPopoverOpen((open) => !open)
    showMessage('Choisis une destination.', {
      force: true,
      mood: 'thinking',
      duration: 4200,
      keepPopover: true,
    })
  }

  const handleHover = () => {
    if (isMinimized) return

    const message = HOVER_MESSAGES[Math.floor(Math.random() * HOVER_MESSAGES.length)]
    showMessage(message, { force: true, mood: 'thinking', duration: 2200, keepPopover: true })
  }

  const handleReduce = () => {
    setPopoverOpen(false)
    setBubbleOpen(false)
    saveMode('minimized')
  }

  return (
    <motion.aside
      className={`space-guide is-${mood} ${isMinimized ? 'is-minimized' : ''} ${
        missionComplete ? 'is-complete' : ''
      }`}
      style={{ top: `${botTop}%` }}
      initial={{ opacity: 0, x: 28 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.48, ease: 'easeOut' }}
      aria-label={`${BOT_NAME}, guide spatial du portfolio`}
    >
      <AnimatePresence>
        {!isMinimized && bubbleOpen && (
          <motion.div
            className="space-guide__bubble"
            initial={{ opacity: 0, x: 14, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 12, scale: 0.96 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.22 }}
            aria-live="polite"
          >
            <span className="space-guide__eyebrow">
              {BOT_NAME} · {missionComplete ? 'mission complete' : mood}
            </span>
            <p>{currentMessage}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="space-guide__dock">
        <AnimatePresence>
          {!isMinimized && popoverOpen && (
            <motion.div
              className="space-guide__popover"
              initial={{ opacity: 0, y: 12, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.96 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
            >
              <span className="space-guide__popover-title">Navigation rapide</span>
              {QUICK_ACTIONS.map((action) => (
                <button
                  key={action.id}
                  type="button"
                  className="space-guide__action"
                  onClick={() => scrollToSection(action.id)}
                >
                  {action.label}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="space-guide__controls">
          {!isMinimized && (
            <div className="space-guide__toggles">
              <motion.button
                type="button"
                className="space-guide__utility"
                onClick={handleReduce}
                whileHover={prefersReducedMotion ? undefined : { scale: 1.08 }}
                whileTap={prefersReducedMotion ? undefined : { scale: 0.94 }}
                aria-label="Réduire Astro"
              >
                -
              </motion.button>
            </div>
          )}

          <motion.button
            type="button"
            className="space-guide__button"
            onClick={handleBotClick}
            onMouseEnter={handleHover}
            whileHover={
              prefersReducedMotion
                ? undefined
                : { scale: isMinimized ? 1.08 : 1.04, rotate: mood === 'excited' ? -4 : 2 }
            }
            whileTap={prefersReducedMotion ? undefined : { scale: 0.96 }}
            aria-label={
              isMinimized
                ? 'Ouvrir Astro, le guide spatial'
                : 'Ouvrir les raccourcis du guide spatial'
            }
            aria-expanded={!isMinimized && popoverOpen}
          >
            <svg
              className="space-guide__progress"
              viewBox="0 0 108 108"
              aria-hidden="true"
            >
              <circle
                className="space-guide__progress-track"
                cx="54"
                cy="54"
                r={progressRadius}
              />
              <circle
                className="space-guide__progress-fill"
                cx="54"
                cy="54"
                r={progressRadius}
                strokeDasharray={progressCircumference}
                strokeDashoffset={progressOffset}
              />
            </svg>

            <span className="space-guide__particles" aria-hidden="true">
              <span></span>
              <span></span>
              <span></span>
            </span>

            <span className="space-guide__avatar" aria-hidden="true">
              <span className="space-guide__antenna">
                <span></span>
              </span>
              <span className="space-guide__helmet">
                <span className="space-guide__helmet-rim"></span>
                <span className="space-guide__visor">
                  <span className="space-guide__eye space-guide__eye--left"></span>
                  <span className="space-guide__eye space-guide__eye--right"></span>
                  <span className="space-guide__mouth"></span>
                </span>
                <span className="space-guide__shine"></span>
              </span>
              <span className="space-guide__body">
                <span className="space-guide__panel"></span>
                <span className="space-guide__badge-light"></span>
              </span>
              <span className="space-guide__arm space-guide__arm--left"></span>
              <span className="space-guide__arm space-guide__arm--right"></span>
              <span className="space-guide__pack"></span>
              <span className="space-guide__booster space-guide__booster--left"></span>
              <span className="space-guide__booster space-guide__booster--right"></span>
              <span className="space-guide__trail"></span>
            </span>

            {isMinimized && <span className="space-guide__mini-label">{BOT_NAME}</span>}
          </motion.button>
        </div>
      </div>
    </motion.aside>
  )
}

export default SpaceGuideBot
