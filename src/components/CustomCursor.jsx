import { useEffect, useRef } from 'react'

// Only render on true desktop pointer devices
const isTouch = typeof window !== 'undefined' &&
  (window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window)

export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const mouse = useRef({ x: -100, y: -100 })
  const ring = useRef({ x: -100, y: -100 })
  const raf = useRef(null)
  const hovering = useRef(false)

  useEffect(() => {
    if (isTouch) return

    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY }
    }

    const onOver = (e) => {
      if (e.target.closest('a, button, input, textarea, select, [role="button"]')) {
        hovering.current = true
      } else {
        hovering.current = false
      }
    }

    const tick = () => {
      // Dot — instant, no lag
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouse.current.x - 4}px, ${mouse.current.y - 4}px)`
      }

      // Ring — lerp for smooth trail
      ring.current.x += (mouse.current.x - ring.current.x) * 0.12
      ring.current.y += (mouse.current.y - ring.current.y) * 0.12

      if (ringRef.current) {
        const size = hovering.current ? 52 : 36
        const offset = size / 2
        ringRef.current.style.transform = `translate(${ring.current.x - offset}px, ${ring.current.y - offset}px)`
        ringRef.current.style.width = `${size}px`
        ringRef.current.style.height = `${size}px`
        ringRef.current.style.borderColor = hovering.current
          ? 'rgba(232,72,10,0.8)'
          : 'rgba(232,72,10,0.4)'
      }

      raf.current = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onOver)
    raf.current = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      cancelAnimationFrame(raf.current)
    }
  }, [])

  if (isTouch) return null

  return (
    <>
      {/* Solid dot — follows instantly */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          top: 0, left: 0,
          width: 8, height: 8,
          borderRadius: '50%',
          background: '#E8480A',
          pointerEvents: 'none',
          zIndex: 99999,
          willChange: 'transform',
        }}
      />
      {/* Ring — smooth trail */}
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          top: 0, left: 0,
          width: 36, height: 36,
          borderRadius: '50%',
          border: '1.5px solid rgba(232,72,10,0.4)',
          pointerEvents: 'none',
          zIndex: 99998,
          willChange: 'transform, width, height',
          transition: 'width 0.2s ease, height 0.2s ease, border-color 0.2s ease',
        }}
      />
    </>
  )
}
