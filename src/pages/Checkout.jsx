import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Checkout.css';

export default function Checkout() {
  const { items, subtotal, clearCart } = useCart();
  const navigate = useNavigate();
  const shipping = subtotal >= 80 ? 0 : 6.99;
  const total = subtotal + shipping;

  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    address: '', city: '', region: '', postcode: '', country: 'New Zealand',
    shippingMethod: 'standard',
  });

  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    clearCart();
    navigate('/thank-you');
  };

  if (items.length === 0) {
    return (
      <div className="container" style={{ padding: '120px 40px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 32, marginBottom: 16 }}>Nothing to check out</h2>
        <Link to="/shop" className="btn-primary">Browse Products</Link>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <div className="checkout-page__header">
        <div className="container">
          <Link to="/" className="checkout-page__logo">Scent-Ji · 香玑</Link>
          <div className="checkout-page__steps">
            <span className="active">Information</span>
            <span className="sep">›</span>
            <span>Shipping</span>
            <span className="sep">›</span>
            <span>Payment</span>
          </div>
        </div>
      </div>

      <div className="container checkout-page__body">
        <form className="checkout-form" onSubmit={handleSubmit}>
          {/* Contact */}
          <section className="checkout-section">
            <h2 className="checkout-section__title">Contact Information</h2>
            <div className="checkout-form__grid">
              <div className="checkout-form__field">
                <label>First Name *</label>
                <input name="firstName" value={form.firstName} onChange={handleChange} required placeholder="Sophie" />
              </div>
              <div className="checkout-form__field">
                <label>Last Name *</label>
                <input name="lastName" value={form.lastName} onChange={handleChange} required placeholder="Miller" />
              </div>
              <div className="checkout-form__field checkout-form__field--full">
                <label>Email Address *</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="hello@example.com" />
              </div>
              <div className="checkout-form__field checkout-form__field--full">
                <label>Phone Number</label>
                <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+64 21 000 0000" />
              </div>
            </div>
          </section>

          {/* Shipping address */}
          <section className="checkout-section">
            <h2 className="checkout-section__title">Shipping Address</h2>
            <div className="checkout-form__grid">
              <div className="checkout-form__field checkout-form__field--full">
                <label>Street Address *</label>
                <input name="address" value={form.address} onChange={handleChange} required placeholder="123 Example Street" />
              </div>
              <div className="checkout-form__field">
                <label>City *</label>
                <input name="city" value={form.city} onChange={handleChange} required placeholder="Auckland" />
              </div>
              <div className="checkout-form__field">
                <label>Region</label>
                <input name="region" value={form.region} onChange={handleChange} placeholder="Auckland" />
              </div>
              <div className="checkout-form__field">
                <label>Postcode *</label>
                <input name="postcode" value={form.postcode} onChange={handleChange} required placeholder="1010" />
              </div>
              <div className="checkout-form__field">
                <label>Country</label>
                <select name="country" value={form.country} onChange={handleChange}>
                  <option>New Zealand</option>
                  <option>Australia</option>
                  <option>United Kingdom</option>
                  <option>United States</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
          </section>

          {/* Shipping method */}
          <section className="checkout-section">
            <h2 className="checkout-section__title">Shipping Method</h2>
            <div className="checkout-shipping-options">
              <label className={`checkout-shipping-option ${form.shippingMethod === 'standard' ? 'active' : ''}`}>
                <input
                  type="radio"
                  name="shippingMethod"
                  value="standard"
                  checked={form.shippingMethod === 'standard'}
                  onChange={handleChange}
                />
                <div>
                  <p className="checkout-shipping-option__name">Standard Shipping</p>
                  <p className="checkout-shipping-option__desc">3–5 business days</p>
                </div>
                <span className="checkout-shipping-option__price">
                  {shipping === 0 ? 'Free' : `NZ$${shipping.toFixed(2)}`}
                </span>
              </label>
              <label className={`checkout-shipping-option ${form.shippingMethod === 'express' ? 'active' : ''}`}>
                <input
                  type="radio"
                  name="shippingMethod"
                  value="express"
                  checked={form.shippingMethod === 'express'}
                  onChange={handleChange}
                />
                <div>
                  <p className="checkout-shipping-option__name">Express Shipping</p>
                  <p className="checkout-shipping-option__desc">1–2 business days</p>
                </div>
                <span className="checkout-shipping-option__price">NZ$14.99</span>
              </label>
            </div>
          </section>

          {/* Payment note */}
          <section className="checkout-section">
            <h2 className="checkout-section__title">Payment</h2>
            <div className="checkout-payment-note">
              <p>🔒 This is a demo site. No real payment will be processed.</p>
              <p>In production, this would connect to a Stripe or PayPal payment gateway.</p>
            </div>
            <div className="checkout-form__grid">
              <div className="checkout-form__field checkout-form__field--full">
                <label>Card Number</label>
                <input placeholder="4242 4242 4242 4242" disabled />
              </div>
              <div className="checkout-form__field">
                <label>Expiry</label>
                <input placeholder="MM / YY" disabled />
              </div>
              <div className="checkout-form__field">
                <label>CVV</label>
                <input placeholder="123" disabled />
              </div>
            </div>
          </section>

          <button type="submit" className="checkout-submit btn-primary">
            Place Order · NZ${total.toFixed(2)}
          </button>

          <p className="checkout-terms">
            By placing your order you agree to our <Link to="/faq#terms">Terms of Service</Link> and <Link to="/faq#privacy">Privacy Policy</Link>.
          </p>
        </form>

        {/* Order summary */}
        <div className="checkout-summary">
          <h3 className="checkout-summary__title">Order Summary</h3>
          <div className="checkout-summary__items">
            {items.map(item => (
              <div key={item.id} className="checkout-summary__item">
                <div className="checkout-summary__item-img">
                  <img src={item.image} alt={item.name} />
                  <span className="checkout-summary__item-qty">{item.quantity}</span>
                </div>
                <div className="checkout-summary__item-info">
                  <p className="checkout-summary__item-name">{item.name}</p>
                  <p className="checkout-summary__item-sub">{item.subtitle}</p>
                </div>
                <p className="checkout-summary__item-price">NZ${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))}
          </div>
          <div className="checkout-summary__totals">
            <div className="checkout-summary__row">
              <span>Subtotal</span>
              <span>NZ${subtotal.toFixed(2)}</span>
            </div>
            <div className="checkout-summary__row">
              <span>Shipping</span>
              <span>{shipping === 0 ? 'Free' : `NZ$${shipping.toFixed(2)}`}</span>
            </div>
            <div className="checkout-summary__row checkout-summary__row--total">
              <span>Total</span>
              <span>NZ${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
