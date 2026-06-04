import { motion } from "motion/react";
import { Link } from "react-router-dom";
import "./Hero.css";
import Balatro from "./Balatro";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  return (
    <section className="hero grid-bg">
      {/* Balatro Background */}
      <div className="balatro-bg">
        <Balatro
        mouseInteraction={true}
        isRotate={true}
        pixelFilter={850}
        color1="#dc2626"
        color2="#1a1a1a"
        color3="#050505"
        contrast={2.2}
        lighting={0.12}
        spinAmount={0.12}
        spinSpeed={0.2}
        spinRotation={-0.4}
      />
      </div>

      {/* Animated background orbs */}
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />
      <div className="hero-orb hero-orb-3" />

      {/* Animated grid lines */}
      <div className="hero-grid-lines">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="grid-line"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{
              duration: 1.2,
              delay: i * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        ))}
      </div>

      <div className="container hero-container">
        <motion.div className="hero-badge" {...fadeUp(0.1)}>
          <span className="badge-dot" />
          Available for new projects
        </motion.div>

        <motion.h1 className="hero-title" {...fadeUp(0.2)}>
          We Build
          <br />
          <span className="gradient-text">Digital Products</span>
          <br />
          That Matter
        </motion.h1>

        <motion.p className="hero-sub" {...fadeUp(0.35)}>
          Portfolix Tech is a full-service digital studio crafting web apps,
          mobile experiences, and AI-powered solutions for ambitious companies
          worldwide.
        </motion.p>

        <motion.div className="hero-actions" {...fadeUp(0.45)}>
          <Link to="/services" className="btn-primary">
            Explore Services
          </Link>

          <Link to="/about" className="btn-outline">
            Meet the Team
          </Link>
        </motion.div>

        <motion.div
          className="hero-stats"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {[
            { val: "150+", label: "Projects Delivered" },
            { val: "80+", label: "Happy Clients" },
            { val: "40+", label: "Interns Trained" },
            { val: "5★", label: "Average Rating" },
          ].map(({ val, label }) => (
            <div key={label} className="stat-item">
              <span className="stat-val">{val}</span>
              <span className="stat-label">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}