import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import components from '../data/components'
import referenceData from '../data/reference'
import './Search.css'

function highlightMatch(text, query) {
  if (!query || !text) return text
  const regex = new RegExp(`(${query})`, 'gi')
  const parts = text.split(regex)
  return parts.map((part, i) => 
    regex.test(part) ? <mark key={i}>{part}</mark> : part
  )
}

function getPreview(item, query, isReference) {
  if (isReference) {
    // For reference items, show import or source code snippet
    const android = item.android || {}
    const pkg = android.packageName || ''
    if (pkg.toLowerCase().includes(query.toLowerCase())) {
      return pkg
    }
    // Show first line of source code
    const source = android.sourceCode || ''
    const firstLine = source.split('\n').find(line => line.trim()) || ''
    return firstLine.trim()
  } else {
    // For component docs, show import
    return item.androidImport || item.kmpImport || item.description || ''
  }
}

function searchItems(query) {
  if (!query || query.length < 2) return { docs: [], reference: [] }

  const lowerQuery = query.toLowerCase()
  const docs = []
  const reference = []

  // Search components
  Object.entries(components).forEach(([id, comp]) => {
    const matchScore = 
      (comp.name?.toLowerCase().includes(lowerQuery) ? 10 : 0) +
      (comp.description?.toLowerCase().includes(lowerQuery) ? 5 : 0) +
      (comp.category?.toLowerCase().includes(lowerQuery) ? 3 : 0) +
      (comp.androidImport?.toLowerCase().includes(lowerQuery) ? 2 : 0)

    if (matchScore > 0) {
      docs.push({
        id,
        name: comp.name,
        description: comp.description,
        category: comp.category,
        path: `/components/${id}`,
        preview: getPreview(comp, query, false),
        score: matchScore
      })
    }
  })

  // Search reference data
  Object.entries(referenceData).forEach(([id, cls]) => {
    const matchScore = 
      (cls.name?.toLowerCase().includes(lowerQuery) ? 10 : 0) +
      (cls.description?.toLowerCase().includes(lowerQuery) ? 5 : 0) +
      (cls.category?.toLowerCase().includes(lowerQuery) ? 3 : 0) +
      (cls.subcategory?.toLowerCase().includes(lowerQuery) ? 3 : 0) +
      (cls.android?.packageName?.toLowerCase().includes(lowerQuery) ? 2 : 0)

    if (matchScore > 0) {
      reference.push({
        id,
        name: cls.name,
        description: cls.description,
        category: cls.category,
        subcategory: cls.subcategory,
        path: `/reference/${id}`,
        preview: getPreview(cls, query, true),
        score: matchScore
      })
    }
  })

  // Sort by score
  docs.sort((a, b) => b.score - a.score)
  reference.sort((a, b) => b.score - a.score)

  return {
    docs: docs.slice(0, 5),
    reference: reference.slice(0, 5)
  }
}

export default function Search() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState({ docs: [], reference: [] })
  const [isOpen, setIsOpen] = useState(false)
  const inputRef = useRef(null)
  const dropdownRef = useRef(null)
  const navigate = useNavigate()

  // Search logic
  useEffect(() => {
    const searchResults = searchItems(query)
    setResults(searchResults)
    setIsOpen(query.length >= 2)
  }, [query])

  // Handle keyboard shortcut (Cmd+K or Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        inputRef.current?.focus()
      }
      // ESC to close
      if (e.key === 'Escape') {
        setIsOpen(false)
        inputRef.current?.blur()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target) &&
        !inputRef.current?.contains(e.target)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleResultClick = (path) => {
    navigate(path)
    setQuery('')
    setIsOpen(false)
    inputRef.current?.blur()
  }

  const handleClear = () => {
    setQuery('')
    setIsOpen(false)
    inputRef.current?.focus()
  }

  const totalResults = results.docs.length + results.reference.length

  return (
    <div className="search">
      <div className="search__input-wrapper">
        <svg className="search__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
        <input
          ref={inputRef}
          type="text"
          className="search__input"
          placeholder="Search docs... (⌘K)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => query.length >= 2 && setIsOpen(true)}
        />
        {query && (
          <button className="search__clear" onClick={handleClear} aria-label="Clear search">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {isOpen && (
        <div ref={dropdownRef} className="search__dropdown">
          {totalResults === 0 ? (
            <div className="search__empty">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{margin: '0 auto 0.5rem', opacity: 0.3}}>
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
              <div>No results for "{query}"</div>
            </div>
          ) : (
            <>
              {results.docs.length > 0 && (
                <>
                  <div className="search__category">Documentation ({results.docs.length})</div>
                  {results.docs.map((result) => (
                    <a
                      key={result.id}
                      className="search__result"
                      onClick={(e) => {
                        e.preventDefault()
                        handleResultClick(result.path)
                      }}
                      href={result.path}
                    >
                      <div className="search__result-header">
                        <span className="search__result-badge">{result.category}</span>
                        <span className="search__result-title">{highlightMatch(result.name, query)}</span>
                      </div>
                      <div className="search__result-desc">{result.description}</div>
                      {result.preview && (
                        <div className="search__result-preview">{highlightMatch(result.preview, query)}</div>
                      )}
                    </a>
                  ))}
                </>
              )}

              {results.reference.length > 0 && (
                <>
                  <div className="search__category">Reference ({results.reference.length})</div>
                  {results.reference.map((result) => (
                    <a
                      key={result.id}
                      className="search__result"
                      onClick={(e) => {
                        e.preventDefault()
                        handleResultClick(result.path)
                      }}
                      href={result.path}
                    >
                      <div className="search__result-header">
                        <span className="search__result-badge search__result-badge--reference">
                          {result.subcategory || result.category}
                        </span>
                        <span className="search__result-title">{highlightMatch(result.name, query)}</span>
                      </div>
                      <div className="search__result-desc">{result.description}</div>
                      {result.preview && (
                        <div className="search__result-preview">{highlightMatch(result.preview, query)}</div>
                      )}
                    </a>
                  ))}
                </>
              )}
            </>
          )}
        </div>
      )}
    </div>
  )
}
