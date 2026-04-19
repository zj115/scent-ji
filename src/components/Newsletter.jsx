import { useState } from 'react';
import './Newsletter.css';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section className="newsletter">
      <div className="newsletter__inner">
        <p className="newsletter__label">Stay Connected</p>
        <h2 className="newsletter__title">Receive quiet notes from Scent-Ji</h2>
        <p className="newsletter__desc">
          New arrivals, seasonal blends, and stories from the world of Chinese aroma culture — delivered slowly and thoughtfully.
        </p>
        {submitted ? (
          <p className="newsletter__thanks">Thank you. We'll be in touch soon.</p>
        ) : (
          <form className="newsletter__form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <button type="submit">Subscribe</button>
          </form>
        )}
        <p className="newsletter__note">No spam. Unsubscribe any time.</p>
      </div>
    </section>
  );
}
