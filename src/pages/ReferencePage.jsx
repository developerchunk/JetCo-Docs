import { useParams, Link } from 'react-router-dom'
import { Highlight, themes } from 'prism-react-renderer'
import { useTheme } from '../context/ThemeContext'
import { usePlatform } from '../components/Layout'
import { getClassById } from '../data/reference'
import components from '../data/components'
import './ReferencePage.css'

function relatedComponentDocIds(cls) {
  if (cls.relatedComponents?.length) return cls.relatedComponents
  if (cls.relatedComponent) return [cls.relatedComponent]
  return []
}

function AnnotationBadge({ name }) {
  const colorMap = {
    '@Keep': { bg: '#e74c3c20', color: '#e74c3c', border: '#e74c3c40' },
    '@Stable': { bg: '#6C5CE720', color: '#6C5CE7', border: '#6C5CE740' },
  }
  const style = colorMap[name] || { bg: 'var(--bg-hover)', color: 'var(--text-secondary)', border: 'var(--border-secondary)' }
  return (
    <span className="ref-annotation" style={{ background: style.bg, color: style.color, border: `1px solid ${style.border}` }}>
      {name}
    </span>
  )
}

function KindBadge({ kind }) {
  return <span className="ref-kind-badge">{kind}</span>
}

function SourceCodeBlock({ code, theme }) {
  return (
    <Highlight theme={theme === 'dark' ? themes.nightOwl : themes.nightOwlLight} code={code.trim()} language="kotlin">
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={`ref-source-pre ${className}`} style={{ ...style, background: 'transparent' }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line })}>
              <span className="ref-source-line-no">{i + 1}</span>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}

export default function ReferencePage() {
  const { classId } = useParams()
  const { theme } = useTheme()
  const { platform } = usePlatform()

  const cls = getClassById(classId)

  if (!cls) {
    return (
      <div className="ref-page">
        <h1>Class Not Found</h1>
        <p>No reference entry for <code>{classId}</code>.</p>
        <Link to="/reference" className="ref-back-link">Back to All Classes</Link>
      </div>
    )
  }

  const platformData = platform === 'kmp' ? cls.kmp : cls.android
  const annotations = platformData.annotations || []

  return (
    <div className="ref-page">
      {/* Breadcrumbs */}
      <nav className="ref-breadcrumbs">
        <Link to="/reference">Reference</Link>
        <span className="ref-breadcrumbs__sep">/</span>
        <span>{cls.category}</span>
        <span className="ref-breadcrumbs__sep">/</span>
        <span>{cls.subcategory}</span>
        <span className="ref-breadcrumbs__sep">/</span>
        <span className="ref-breadcrumbs__current">{cls.name}</span>
      </nav>

      {/* Header */}
      <div className="ref-header">
        <div className="ref-header__badges">
          <KindBadge kind={cls.kind} />
          {annotations.map((a) => <AnnotationBadge key={a} name={a} />)}
          <span className="ref-platform-indicator">
            {platform === 'android' ? 'Android' : 'Kotlin Multiplatform'}
          </span>
        </div>
        <h1 className="ref-header__name">{cls.name}</h1>
        <p className="ref-header__desc">{cls.description}</p>
      </div>

      {/* Package Info */}
      <section className="ref-section">
        <h2 className="ref-section__title">Package</h2>
        <code className="ref-package">{platformData.packageName}</code>
      </section>

      {/* Imports */}
      {platformData.imports && platformData.imports.length > 0 && (
        <section className="ref-section">
          <h2 className="ref-section__title">Imports</h2>
          <div className="ref-imports">
            {platformData.imports.map((imp, i) => (
              <code key={i} className="ref-import-line">{imp}</code>
            ))}
          </div>
        </section>
      )}

      {/* Annotations Note */}
      {platform === 'android' && annotations.includes('@Keep') && (
        <section className="ref-section ref-section--note">
          <div className="ref-note">
            <strong>Note:</strong> The <code>@Keep</code> annotation (from <code>androidx.annotation.Keep</code>) prevents ProGuard/R8 from obfuscating this class. This annotation is <strong>only present in the Android artifact</strong> and is not available in the KMP variant.
          </div>
        </section>
      )}

      {platform === 'kmp' && cls.android.annotations.includes('@Keep') && (
        <section className="ref-section ref-section--note">
          <div className="ref-note ref-note--info">
            <strong>KMP Note:</strong> The Android variant of this class includes the <code>@Keep</code> annotation for ProGuard/R8 compatibility. The KMP variant does not include this annotation.
          </div>
        </section>
      )}

      {/* Source Code */}
      <section className="ref-section">
        <h2 className="ref-section__title">Source Code</h2>
        <div className="ref-source">
          <div className="ref-source__header">
            <span className="ref-source__filename">
              {cls.name}.kt
            </span>
            <span className="ref-source__lang">Kotlin</span>
          </div>
          <SourceCodeBlock code={platformData.sourceCode} theme={theme} />
        </div>
      </section>

      {/* Properties Table */}
      {cls.properties && cls.properties.length > 0 && (
        <section className="ref-section">
          <h2 className="ref-section__title">Properties</h2>
          <div className="ref-table-wrapper">
            <table className="ref-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Default</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {cls.properties.map((p) => (
                  <tr key={p.name}>
                    <td><code className="ref-prop-name">{p.name}</code></td>
                    <td><code className="ref-prop-type">{p.type}</code></td>
                    <td><code className="ref-prop-default">{p.default}</code></td>
                    <td>{p.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* Methods (for Defaults objects) */}
      {cls.methods && cls.methods.length > 0 && (
        <section className="ref-section">
          <h2 className="ref-section__title">Methods</h2>
          <div className="ref-table-wrapper">
            <table className="ref-table">
              <thead>
                <tr>
                  <th>Method</th>
                  <th>Returns</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {cls.methods.map((m) => (
                  <tr key={m.name}>
                    <td><code className="ref-prop-name">{m.name}</code></td>
                    <td>
                      {getClassById(m.returns) ? (
                        <Link to={`/reference/${m.returns}`} className="ref-type-link">
                          {m.returns}
                        </Link>
                      ) : (
                        <code className="ref-prop-type">{m.returns}</code>
                      )}
                    </td>
                    <td>{m.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* Related component guides & reference types */}
      {(relatedComponentDocIds(cls).length > 0 || (cls.relatedReferenceClasses?.length ?? 0) > 0) && (
        <section className="ref-section">
          <h2 className="ref-section__title">Related Documentation</h2>
          {relatedComponentDocIds(cls).length > 0 && (
            <>
              <p className="ref-related-hint">Component guides</p>
              <div className="ref-related-list">
                {relatedComponentDocIds(cls).map((id) => (
                  <Link key={id} to={`/components/${id}`} className="ref-related-link">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                    {components[id]?.name ?? id}
                  </Link>
                ))}
              </div>
            </>
          )}
          {(cls.relatedReferenceClasses?.length ?? 0) > 0 && (
            <>
              <p className="ref-related-hint">API reference</p>
              <div className="ref-related-list">
                {cls.relatedReferenceClasses.map((name) => (
                  <Link key={name} to={`/reference/${name}`} className="ref-related-link ref-related-link--api">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                    {name}
                  </Link>
                ))}
              </div>
            </>
          )}
        </section>
      )}
    </div>
  )
}
