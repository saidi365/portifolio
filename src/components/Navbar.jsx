import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    const sections = ['hero', 'services', 'work', 'about', 'testimonials', 'contact']
    const observers = sections.map(id => {
      const el = document.getElementById(id)
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id) },
        { threshold: 0.35 }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach(o => o?.disconnect())
  }, [])

  const links = [
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Work', href: '#work', id: 'work' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ]

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? 'rgba(255,255,255,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid #E8E8E8' : 'none',
        transition: 'all 0.3s ease',
      }}>
        <div style={{
          maxWidth: 1200, margin: '0 auto', padding: '0 32px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          height: 64,
        }}>
          <a href="#hero" style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '1.1rem', letterSpacing: '-0.02em', color: '#111' }}>
            Saidi Tembo
          </a>

          {/* Desktop */}
          <div style={{ display: 'flex', gap: 36, alignItems: 'center' }} className="nav-desktop">
            {links.map(l => (
              <a
                key={l.label}
                href={l.href}
                style={{
                  fontSize: '0.88rem',
                  fontWeight: active === l.id ? 700 : 500,
                  color: active === l.id ? '#111' : 'var(--mid)',
                  transition: 'color 0.2s',
                  position: 'relative',
                  paddingBottom: 2,
                }}
                onMouseEnter={e => e.currentTarget.style.color = '#111'}
                onMouseLeave={e => e.currentTarget.style.color = active === l.id ? '#111' : 'var(--mid)'}
              >
                {l.label}
                {active === l.id && (
                  <motion.div
                    layoutId="nav-indicator"
                    style={{
                      position: 'absolute', bottom: -4, left: 0, right: 0,
                      height: 2, background: '#E8480A', borderRadius: 1,
                    }}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </a>
            ))}
            <a href="mailto:tembosaidi1@gmail.com" style={{
              background: '#111', color: '#fff', padding: '9px 20px',
              borderRadius: 2, fontSize: '0.85rem', fontWeight: 600,
              fontFamily: 'Space Grotesk', transition: 'background 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.background = '#E8480A'}
              onMouseLeave={e => e.currentTarget.style.background = '#111'}
            >
              Hire Me
            </a>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setOpen(!open)} className="nav-mobile-btn" style={{ padding: 4, background: 'none', border: 'none', cursor: 'pointer' }}>
            <div style={{ width: 22, height: 1.5, background: '#111', marginBottom: 5, transition: 'all 0.3s', transform: open ? 'rotate(45deg) translate(4px, 4px)' : 'none' }} />
            <div style={{ width: 22, height: 1.5, background: '#111', transition: 'all 0.3s', opacity: open ? 0 : 1 }} />
            <div style={{ width: 22, height: 1.5, background: '#111', marginTop: 5, transition: 'all 0.3s', transform: open ? 'rotate(-45deg) translate(4px, -4px)' : 'none' }} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            style={{
              position: 'fixed', top: 64, left: 0, right: 0, zIndex: 99,
              background: '#fff', borderBottom: '1px solid #E8E8E8',
              padding: '24px 32px',
            }}
          >
            {links.map(l => (
              <a key={l.label} href={l.href} onClick={() => setOpen(false)}
                style={{
                  display: 'block', padding: '14px 0',
                  borderBottom: '1px solid #E8E8E8',
                  fontSize: '1.1rem', fontWeight: active === l.id ? 700 : 500,
                  color: active === l.id ? '#E8480A' : '#111',
                }}
              >
                {l.label}
              </a>
            ))}
            <a href="mailto:tembosaidi1@gmail.com" onClick={() => setOpen(false)}
              style={{ display: 'block', marginTop: 16, padding: '14px 0', fontSize: '1.1rem', fontWeight: 600, color: '#E8480A' }}
            >
              Hire Me →
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .nav-desktop { display: flex !important; }
        .nav-mobile-btn { display: none !important; }
        @media (max-width: 700px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: block !important; }
        }
      `}</style>
    </>
  )
}
