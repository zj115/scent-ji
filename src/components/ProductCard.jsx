import { useState } from 'react';
import { Link } from 'react-router-dom';
import QuickViewModal from './QuickViewModal';
import './ProductCard.css';

export default function ProductCard({ product }) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleQuickView = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setModalOpen(true);
  };

  return (
    <>
      <Link to={`/products/${product.slug}`} className="product-card">
        <div className="product-card__image-wrap">
          <img
            src={product.image}
            alt={product.name}
            className={`product-card__image${imgLoaded ? ' loaded' : ''}`}
            loading="lazy"
            onLoad={() => setImgLoaded(true)}
          />

          {/* Hover overlay */}
          <div className="product-card__overlay">
            <div className="product-card__overlay-inner">
              <p className="product-card__overlay-name">{product.name}</p>
              <p className="product-card__overlay-price">
                NZ${product.price.toFixed(2)}
                {product.comparePrice && (
                  <s className="product-card__overlay-compare"> NZ${product.comparePrice.toFixed(2)}</s>
                )}
              </p>
              <button className="product-card__quick-view" onClick={handleQuickView}>
                Quick View
              </button>
            </div>
          </div>

          {/* Badge */}
          {product.badge && (
            <span className="product-card__badge">{product.badge}</span>
          )}
        </div>

        <div className="product-card__info">
          <p className="product-card__subtitle">{product.subtitle}</p>
          <h3 className="product-card__name">{product.name}</h3>
          <div className="product-card__price-row">
            <span className="product-card__price">NZ${product.price.toFixed(2)}</span>
            {product.comparePrice && (
              <span className="product-card__compare">NZ${product.comparePrice.toFixed(2)}</span>
            )}
          </div>
        </div>
      </Link>

      {modalOpen && (
        <QuickViewModal product={product} onClose={() => setModalOpen(false)} />
      )}
    </>
  );
}
