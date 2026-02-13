import { Link } from 'react-router-dom'
import { FaGithub, FaHeart } from 'react-icons/fa'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__divider" />

      <div className="footer__content">
        {/* Top row: links + social */}
        <div className="footer__top">
          <div className="footer__links">
            <a
              href="https://github.com/developerchunk/JetCo/blob/main/CONTRIBUTING.md"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contributing to JetCo
            </a>
            <span className="footer__sep">|</span>
            <a
              href="https://github.com/developerchunk/JetCo/releases"
              target="_blank"
              rel="noopener noreferrer"
            >
              Releases
            </a>
            <span className="footer__sep">|</span>
            <Link to="/security">Security</Link>
          </div>

          <div className="footer__social">
            <a
              href="https://github.com/developerchunk/JetCo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="footer__social-link"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        {/* License */}
        <div className="footer__license">
          JetCo is licensed under the{' '}
          <a
            href="https://github.com/developerchunk/JetCo/blob/main/LICENSE"
            target="_blank"
            rel="noopener noreferrer"
          >
            Apache 2.0 License
          </a>
          .
        </div>

        {/* Bottom row: branding */}
        <div className="footer__bottom">
          <div className="footer__brand">
            <span>
              Supported and developed by{' '}
              <a
                href="https://github.com/developerchunk"
                target="_blank"
                rel="noopener noreferrer"
              >
                Developer Chunk
              </a>{' '}
              (Developer String)
            </span>
          </div>
          <div className="footer__credit">
            Website built with <FaHeart className="footer__heart" /> by{' '}
            <a href="https://claude.ai" target="_blank" rel="noopener noreferrer">
              Claude
            </a>{' '}
            and{' '}
            <a href="https://github.com/features/copilot" target="_blank" rel="noopener noreferrer">
              Copilot
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
