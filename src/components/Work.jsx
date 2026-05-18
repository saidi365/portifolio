import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function WebCard({ p, i }) {
  const ref = useRef(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)

  const onMouseMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 14
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -14
    setTilt({ x, y })
  }

  const onMouseLeave = () => {
    setTilt({ x: 0, y: 0 })
    setHovered(false)
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={onMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={onMouseLeave}
      style={{
        borderRadius: 8,
        overflow: 'hidden',
        position: 'relative',
        minHeight: 300,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        border: '1px solid rgba(255,255,255,0.06)',
        transform: `perspective(900px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg) scale(${hovered ? 1.02 : 1})`,
        transition: 'transform 0.15s ease, box-shadow 0.3s ease',
        boxShadow: hovered
          ? '0 24px 60px rgba(0,0,0,0.18), 0 8px 20px rgba(0,0,0,0.1)'
          : '0 4px 16px rgba(0,0,0,0.06)',
        cursor: 'default',
      }}
    >
      {/* Browser chrome bar */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, zIndex: 3,
        background: 'rgba(20,20,20,0.85)',
        backdropFilter: 'blur(8px)',
        padding: '8px 14px',
        display: 'flex', alignItems: 'center', gap: 10,
        borderBottom: '1px solid rgba(255,255,255,0.08)',
      }}>
        <div style={{ display: 'flex', gap: 5 }}>
          <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#FF5F57' }} />
          <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#FEBC2E' }} />
          <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#28C840' }} />
        </div>
        {p.link && (
          <div style={{
            flex: 1, background: 'rgba(255,255,255,0.07)', borderRadius: 4,
            padding: '3px 10px', fontSize: '0.68rem', color: 'rgba(255,255,255,0.4)',
            fontFamily: 'Inter', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis',
          }}>
            {p.link.replace('https://', '')}
          </div>
        )}
      </div>

      {/* Screenshot / background */}
      {p.preview ? (
        <>
          <motion.img
            src={p.preview}
            alt={p.title}
            animate={{ scale: hovered ? 1.06 : 1 }}
            transition={{ duration: 0.5 }}
            style={{
              position: 'absolute', inset: 0,
              width: '100%', height: '100%',
              objectFit: 'cover', objectPosition: 'top',
              display: 'block',
            }}
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: hovered
              ? 'linear-gradient(to top, rgba(0,0,0,0.95) 35%, rgba(0,0,0,0.15) 100%)'
              : 'linear-gradient(to top, rgba(0,0,0,0.92) 40%, rgba(0,0,0,0.35) 100%)',
            transition: 'background 0.4s ease',
          }} />
        </>
      ) : (
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #14532D 0%, #0f3d21 100%)' }} />
      )}

      {/* WIP badge */}
      {p.wip && (
        <motion.div
          animate={{ opacity: [1, 0.6, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{
            position: 'absolute', top: 44, right: 14, zIndex: 4,
            background: '#E8480A', padding: '3px 10px', borderRadius: 2,
            fontSize: '0.65rem', fontWeight: 700, color: '#fff',
            fontFamily: 'Space Grotesk', letterSpacing: '0.06em',
          }}
        >
          IN PROGRESS
        </motion.div>
      )}

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2, padding: '28px 24px 24px' }}>
        <p style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: 'Space Grotesk', marginBottom: 6 }}>{p.tag}</p>
        <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#fff', letterSpacing: '-0.02em', marginBottom: 8, fontFamily: 'Space Grotesk' }}>{p.title}</h3>
        <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.65, marginBottom: 20 }}>{p.desc}</p>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10 }}>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            {p.tools.map(t => (
              <span key={t} style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.45)', border: '1px solid rgba(255,255,255,0.12)', padding: '3px 8px', borderRadius: 2 }}>{t}</span>
            ))}
          </div>
          {p.link && (
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: '0.82rem', fontWeight: 700, color: '#fff',
                fontFamily: 'Space Grotesk',
                background: hovered ? 'rgba(232,72,10,0.9)' : 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.2)',
                padding: '8px 16px', borderRadius: 2,
                transition: 'background 0.3s',
                flexShrink: 0,
              }}
            >
              View Live ↗
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

function SocialCard({ p, i }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="social-card"
      style={{
        borderRadius: 16, overflow: 'hidden',
        display: 'grid', gridTemplateColumns: '1fr 340px',
        border: '1px solid rgba(255,255,255,0.07)',
        boxShadow: hovered ? '0 32px 80px rgba(0,0,0,0.35)' : '0 8px 32px rgba(0,0,0,0.2)',
        transition: 'box-shadow 0.4s ease, transform 0.3s ease',
        transform: hovered ? 'translateY(-4px)' : 'none',
      }}
    >
      {/* LEFT — content */}
      <div style={{
        background: '#0d0d0d',
        padding: '44px 48px',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
      }}>
        {/* Subtle dot grid */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)', backgroundSize: '28px 28px', pointerEvents: 'none' }} />
        {/* Glow */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          style={{ position: 'absolute', top: -80, left: -80, width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(105,201,208,0.08) 0%, transparent 70%)', pointerEvents: 'none' }}
        />

        <div style={{ position: 'relative', zIndex: 1 }}>
          {/* Platform badge */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 28 }}>
            <motion.div
              animate={{ boxShadow: ['0 0 0 0 rgba(105,201,208,0.4)', '0 0 0 8px rgba(105,201,208,0)', '0 0 0 0 rgba(105,201,208,0)'] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              style={{ width: 32, height: 32, borderRadius: '50%', background: 'rgba(105,201,208,0.12)', border: '1px solid rgba(105,201,208,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="#69C9D0"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.19 8.19 0 0 0 4.79 1.54V6.79a4.85 4.85 0 0 1-1.02-.1z"/></svg>
            </motion.div>
            <div>
              <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.5)', fontFamily: 'Space Grotesk', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{p.platform}</div>
              <div style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.25)', fontFamily: 'Inter', marginTop: 1 }}>{p.period}</div>
            </div>
          </div>

          <h3 style={{ fontSize: '2rem', fontWeight: 800, color: '#fff', fontFamily: 'Space Grotesk', letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: 16 }}>{p.client}</h3>
          <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.85, marginBottom: 36, maxWidth: 440 }}>{p.desc}</p>
        </div>

        {/* Buttons */}
        <div style={{ display: 'flex', gap: 10, position: 'relative', zIndex: 1 }}>
          <motion.a
            href={p.tiktok} target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.04, background: 'rgba(105,201,208,0.2)' }} whileTap={{ scale: 0.97 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '11px 22px', borderRadius: 8, background: 'rgba(105,201,208,0.1)', border: '1px solid rgba(105,201,208,0.3)', color: '#69C9D0', fontSize: '0.82rem', fontWeight: 700, fontFamily: 'Space Grotesk' }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.19 8.19 0 0 0 4.79 1.54V6.79a4.85 4.85 0 0 1-1.02-.1z"/></svg>
            TikTok ↗
          </motion.a>
          <motion.a
            href={p.instagram} target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.04, background: 'rgba(225,48,108,0.18)' }} whileTap={{ scale: 0.97 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '11px 22px', borderRadius: 8, background: 'rgba(225,48,108,0.08)', border: '1px solid rgba(225,48,108,0.3)', color: '#E1306C', fontSize: '0.82rem', fontWeight: 700, fontFamily: 'Space Grotesk' }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            Instagram ↗
          </motion.a>
        </div>
      </div>

      {/* RIGHT — stats panel */}
      <div style={{
        background: 'linear-gradient(160deg, #111 0%, #0a0a0a 100%)',
        borderLeft: '1px solid rgba(255,255,255,0.06)',
        padding: '44px 36px',
        display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 12,
      }}>
        <p style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase', letterSpacing: '0.12em', fontFamily: 'Space Grotesk', marginBottom: 8 }}>Campaign Results</p>
        {p.stats.map((s, j) => (
          <motion.div
            key={j}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 + j * 0.1 }}
            style={{
              background: j === 0 ? 'rgba(105,201,208,0.06)' : 'rgba(255,255,255,0.025)',
              border: j === 0 ? '1px solid rgba(105,201,208,0.18)' : '1px solid rgba(255,255,255,0.05)',
              borderRadius: 10, padding: '18px 20px',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            }}
          >
            <span style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.07em', fontFamily: 'Inter' }}>{s.label}</span>
            <motion.span
              animate={j === 0 ? { textShadow: ['0 0 0px #69C9D0', '0 0 20px #69C9D0', '0 0 0px #69C9D0'] } : {}}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              style={{ fontSize: j === 0 ? '1.6rem' : '1.2rem', fontWeight: 800, fontFamily: 'Space Grotesk', color: j === 0 ? '#69C9D0' : '#fff', letterSpacing: '-0.03em' }}
            >
              {s.value}
            </motion.span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

const designProjects = [
  {
    tag: 'Campaign · 2025',
    client: 'TECNO × MTN',
    title: 'Camon 40 Series',
    desc: 'Online and BTL creative designs for the Camon 40 launch. Collaborated with MTN ensuring brand alignment across digital banners, billboards and print-ready files.',
    tools: ['Illustrator', 'Photoshop'],
    img: '/images/page_04.jpg',
    size: 'large',
  },
  {
    tag: 'Billboard · 2024',
    client: 'TECNO',
    title: 'Phantom V Fold 2 & Flip 2',
    desc: 'Launch campaign featuring the Victoria Falls backdrop. Delivered billboard artwork and high-quality renders under tight deadlines.',
    tools: ['Illustrator', 'Photoshop'],
    img: '/images/page_05.jpg',
    size: 'small',
  },
  {
    tag: 'Billboard · 2024',
    client: 'Egatee × TECNO',
    title: 'Egatee Findeco Billboard',
    desc: 'Iconic Findeco building billboard. Dual-brand visual consistency plus branded shirts, bags and event mockups.',
    tools: ['Illustrator', 'Photoshop'],
    img: '/images/page_06.jpg',
    size: 'small',
  },
  {
    tag: 'Social Media · 2025',
    client: 'TECNO AIoT',
    title: 'Watch 3, True 1 & MegaBook Campaign',
    desc: 'Social media ads for Tecno AIoT accessories. Reusable artboard templates with AI-generated backgrounds.',
    tools: ['Photoshop'],
    img: '/images/page_07.jpg',
    size: 'large',
  },
  {
    tag: 'Social Media · 2024',
    client: 'TECNO Spark Series',
    title: 'Spark 30 Pro: Transformer Edition',
    desc: 'Three-piece campaign: availability, free gifts promo, and 256GB storage highlight with Transformer branding.',
    tools: ['Illustrator', 'Photoshop'],
    img: '/images/page_08.jpg',
    size: 'small',
  },
  {
    tag: 'Campaign · 2025',
    client: 'TECNO Camon 40 Tour',
    title: 'Experience Tour: KOL Series',
    desc: 'Weekly templates for KOL store visits. Featured Natasha, Jae Cash, Michie and Pompi. Built for instant image drop-in.',
    tools: ['Illustrator', 'Photoshop'],
    img: '/images/page_10.jpg',
    size: 'small',
  },
  {
    tag: 'Branding · 2023',
    client: 'Mukuru',
    title: '"Tuma" Campaign',
    desc: '"Tuma Happiness", "Tuma ka Samfing", "Tuma Future". Billboards, social media, shirts, bags and newspaper ads.',
    tools: ['InDesign'],
    img: '/images/page_14.jpg',
    size: 'large',
  },
  {
    tag: 'Social Media · 2024',
    client: 'ZICB',
    title: 'ZICB "We Make It Happen" Campaign',
    desc: 'Three-piece social media series for Zambia Industrial Commercial Bank. Designed visuals for business growth lending, Virtue account opening, and mobile banking — each built around real customer stories.',
    tools: ['Photoshop'],
    img: '/images/page_15.jpg',
    size: 'small',
  },
  {
    tag: 'Social Media · 2022',
    client: 'Infinix',
    title: 'Infinix Secret Santa Campaign',
    desc: 'Christmas campaign for Infinix Zambia promoting gift giveaways and shopping vouchers. Designed multiple creatives featuring celebrity ambassadors to drive festive engagement and brand excitement.',
    tools: ['Photoshop'],
    img: '/images/page_11.jpg',
    size: 'small',
  },
  {
    tag: 'Social Media · 2025',
    client: 'Infinix AIoT',
    title: 'XWatch 3WE, XPower 20 Go & XBuds 3',
    desc: 'Product launch creatives for Infinix AIoT accessories — XWatch 3WE smartwatch, XPower 20 Go 20000mAh power bank, and XBuds 3 ENC wireless earbuds. Clean tech visuals built in Illustrator.',
    tools: ['Illustrator'],
    img: '/images/page_12.jpg',
    size: 'large',
  },
]

const socialProjects = [
  {
    client: "Abbies Driving School",
    platform: "TikTok + Instagram",
    period: "2024 – Present",
    desc: "Abbies Driving School, based in East London. Grew their TikTok from 2K to 15K+ followers in under 3 months, 100% organic. Managed content strategy, video production, captions and posting schedule across TikTok and Instagram.",
    stats: [
      { label: 'Followers gained', value: '13K+' },
      { label: 'Time taken', value: '3 months' },
      { label: 'Growth type', value: 'Organic' },
      { label: 'Starting point', value: '2K' },
    ],
    tiktok: 'https://www.tiktok.com/@abbiesdrivingschool',
    instagram: 'https://www.instagram.com/abbiesdrivingschool/',
    accent: '#010101',
    accentLight: '#69C9D0',
  },
]

const webProjects = [
  {
    tag: 'Live Website · 2025',
    client: 'Petro Z Limited',
    title: 'Petro Z Solutions',
    desc: 'Designed and developed the full company website for Petro Z Limited. Covers services, company profile and contact. Clean and professional.',
    tools: ['React', 'CSS'],
    link: 'https://petrozsolutions.com/',
    preview: '/images/preview_petroz.png',
  },
  {
    tag: 'Live Web App · 2025',
    client: 'ETrac Zambia',
    title: 'eTrac: Device Protection Platform',
    desc: 'Register, verify and protect your devices. Phones, laptops and more. ETrac helps users secure what matters most and track ownership across Zambia.',
    tools: ['React', 'Django', 'PostgreSQL'],
    link: 'https://etrac-zambia.up.railway.app/',
    preview: '/images/preview_etrac.png',
  },
  {
    tag: 'Live System · 2025',
    client: 'Petro Z Limited',
    title: 'Inventory Management System',
    desc: 'Custom inventory system for managing stock, products and supply chain operations. Built for daily business use with real-time data and reporting.',
    tools: ['Python', 'Django', 'SQL'],
    link: 'https://lightgray-vulture-223146.hostingersite.com/login.php',
    preview: '/images/preview_inventory.png',
  },
  {
    tag: 'Live Website · 2025',
    client: 'RIS Zambia',
    title: 'RIS-ZA',
    desc: 'Designed and developed the full website for RIS Zambia. Clean, professional and fully live.',
    tools: ['React', 'CSS'],
    link: 'https://ris-za.com/',
    preview: '/images/preview_ris.png',
  },
  {
    tag: 'In Progress · 2026',
    client: 'Petro Z Limited',
    title: 'Fuel Marker Tracking System',
    desc: 'Fuel marker tracking platform monitoring compliance across distribution and retail points in Zambia. Currently in active development.',
    tools: ['React', 'Django', 'SQL'],
    wip: true,
  },
]

export default function Work() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="work" style={{ padding: '120px 0', background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>

        {/* ── DESIGN WORK ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48, borderBottom: '1px solid var(--border)', paddingBottom: 24 }}
        >
          <div>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.03em', marginBottom: 6 }}>Design Work</h2>
            <p style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Campaigns, branding & creative direction</p>
          </div>
          <span style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>{designProjects.length} projects</span>
        </motion.div>

        {/* Design grid — masonry */}
        <div style={{ columns: 2, columnGap: 24 }} className="work-grid">
          {designProjects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
              onClick={() => setSelected(p)}
              style={{
                breakInside: 'avoid',
                marginBottom: 24,
                cursor: 'pointer',
                background: 'var(--white)',
                border: '1px solid var(--border)',
                overflow: 'hidden',
                borderRadius: 4,
              }}
              whileHover={{ y: -4 }}
            >
              <div style={{ overflow: 'hidden', aspectRatio: p.size === 'large' ? '16/10' : '4/3', background: '#E8E5E2' }}>
                <motion.img
                  src={p.img}
                  alt={p.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <div style={{ padding: '20px 24px 24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>{p.tag}</span>
                  <span style={{ fontSize: '0.72rem', color: 'var(--muted)', background: 'var(--bg2)', padding: '3px 10px', borderRadius: 2 }}>{p.client}</span>
                </div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: 8, letterSpacing: '-0.01em' }}>{p.title}</h3>
                <p style={{ fontSize: '0.83rem', color: 'var(--mid)', lineHeight: 1.65, marginBottom: 14, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{p.desc}</p>
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                  {p.tools.map(t => (
                    <span key={t} style={{ fontSize: '0.72rem', color: 'var(--muted)', border: '1px solid var(--border)', padding: '3px 8px', borderRadius: 2 }}>{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Brands marquee */}
        <div style={{ marginTop: 56, paddingTop: 40, borderTop: '1px solid var(--border)', marginBottom: 96, overflow: 'hidden' }}>
          <p style={{ fontSize: '0.72rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 24, fontFamily: 'Space Grotesk' }}>Brands</p>
          <div style={{ position: 'relative', overflow: 'hidden' }}>
            {/* Fade edges */}
            <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 80, background: 'linear-gradient(to right, var(--bg), transparent)', zIndex: 2, pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: 80, background: 'linear-gradient(to left, var(--bg), transparent)', zIndex: 2, pointerEvents: 'none' }} />
            <motion.div
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
              style={{ display: 'flex', gap: 0, width: 'max-content' }}
            >
              {[...['TECNO', 'MTN', 'Infinix', 'Mukuru', 'ZICB', 'Egatee', 'itel', 'betPawa', 'Infratel'], ...['TECNO', 'MTN', 'Infinix', 'Mukuru', 'ZICB', 'Egatee', 'itel', 'betPawa', 'Infratel']].map((b, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 0, padding: '0 32px' }}>
                  <span style={{
                    fontSize: '1rem', fontWeight: 700,
                    color: 'var(--mid)', fontFamily: 'Space Grotesk',
                    letterSpacing: '-0.01em', whiteSpace: 'nowrap',
                  }}>{b}</span>
                  <span style={{ marginLeft: 32, width: 5, height: 5, borderRadius: '50%', background: '#E8480A', display: 'inline-block', flexShrink: 0 }} />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* ── DIGITAL MARKETING ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ borderBottom: '1px solid var(--border)', paddingBottom: 24, marginBottom: 48 }}
        >
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.03em', marginBottom: 6 }}>Digital Marketing</h2>
          <p style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Social media growth & community management</p>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 96 }}>
          {socialProjects.map((p, i) => (
            <SocialCard key={i} p={p} i={i} />
          ))}
        </div>

        {/* ── WEB DEVELOPMENT ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ borderBottom: '1px solid var(--border)', paddingBottom: 24, marginBottom: 48 }}
        >
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.03em', marginBottom: 6 }}>Web Development</h2>
          <p style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>Live systems, web apps & websites</p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }} className="web-grid">
          {webProjects.map((p, i) => (
            <WebCard key={i} p={p} i={i} />
          ))}
        </div>
      </div>

      {/* Design project modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.75)', zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              onClick={e => e.stopPropagation()}
              style={{ background: 'var(--white)', maxWidth: 720, width: '100%', maxHeight: '90vh', overflowY: 'auto', borderRadius: 4 }}
            >
              <img src={selected.img} alt={selected.title} style={{ width: '100%', display: 'block', objectFit: 'cover', objectPosition: 'top', maxHeight: 420 }} />
              <div style={{ padding: 32 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
                  <span style={{ fontSize: '0.78rem', color: 'var(--muted)' }}>{selected.tag} · {selected.client}</span>
                  <button onClick={() => setSelected(null)} style={{ fontSize: '1.4rem', color: 'var(--muted)', cursor: 'pointer', lineHeight: 1 }}>×</button>
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: 16, letterSpacing: '-0.02em' }}>{selected.title}</h3>
                <p style={{ color: 'var(--mid)', lineHeight: 1.8, fontSize: '0.92rem', marginBottom: 20 }}>{selected.desc}</p>
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                  {selected.tools.map(t => (
                    <span key={t} style={{ fontSize: '0.8rem', border: '1px solid var(--border)', padding: '4px 10px', borderRadius: 2 }}>{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 640px) {
          .work-grid { columns: 1 !important; }
          .web-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 768px) {
          .social-card { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
