import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const slides = [
  {
    line1: 'Senior Creative', line2: 'Designer &', line3: 'Developer',
    bio: '8+ years delivering campaigns, brand identities and creative systems for TECNO, MTN, Mukuru, Infinix & ZICB across Zambia.',
    photo: '/images/saidi_suit.jpg',
    photoPos: 'center top',
    label: 'Creative Direction',
  },
  {
    line1: 'Digital Marketing', line2: 'Strategist &', line3: 'Team Lead',
    bio: 'Led and trained digital marketing teams at Transsion Holdings managing campaigns, social media, SEO and content strategy for top brands.',
    photo: '/images/saidi_training.jpg',
    photoPos: 'center center',
    label: 'Team Training · Lusaka',
  },
  {
    line1: 'Full-Stack', line2: 'Web', line3: 'Developer',
    bio: 'Building live web systems at Petro Z Limited from company websites to fuel tracking platforms, inventory systems and more.',
    photo: '/images/saidi_nigeria.jpg',
    photoPos: 'center top',
    label: 'Marketing Bootcamp · Nigeria',
  },
]

export default function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(i => (i + 1) % slides.length)
    }, 3500)
    return () => clearInterval(timer)
  }, [])

  const slide = slides[index]

  return (
    <section id="hero" style={{
      minHeight: '100vh',
      background: '#fff',
      display: 'flex',
      alignItems: 'center',
      paddingTop: 64,
    }}>
      <div style={{
        maxWidth: 1200,
        margin: '0 auto',
        padding: '80px 48px',
        display: 'grid',
        gridTemplateColumns: '1fr 420px',
        gap: 80,
        alignItems: 'center',
        width: '100%',
      }} className="hero-grid">

        {/* LEFT */}
        <div>

          {/* Availability */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 36 }}
          >
            <div style={{ position: 'relative', width: 10, height: 10 }}>
              <div className="pulse-ring" />
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#22C55E', position: 'absolute', top: 1, left: 1 }} />
            </div>
            <span style={{ fontSize: '0.8rem', color: '#888', fontFamily: 'Inter' }}>
              Available for new projects
            </span>
          </motion.div>

          {/* Sliding title */}
          <div style={{ marginBottom: 24, minHeight: 'clamp(9rem, 16vw, 15rem)', overflow: 'hidden' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -40, opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <div style={{
                  fontSize: 'clamp(2.8rem, 5vw, 4.5rem)',
                  fontWeight: 800,
                  fontFamily: 'Space Grotesk',
                  letterSpacing: '-0.04em',
                  lineHeight: 1.08,
                  color: '#111',
                }}>
                  <div>{slide.line1}</div>
                  <div style={{ color: '#E8480A' }}>{slide.line2}</div>
                  <div>{slide.line3}</div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slide dots */}
          <div style={{ display: 'flex', gap: 6, marginBottom: 32 }}>
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                style={{
                  width: i === index ? 24 : 6,
                  height: 6,
                  borderRadius: 3,
                  background: i === index ? '#111' : '#ddd',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  padding: 0,
                }}
              />
            ))}
          </div>

          {/* Sliding bio */}
          <div style={{ minHeight: '5rem', marginBottom: 40 }}>
            <AnimatePresence mode="wait">
              <motion.p
                key={index + '-bio'}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  fontSize: '1rem',
                  color: '#666',
                  lineHeight: 1.8,
                  maxWidth: 460,
                  fontFamily: 'Inter',
                }}
              >
                {slide.bio}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={{ display: 'flex', gap: 12, marginBottom: 56 }}
          >
            <a href="#work" style={{
              background: '#111', color: '#fff',
              padding: '14px 32px', borderRadius: 3,
              fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: '0.9rem',
              transition: 'background 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.background = '#E8480A'}
              onMouseLeave={e => e.currentTarget.style.background = '#111'}
            >
              View Work
            </a>
            <a href="#contact" style={{
              border: '1.5px solid #ddd', color: '#444', background: 'transparent',
              padding: '14px 32px', borderRadius: 3,
              fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: '0.9rem',
              transition: 'all 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#111'; e.currentTarget.style.color = '#111' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#ddd'; e.currentTarget.style.color = '#444' }}
            >
              Get in Touch
            </a>
          </motion.div>

          {/* Clients */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <p style={{ fontSize: '0.72rem', color: '#bbb', letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: 'Space Grotesk', marginBottom: 12 }}>
              Clients
            </p>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              {['TECNO', 'MTN', 'Mukuru', 'Infinix', 'ZICB', 'ERB'].map(b => (
                <span key={b} style={{
                  fontSize: '0.78rem', fontWeight: 700, color: '#bbb',
                  fontFamily: 'Space Grotesk', letterSpacing: '0.05em',
                }}>{b}</span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* RIGHT: Sliding Photo */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          style={{ position: 'relative' }}
        >
          <div style={{
            borderRadius: 4,
            overflow: 'hidden',
            aspectRatio: '3/4',
            background: '#F0EDEA',
            position: 'relative',
          }}>
            <AnimatePresence mode="wait">
              <motion.img
                key={index + '-photo'}
                src={slide.photo}
                alt="Saidi Tembo"
                initial={{ opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  width: '100%', height: '100%',
                  objectFit: 'cover',
                  objectPosition: slide.photoPos,
                  display: 'block',
                  position: 'absolute', inset: 0,
                }}
              />
            </AnimatePresence>

            {/* Slide label */}
            <AnimatePresence mode="wait">
              <motion.div
                key={index + '-label'}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4 }}
                style={{
                  position: 'absolute', bottom: 16, left: 16,
                  background: 'rgba(0,0,0,0.55)',
                  backdropFilter: 'blur(8px)',
                  padding: '6px 14px', borderRadius: 20,
                  fontSize: '0.72rem', color: 'rgba(255,255,255,0.85)',
                  fontFamily: 'Space Grotesk', fontWeight: 600,
                  letterSpacing: '0.04em',
                }}
              >
                {slide.label}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Floating orange accent */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              bottom: -12, left: -12,
              width: 80, height: 80,
              background: '#E8480A',
              borderRadius: 3,
              zIndex: -1,
            }}
          />
        </motion.div>
      </div>

      <style>{`
        .pulse-ring {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 18px; height: 18px;
          border-radius: 50%;
          background: rgba(34,197,94,0.25);
          animation: pulse 2s ease-out infinite;
        }
        @keyframes pulse {
          0%   { transform: translate(-50%,-50%) scale(0.6); opacity: 1; }
          100% { transform: translate(-50%,-50%) scale(2.2); opacity: 0; }
        }
        @media (max-width: 860px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .hero-grid > div:last-child { max-width: 360px; }
        }
      `}</style>
    </section>
  )
}
