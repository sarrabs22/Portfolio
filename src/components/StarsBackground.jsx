import React, { useEffect, useRef } from 'react'
import '../styles/StarsBackground.css'

const StarsBackground = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let currentTheme = document.documentElement.getAttribute('data-theme') || 'dark'

    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasSize()

    // Star data
    const stars = []
    const starCount = Math.floor(canvas.width * canvas.height / 28000)

    // Initialize stars
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        opacity: Math.random() * 0.5 + 0.5,
        twinkleSpeed: Math.random() * 0.02 + 0.01,
        twinkleAmount: 0,
      })
    }

    // Animation loop
    let animationId
    const draw = () => {
      const isLight = currentTheme === 'light'

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw stars
      stars.forEach((star) => {
        if (!reduceMotion) {
          star.twinkleAmount += star.twinkleSpeed
        }

        const opacityBase = isLight ? star.opacity * 0.22 : star.opacity
        const twinkle = isLight ? 0.08 : 0.3
        const opacity = opacityBase + Math.sin(star.twinkleAmount) * twinkle
        const radius = isLight ? star.radius * 0.75 : star.radius

        ctx.fillStyle = isLight
          ? `rgba(139, 92, 246, ${Math.max(0, opacity)})`
          : `rgba(248, 250, 252, ${Math.max(0, opacity)})`
        ctx.beginPath()
        ctx.arc(star.x, star.y, radius, 0, Math.PI * 2)
        ctx.fill()
      })
    }

    const animate = () => {
      draw()

      if (!reduceMotion) {
        animationId = requestAnimationFrame(animate)
      }
    }

    animate()

    // Handle resize
    const handleResize = () => {
      setCanvasSize()
    }

    const themeObserver = new MutationObserver(() => {
      currentTheme = document.documentElement.getAttribute('data-theme') || 'dark'
      draw()
    })

    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    })

    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animationId)
      themeObserver.disconnect()
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="stars-background" />
}

export default StarsBackground
