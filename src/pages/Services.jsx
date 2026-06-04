import { useState, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react'
import './Services.css'

// ── data ──────────────────────────────────────────────────────────────────────
const services = [
  {
    id: 'web',
    icon: '🌐',
    title: 'Web Development',
    accent: '#6c63ff',
    tagline: 'From idea to production, flawlessly.',
    description: "We architect and build full-stack web applications using the latest technologies. Whether it's a SaaS platform, e-commerce site, or internal tool — we make it fast, scalable, and beautiful.",
    features: ['React / Next.js / Vue', 'Node.js / Python backends', 'PostgreSQL / MongoDB / Redis', 'REST & GraphQL APIs', 'AWS / GCP / Vercel deployments', 'CI/CD pipelines'],
    tags: ['React', 'Next.js', 'Node.js', 'TypeScript'],
    badge: 'Most Popular',
  },
  {
    id: 'mobile',
    icon: '📱',
    title: 'Mobile App Development',
    accent: '#00d4ff',
    tagline: 'Native feel, cross-platform reality.',
    description: 'We build iOS and Android apps with Flutter and React Native. High performance, native UI patterns, seamless device integrations — all from a single codebase that cuts your costs in half.',
    features: ['Flutter & React Native', 'iOS & Android deployment', 'Push notifications', 'Offline-first architecture', 'App Store optimization', 'Analytics integration'],
    tags: ['Flutter', 'React Native', 'Swift', 'Kotlin'],
  },
  {
    id: 'ai',
    icon: '🤖',
    title: 'AI & ML Solutions',
    accent: '#a78bfa',
    tagline: 'Intelligence, engineered for your business.',
    description: 'From custom NLP models and computer vision systems to LLM-powered features and recommendation engines — we build AI that delivers measurable business value.',
    features: ['Custom ML model training', 'LLM integration (GPT, Claude, Gemini)', 'Computer vision pipelines', 'NLP & sentiment analysis', 'MLOps & model serving', 'Data engineering'],
    tags: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI'],
    badge: 'Hot',
  },
  {
    id: 'design',
    icon: '🎨',
    title: 'UI/UX Design',
    accent: '#f59e0b',
    tagline: 'Design that delights, converts, retains.',
    description: "We craft interfaces that users love and businesses benefit from. Our design process goes deep — from user research and journey mapping to pixel-perfect Figma files ready for handoff.",
    features: ['User research & interviews', 'Information architecture', 'Wireframing & prototyping', 'High-fidelity Figma designs', 'Design systems & tokens', 'Usability testing'],
    tags: ['Figma', 'Framer', 'Prototyping', 'Design Systems'],
  },
]

const process = [
  { step: '01', title: 'Discovery', desc: 'We listen, ask the right questions, and deeply understand your goals, users, and constraints.' },
  { step: '02', title: 'Strategy',  desc: 'We define scope, architecture, and a roadmap that balances speed with long-term scalability.' },
  { step: '03', title: 'Design',    desc: 'We create wireframes, prototypes, and high-fidelity UI that gets stakeholder sign-off fast.' },
  { step: '04', title: 'Build',     desc: "Agile sprints with weekly demos. You always know what's happening and why." },
  { step: '05', title: 'Launch',    desc: 'Production-grade deployments with monitoring, analytics, and zero-downtime releases.' },
  { step: '06', title: 'Grow',      desc: 'Ongoing iteration based on data, user feedback, and your evolving business needs.' },
]

// ── sub-components ────────────────────────────────────────────────────────────
function ServiceRow({ svc, index }) {
  const [expanded, setExpanded] = useState(false)
  const ref = useRef(null)

  return (
    <motion.div
      ref={ref}
      className="svc-row"
      style={{ '--svc-accent': svc.accent }}
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* left icon */}
      <div className="svc-left">
        <motion.div
          className="svc-icon-wrap"
          whileHover={{ rotate: [0, -8, 8, 0], transition: { duration: 0.5 } }}
        >
          <span className="svc-icon-big">{svc.icon}</span>
        </motion.div>
      </div>

      {/* center */}
      <div className="svc-center">
        <div className="svc-header-row">
          <p className="svc-num">0{index + 1}</p>
          {svc.badge && <span className="svc-badge">{svc.badge}</span>}
        </div>
        <h2 className="svc-title">{svc.title}</h2>
        <p className="svc-tagline">{svc.tagline}</p>
        <p className="svc-desc">{svc.description}</p>
        <div className="svc-tags">
          {svc.tags.map(t => <span key={t} className="svc-tech-tag">{t}</span>)}
        </div>

        {/* expand toggle */}
        <motion.button
          className="svc-expand-btn"
          onClick={() => setExpanded(e => !e)}
          whileTap={{ scale: 0.97 }}
        >
          {expanded ? 'Hide details' : 'Show what\'s included'}
          <motion.svg
            width="14" height="14" viewBox="0 0 14 14" fill="none"
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <path d="M2 5L7 10L12 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </motion.svg>
        </motion.button>

        <AnimatePresence>
          {expanded && (
            <motion.ul
              className="features-list-inline"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              {svc.features.map((f, fi) => (
                <motion.li
                  key={f}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: fi * 0.05 }}
                >
                  <span className="feature-dot" />
                  {f}
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>

      {/* right */}
      <div className="svc-right">
        <h4 className="features-title">What's Included</h4>
        <ul className="features-list">
          {svc.features.map((f, fi) => (
            <motion.li
              key={f}
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: fi * 0.07 + 0.3 }}
            >
              <span className="feature-dot" />{f}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

function ProcessCard({ step, title, desc, index }) {
  return (
    <motion.div
      className="process-card"
      initial={{ opacity: 0, y: 32, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: index * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
    >
      <motion.span
        className="process-step"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.08 + 0.3 }}
      >
        {step}
      </motion.span>
      <h4>{title}</h4>
      <p>{desc}</p>
      <div className="process-accent-bar" />
    </motion.div>
  )
}

// ── page ──────────────────────────────────────────────────────────────────────
export default function Services() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 80])

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
        <div
          className="page-hero-orb"
          style={{ left: '-100px', right: 'auto', background: 'radial-gradient(circle, rgba(0,212,255,0.15) 0%, transparent 70%)' }}
        />
        <motion.div className="container" style={{ y: heroY }}>
          <motion.p className="section-label" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            What We Offer
          </motion.p>
          <motion.h1 className="page-hero-title" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, ease: [0.22, 1, 0.36, 1] }}>
            End-to-End <span className="gradient-text">Digital Services</span>
          </motion.h1>
          <motion.p className="page-hero-sub" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.32 }}>
            From concept to code to launch — every service your product needs, delivered by one team that gives a damn.
          </motion.p>

          {/* quick-nav pills */}
          <motion.div
            className="svc-quicknav"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
          >
            {services.map(s => (
              <a key={s.id} href={`#${s.id}`} className="quicknav-pill" style={{ '--qnav-accent': s.accent }}>
                {s.icon} {s.title}
              </a>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ── Service rows ── */}
      <section className="section services-detail">
        <div className="container">
          {services.map((svc, i) => (
            <div id={svc.id} key={svc.id}>
              <ServiceRow svc={svc} index={i} />
            </div>
          ))}
        </div>
      </section>

      {/* ── Process ── */}
      <section className="section process-section">
        <div className="process-bg" />
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <p className="section-label">How We Work</p>
            <h2 className="section-title">Our <span className="gradient-text">Process</span></h2>
            <p className="section-sub">A proven six-step workflow that keeps projects on track and stakeholders happy.</p>
          </motion.div>

          <div className="process-grid">
            {process.map(({ step, title, desc }, i) => (
              <ProcessCard key={step} step={step} title={title} desc={desc} index={i} />
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}
