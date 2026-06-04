import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'motion/react'
import './Navbar.css'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on route change
  useEffect(() => { setOpen(false) }, [])

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="navbar-inner">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <span className="logo-icon">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <rect width="28" height="28" rx="8" fill="url(#logoGrad)" />
              <path d="M7 14L14 7L21 14L14 21L7 14Z" fill="white" opacity="0.9" />
              <path d="M14 10L18 14L14 18L10 14L14 10Z" fill="url(#logoGrad2)" />
              <defs>
                <linearGradient id="logoGrad" x1="0" y1="0" x2="28" y2="28">
                  <stop stopColor="#dc2626" />
                  <stop offset="1" stopColor="#ff3b3b" />
                </linearGradient>
                <linearGradient id="logoGrad2" x1="0" y1="0" x2="28" y2="28">
                  <stop stopColor="#dc2626" />
                  <stop offset="1" stopColor="#ff3b3b" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span className="logo-text">Portfolix<span className="logo-dot">.</span></span>
        </Link>

        {/* Desktop Links */}
        <ul className="navbar-links">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <NavLink to={to} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} end={to === '/'}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="navbar-cta">
          <Link to="/contact" className="btn-primary">Get Started</Link>
        </div>

        {/* Hamburger */}
        <button className="hamburger" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <span className={`ham-line ${open ? 'open' : ''}`} />
          <span className={`ham-line ${open ? 'open' : ''}`} />
          <span className={`ham-line ${open ? 'open' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {navLinks.map(({ to, label }, i) => (
              <motion.div
                key={to}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
              >
                <NavLink to={to} className={({ isActive }) => isActive ? 'mob-link active' : 'mob-link'} onClick={() => setOpen(false)} end={to === '/'}>
                  {label}
                </NavLink>
              </motion.div>
            ))}
            <Link to="/contact" className="btn-primary" style={{ marginTop: 12 }} onClick={() => setOpen(false)}>Get Started</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
