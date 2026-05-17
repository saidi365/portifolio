export default function Footer() {
  return (
    <footer style={{ background: 'var(--dark)', color: '#fff', padding: '48px 32px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 24 }}>
        <div>
          <div style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '1rem', marginBottom: 4 }}>Saidi Tembo</div>
          <div style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.4)' }}>Senior Creative Lead & Developer · Lusaka, Zambia 🇿🇲</div>
        </div>
        <div style={{ display: 'flex', gap: 32 }}>
          {[['Work', '#work'], ['About', '#about'], ['Services', '#services'], ['Contact', '#contact']].map(([l, h]) => (
            <a key={l} href={h} style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = '#fff'}
              onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.5)'}
            >{l}</a>
          ))}
        </div>
        <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.3)' }}>© 2026 Saidi Tembo</div>
      </div>
    </footer>
  )
}
