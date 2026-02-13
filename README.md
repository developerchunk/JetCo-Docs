# JetCo Docs

Official documentation site for [JetCo](https://github.com/developerchunk/JetCo) - A Kotlin-first charting library for Jetpack Compose & Compose Multiplatform.

## ✨ Features

- 📚 **Comprehensive Documentation** - Getting started guides, component docs, and API reference
- 🎨 **Fully Customizable Theme** - Choose from 12 color presets or use custom colors
- ✨ **11 Abstract Background Patterns** - Beautiful animated patterns to personalize your experience
- 🌓 **Dark Mode** - Defaults to dark theme with seamless light mode toggle
- 💾 **Persistent Preferences** - All customizations saved locally in your browser
- 📱 **Fully Responsive** - Works perfectly on mobile, tablet, and desktop
- 🚀 **Fast & Modern** - Built with React 19, Vite, and Framer Motion

## 🎨 Theme Customization

JetCo Docs features a powerful theme customization system inspired by modern design tools:

### Default Theme
- **Color**: Blue (#3B82F6)
- **Pattern**: Arches
- **Opacity**: 18%
- **Mode**: Dark

### Customization Options
- **12 Color Presets** + Custom hex color picker + Native color picker
- **11 Background Patterns**: None, Minimal, Dots, Grid, Waves, Diagonal, Hexagons, Confetti, Topography, Circuit, Arches
- **Opacity Control**: 0-60% adjustable pattern opacity
- **Dark/Light Mode**: Toggle between themes
- **Welcome Popup**: First-time visitors get a guided introduction to customization

## 🚀 Getting Started

### Installation

```bash
# Clone the repository
git clone https://github.com/developerchunk/JetCo-Docs.git
cd JetCo-Docs

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Development

```bash
npm run dev      # Start dev server on http://localhost:5173
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 🛠️ Tech Stack

- **React 19.2.0** - UI library
- **Vite 7.3.1** - Build tool
- **React Router** - Client-side routing
- **Framer Motion** - Animations
- **Prism React Renderer** - Syntax highlighting
- **React Icons** - Icon library

## 📁 Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/          # Route pages
├── context/        # React context (theme, platform)
├── data/           # Navigation, component data
└── assets/         # Images, fonts
```

## 🎯 Key Components

- **ThemeCustomizer** - Color, pattern, and opacity controls
- **PatternBackground** - SVG-based animated patterns
- **WelcomeModal** - First-time user onboarding
- **CodeBlock** - Syntax-highlighted code examples
- **PropsTable** - Component API reference tables

## 📄 License

This documentation site is part of the JetCo project.

## 🔗 Links

- [JetCo Library](https://github.com/developerchunk/JetCo)
- [Live Documentation](https://developerchunk.github.io/JetCo-Docs/)
- [Report Issues](https://github.com/developerchunk/JetCo-Docs/issues)

---

Built with ❤️ by [developerchunk](https://github.com/developerchunk), Claude AI, and Github Copilot
