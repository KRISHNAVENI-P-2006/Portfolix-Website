import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring, useInView } from 'motion/react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import ServiceCard from '../components/ServiceCard'
import './Home.css'

// ── data ──────────────────────────────────────────────────────────────────────
const services = [
  {
    icon: '🌐',
    title: 'Web Development',
    description: 'Full-stack web apps with React, Next.js, and Node.js. Fast, scalable, and beautifully crafted.',
    tags: ['React', 'Next.js', 'Node.js'],
    accent: '#6c63ff',
  },
  {
    icon: '📱',
    title: 'Mobile Apps',
    description: 'Cross-platform iOS and Android apps built with Flutter and React Native.',
    tags: ['Flutter', 'React Native'],
    accent: '#00d4ff',
  },
  {
    icon: '🤖',
    title: 'AI & ML Solutions',
    description: 'Intelligent systems powered by cutting-edge machine learning and deep learning models.',
    tags: ['Python', 'TensorFlow', 'GPT'],
    accent: '#a78bfa',
  },
  {
    icon: '🎨',
    title: 'UI/UX Design',
    description: 'Pixel-perfect designs with Figma. We craft intuitive interfaces users genuinely love.',
    tags: ['Figma', 'Prototyping'],
    accent: '#f59e0b',
  },
]

const whyUs = [
  { icon: '⚡', title: 'Fast Delivery',        desc: 'We ship MVPs in weeks, not months. Agile at heart.' },
  { icon: '🔒', title: 'Secure by Default',    desc: 'Security baked in from day one, not bolted on at the end.' },
  { icon: '📈', title: 'Built to Scale',        desc: 'Architecture designed for growth from 100 to 1 M users.' },
  { icon: '🤝', title: 'Dedicated Support',    desc: 'Real humans available to support you post-launch, always.' },
  { icon: '✨', title: 'Award-winning Design', desc: 'Interfaces that win hearts before users even read a word.' },
  { icon: '🌍', title: 'Global Reach',          desc: 'Clients across 20+ countries, delivered without timezone friction.' },
]

const marqueeItems = [
  'Web Development', 'Mobile Apps', 'AI & ML', 'UI/UX Design',
  'React', 'Flutter', 'Next.js', 'Python', 'Figma', 'Node.js',
]

// ── reusable animated counter ─────────────────────────────────────────────────
function AnimatedNumber({ value, suffix = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const num = parseInt(value)
  const spring = useSpring(isInView ? num : 0, { stiffness: 60, damping: 20 })
  // If value is non-numeric (e.g. "5★") just show it directly
  if (isNaN(num)) {
    return <span ref={ref}>{value}</span>
  }
  return (
    <span ref={ref}>
      <motion.span>{spring.get() | 0}</motion.span>{suffix}
    </span>
  )
}

// ── marquee strip ─────────────────────────────────────────────────────────────
function Marquee() {
  const items = [...marqueeItems, ...marqueeItems]
  return (
    <div className="marquee-outer" aria-hidden="true">
      <motion.div
        className="marquee-track"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 22, ease: 'linear', repeat: Infinity }}
      >
        {items.map((item, i) => (
          <span key={i} className="marquee-item">
            {item} <span className="marquee-dot">◆</span>
          </span>
        ))}
      </motion.div>
    </div>
  )
}

// ── main page ─────────────────────────────────────────────────────────────────
export default function Home() {
  const ctaRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: ctaRef, offset: ['start end', 'end start'] })
  const ctaY = useTransform(scrollYProgress, [0, 1], [60, -60])

  return (
    <motion.div
      className="page-wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <Hero />

      {/* ── scrolling marquee ── */}
      <Marquee />

      {/* ── Services Preview ── */}
      <section className="section home-services">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="section-label">What We Do</p>
            <h2 className="section-title">
              Services That <span className="gradient-text">Drive Growth</span>
            </h2>
            <p className="section-sub">
              From strategy to code to launch — we're your end-to-end digital partner.
            </p>
          </motion.div>

          <div className="services-grid">
            {services.map((s, i) => (
              <ServiceCard key={s.title} {...s} delay={i * 0.1} />
            ))}
          </div>

          <motion.div
            className="services-cta-row"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.45, duration: 0.5 }}
          >
            <Link to="/services" className="btn-outline">
              View All Services
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Why Choose Portfolix ── */}
      <section className="section why-section">
        <div className="why-bg" />
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="section-label">Why Portfolix</p>
            <h2 className="section-title">
              The Studio Behind <span className="gradient-text">Great Products</span>
            </h2>
          </motion.div>

          <div className="why-grid">
            {whyUs.map(({ icon, title, desc }, i) => (
              <motion.div
                key={title}
                className="why-card"
                initial={{ opacity: 0, y: 28, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -5, transition: { duration: 0.25 } }}
              >
                <motion.span
                  className="why-icon"
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 + 0.2, type: 'spring', stiffness: 200 }}
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

      {/* ── Metrics band ── */}
      <section className="metrics-band">
        <div className="metrics-line" />
        <div className="container metrics-inner">
          {[
            { val: '150', suffix: '+', label: 'Projects Delivered' },
            { val: '80',  suffix: '+', label: 'Happy Clients' },
            { val: '40',  suffix: '+', label: 'Interns Trained' },
            { val: '20',  suffix: '+', label: 'Countries Served' },
          ].map(({ val, suffix, label }, i) => (
            <motion.div
              key={label}
              className="metric-item"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.55 }}
            >
              <span className="metric-val gradient-text">
                <AnimatedNumber value={val} suffix={suffix} />
              </span>
              <span className="metric-label">{label}</span>
            </motion.div>
          ))}
        </div>
        <div className="metrics-line" />
      </section>

      {/* ── CTA Section ── */}
      <section className="section cta-section" ref={ctaRef}>
        <div className="cta-glow" />
        <div className="container">
          <motion.div
            className="cta-box"
            style={{ y: ctaY }}
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: ctaY }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* animated ring */}
            <div className="cta-ring cta-ring-1" />
            <div className="cta-ring cta-ring-2" />

            <p className="section-label" style={{ textAlign: 'center' }}>Ready to Build?</p>
            <h2 className="cta-title">
              Let's Turn Your Idea
              <br />
              <span className="gradient-text">Into Reality</span>
            </h2>
            <p className="cta-sub">Book a free 30-minute discovery call. No strings attached.</p>

            <motion.div
              className="cta-actions"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <Link to="/contact" className="btn-primary">
                Start Your Project
                <motion.svg
                  width="16" height="16" viewBox="0 0 16 16" fill="none"
                  initial={{ x: 0 }}
                  whileHover={{ x: 3 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </motion.svg>
              </Link>
              <Link to="/about" className="btn-outline">Learn More About Us</Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
