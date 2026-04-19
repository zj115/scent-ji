import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '80px 40px' }}>
      <div>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: 96, color: 'var(--ivory-dark)', lineHeight: 1, marginBottom: 24 }}>404</p>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 36, fontWeight: 400, marginBottom: 16 }}>Page not found</h1>
        <p style={{ fontSize: 15, color: 'var(--warm-gray)', marginBottom: 40 }}>The page you're looking for doesn't exist or has been moved.</p>
        <Link to="/" className="btn-primary">Return Home</Link>
      </div>
    </div>
  );
}
