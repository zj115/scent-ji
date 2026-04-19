import { Link } from 'react-router-dom';
import './ThankYou.css';

export default function ThankYou() {
  return (
    <div className="thankyou-page">
      <div className="thankyou-page__inner">
        <div className="thankyou-page__icon">
          <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        </div>

        <p className="thankyou-page__eyebrow">Order Confirmed</p>
        <h1 className="thankyou-page__title">Thank you for your order.</h1>
        <p className="thankyou-page__subtitle">
          Your Scent-Ji piece is being prepared with care.
        </p>

        <div className="thankyou-page__message">
          <p>
            You will receive a confirmation email shortly with your order details and tracking information
            once your package has been dispatched.
          </p>
          <p>
            If you have any questions about your order, please contact us at{' '}
            <a href="mailto:hello@scent-ji.com">hello@scent-ji.com</a>.
          </p>
        </div>

        <div className="thankyou-page__info">
          <div className="thankyou-info-item">
            <span className="thankyou-info-item__icon">📦</span>
            <div>
              <p className="thankyou-info-item__label">Estimated Delivery</p>
              <p className="thankyou-info-item__value">2–5 business days</p>
            </div>
          </div>
          <div className="thankyou-info-item">
            <span className="thankyou-info-item__icon">↩</span>
            <div>
              <p className="thankyou-info-item__label">Returns</p>
              <p className="thankyou-info-item__value">14 days for unused items</p>
            </div>
          </div>
          <div className="thankyou-info-item">
            <span className="thankyou-info-item__icon">✉</span>
            <div>
              <p className="thankyou-info-item__label">Questions?</p>
              <p className="thankyou-info-item__value">hello@scent-ji.com</p>
            </div>
          </div>
        </div>

        <div className="thankyou-page__ctas">
          <Link to="/shop" className="btn-primary">Continue Shopping</Link>
          <Link to="/" className="btn-outline">Return Home</Link>
        </div>

        <div className="thankyou-page__brand">
          <p className="thankyou-page__brand-name">Scent-Ji · 香玑</p>
          <p className="thankyou-page__brand-tagline">Traditional Chinese Aroma Jewelry · New Zealand</p>
        </div>
      </div>
    </div>
  );
}
