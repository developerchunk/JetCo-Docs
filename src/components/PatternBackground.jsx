import { useTheme } from '../context/ThemeContext'
import './PatternBackground.css'

/* ── SVG Pattern Generators ── */
const patterns = {
  none: () => null,

  minimal: (color) => (
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="p-minimal" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
          <rect x="25" y="0" width="10" height="40" rx="3" fill={color} />
          <rect x="0" y="20" width="40" height="8" rx="3" fill={color} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#p-minimal)" />
    </svg>
  ),

  dots: (color) => (
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="p-dots" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
          <circle cx="14" cy="14" r="3" fill={color} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#p-dots)" />
    </svg>
  ),

  grid: (color) => (
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="p-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke={color} strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#p-grid)" />
    </svg>
  ),

  waves: (color) => (
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="p-waves" x="0" y="0" width="80" height="40" patternUnits="userSpaceOnUse">
          <path d="M0 20 Q20 0 40 20 Q60 40 80 20" fill="none" stroke={color} strokeWidth="1.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#p-waves)" />
    </svg>
  ),

  diagonal: (color) => (
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="p-diagonal" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M0 20 L20 0" stroke={color} strokeWidth="1.2" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#p-diagonal)" />
    </svg>
  ),

  hexagons: (color) => (
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="p-hexagons" x="0" y="0" width="56" height="100" patternUnits="userSpaceOnUse">
          <path d="M28 66L0 50L0 16L28 0L56 16L56 50L28 66L28 100" fill="none" stroke={color} strokeWidth="1" />
          <path d="M28 0L28 34L0 50L0 84L28 100L56 84L56 50L28 34" fill="none" stroke={color} strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#p-hexagons)" />
    </svg>
  ),

  confetti: (color) => (
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="p-confetti" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
          <rect x="6" y="6" width="4" height="4" rx="1" fill={color} transform="rotate(45 8 8)" />
          <circle cx="40" cy="10" r="2.5" fill={color} />
          <rect x="50" y="30" width="5" height="3" rx="1" fill={color} transform="rotate(-20 52 31)" />
          <circle cx="15" cy="45" r="2" fill={color} />
          <rect x="35" y="50" width="4" height="4" rx="1" fill={color} transform="rotate(30 37 52)" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#p-confetti)" />
    </svg>
  ),

  topography: (color) => (
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="p-topography" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <path d="M10 50 Q30 20 50 50 Q70 80 90 50" fill="none" stroke={color} strokeWidth="1" />
          <path d="M0 80 Q25 60 50 80 Q75 100 100 80" fill="none" stroke={color} strokeWidth="1" />
          <path d="M0 20 Q25 0 50 20 Q75 40 100 20" fill="none" stroke={color} strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#p-topography)" />
    </svg>
  ),

  circuit: (color) => (
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="p-circuit" x="0" y="0" width="64" height="64" patternUnits="userSpaceOnUse">
          <path d="M32 0 L32 16 M32 48 L32 64 M0 32 L16 32 M48 32 L64 32" stroke={color} strokeWidth="1" fill="none" />
          <circle cx="32" cy="32" r="4" fill="none" stroke={color} strokeWidth="1" />
          <circle cx="32" cy="32" r="1.5" fill={color} />
          <circle cx="32" cy="0" r="1.5" fill={color} />
          <circle cx="0" cy="32" r="1.5" fill={color} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#p-circuit)" />
    </svg>
  ),

  arches: (color) => (
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="p-arches" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M0 40 A20 20 0 0 1 40 40" fill="none" stroke={color} strokeWidth="1.2" />
          <path d="M-20 40 A20 20 0 0 1 20 40" fill="none" stroke={color} strokeWidth="1.2" opacity="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#p-arches)" />
    </svg>
  ),
}

export const patternList = [
  { id: 'none', label: 'None' },
  { id: 'minimal', label: 'Minimal' },
  { id: 'dots', label: 'Dots' },
  { id: 'grid', label: 'Grid' },
  { id: 'waves', label: 'Waves' },
  { id: 'diagonal', label: 'Diagonal' },
  { id: 'hexagons', label: 'Hexagons' },
  { id: 'confetti', label: 'Confetti' },
  { id: 'topography', label: 'Topography' },
  { id: 'circuit', label: 'Circuit' },
  { id: 'arches', label: 'Arches' },
]

export default function PatternBackground() {
  const { accentColor, pattern, patternOpacity } = useTheme()

  if (pattern === 'none' || !patterns[pattern]) return null

  const opacity = patternOpacity

  return (
    <div className="pattern-bg" style={{ opacity }}>
      {patterns[pattern](accentColor)}
    </div>
  )
}
