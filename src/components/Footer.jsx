import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-glow" />
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <svg width="32" height="32" viewBox="0 0 28 28" fill="none">
                <rect width="28" height="28" rx="8" fill="url(#fLogoGrad)" />
                <path d="M7 14L14 7L21 14L14 21L7 14Z" fill="white" opacity="0.9" />
                <path d="M14 10L18 14L14 18L10 14L14 10Z" fill="url(#fLogoGrad2)" />
                <defs>
                  <linearGradient id="fLogoGrad" x1="0" y1="0" x2="28" y2="28">
                    <stop stopColor="#dc2626" /><stop offset="1" stopColor="#ff3b3b" />
                  </linearGradient>
                  <linearGradient id="fLogoGrad2" x1="0" y1="0" x2="28" y2="28">
                    <stop stopColor="#dc2626" /><stop offset="1" stopColor="#ff3b3b" />
                  </linearGradient>
                </defs>
              </svg>
              <span>Portfolix<span style={{ color: 'var(--accent)' }}>.</span></span>
            </Link>
            <p className="footer-tagline">Building tomorrow's digital experiences, today. We turn bold ideas into powerful products.</p>
            <div className="footer-socials">
              {['X', 'Li', 'Gh', 'Dr'].map((s) => (
                <a key={s} href="#" className="social-btn">{s}</a>
              ))}
            </div>
          </div>

          <div className="footer-links-group">
            <div className="footer-col">
              <h4>Company</h4>
              <Link to="/about">About Us</Link>
              <Link to="/services">Services</Link>
              <Link to="/contact">Contact</Link>
              <a href="#">Careers</a>
            </div>
            <div className="footer-col">
              <h4>Services</h4>
              <a href="#">Web Development</a>
              <a href="#">Mobile Apps</a>
              <a href="#">AI & ML</a>
              <a href="#">UI/UX Design</a>
            </div>
            <div className="footer-col">
              <h4>Contact</h4>
              <a href="mailto:hello@portfolix.tech">hello@portfolix.tech</a>
              <a href="tel:+11234567890">79947 21792</a>
              <span>Padamughal ,Kakkanad ,Kerala</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Portfolix Tech. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
