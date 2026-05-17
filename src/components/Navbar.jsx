import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const links = [
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
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
          <a href="#" style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '1.1rem', letterSpacing: '-0.02em' }}>
            Saidi Tembo
          </a>

          {/* Desktop */}
          <div style={{ display: 'flex', gap: 40, alignItems: 'center' }} className="nav-desktop">
            {links.map(l => (
              <a key={l.label} href={l.href} style={{ fontSize: '0.88rem', color: 'var(--mid)', fontWeight: 500, transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = 'var(--dark)'}
                onMouseLeave={e => e.target.style.color = 'var(--mid)'}
              >
                {l.label}
              </a>
            ))}
            <a href="mailto:tembosaidi1@gmail.com" style={{
              background: 'var(--dark)', color: '#fff', padding: '9px 20px',
              borderRadius: 2, fontSize: '0.85rem', fontWeight: 600,
              fontFamily: 'Space Grotesk', transition: 'background 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--accent)'}
              onMouseLeave={e => e.currentTarget.style.background = 'var(--dark)'}
            >
              Hire Me
            </a>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setOpen(!open)} className="nav-mobile-btn" style={{ padding: 4 }}>
            <div style={{ width: 22, height: 1.5, background: 'var(--dark)', marginBottom: 5, transition: 'all 0.3s', transform: open ? 'rotate(45deg) translate(4px, 4px)' : 'none' }} />
            <div style={{ width: 22, height: 1.5, background: 'var(--dark)', transition: 'all 0.3s', opacity: open ? 0 : 1 }} />
            <div style={{ width: 22, height: 1.5, background: 'var(--dark)', marginTop: 5, transition: 'all 0.3s', transform: open ? 'rotate(-45deg) translate(4px, -4px)' : 'none' }} />
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
              background: 'var(--bg)', borderBottom: '1px solid var(--border)',
              padding: '24px 32px',
            }}
          >
            {links.map(l => (
              <a key={l.label} href={l.href} onClick={() => setOpen(false)}
                style={{ display: 'block', padding: '14px 0', borderBottom: '1px solid var(--border)', fontSize: '1.1rem', fontWeight: 500, color: 'var(--dark)' }}
              >
                {l.label}
              </a>
            ))}
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
