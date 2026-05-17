import { useState } from 'react'
import { motion } from 'framer-motion'

const services = [
  {
    num: '01',
    title: 'Graphic Design & Creative Direction',
    desc: 'Brand identity, campaigns, billboards and marketing materials. End-to-end creative from concept to delivery.',
    items: ['Brand Identity', 'Campaign Creative', 'Social Media Graphics', 'Billboard & OOH', 'Event Materials'],
    accent: '#E8480A',
    span: 'large',
  },
  {
    num: '02',
    title: 'Web Development',
    desc: 'Custom websites and web systems built to actually work.',
    items: ['Business Websites', 'Web Applications', 'Stock Systems', 'E-commerce', 'Databases'],
    accent: '#2563EB',
    span: 'small',
  },
  {
    num: '03',
    title: 'Digital Marketing',
    desc: 'Strategy and execution. Campaigns that get results, not just impressions.',
    items: ['Social Media Mgmt', 'SEO', 'Content Strategy', 'Email & WhatsApp', 'Performance Tracking'],
    accent: '#16A34A',
    span: 'small',
  },
  {
    num: '04',
    title: 'IT Support & Systems',
    desc: 'Networks, software and systems that keep your business running.',
    items: ['Network Setup', 'IT Management', 'Software Implementation', 'Database Design', 'Automation'],
    accent: '#7C3AED',
    span: 'large',
  },
]

function ServiceCard({ s, i }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 8,
        padding: '40px 36px 36px',
        background: hovered ? '#111' : '#fff',
        border: `1px solid ${hovered ? '#111' : '#E8E8E8'}`,
        transition: 'background 0.4s ease, border-color 0.4s ease',
        cursor: 'default',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: s.span === 'large' ? 340 : 300,
      }}
    >
      {/* Big decorative number */}
      <div style={{
        position: 'absolute',
        top: -20,
        right: -10,
        fontSize: '10rem',
        fontWeight: 900,
        fontFamily: 'Space Grotesk',
        lineHeight: 1,
        color: hovered ? `${s.accent}18` : '#f0f0f0',
        transition: 'color 0.4s ease',
        userSelect: 'none',
        pointerEvents: 'none',
        letterSpacing: '-0.05em',
      }}>
        {s.num}
      </div>

      {/* Accent bar — animates in on hover */}
      <motion.div
        animate={{ width: hovered ? '48px' : '24px', background: s.accent }}
        transition={{ duration: 0.3 }}
        style={{ height: 3, borderRadius: 2, marginBottom: 24 }}
      />

      <div style={{ flex: 1 }}>
        {/* Small number label */}
        <p style={{
          fontSize: '0.72rem',
          fontFamily: 'Space Grotesk',
          fontWeight: 700,
          letterSpacing: '0.1em',
          color: hovered ? s.accent : '#bbb',
          marginBottom: 12,
          transition: 'color 0.3s',
        }}>
          {s.num}
        </p>

        {/* Title */}
        <h3 style={{
          fontSize: s.span === 'large' ? 'clamp(1.3rem, 2.2vw, 1.7rem)' : '1.2rem',
          fontWeight: 700,
          fontFamily: 'Space Grotesk',
          letterSpacing: '-0.03em',
          lineHeight: 1.2,
          marginBottom: 16,
          color: hovered ? '#fff' : '#111',
          transition: 'color 0.3s',
        }}>
          {s.title}
        </h3>

        {/* Desc */}
        <p style={{
          fontSize: '0.85rem',
          color: hovered ? 'rgba(255,255,255,0.5)' : '#888',
          lineHeight: 1.7,
          marginBottom: 28,
          transition: 'color 0.3s',
          maxWidth: 340,
        }}>
          {s.desc}
        </p>
      </div>

      {/* Items */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {s.items.map((item, j) => (
          <motion.span
            key={j}
            animate={{
              background: hovered ? `${s.accent}22` : '#f5f5f5',
              color: hovered ? '#fff' : '#555',
              borderColor: hovered ? `${s.accent}55` : '#eee',
            }}
            transition={{ duration: 0.3, delay: hovered ? j * 0.04 : 0 }}
            style={{
              fontSize: '0.75rem',
              padding: '5px 12px',
              borderRadius: 20,
              border: '1px solid',
              fontFamily: 'Inter',
              fontWeight: 500,
            }}
          >
            {item}
          </motion.span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Services() {
  return (
    <section id="services" style={{ padding: '120px 0', background: 'var(--bg2)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: 64 }}
        >
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
            <div>
              <p style={{ fontSize: '0.78rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.12em', fontFamily: 'Space Grotesk', marginBottom: 12 }}>
                What I do
              </p>
              <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', letterSpacing: '-0.04em', fontWeight: 800, lineHeight: 1, fontFamily: 'Space Grotesk' }}>
                Services
              </h2>
            </div>
           
          </div>
        </motion.div>

        {/* Asymmetric bento grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 16 }} className="services-top">
          <ServiceCard s={services[0]} i={0} />
          <ServiceCard s={services[1]} i={1} />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 16, marginTop: 16 }} className="services-bottom">
          <ServiceCard s={services[2]} i={2} />
          <ServiceCard s={services[3]} i={3} />
        </div>

        {/* CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            marginTop: 48,
            background: '#111',
            borderRadius: 8,
            padding: '40px 48px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 24,
          }}
        >
          <div>
            <h3 style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)', fontWeight: 700, color: '#fff', fontFamily: 'Space Grotesk', letterSpacing: '-0.03em', marginBottom: 6 }}>
              Ready to start something?
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.45)', fontFamily: 'Inter' }}>
              Let's talk about your project and find the right approach together.
            </p>
          </div>
          <a
            href="#contact"
            style={{
              background: '#E8480A', color: '#fff',
              padding: '14px 36px', borderRadius: 4,
              fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '0.9rem',
              transition: 'opacity 0.2s', flexShrink: 0,
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            Start a Project →
          </a>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .services-top, .services-bottom { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
