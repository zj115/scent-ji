import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getProductBySlug, products } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';
import Breadcrumbs from '../components/Breadcrumbs';
import QuantitySelector from '../components/QuantitySelector';
import './ProductDetail.css';

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const { addItem } = useCart();
  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [addedMsg, setAddedMsg] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  if (!product) {
    return (
      <div className="container" style={{ padding: '120px 40px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 32, marginBottom: 16 }}>Product not found</h2>
        <Link to="/shop" className="btn-primary">Back to Shop</Link>
      </div>
    );
  }

  const related = products.filter(p =>
    p.id !== product.id &&
    p.tags.some(t => product.tags.includes(t))
  ).slice(0, 3);

  const handleAddToCart = () => {
    addItem(product, quantity);
    setAddedMsg(true);
    setTimeout(() => setAddedMsg(false), 2000);
  };

  const handleBuyNow = () => {
    addItem(product, quantity);
    navigate('/checkout');
  };

  return (
    <div className="product-detail">
      <div className="container">
        <Breadcrumbs crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Shop', href: '/shop' },
          { label: product.name },
        ]} />

        <div className="product-detail__main">
          {/* Images */}
          <div className="product-detail__gallery">
            <div className="product-detail__main-image">
              <img
                src={product.images[activeImage] || product.image}
                alt={product.name}
              />
              {product.badge && <span className="product-detail__badge">{product.badge}</span>}
            </div>
            {product.images.length > 1 && (
              <div className="product-detail__thumbnails">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    className={`product-detail__thumb ${activeImage === i ? 'active' : ''}`}
                    onClick={() => setActiveImage(i)}
                  >
                    <img src={img} alt={`${product.name} view ${i + 1}`} />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div className="product-detail__info">
            <p className="product-detail__collection">
              {product.tags[0].charAt(0).toUpperCase() + product.tags[0].slice(1)} Series
            </p>
            <h1 className="product-detail__name">{product.name}</h1>
            <p className="product-detail__subtitle">{product.subtitle}</p>

            <div className="product-detail__price-row">
              <span className="product-detail__price">NZ${product.price.toFixed(2)}</span>
              {product.comparePrice && (
                <span className="product-detail__compare">NZ${product.comparePrice.toFixed(2)}</span>
              )}
            </div>

            <div className="product-detail__features">
              {product.features.map((f, i) => (
                <span key={i} className="product-detail__feature-tag">{f}</span>
              ))}
            </div>

            <div className="product-detail__divider" />

            <div className="product-detail__qty-row">
              <label className="product-detail__qty-label">Quantity</label>
              <QuantitySelector value={quantity} onChange={setQuantity} />
            </div>

            <div className="product-detail__actions">
              <button
                className={`product-detail__atc ${addedMsg ? 'product-detail__atc--added' : ''}`}
                onClick={handleAddToCart}
              >
                {addedMsg ? '✓ Added to Cart' : 'Add to Cart'}
              </button>
              <button className="product-detail__buy-now" onClick={handleBuyNow}>
                Buy Now
              </button>
            </div>

            <div className="product-detail__shipping-note">
              <p>🚚 Free shipping on orders over NZ$80</p>
              <p>📦 Ships within 2–5 business days from New Zealand</p>
              <p>↩ 14-day returns for unused items</p>
            </div>

            {/* Specs */}
            <div className="product-detail__specs">
              <div className="product-detail__spec">
                <span className="product-detail__spec-label">Material</span>
                <span className="product-detail__spec-value">{product.specs.material}</span>
              </div>
              <div className="product-detail__spec">
                <span className="product-detail__spec-label">Scent Duration</span>
                <span className="product-detail__spec-value">{product.specs.scentLast}</span>
              </div>
              <div className="product-detail__spec">
                <span className="product-detail__spec-label">Size</span>
                <span className="product-detail__spec-value">{product.specs.size}</span>
              </div>
              <div className="product-detail__spec">
                <span className="product-detail__spec-label">Origin</span>
                <span className="product-detail__spec-value">{product.specs.origin}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="product-detail__tabs">
          <div className="product-detail__tab-nav">
            {['description', 'how-to-use', 'compliance'].map(tab => (
              <button
                key={tab}
                className={`product-detail__tab-btn ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === 'description' ? 'Description' : tab === 'how-to-use' ? 'How to Use' : 'Compliance'}
              </button>
            ))}
          </div>
          <div className="product-detail__tab-content">
            {activeTab === 'description' && <p>{product.description}</p>}
            {activeTab === 'how-to-use' && <p>{product.howToUse}</p>}
            {activeTab === 'compliance' && <p>{product.compliance}</p>}
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="product-detail__related">
            <h2 className="product-detail__related-title">You may also like</h2>
            <div className="product-detail__related-grid">
              {related.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
