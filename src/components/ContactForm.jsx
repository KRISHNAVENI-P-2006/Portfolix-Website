import { useState } from 'react'
import { motion } from 'motion/react'
import './ContactForm.css'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    await new Promise(r => setTimeout(r, 1400))
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <motion.div
        className="form-success"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="success-icon">✓</div>
        <h3>Message Sent!</h3>
        <p>Thanks for reaching out. We'll get back to you within 24 hours.</p>
        <button className="btn-outline" onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }) }}>
          Send Another
        </button>
      </motion.div>
    )
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label>Full Name</label>
          <input name="name" value={form.name} onChange={handleChange} placeholder="John Doe" required />
        </div>
        <div className="form-group">
          <label>Email Address</label>
          <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="john@example.com" required />
        </div>
      </div>
      <div className="form-group">
        <label>Subject</label>
        <input name="subject" value={form.subject} onChange={handleChange} placeholder="Project Inquiry" required />
      </div>
      <div className="form-group">
        <label>Message</label>
        <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell us about your project..." rows={5} required />
      </div>
      <button type="submit" className={`btn-primary form-submit ${loading ? 'loading' : ''}`} disabled={loading}>
        {loading ? (
          <span className="spinner" />
        ) : (
          <>
            Send Message
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 8L14 2L8 14L7 9L2 8Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
            </svg>
          </>
        )}
      </button>
    </form>
  )
}
