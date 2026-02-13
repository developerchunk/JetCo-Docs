import { useState, useEffect, createContext, useContext } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { ThemeProvider, useTheme } from '../context/ThemeContext'
import ThemeCustomizer from './ThemeCustomizer'
import PatternBackground from './PatternBackground'
import WelcomeModal from './WelcomeModal'
import Footer from './Footer'
import navigation from '../data/navigation'
import './Layout.css'

/* ── Platform Context (Android / KMP) ── */
const PlatformContext = createContext()

export function usePlatform() {
  return useContext(PlatformContext)
}

function PlatformProvider({ children }) {
  const [platform, setPlatform] = useState(() => {
    try { return localStorage.getItem('jetco-platform') || 'android' } catch { return 'android' }
  })
  useEffect(() => { try { localStorage.setItem('jetco-platform', platform) } catch {} }, [platform])
  return (
    <PlatformContext.Provider value={{ platform, setPlatform }}>
      {children}
    </PlatformContext.Provider>
  )
}

/* ── Chevron Icon ── */
function ChevronIcon({ expanded }) {
  return (
    <svg
      className={`sidebar__chevron ${expanded ? 'sidebar__chevron--expanded' : ''}`}
      width="14" height="14" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2.5"
      strokeLinecap="round" strokeLinejoin="round"
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  )
}

/* ── Platform Tab Switcher ── */
function PlatformTabs() {
  const { platform, setPlatform } = usePlatform()
  return (
    <div className="platform-tabs">
      <button
        className={`platform-tabs__btn ${platform === 'android' ? 'platform-tabs__btn--active' : ''}`}
        onClick={() => setPlatform('android')}
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48A5.84 5.84 0 0012 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31A5.983 5.983 0 006 7h12c0-2.21-1.2-4.15-2.97-5.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z"/>
        </svg>
        Android
      </button>
      <button
        className={`platform-tabs__btn ${platform === 'kmp' ? 'platform-tabs__btn--active' : ''}`}
        onClick={() => setPlatform('kmp')}
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
          <path d="M2 2h20v20H2V2zm3.17 15.17L12 10.34l6.83 6.83L12 10.34 5.17 17.17z" opacity="0"/>
          <path d="M1.5 1.5h21v21h-21V1.5zm2 2v17h17v-17h-17zm8.5 3L6.5 12l5.5 5.5L17.5 12 12 6.5z"/>
        </svg>
        KMP
      </button>
    </div>
  )
}

/* ── Header ── */
function Header({ onMenuToggle, menuOpen, themeCustomizerOpen, onThemeCustomizerChange }) {
  const { theme, toggle } = useTheme()
  const location = useLocation()
  const [stars, setStars] = useState(null)

  useEffect(() => {
    fetch('https://api.github.com/repos/developerchunk/JetCo')
      .then(res => res.json())
      .then(data => setStars(data.stargazers_count))
      .catch(() => {})
  }, [])

  const isDocsActive = location.pathname === '/' || location.pathname.startsWith('/getting-started') || location.pathname.startsWith('/components')
  const isReferenceActive = location.pathname.startsWith('/reference')
  const isCommunityActive = location.pathname.startsWith('/community')

  return (
    <header className="header">
      <div className="header__left">
        <button className="header__menu-btn" onClick={onMenuToggle} aria-label="Toggle menu">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen
              ? <path d="M18 6L6 18M6 6l12 12" />
              : <><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></>
            }
          </svg>
        </button>
        <NavLink to="/" className="header__logo">
          <svg width="26" height="26" viewBox="0 0 40 40" fill="none">
            <rect width="40" height="40" rx="10" fill="url(#lg)" />
            <text x="50%" y="54%" textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="16" fontWeight="700" fontFamily="Inter, sans-serif">JC</text>
            <defs><linearGradient id="lg" x1="0" y1="0" x2="40" y2="40"><stop stopColor="#6C5CE7" /><stop offset="1" stopColor="#a78bfa" /></linearGradient></defs>
          </svg>
          <span className="header__title">JetCo Docs</span>
        </NavLink>
      </div>

      <nav className="header__nav">
        <NavLink to="/" className={`header__nav-link ${isDocsActive ? 'header__nav-link--active' : ''}`}>
          Docs
        </NavLink>
        <NavLink to="/reference" className={`header__nav-link ${isReferenceActive ? 'header__nav-link--active' : ''}`}>
          Reference
        </NavLink>
        <NavLink to="/community" className={`header__nav-link ${isCommunityActive ? 'header__nav-link--active' : ''}`}>
          Community
        </NavLink>
      </nav>

      <div className="header__right">
        <span className="badge">v1.0.0-beta.10</span>
        <a
          href="https://github.com/developerchunk/JetCo"
          target="_blank"
          rel="noopener noreferrer"
          className="header__github-btn"
          aria-label="GitHub"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
          {stars !== null && (
            <span className="header__github-stars">{stars.toLocaleString()}</span>
          )}
        </a>
        <ThemeCustomizer isOpen={themeCustomizerOpen} onOpenChange={onThemeCustomizerChange} />
        <button className="header__icon-btn" onClick={toggle} aria-label="Toggle theme">
          {theme === 'dark' ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
            </svg>
          )}
        </button>
      </div>
    </header>
  )
}

/* ── Sidebar ── */
function Sidebar({ open, onClose }) {
  const location = useLocation()

  // Determine which sections should start expanded based on current path
  const getInitialExpanded = () => {
    const expanded = new Set()
    navigation.forEach((section) => {
      if (!section.collapsible) return
      if (section.items.some((item) => location.pathname === item.path || location.pathname.startsWith(item.path + '/'))) {
        expanded.add(section.title)
      }
    })
    return expanded
  }

  const [expandedSections, setExpandedSections] = useState(getInitialExpanded)

  // Auto-expand section when navigating into it
  useEffect(() => {
    setExpandedSections((prev) => {
      const next = new Set(prev)
      navigation.forEach((section) => {
        if (!section.collapsible) return
        if (section.items.some((item) => location.pathname === item.path || location.pathname.startsWith(item.path + '/'))) {
          next.add(section.title)
        }
      })
      return next
    })
  }, [location.pathname])

  useEffect(() => {
    onClose()
  }, [location.pathname])

  const toggleSection = (title) => {
    setExpandedSections((prev) => {
      const next = new Set(prev)
      if (next.has(title)) next.delete(title)
      else next.add(title)
      return next
    })
  }

  return (
    <>
      {open && <div className="sidebar-overlay" onClick={onClose} />}
      <aside className={`sidebar ${open ? 'sidebar--open' : ''}`}>
        <nav className="sidebar__nav">
          <PlatformTabs />
          {navigation.map((section) => {
            const isExpanded = !section.collapsible || expandedSections.has(section.title)
            return (
              <div className="sidebar__section" key={section.title}>
                <h3
                  className={`sidebar__section-title ${section.collapsible ? 'sidebar__section-title--collapsible' : ''}`}
                  onClick={section.collapsible ? () => toggleSection(section.title) : undefined}
                  role={section.collapsible ? 'button' : undefined}
                  aria-expanded={section.collapsible ? isExpanded : undefined}
                >
                  {section.collapsible && <ChevronIcon expanded={isExpanded} />}
                  {section.title}
                  {section.collapsible && (
                    <span className="sidebar__section-count">{section.items.length}</span>
                  )}
                </h3>
                <ul className={`sidebar__list ${!isExpanded ? 'sidebar__list--collapsed' : ''}`}>
                  {section.items.map((item) => (
                    <li key={item.path}>
                      <NavLink
                        to={item.path}
                        end={item.path === '/reference'}
                        className={({ isActive }) =>
                          `sidebar__link ${isActive ? 'sidebar__link--active' : ''}`
                        }
                      >
                        {item.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </nav>
      </aside>
    </>
  )
}

export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [themeCustomizerOpen, setThemeCustomizerOpen] = useState(false)

  const handleOpenCustomizer = () => {
    setThemeCustomizerOpen(true)
  }

  return (
    <ThemeProvider>
      <PlatformProvider>
        <div className="layout">
          <PatternBackground />
          <WelcomeModal onCustomize={handleOpenCustomizer} />
          <Header 
            onMenuToggle={() => setMenuOpen(v => !v)} 
            menuOpen={menuOpen}
            themeCustomizerOpen={themeCustomizerOpen}
            onThemeCustomizerChange={setThemeCustomizerOpen}
          />
          <div className="layout__body">
            <Sidebar open={menuOpen} onClose={() => setMenuOpen(false)} />
            <main className="layout__main">
              <div className="layout__content">
                {children}
                <Footer />
              </div>
            </main>
          </div>
        </div>
      </PlatformProvider>
    </ThemeProvider>
  )
}
