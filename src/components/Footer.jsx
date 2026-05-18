import { motion } from 'framer-motion'

const socials = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/saidi-tembo',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com/saidi365',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
      </svg>
    ),
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@abbiesdrivingschool',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.19 8.19 0 0 0 4.79 1.54V6.79a4.85 4.85 0 0 1-1.02-.1z"/>
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/260971835160',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer style={{ background: '#0d0d0d', color: '#fff', padding: '64px 32px 32px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        {/* Top row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 40, marginBottom: 56, paddingBottom: 48, borderBottom: '1px solid rgba(255,255,255,0.07)' }}>

          {/* Brand */}
          <div>
            <div style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '1.4rem', letterSpacing: '-0.03em', marginBottom: 8 }}>
              Saidi <span style={{ color: '#E8480A' }}>Tembo</span>
            </div>
            <div style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.35)', fontFamily: 'Inter', maxWidth: 260, lineHeight: 1.7 }}>
              Senior Creative Lead & Developer based in Lusaka, Zambia. Available for projects worldwide.
            </div>
          </div>

          {/* Nav links */}
          <div>
            <p style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.12em', fontFamily: 'Space Grotesk', marginBottom: 16 }}>Navigation</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[['Services', '#services'], ['Work', '#work'], ['About', '#about'], ['Contact', '#contact']].map(([l, h]) => (
                <a key={l} href={h} style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.5)', transition: 'color 0.2s', fontFamily: 'Inter' }}
                  onMouseEnter={e => e.target.style.color = '#fff'}
                  onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.5)'}
                >{l}</a>
              ))}
            </div>
          </div>

          {/* Social links */}
          <div>
            <p style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.12em', fontFamily: 'Space Grotesk', marginBottom: 16 }}>Connect</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {socials.map(s => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank" rel="noopener noreferrer"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 10,
                    fontSize: '0.88rem', color: 'rgba(255,255,255,0.5)',
                    transition: 'color 0.2s', fontFamily: 'Inter',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
                >
                  {s.icon}
                  {s.label}
                </motion.a>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div>
            <p style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.12em', fontFamily: 'Space Grotesk', marginBottom: 16 }}>Start a project</p>
            <a href="#contact" style={{
              display: 'inline-block',
              background: '#E8480A', color: '#fff',
              padding: '12px 28px', borderRadius: 3,
              fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '0.88rem',
              transition: 'opacity 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              Let's Work Together →
            </a>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 16 }}>
              <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#22C55E' }} />
              <span style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.3)', fontFamily: 'Inter' }}>Available for new projects</span>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <span style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.2)', fontFamily: 'Inter' }}>© 2026 Saidi Tembo. All rights reserved.</span>
          <span style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.2)', fontFamily: 'Inter' }}>Lusaka, Zambia 🇿🇲</span>
        </div>
      </div>
    </footer>
  )
}
