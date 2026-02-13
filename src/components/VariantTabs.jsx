import { useState } from 'react'
import CodeBlock from './CodeBlock'
import './VariantTabs.css'

export default function VariantTabs({ variants }) {
  const [active, setActive] = useState(0)
  const current = variants[active]

  return (
    <div className="variant-tabs">
      <div className="variant-tabs__header">
        {variants.map((v, i) => (
          <button
            key={v.name}
            className={`variant-tabs__btn ${i === active ? 'variant-tabs__btn--active' : ''}`}
            onClick={() => setActive(i)}
          >
            {v.name}
          </button>
        ))}
      </div>

      <div className="variant-tabs__body">
        {current.description && (
          <p className="variant-tabs__desc">{current.description}</p>
        )}

        {current.image && (
          <div className="variant-tabs__preview">
            <img src={current.image} alt={current.name} loading="lazy" />
          </div>
        )}

        <CodeBlock android={current.android} kmp={current.kmp} />
      </div>
    </div>
  )
}
