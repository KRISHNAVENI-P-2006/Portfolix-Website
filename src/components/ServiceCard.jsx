import { motion } from 'motion/react'
import './ServiceCard.css'

export default function ServiceCard({ icon, title, description, tags = [], delay = 0, accent }) {
  return (
    <motion.div
      className="service-card"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      style={{ '--card-accent': accent || 'var(--accent)' }}
    >
      <div className="sc-top">
        <div className="sc-icon">{icon}</div>
        <div className="sc-glow" />
      </div>
      <h3 className="sc-title">{title}</h3>
      <p className="sc-desc">{description}</p>
      {tags.length > 0 && (
        <div className="sc-tags">
          {tags.map(tag => <span key={tag} className="sc-tag">{tag}</span>)}
        </div>
      )}
      <div className="sc-arrow">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M3 9H15M15 9L10 4M15 9L10 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </div>
    </motion.div>
  )
}
