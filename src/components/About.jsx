import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

const stats = [
  { num: 8,  suffix: '+', label: 'Years Experience' },
  { num: 12, suffix: '+', label: 'Campaigns Delivered' },
  { num: 10, suffix: '+', label: 'Brands Worked With' },
  { num: 4,  suffix: '+', label: 'Live Web Systems' },
]

const skills = [
  'Graphic Design', 'Brand Identity', 'Illustrator', 'Photoshop',
  'React', 'Django', 'PostgreSQL', 'Digital Marketing',
  'SEO', 'Social Media', 'IT Support', 'Web Development',
]

function CountUp({ target, suffix }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 1400
    const step = 16
    const increment = target / (duration / step)
    const timer = setInterval(() => {
      start += increment
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, step)
    return () => clearInterval(timer)
  }, [inView, target])

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  )
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
})

export default function About() {
  return (
    <section id="about" style={{ padding: '120px 0', background: '#fff', position: 'relative', overflow: 'hidden' }}>

      {/* Subtle background accent */}
      <motion.div
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute', top: '10%', right: '-80px',
          width: 320, height: 320, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(232,72,10,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <motion.div
        animate={{ y: [0, 16, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        style={{
          position: 'absolute', bottom: '15%', left: '-60px',
          width: 240, height: 240, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(232,72,10,0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 48px', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 96, alignItems: 'center' }} className="about-grid">

          {/* LEFT — Photo */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: 'relative' }}
          >
            {/* Floating orange square behind photo */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                position: 'absolute', top: -16, right: -16,
                width: 72, height: 72,
                background: '#E8480A', borderRadius: 3, zIndex: 0,
              }}
            />
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              style={{
                position: 'absolute', bottom: 60, left: -16,
                width: 40, height: 40,
                background: '#111', borderRadius: 3, zIndex: 0,
              }}
            />

            {/* Photo */}
            <div style={{ borderRadius: 6, overflow: 'hidden', aspectRatio: '3/4', background: '#F0EDEA', position: 'relative', zIndex: 1 }}>
              <motion.img
                src="/images/saidi_real.jpg"
                alt="Saidi Tembo"
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
              />

              {/* Overlay label */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                style={{
                  position: 'absolute', bottom: 20, left: 20,
                  background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(8px)',
                  padding: '8px 16px', borderRadius: 20,
                  fontSize: '0.72rem', color: 'rgba(255,255,255,0.85)',
                  fontFamily: 'Space Grotesk', fontWeight: 600, letterSpacing: '0.04em',
                }}
              >
                Lusaka, Zambia 🇿🇲
              </motion.div>
            </div>

            {/* Stats grid below photo */}
            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr',
              gap: 1, background: '#E8E8E8',
              marginTop: 1, borderRadius: '0 0 6px 6px', overflow: 'hidden',
              position: 'relative', zIndex: 1,
            }}>
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  whileHover={{ background: '#f7f5f2' }}
                  style={{ background: '#fff', padding: '20px 24px', textAlign: 'center', transition: 'background 0.2s' }}
                >
                  <div style={{ fontSize: '1.6rem', fontWeight: 800, fontFamily: 'Space Grotesk', color: '#E8480A', letterSpacing: '-0.04em', lineHeight: 1 }}>
                    <CountUp target={s.num} suffix={s.suffix} />
                  </div>
                  <div style={{ fontSize: '0.72rem', color: '#999', marginTop: 4, fontFamily: 'Inter' }}>{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — Text */}
          <div>
            <motion.p {...fadeUp(0)} style={{ fontSize: '0.78rem', color: '#bbb', textTransform: 'uppercase', letterSpacing: '0.12em', fontFamily: 'Space Grotesk', marginBottom: 16 }}>
              About me
            </motion.p>

            <motion.h2 {...fadeUp(0.08)} style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, fontFamily: 'Space Grotesk', letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: 8, color: '#111' }}>
              Saidi Tembo
            </motion.h2>

            <motion.div {...fadeUp(0.14)}>
              <p style={{ fontSize: '0.9rem', color: '#E8480A', fontWeight: 600, fontFamily: 'Space Grotesk', marginBottom: 32 }}>
                Senior Creative Lead & Developer · Lusaka, Zambia
              </p>
            </motion.div>

            <motion.p {...fadeUp(0.2)} style={{ fontSize: '1rem', color: '#555', lineHeight: 1.85, marginBottom: 24, fontFamily: 'Inter' }}>
              I'm a Zambian creative professional with a BSc in Information Technology and
              8+ years of experience across graphic design, creative direction, digital
              marketing and full-stack web development.
            </motion.p>

            <motion.p {...fadeUp(0.28)} style={{ fontSize: '1rem', color: '#555', lineHeight: 1.85, marginBottom: 36, fontFamily: 'Inter' }}>
              I've led campaigns for some of Zambia's biggest brands, managed and trained
              digital teams, and built live web systems used by real businesses every day.
              Currently based at Petro Z Limited as a Software Developer & IT Engineer.
            </motion.p>

            {/* Skills */}
            <motion.div {...fadeUp(0.34)} style={{ marginBottom: 40 }}>
              <p style={{ fontSize: '0.72rem', color: '#bbb', textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: 'Space Grotesk', marginBottom: 14 }}>
                Skills & Tools
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.4 + i * 0.04 }}
                    whileHover={{ background: '#111', color: '#fff', borderColor: '#111' }}
                    style={{
                      fontSize: '0.78rem', fontWeight: 500,
                      padding: '6px 14px', borderRadius: 20,
                      border: '1px solid #E8E8E8', background: '#fafafa',
                      color: '#555', fontFamily: 'Inter',
                      transition: 'all 0.2s', cursor: 'default',
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Contact buttons */}
            <motion.div {...fadeUp(0.4)} style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 40 }}>
              <a
                href="mailto:tembosaidi1@gmail.com"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '12px 20px', borderRadius: 4,
                  border: '1.5px solid #E8E8E8', background: '#fff',
                  fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: '0.85rem',
                  color: '#111', transition: 'all 0.2s', textDecoration: 'none',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = '#111'; e.currentTarget.style.borderColor = '#111'; e.currentTarget.style.color = '#fff' }}
                onMouseLeave={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.borderColor = '#E8E8E8'; e.currentTarget.style.color = '#111' }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                Email Me
              </a>
              <a
                href="https://wa.me/260971835160"
                target="_blank" rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '12px 20px', borderRadius: 4,
                  border: '1.5px solid #E8E8E8', background: '#fff',
                  fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: '0.85rem',
                  color: '#111', transition: 'all 0.2s', textDecoration: 'none',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = '#25D366'; e.currentTarget.style.borderColor = '#25D366'; e.currentTarget.style.color = '#fff' }}
                onMouseLeave={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.borderColor = '#E8E8E8'; e.currentTarget.style.color = '#111' }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '12px 20px', borderRadius: 4,
                border: '1.5px solid #E8E8E8', background: '#fafafa',
                fontFamily: 'Inter', fontSize: '0.85rem', color: '#888',
              }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                Lusaka, Zambia
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div {...fadeUp(0.46)}>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: 'inline-block',
                  background: '#111', color: '#fff',
                  padding: '14px 32px', borderRadius: 3,
                  fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: '0.9rem',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.background = '#E8480A'}
                onMouseLeave={e => e.currentTarget.style.background = '#111'}
              >
                Work with me →
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  )
}
