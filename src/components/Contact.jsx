import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const FORMSPREE_ID = 'YOUR_FORM_ID' // replace with your Formspree form ID

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const handle = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(false)
    const data = new FormData(e.target)
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setSent(true)
      } else {
        setError(true)
      }
    } catch {
      setError(true)
    }
    setLoading(false)
  }

  return (
    <section id="contact" style={{ background: '#111', padding: '120px 0', position: 'relative', overflow: 'hidden' }}>

      {/* Big decorative background text */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        fontSize: 'clamp(6rem, 18vw, 18rem)',
        fontWeight: 900, fontFamily: 'Space Grotesk',
        color: 'rgba(255,255,255,0.03)',
        whiteSpace: 'nowrap', userSelect: 'none',
        letterSpacing: '-0.05em', lineHeight: 1,
        pointerEvents: 'none',
      }}>
        LET'S TALK
      </div>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 48px', position: 'relative', zIndex: 2 }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: 72 }}
        >
          <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.14em', fontFamily: 'Space Grotesk', marginBottom: 16 }}>
            Get in touch
          </p>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, fontFamily: 'Space Grotesk', letterSpacing: '-0.04em', color: '#fff', lineHeight: 1.05 }}>
            Have a project in mind?<br />
            <span style={{ color: '#E8480A' }}>Let's make it happen.</span>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }} className="contact-grid">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: 48, fontFamily: 'Inter' }}>
              Whether it's a brand identity, a campaign, a website or a full digital
              system reach out and let's talk about what you need.
            </p>

            {/* Contact action buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 56 }}>
              <motion.a
                href="mailto:tembosaidi1@gmail.com"
                whileHover={{ x: 6 }}
                transition={{ duration: 0.2 }}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '20px 24px', borderRadius: 6,
                  border: '1px solid rgba(255,255,255,0.1)',
                  background: 'rgba(255,255,255,0.04)',
                  textDecoration: 'none',
                  transition: 'border-color 0.2s, background 0.2s',
                  group: true,
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#E8480A'; e.currentTarget.style.background = 'rgba(232,72,10,0.08)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: '50%',
                    background: 'rgba(232,72,10,0.15)', border: '1px solid rgba(232,72,10,0.3)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1rem',
                  }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{color:'#E8480A'}}>
                      <rect x="2" y="4" width="20" height="16" rx="2"/>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.92rem', color: '#fff', fontFamily: 'Space Grotesk' }}>Send an Email</div>
                    <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.35)', fontFamily: 'Inter', marginTop: 2 }}>Opens your email app</div>
                  </div>
                </div>
                <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '1.1rem' }}>→</span>
              </motion.a>

              <motion.a
                href="https://wa.me/260971835160"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 6 }}
                transition={{ duration: 0.2 }}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '20px 24px', borderRadius: 6,
                  border: '1px solid rgba(255,255,255,0.1)',
                  background: 'rgba(255,255,255,0.04)',
                  textDecoration: 'none',
                  transition: 'border-color 0.2s, background 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#25D366'; e.currentTarget.style.background = 'rgba(37,211,102,0.08)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: '50%',
                    background: 'rgba(37,211,102,0.15)', border: '1px solid rgba(37,211,102,0.3)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1rem',
                  }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" style={{color:'#25D366'}} fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.92rem', color: '#fff', fontFamily: 'Space Grotesk' }}>Message on WhatsApp</div>
                    <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.35)', fontFamily: 'Inter', marginTop: 2 }}>Opens WhatsApp directly</div>
                  </div>
                </div>
                <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '1.1rem' }}>→</span>
              </motion.a>

              <div style={{
                display: 'flex', alignItems: 'center', gap: 16,
                padding: '20px 24px', borderRadius: 6,
                border: '1px solid rgba(255,255,255,0.06)',
                background: 'rgba(255,255,255,0.02)',
              }}>
                <div style={{
                  width: 44, height: 44, borderRadius: '50%',
                  background: 'rgba(255,255,255,0.06)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1rem',
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.92rem', color: 'rgba(255,255,255,0.6)', fontFamily: 'Space Grotesk' }}>Lusaka, Zambia</div>
                  <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.25)', fontFamily: 'Inter', marginTop: 2 }}>Available for remote & local work</div>
                </div>
              </div>
            </div>

            {/* Response time */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#22C55E' }} />
              <span style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.35)', fontFamily: 'Inter' }}>
                Usually responds within 24 hours
              </span>
            </div>
          </motion.div>

          {/* RIGHT — Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: 8, padding: '64px 40px',
                    textAlign: 'center',
                  }}
                >
                  <div style={{ fontSize: '2.5rem', marginBottom: 16 }}>✓</div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#fff', fontFamily: 'Space Grotesk', marginBottom: 12 }}>Message sent!</h3>
                  <p style={{ color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, fontFamily: 'Inter' }}>
                    Thanks for reaching out. I'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  onSubmit={handle}
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 8, padding: '40px',
                    display: 'flex', flexDirection: 'column', gap: 20,
                  }}
                >
                  {[
                    { id: 'name', label: 'Your Name', placeholder: 'John Banda' },
                    { id: 'contact', label: 'Email or WhatsApp', placeholder: 'email or phone number' },
                  ].map(f => (
                    <div key={f.id}>
                      <label style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: 'Space Grotesk', display: 'block', marginBottom: 8 }}>{f.label}</label>
                      <input
                        name={f.id} type="text" placeholder={f.placeholder} required
                        style={{
                          width: '100%', padding: '14px 16px',
                          background: 'rgba(255,255,255,0.06)',
                          border: '1px solid rgba(255,255,255,0.1)',
                          borderRadius: 4, color: '#fff',
                          fontSize: '0.9rem', fontFamily: 'Inter',
                          outline: 'none', transition: 'border-color 0.2s',
                          boxSizing: 'border-box',
                        }}
                        onFocus={e => e.target.style.borderColor = '#E8480A'}
                        onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                      />
                    </div>
                  ))}

                  <div>
                    <label style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: 'Space Grotesk', display: 'block', marginBottom: 8 }}>Service</label>
                    <select
                      name="service"
                      style={{
                        width: '100%', padding: '14px 16px',
                        background: 'rgba(255,255,255,0.06)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: 4, color: 'rgba(255,255,255,0.7)',
                        fontSize: '0.9rem', fontFamily: 'Inter',
                        outline: 'none', cursor: 'pointer',
                        boxSizing: 'border-box',
                      }}
                      onFocus={e => e.target.style.borderColor = '#E8480A'}
                      onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                    >
                      <option value="" style={{ background: '#111' }}>Select a service...</option>
                      {['Graphic Design & Branding', 'Web Development', 'Digital Marketing', 'IT Support', 'Multiple Services'].map(o => (
                        <option key={o} style={{ background: '#111' }}>{o}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: 'Space Grotesk', display: 'block', marginBottom: 8 }}>Message</label>
                    <textarea
                      name="message" rows={4} required placeholder="Tell me about your project..."
                      style={{
                        width: '100%', padding: '14px 16px',
                        background: 'rgba(255,255,255,0.06)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: 4, color: '#fff',
                        fontSize: '0.9rem', fontFamily: 'Inter',
                        outline: 'none', resize: 'vertical', minHeight: 110,
                        transition: 'border-color 0.2s', boxSizing: 'border-box',
                      }}
                      onFocus={e => e.target.style.borderColor = '#E8480A'}
                      onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                    />
                  </div>

                  {error && (
                    <p style={{ color: '#E8480A', fontSize: '0.85rem', fontFamily: 'Inter', margin: 0 }}>
                      Something went wrong — please try WhatsApp or email directly.
                    </p>
                  )}

                  <button
                    type="submit" disabled={loading}
                    style={{
                      background: '#E8480A', color: '#fff',
                      padding: '16px', borderRadius: 4,
                      fontFamily: 'Space Grotesk', fontWeight: 700,
                      fontSize: '0.92rem', cursor: loading ? 'not-allowed' : 'pointer',
                      opacity: loading ? 0.7 : 1,
                      transition: 'opacity 0.2s, transform 0.1s',
                      border: 'none',
                    }}
                    onMouseEnter={e => { if (!loading) e.currentTarget.style.opacity = '0.88' }}
                    onMouseLeave={e => { if (!loading) e.currentTarget.style.opacity = '1' }}
                  >
                    {loading ? 'Sending...' : 'Send Message →'}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  )
}
