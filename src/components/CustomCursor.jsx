import { useEffect, useRef } from 'react'

const isTouch = typeof window !== 'undefined' &&
  (window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window)

export default function CustomCursor() {
  const cursorRef = useRef(null)
  const mouse = useRef({ x: -200, y: -200 })
  const current = useRef({ x: -200, y: -200 })
  const raf = useRef(null)
  const isHover = useRef(false)

  useEffect(() => {
    if (isTouch) return

    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY }
    }

    const onOver = (e) => {
      isHover.current = !!e.target.closest('a, button, input, textarea, select, [role="button"]')
    }

    const tick = () => {
      // Smooth lerp
      current.current.x += (mouse.current.x - current.current.x) * 0.1
      current.current.y += (mouse.current.y - current.current.y) * 0.1

      if (cursorRef.current) {
        const size = isHover.current ? 64 : 40
        const offset = size / 2
        cursorRef.current.style.transform = `translate(${current.current.x - offset}px, ${current.current.y - offset}px)`
        cursorRef.current.style.width = `${size}px`
        cursorRef.current.style.height = `${size}px`
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
    <div
      ref={cursorRef}
      style={{
        position: 'fixed',
        top: 0, left: 0,
        width: 40, height: 40,
        borderRadius: '50%',
        background: '#fff',
        mixBlendMode: 'difference',
        pointerEvents: 'none',
        zIndex: 99999,
        willChange: 'transform, width, height',
        transition: 'width 0.25s ease, height 0.25s ease',
      }}
    />
  )
}
