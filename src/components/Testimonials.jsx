import { motion } from 'framer-motion'

const testimonials = [
  { name: 'Mwamba K.', role: 'Lodge Owner, Livingstone', avatar: 'M', color: '#FF6B35', quote: '"WheelproZM built our website in record time. Our online bookings increased by 40% in the first month!"' },
  { name: 'Chanda M.', role: 'CEO, Lusaka SME', avatar: 'C', color: '#7C3AED', quote: '"The brand identity design was exactly what we needed. Professional, creative, and delivered on time."' },
  { name: 'Temwani B.', role: 'Business Owner, Ndola', avatar: 'T', color: '#059669', quote: '"Our social media presence completely transformed. Sales are up and people recognize our brand now."' },
]

export default function Testimonials() {
  return (
    <section style={{ padding: '110px 0' }}>
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 24px' }}>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: 64 }}
        >
          <span style={{
            display: 'inline-block', background: 'rgba(255,107,53,0.12)', color: 'var(--orange)',
            border: '1px solid rgba(255,107,53,0.25)', padding: '6px 18px', borderRadius: 100,
            fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 16,
          }}>Testimonials</span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)' }}>
            What Clients{' '}
            <span style={{ background: 'linear-gradient(135deg, var(--orange), var(--purple))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Say
            </span>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              whileHover={{ y: -6 }}
              style={{
                background: 'var(--card)', border: '1px solid var(--border)',
                borderRadius: 'var(--r)', padding: 32,
              }}
            >
              <div style={{ color: '#FFB800', fontSize: '1.1rem', letterSpacing: 2, marginBottom: 16 }}>★★★★★</div>
              <p style={{ color: 'var(--muted)', fontSize: '0.95rem', lineHeight: 1.75, marginBottom: 24, fontStyle: 'italic' }}>{t.quote}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: '50%', background: t.color,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'Space Grotesk', fontWeight: 700, color: '#fff', flexShrink: 0,
                }}>
                  {t.avatar}
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontFamily: 'Space Grotesk', fontSize: '0.95rem' }}>{t.name}</div>
                  <div style={{ color: 'var(--muted)', fontSize: '0.82rem' }}>{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
