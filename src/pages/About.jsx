import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'motion/react'
import './About.css'

// ── data ──────────────────────────────────────────────────────────────────────
const team = [
  { name: 'Athul Anil',   role: 'CEO',              emoji: '👨‍💼', bio: '6+ years of experience' },
  { name: 'Fahad P M',    role: 'CTO',              emoji: '👩‍💻', bio: '2+ years of experience' },
  { name: 'Tinu Rani A S',role: 'COO',              emoji: '🎨', bio: '2+ years of experience' },
  { name: 'Parvathy M R', role: 'Developer',        emoji: '⚙️', bio: 'Backend developer with 1+ years of experience' },
  { name: 'Malavika',     role: 'BDE',              emoji: '📱', bio: 'Seasoned Pro' },
  { name: 'Mahadev',      role: 'Flutter Developer',emoji: '🤖', bio: '1+ years of experience' },
]

const values = [
  { icon: '🚀', title: 'Bias for Action',        desc: 'We ship fast, learn faster, and iterate relentlessly.' },
  { icon: '💡', title: 'Radical Transparency',   desc: 'No fluff, no buzzwords. Honest communication, always.' },
  { icon: '♾️', title: 'Continuous Growth',      desc: 'Every project, every sprint is a chance to level up.' },
  { icon: '🌱', title: 'Nurture Talent',         desc: 'We invest deeply in our interns and junior engineers.' },
]

const milestones = [
  { year: '2020', event: 'Founded in a SF co-working space with 3 engineers.' },
  { year: '2021', event: 'Crossed 25 clients and launched our mobile practice.' },
  { year: '2022', event: 'Grew to 15 people; opened AI & ML service line.' },
  { year: '2023', event: 'Awwwards recognition. Expanded to 20+ countries.' },
  { year: '2024', event: '150+ products shipped. 25-person team worldwide.' },
]

// ── sub-components ────────────────────────────────────────────────────────────
function FadeUp({ children, delay = 0, className }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

function ParallaxOrb({ style }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [-40, 40])
  return <motion.div ref={ref} style={{ ...style, y }} className="about-orb" />
}

// ── page ──────────────────────────────────────────────────────────────────────
export default function About() {
  const heroRef = useRef(null)
  const { scrollYProgress: heroScroll } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroY     = useTransform(heroScroll, [0, 1], [0, 80])
  const heroOpacity = useTransform(heroScroll, [0, 0.7], [1, 0])

  return (
    <motion.div
      className="page-wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* ── Hero ── */}
      <section className="page-hero grid-bg" ref={heroRef}>
        <ParallaxOrb style={{ top: -80, right: -100, width: 500, height: 500,
          background: 'radial-gradient(circle, rgba(108,99,255,0.16) 0%, transparent 70%)', filter: 'blur(40px)' }} />

        <motion.div className="container" style={{ y: heroY, opacity: heroOpacity }}>
          <motion.p className="section-label" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            About Us
          </motion.p>
          <motion.h1 className="page-hero-title" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, ease: [0.22, 1, 0.36, 1] }}>
            We're a Team of<br /><span className="gradient-text">Passionate Builders</span>
          </motion.h1>
          <motion.p className="page-hero-sub" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.32 }}>
            Founded in 2020, Portfolix Tech started as a small dev shop and has grown into a 25-person studio trusted by companies worldwide.
          </motion.p>
        </motion.div>
      </section>

      {/* ── Overview ── */}
      <section className="section about-overview">
        <div className="container">
          <div className="overview-grid">
            <motion.div
              initial={{ opacity: 0, x: -36 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="section-label">Our Story</p>
              <h2 className="section-title">From Startup to <span className="gradient-text">Global Studio</span></h2>
              <p style={{ color: 'var(--text2)', lineHeight: 1.8, marginBottom: 16 }}>
                We started in a small co-working space in San Francisco with three engineers and a vision: to build digital products that actually move the needle for businesses.
              </p>
              <p style={{ color: 'var(--text2)', lineHeight: 1.8, marginBottom: 36 }}>
                Today, we've shipped 150+ products, trained 40+ interns, and partner with clients from startups to enterprises across 20+ countries. Our approach is simple: deep craft, honest collaboration, measurable impact.
              </p>
              <div className="about-stats">
                {[['2020', 'Founded'], ['25+', 'Team Members'], ['150+', 'Projects'], ['20+', 'Countries']].map(([v, l], i) => (
                  <motion.div
                    key={l}
                    className="astat"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                  >
                    <span className="astat-val gradient-text">{v}</span>
                    <span className="astat-label">{l}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Visual cluster */}
            <motion.div
              className="overview-visual"
              initial={{ opacity: 0, x: 36 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              {[
                { cls: 'vc-1', icon: '🌍', text: 'Clients in 20+ Countries' },
                { cls: 'vc-2', icon: '⭐', text: '5-star rated on Clutch' },
                { cls: 'vc-3', icon: '🏆', text: 'Awwwards Winner 2023' },
              ].map(({ cls, icon, text }, i) => (
                <motion.div
                  key={text}
                  className={`visual-card ${cls}`}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.12, type: 'spring', stiffness: 160 }}
                >
                  <span>{icon}</span><p>{text}</p>
                </motion.div>
              ))}
              <motion.div
                className="overview-card-main"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
              >
                <div className="ocm-inner">
                  <p className="ocm-num gradient-text">150+</p>
                  <p className="ocm-label">Products Shipped</p>
                  <p className="ocm-sub">and counting since 2020</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="section timeline-section">
        <div className="container">
          <FadeUp>
            <p className="section-label">Our Journey</p>
            <h2 className="section-title">How We <span className="gradient-text">Got Here</span></h2>
          </FadeUp>
          <div className="timeline">
            {milestones.map(({ year, event }, i) => (
              <motion.div
                key={year}
                className="tl-item"
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="tl-year">{year}</div>
                <div className="tl-node">
                  <motion.div
                    className="tl-dot"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 + 0.25, type: 'spring', stiffness: 300 }}
                  />
                </div>
                <div className="tl-content">{event}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="section mv-section">
        <div className="mv-bg" />
        <div className="container">
          <div className="mv-grid">
            {[
              { label: 'Our Mission', icon: '🎯', title: 'Empower through technology.',
                desc: 'To help ambitious companies solve real problems through thoughtfully designed, expertly built digital products — delivered with speed, care, and integrity.',
                accent: 'var(--accent)' },
              { label: 'Our Vision', icon: '🔭', title: 'A world where great software is universal.',
                desc: 'We envision a future where every business, regardless of size or location, has access to world-class technology — and Portfolix is the studio that makes that possible.',
                accent: 'var(--accent2)' },
            ].map(({ label, icon, title, desc, accent }, i) => (
              <motion.div
                key={label}
                className="mv-card"
                style={{ '--mv-accent': accent }}
                initial={{ opacity: 0, y: 36, rotateX: 8 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * 0.15, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6 }}
              >
                <div className="mv-icon">{icon}</div>
                <p className="mv-label">{label}</p>
                <h3 className="mv-title">{title}</h3>
                <p className="mv-desc">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="section values-section">
        <div className="container">
          <FadeUp>
            <p className="section-label">What We Stand For</p>
            <h2 className="section-title">Core <span className="gradient-text">Values</span></h2>
          </FadeUp>
          <div className="values-grid">
            {values.map(({ icon, title, desc }, i) => (
              <motion.div
                key={title}
                className="value-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              >
                <motion.span
                  className="value-icon"
                  initial={{ rotate: -15, scale: 0.6, opacity: 0 }}
                  whileInView={{ rotate: 0, scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.2, type: 'spring', stiffness: 200 }}
                >
                  {icon}
                </motion.span>
                <h4>{title}</h4>
                <p>{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="section team-section">
        <div className="container">
          <FadeUp className="section-header">
            <p className="section-label">The People</p>
            <h2 className="section-title">Meet the <span className="gradient-text">Team</span></h2>
            <p className="section-sub">A group of thinkers, makers, and relentless problem-solvers.</p>
          </FadeUp>

          <div className="team-grid">
            {team.map(({ name, role, emoji, bio }, i) => (
              <motion.div
                key={name}
                className="team-card"
                initial={{ opacity: 0, y: 32, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.07, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
              >
                <motion.div
                  className="team-avatar"
                  whileHover={{ scale: 1.1, rotate: 5, transition: { type: 'spring', stiffness: 300 } }}
                >
                  {emoji}
                </motion.div>
                <h4 className="team-name">{name}</h4>
                <p className="team-role">{role}</p>
                <p className="team-bio">{bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}
