import { Link } from 'react-router-dom'
import { usePlatform } from '../components/Layout'
import { getClassesByCategory, getAllClasses } from '../data/reference'
import './ReferenceIndex.css'

function AnnotationBadge({ name }) {
  const colorMap = {
    '@Keep': { bg: '#e74c3c15', color: '#e74c3c', border: '#e74c3c30' },
    '@Stable': { bg: '#6C5CE715', color: '#6C5CE7', border: '#6C5CE730' },
  }
  const style = colorMap[name] || { bg: 'var(--bg-hover)', color: 'var(--text-secondary)', border: 'var(--border-secondary)' }
  return (
    <span className="ridx-badge" style={{ background: style.bg, color: style.color, border: `1px solid ${style.border}` }}>
      {name}
    </span>
  )
}

export default function ReferenceIndex() {
  const { platform } = usePlatform()
  const allClasses = getAllClasses()
  const byCategory = getClassesByCategory()

  const categoryOrder = ['Charts', 'Cards', 'Components']
  const total = allClasses.length

  return (
    <div className="ridx">
      <div className="ridx-hero">
        <h1 className="ridx-hero__title">API Reference</h1>
        <p className="ridx-hero__desc">
          Complete reference for all JetCo {platform === 'android' ? 'Android' : 'KMP'} configuration classes, data models, and defaults objects.
          Switch platforms using the sidebar tab to see platform-specific annotations and package names.
        </p>
        <div className="ridx-hero__stats">
          <span className="ridx-stat">{total} classes</span>
          <span className="ridx-stat">{Object.keys(byCategory).length} categories</span>
          <span className="ridx-stat">{platform === 'android' ? 'Android' : 'KMP'}</span>
        </div>
      </div>

      {categoryOrder.map((cat) => {
        const subcats = byCategory[cat]
        if (!subcats) return null
        return (
          <section className="ridx-category" key={cat}>
            <h2 className="ridx-category__title">{cat}</h2>
            {Object.entries(subcats).map(([subcat, classes]) => (
              <div className="ridx-subcategory" key={subcat}>
                <h3 className="ridx-subcategory__title">{subcat}</h3>
                <div className="ridx-class-grid">
                  {classes.map((cls) => {
                    const pData = platform === 'kmp' ? cls.kmp : cls.android
                    return (
                      <Link to={`/reference/${cls.name}`} className="ridx-class-card" key={cls.name}>
                        <div className="ridx-class-card__header">
                          <span className="ridx-class-card__kind">{cls.kind}</span>
                          <div className="ridx-class-card__annotations">
                            {(pData.annotations || []).map((a) => (
                              <AnnotationBadge key={a} name={a} />
                            ))}
                          </div>
                        </div>
                        <h4 className="ridx-class-card__name">{cls.name}</h4>
                        <p className="ridx-class-card__pkg">{pData.packageName}</p>
                        <p className="ridx-class-card__desc">{cls.description}</p>
                        {cls.properties && cls.properties.length > 0 && (
                          <span className="ridx-class-card__count">{cls.properties.length} properties</span>
                        )}
                        {cls.methods && cls.methods.length > 0 && (
                          <span className="ridx-class-card__count">{cls.methods.length} methods</span>
                        )}
                      </Link>
                    )
                  })}
                </div>
              </div>
            ))}
          </section>
        )
      })}
    </div>
  )
}
