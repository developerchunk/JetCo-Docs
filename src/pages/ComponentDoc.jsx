import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import components from '../data/components'
import { getClassById } from '../data/reference'
import CodeBlock from '../components/CodeBlock'
import VariantTabs from '../components/VariantTabs'
import PropsTable from '../components/PropsTable'
import './ComponentDoc.css'

export default function ComponentDoc() {
  const { componentId } = useParams()
  const comp = components[componentId]

  if (!comp) {
    return (
      <div className="cd-not-found">
        <h1>Component not found</h1>
        <p>No documentation exists for <code>{componentId}</code>.</p>
        <Link to="/">Go Home</Link>
      </div>
    )
  }

  return (
    <motion.article
      className="component-doc"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      key={componentId}
    >
      {/* Header */}
      <div className="cd-header">
        <div>
          <span className="badge">{comp.category}</span>
          <h1 className="cd-title">{comp.name}</h1>
          <p className="cd-desc">{comp.description}</p>
        </div>
      </div>

      {/* Image */}
      {comp.image ? (
        <div className="cd-image">
          <img src={comp.image} alt={comp.name} loading="lazy" />
        </div>
      ) : (
        <div className="cd-image-todo">
          <span>📷 Image coming soon</span>
        </div>
      )}

      {/* Import */}
      <h2>Import</h2>
      <div className="cd-import-grid">
        <div className="cd-import-block">
          <span className="cd-import-label">Android</span>
          <code>{comp.androidImport}</code>
        </div>
        <div className="cd-import-block">
          <span className="cd-import-label">Multiplatform</span>
          <code>{comp.kmpImport}</code>
        </div>
      </div>

      {/* Parameters */}
      <h2>Parameters</h2>
      <PropsTable params={comp.params} />

      {/* Code Example */}
      {comp.codeExamples && comp.codeExamples.variants ? (
        <>
          <h2>Examples</h2>
          <VariantTabs variants={comp.codeExamples.variants} />
        </>
      ) : comp.codeExamples && (
        <>
          <h2>Example</h2>
          <CodeBlock android={comp.codeExamples.android} kmp={comp.codeExamples.kmp} />
        </>
      )}

      {/* Config Details */}
      {comp.configDetails && comp.configDetails.length > 0 && (
        <>
          <h2>Configuration Classes</h2>
          {comp.configDetails.map((config) => (
            <div key={config.name} className="cd-config-section">
              <h3 id={config.name}>
                {config.name}
                {getClassById(config.name) && (
                  <Link to={`/reference/${config.name}`} className="cd-ref-link" title="View API Reference">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </Link>
                )}
              </h3>
              <PropsTable params={config.params} />
            </div>
          ))}
        </>
      )}

      {/* Related Configs */}
      {comp.relatedConfigs && comp.relatedConfigs.length > 0 && (
        <div className="cd-related">
          <h4>Related</h4>
          <div className="cd-related-list">
            {comp.relatedConfigs.map((name) => (
              getClassById(name) ? (
                <Link key={name} to={`/reference/${name}`} className="badge badge--outline badge--link">{name}</Link>
              ) : (
                <span key={name} className="badge badge--outline">{name}</span>
              )
            ))}
          </div>
        </div>
      )}
    </motion.article>
  )
}
