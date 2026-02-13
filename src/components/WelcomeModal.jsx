import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaPalette, FaTimes, FaSwatchbook, FaSave } from 'react-icons/fa'
import { IoSparkles } from 'react-icons/io5'
import './WelcomeModal.css'

export default function WelcomeModal({ onCustomize }) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Check if user has visited before
    const hasVisited = localStorage.getItem('jetco-docs-visited')
    if (!hasVisited) {
      // Show modal after a brief delay
      setTimeout(() => setIsOpen(true), 500)
    }
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    localStorage.setItem('jetco-docs-visited', 'true')
  }

  const handleCustomize = () => {
    handleClose()
    onCustomize()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <div
            className="welcome-overlay"
            onClick={handleClose}
          />
          <motion.div
            className="welcome-popup"
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.2 }}
          >
            <div className="welcome-header">
              <div className="welcome-header-icon">
                <FaPalette />
              </div>
              <h3 className="welcome-title">Welcome to JetCo Docs</h3>
              <button className="welcome-close" onClick={handleClose} aria-label="Close">
                <FaTimes />
              </button>
            </div>
            
            <p className="welcome-description">
              Make this documentation site your own! Customize the color scheme, choose from 
              11 beautiful background patterns, and adjust the opacity to create your perfect 
              reading experience.
            </p>

            <div className="welcome-features">
              <div className="welcome-feature">
                <div className="welcome-feature-icon">
                  <FaSwatchbook />
                </div>
                <span>12 Color Presets + Custom Colors</span>
              </div>
              <div className="welcome-feature">
                <div className="welcome-feature-icon">
                  <IoSparkles />
                </div>
                <span>11 Abstract Patterns</span>
              </div>
              <div className="welcome-feature">
                <div className="welcome-feature-icon">
                  <FaSave />
                </div>
                <span>Saved Locally Forever</span>
              </div>
            </div>

            <div className="welcome-actions">
              <button className="welcome-btn welcome-btn-primary" onClick={handleCustomize}>
                <FaPalette />
                Customize Theme
              </button>
              <button className="welcome-btn welcome-btn-secondary" onClick={handleClose}>
                Continue with Defaults
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
