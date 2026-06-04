import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import ContactForm from '../components/ContactForm'
import './Contact.css'

// ── data ──────────────────────────────────────────────────────────────────────
const contactInfo = [
  { icon: '📧', label: 'Email',   value: 'hello@portfolix.tech',           href: 'mailto:hello@portfolix.tech' },
  { icon: '📞', label: 'Phone',   value: '079947 21792',              href: '079947 21792' },
  { icon: '📍', label: 'Address', value: 'Ground Floor, KUBZ, 2115, Padamugal - Palachuvadu Rd, Satellite Twp, Padamughal, Kakkanad, Kerala 682030', href: '#' },
  { icon: '🕐', label: 'Hours',   value: 'Mon–Fri, 9:30am–6pm IST',           href: null },
]

const faqs = [
  { q: 'How long does a typical project take?', a: 'MVPs in 4–8 weeks; full products in 3–6 months depending on scope.' },
  { q: 'Do you work with early-stage startups?', a: 'Absolutely. We love helping founders turn ideas into shippable products quickly.' },
  { q: 'What does the discovery call cover?', a: 'Goals, timeline, budget, tech stack, and whether we\'re a good mutual fit.' },
]

// ── sub-components ────────────────────────────────────────────────────────────
function FaqItem({ q, a, index }) {
  return (
    <motion.div
      className="faq-item"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <h4>{q}</h4>
      <p>{a}</p>
    </motion.div>
  )
}

// ── page ──────────────────────────────────────────────────────────────────────
export default function Contact() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroY       = useTransform(scrollYProgress, [0, 1], [0, 80])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0])

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
          style={{ bottom: '-50px', top: 'auto', left: '40%', background: 'radial-gradient(circle, rgba(255,107,107,0.1) 0%, transparent 70%)' }}
        />
        <motion.div className="container" style={{ y: heroY, opacity: heroOpacity }}>
          <motion.p className="section-label" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            Get In Touch
          </motion.p>
          <motion.h1 className="page-hero-title" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, ease: [0.22, 1, 0.36, 1] }}>
            Let's Build Something <span className="gradient-text">Together</span>
          </motion.h1>
          <motion.p className="page-hero-sub" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.32 }}>
            Got a project in mind? We'd love to hear about it. Drop us a message or book a free discovery call.
          </motion.p>

          {/* animated response-time promise */}
          <motion.div
            className="response-promise"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <span className="rp-dot" />
            We typically respond within <strong>2 business hours</strong>
          </motion.div>
        </motion.div>
      </section>

      {/* ── Contact Body ── */}
      <section className="section contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Info column */}
            <motion.div
              className="contact-info-col"
              initial={{ opacity: 0, x: -36 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="contact-heading">Say Hello 👋</h2>
              <p className="contact-sub">
                Whether you're ready to start a project or just want to explore possibilities — we're all ears.
              </p>

              <div className="contact-cards">
                {contactInfo.map(({ icon, label, value, href }, i) => (
                  <motion.div
                    key={label}
                    className="contact-card"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.09, duration: 0.5 }}
                    whileHover={{ x: 6, transition: { duration: 0.2 } }}
                  >
                    <motion.span
                      className="cc-icon"
                      whileHover={{ scale: 1.15, rotate: 5, transition: { type: 'spring', stiffness: 300 } }}
                    >
                      {icon}
                    </motion.span>
                    <div>
                      <p className="cc-label">{label}</p>
                      {href ? (
                        <a href={href} className="cc-value">{value}</a>
                      ) : (
                        <p className="cc-value">{value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="contact-availability"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.45, type: 'spring', stiffness: 180 }}
              >
                <span className="avail-dot" />
                <span>Currently available for new projects</span>
              </motion.div>

              {/* FAQ mini-section */}
              <div className="contact-faq">
                <p className="faq-label">Quick Answers</p>
                {faqs.map(({ q, a }, i) => <FaqItem key={q} q={q} a={a} index={i} />)}
              </div>
            </motion.div>

            {/* Form column */}
            <motion.div
              className="contact-form-col"
              initial={{ opacity: 0, x: 36 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="form-wrapper">
                <h3>Send a Message</h3>
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Map ── */}
      <section className="section map-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="section-label" style={{ marginBottom: 8 }}>Find Us</p>
            <h2 className="section-title" style={{ marginBottom: 32 }}>
              Our <span className="gradient-text">Location</span>
            </h2>
            <div className="map-container">
              <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.588782771417!2d76.31529417462914!3d9.968129890135652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b087329e6b961c9%3A0x48489a8a24c3c933!2sMathewsons%20Gateway!5e0!3m2!1sen!2sin!4v1780509952346!5m2!1sen!2sin"
              width="60%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
              <div className="map-overlay-badge">
                <span role="img" aria-label="pin">📍</span>
                <div>
                  <p>Portfolix Tech </p>
                  <span>Mathewsons Gateway, Vytila</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
