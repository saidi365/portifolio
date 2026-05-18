import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [clicked, setClicked] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Only show on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return

    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY })
      if (!visible) setVisible(true)
    }
    const down = () => setClicked(true)
    const up = () => setClicked(false)

    const onEnter = (e) => {
      if (e.target.closest('a, button, [role="button"], input, textarea, select')) {
        setHovered(true)
      }
    }
    const onLeave = () => setHovered(false)

    window.addEventListener('mousemove', move)
    window.addEventListener('mousedown', down)
    window.addEventListener('mouseup', up)
    document.addEventListener('mouseover', onEnter)
    document.addEventListener('mouseout', onLeave)

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mousedown', down)
      window.removeEventListener('mouseup', up)
      document.removeEventListener('mouseover', onEnter)
      document.removeEventListener('mouseout', onLeave)
    }
  }, [visible])

  if (!visible) return null

  return (
    <>
      {/* Dot */}
      <motion.div
        animate={{ x: pos.x - 4, y: pos.y - 4, scale: clicked ? 0.6 : 1 }}
        transition={{ type: 'tween', duration: 0.01 }}
        style={{
          position: 'fixed', top: 0, left: 0,
          width: 8, height: 8, borderRadius: '50%',
          background: '#E8480A',
          pointerEvents: 'none', zIndex: 99999,
          mixBlendMode: 'normal',
        }}
      />
      {/* Ring */}
      <motion.div
        animate={{
          x: pos.x - (hovered ? 28 : 20),
          y: pos.y - (hovered ? 28 : 20),
          width: hovered ? 56 : 40,
          height: hovered ? 56 : 40,
          scale: clicked ? 0.75 : 1,
          borderColor: hovered ? 'rgba(232,72,10,0.8)' : 'rgba(232,72,10,0.4)',
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        style={{
          position: 'fixed', top: 0, left: 0,
          borderRadius: '50%',
          border: '1.5px solid rgba(232,72,10,0.4)',
          pointerEvents: 'none', zIndex: 99998,
        }}
      />
    </>
  )
}
