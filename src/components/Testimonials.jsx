import { motion } from 'framer-motion'

const testimonials = [
  {
    quote: 'Saidi redesigned our entire brand identity and social media presence. The results were immediate — our engagement tripled and customers started recognising us everywhere.',
    name: 'Bwalya M.',
    role: 'Business Owner · Lusaka',
    avatar: 'B',
    color: '#E8480A',
  },
  {
    quote: 'The website he built for us is clean, fast and professional. We get compliments from clients every week. Best investment we made for the business.',
    name: 'Chanda K.',
    role: 'CEO · Petro Z Limited',
    avatar: 'C',
    color: '#2563EB',
  },
  {
    quote: 'He took our TikTok from 2K to over 15K followers in just 3 months — all organic. His content strategy is sharp and he delivers without excuses.',
    name: 'Abbie D.',
    role: 'Owner · Abbies Driving School',
    avatar: 'A',
    color: '#16A34A',
  },
  {
    quote: 'Outstanding campaign creative for our Camon 40 launch. Delivered on time, brand-aligned, and the designs stood out across every platform.',
    name: 'Marketing Team',
    role: 'TECNO Mobile · Zambia',
    avatar: 'T',
    color: '#7C3AED',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" style={{ padding: '120px 0', background: 'var(--bg2)', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: 64 }}
        >
          <p style={{ fontSize: '0.78rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.12em', fontFamily: 'Space Grotesk', marginBottom: 12 }}>
            Kind words
          </p>
          <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', fontWeight: 800, fontFamily: 'Space Grotesk', letterSpacing: '-0.04em', lineHeight: 1 }}>
            What clients say
          </h2>
        </motion.div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }} className="testimonials-grid">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
              style={{
                background: '#fff',
                border: '1px solid #E8E8E8',
                borderRadius: 8,
                padding: '36px 40px',
                display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                gap: 28,
                transition: 'box-shadow 0.3s',
                boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
              }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.1)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.04)'}
            >
              {/* Stars */}
              <div>
                <div style={{ display: 'flex', gap: 3, marginBottom: 20 }}>
                  {[...Array(5)].map((_, j) => (
                    <motion.span
                      key={j}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.3 + i * 0.1 + j * 0.05 }}
                      style={{ color: '#F59E0B', fontSize: '1rem' }}
                    >★</motion.span>
                  ))}
                </div>

                {/* Quote */}
                <p style={{
                  fontSize: '0.95rem', color: '#444', lineHeight: 1.85,
                  fontFamily: 'Inter', fontStyle: 'italic',
                }}>
                  "{t.quote}"
                </p>
              </div>

              {/* Author */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: '50%',
                  background: t.color,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'Space Grotesk', fontWeight: 700, color: '#fff',
                  fontSize: '1rem', flexShrink: 0,
                }}>
                  {t.avatar}
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontFamily: 'Space Grotesk', fontSize: '0.9rem', color: '#111' }}>{t.name}</div>
                  <div style={{ fontSize: '0.78rem', color: '#999', fontFamily: 'Inter', marginTop: 2 }}>{t.role}</div>
                </div>
                {/* Accent bar */}
                <div style={{ marginLeft: 'auto', width: 3, height: 36, borderRadius: 2, background: t.color, opacity: 0.5 }} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .testimonials-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
