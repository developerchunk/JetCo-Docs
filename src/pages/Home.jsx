import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaBox, FaPalette, FaGlobe, FaShieldAlt } from 'react-icons/fa'
import components from '../data/components'
import './Home.css'

const featured = [
  // Charts - Featured first
  'pie-chart',
  'column-bar-chart',
  'extended-column-bar-chart',
  'group-column-bar-chart',
  'line-graph',
  'multi-line-graph',
  'candlestick-chart',
  // Cards
  'ticket-card',
  'curved-card',
  // Steppers
  'vertical-stepper',
  'horizontal-stepper',
  'compact-horizontal-stepper',
  // Buttons & Interactions
  'switch-button',
  'animated-search-bar',
  'radial-floating-action-button',
  'stack-floating-action-button',
  'morph-floating-action-button',
  // Pickers
  'wheel-date-picker',
  'wheel-time-picker',
  'wheel-date-time-picker',
]

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.4, ease: 'easeOut' },
  }),
}

export default function Home() {
  return (
    <div className="home">
      {/* Hero */}
      <section className="home__hero">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="badge" style={{ marginBottom: '0.75rem', display: 'inline-flex' }}>
            Open Source · Apache 2.0
          </span>
          <h1 className="home__title">
            JetCo <span className="home__title-accent">Docs</span>
          </h1>
          <p className="home__subtitle">
            A modern Jetpack Compose &amp; Kotlin Multiplatform UI component library
            featuring <strong>Charts</strong>, <strong>Cards</strong>, <strong>Steppers</strong>,  
            <strong> Pickers</strong>, and more.
          </p>
          <div className="home__actions">
            <Link to="/getting-started" className="home__btn home__btn--primary">
              Get Started
            </Link>
            <a
              href="https://github.com/developerchunk/JetCo"
              target="_blank"
              rel="noopener noreferrer"
              className="home__btn home__btn--secondary"
            >
              GitHub
            </a>
          </div>
        </motion.div>
      </section>

      {/* Info cards */}
      <section className="home__info">
        {[
          {
            icon: <FaBox />,
            title: 'Easy Integration',
            desc: 'Add a single Gradle dependency — works with Android and KMP projects out of the box.',
          },
          {
            icon: <FaPalette />,
            title: 'Fully Customizable',
            desc: 'Every component exposes detailed config classes with sensible defaults and full override support.',
          },
          {
            icon: <FaGlobe />,
            title: 'Multiplatform',
            desc: 'Target Android, iOS, Desktop (JVM), Web (JS & WASM) from a single codebase.',
          },
        ].map((card, i) => (
          <motion.div
            key={card.title}
            className="home__info-card"
            custom={i}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <span className="home__info-icon">{card.icon}</span>
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* Platform support */}
      <section className="home__platforms">
        <h2>Platform Support</h2>
        <div className="home__platform-grid">
          {[
            { name: 'Android', version: 'API 21+' },
            { name: 'iOS', version: '11+' },
            { name: 'JVM', version: '11+' },
            { name: 'JS', version: 'ES2015+' },
            { name: 'WASM', version: '1.0' },
          ].map((p) => (
            <div key={p.name} className="home__platform-chip">
              <strong>{p.name}</strong>
              <span>{p.version}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Component gallery */}
      <section className="home__gallery">
        <h2>Component Gallery</h2>
        <p className="home__gallery-sub">
          Explore the full set of production-ready UI components.
        </p>
        <div className="home__gallery-grid">
          {featured.map((id, i) => {
            const comp = components[id]
            if (!comp) return null
            return (
              <motion.div
                key={id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                variants={fadeUp}
              >
                <Link to={`/components/${id}`} className="home__gallery-card">
                  {comp.image ? (
                    <div className="home__gallery-img-wrapper">
                      <img src={comp.image} alt={comp.name} loading="lazy" />
                    </div>
                  ) : (
                    <div className="home__gallery-placeholder">
                      <span>{comp.name[0]}</span>
                    </div>
                  )}
                  <div className="home__gallery-card-body">
                    <h4>{comp.name}</h4>
                    <span className="badge badge--outline">{comp.category}</span>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* Quick link: Security */}
      <section className="home__quick-links">
        <Link to="/security" className="home__quick-link-card">
          <FaShieldAlt className="home__quick-link-icon" />
          <div>
            <h4>Security</h4>
            <p>Artifact verification, signing keys, and vulnerability reporting.</p>
          </div>
        </Link>
      </section>
    </div>
  )
}
