import { Highlight, themes } from 'prism-react-renderer'
import { useState } from 'react'
import { useTheme } from '../context/ThemeContext'
import './CodeBlock.css'

export default function CodeBlock({ android, kmp }) {
  const [tab, setTab] = useState('android')
  const { theme } = useTheme()
  const code = tab === 'android' ? android : kmp

  return (
    <div className="code-block">
      <div className="code-block__tabs">
        <button
          className={`code-block__tab ${tab === 'android' ? 'code-block__tab--active' : ''}`}
          onClick={() => setTab('android')}
        >
          Android
        </button>
        <button
          className={`code-block__tab ${tab === 'kmp' ? 'code-block__tab--active' : ''}`}
          onClick={() => setTab('kmp')}
        >
          Multiplatform
        </button>
        <button
          className="code-block__copy"
          onClick={() => navigator.clipboard.writeText(code)}
          title="Copy code"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
            <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
          </svg>
        </button>
      </div>
      <Highlight
        theme={theme === 'dark' ? themes.nightOwl : themes.nightOwlLight}
        code={code.trim()}
        language="kotlin"
      >
        {({ style, tokens, getLineProps, getTokenProps }) => (
          <pre className="code-block__pre" style={style}>
            <code>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line })}>
                  <span className="code-block__line-number">{i + 1}</span>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </div>
              ))}
            </code>
          </pre>
        )}
      </Highlight>
    </div>
  )
}
