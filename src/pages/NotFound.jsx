import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '5rem 0' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>404</h1>
      <p style={{ fontSize: '1.1rem' }}>Page not found.</p>
      <Link to="/" style={{ marginTop: '1rem', display: 'inline-block' }}>
        Go Home →
      </Link>
    </div>
  )
}
