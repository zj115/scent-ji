import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import useBodyScrollLock from '../hooks/useBodyScrollLock';
import './QuickViewModal.css';

export default function QuickViewModal({ product, onClose }) {
  const { addItem } = useCart();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  useBodyScrollLock(true);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  const handleAdd = () => {
    addItem(product, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  if (!product) return null;

  return (
    <div className="qv-backdrop" onClick={onClose}>
      <div className="qv-modal" onClick={e => e.stopPropagation()}>
        <button className="qv-close" onClick={onClose} aria-label="Close">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M18 6 6 18M6 6l12 12"/>
          </svg>
        </button>

        <div className="qv-image">
          <img src={product.image} alt={product.name} />
          {product.badge && <span className="qv-badge">{product.badge}</span>}
        </div>

        <div className="qv-info">
          <p className="qv-subtitle">{product.subtitle}</p>
          <h2 className="qv-name">{product.name}</h2>
          <div className="qv-price-row">
            <span className="qv-price">NZ${product.price.toFixed(2)}</span>
            {product.comparePrice && (
              <span className="qv-compare">NZ${product.comparePrice.toFixed(2)}</span>
            )}
          </div>

          <p className="qv-desc">{product.description.slice(0, 160)}…</p>

          {product.features && (
            <ul className="qv-features">
              {product.features.slice(0, 4).map(f => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          )}

          <div className="qv-qty-row">
            <span className="qv-qty-label">Quantity</span>
            <div className="qv-qty">
              <button onClick={() => setQty(q => Math.max(1, q - 1))}>−</button>
              <span>{qty}</span>
              <button onClick={() => setQty(q => q + 1)}>+</button>
            </div>
          </div>

          <button
            className={`qv-add-btn btn-primary ${added ? 'qv-add-btn--added' : ''}`}
            onClick={handleAdd}
          >
            {added ? '✓ Added to Cart' : 'Add to Cart'}
          </button>

          <Link to={`/products/${product.slug}`} className="qv-detail-link" onClick={onClose}>
            View Full Details →
          </Link>
        </div>
      </div>
    </div>
  );
}
