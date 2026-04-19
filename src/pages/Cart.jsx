import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import QuantitySelector from '../components/QuantitySelector';
import './Cart.css';

export default function Cart() {
  const { items, removeItem, updateQuantity, subtotal } = useCart();
  const navigate = useNavigate();

  if (items.length === 0) {
    return (
      <div className="cart-page cart-page--empty">
        <div className="container">
          <h1 className="cart-page__title">Your Cart</h1>
          <div className="cart-empty">
            <div className="cart-empty__icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
            </div>
            <h2>Your cart is empty</h2>
            <p>Discover our handcrafted aroma jewellery and find something you love.</p>
            <Link to="/shop" className="btn-primary">Browse Products</Link>
          </div>
        </div>
      </div>
    );
  }

  const shipping = subtotal >= 80 ? 0 : 6.99;
  const total = subtotal + shipping;

  return (
    <div className="cart-page">
      <div className="container">
        <h1 className="cart-page__title">Your Cart</h1>
        <p className="cart-page__count">{items.length} item{items.length !== 1 ? 's' : ''}</p>

        <div className="cart-page__layout">
          {/* Items */}
          <div className="cart-items">
            {items.map(item => (
              <div key={item.id} className="cart-item">
                <div className="cart-item__image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="cart-item__info">
                  <p className="cart-item__subtitle">{item.subtitle}</p>
                  <h3 className="cart-item__name">{item.name}</h3>
                  <p className="cart-item__price-unit">NZ${item.price.toFixed(2)} each</p>
                </div>
                <div className="cart-item__controls">
                  <QuantitySelector
                    value={item.quantity}
                    onChange={(qty) => updateQuantity(item.id, qty)}
                  />
                  <button
                    className="cart-item__remove"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
                <div className="cart-item__total">
                  NZ${(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="cart-summary">
            <h2 className="cart-summary__title">Order Summary</h2>

            <div className="cart-summary__row">
              <span>Subtotal</span>
              <span>NZ${subtotal.toFixed(2)}</span>
            </div>
            <div className="cart-summary__row">
              <span>Shipping</span>
              <span>{shipping === 0 ? 'Free' : `NZ$${shipping.toFixed(2)}`}</span>
            </div>
            {shipping > 0 && (
              <p className="cart-summary__shipping-note">
                Add NZ${(80 - subtotal).toFixed(2)} more for free shipping
              </p>
            )}
            <div className="cart-summary__divider" />
            <div className="cart-summary__row cart-summary__row--total">
              <span>Total</span>
              <span>NZ${total.toFixed(2)}</span>
            </div>

            <button
              className="cart-summary__checkout btn-primary"
              onClick={() => navigate('/checkout')}
            >
              Proceed to Checkout
            </button>

            <Link to="/shop" className="cart-summary__continue">
              ← Continue Shopping
            </Link>

            <div className="cart-summary__notes">
              <p>Secure checkout · All major cards accepted</p>
              <p>Ships within 2–5 business days from New Zealand</p>
              <p>14-day returns on unused items</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
