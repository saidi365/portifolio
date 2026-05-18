import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const dotRef = useRef(null)

  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  // Ring follows with spring — smooth trailing effect
  const ringX = useSpring(mouseX, { stiffness: 180, damping: 22, mass: 0.5 })
  const ringY = useSpring(mouseY, { stiffness: 180, damping: 22, mass: 0.5 })

  useEffect(() => {
    // Only on desktop (non-touch)
    if (window.matchMedia('(pointer: coarse)').matches) return

    const move = (e) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)

      // Dot follows instantly via direct DOM style (zero lag)
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`
      }
    }

    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [mouseX, mouseY])

  return (
    <>
      {/* Instant dot — uses direct DOM, no animation lag */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed', top: 0, left: 0,
          width: 8, height: 8, borderRadius: '50%',
          background: '#E8480A',
          pointerEvents: 'none', zIndex: 99999,
          willChange: 'transform',
        }}
      />
      {/* Spring ring — smooth trailing */}
      <motion.div
        style={{
          position: 'fixed', top: -20, left: -20,
          x: ringX, y: ringY,
          width: 40, height: 40, borderRadius: '50%',
          border: '1.5px solid rgba(232,72,10,0.45)',
          pointerEvents: 'none', zIndex: 99998,
          willChange: 'transform',
        }}
      />
    </>
  )
}
