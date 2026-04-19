import { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-page">
      <div className="contact-page__hero">
        <div className="container">
          <p className="contact-page__eyebrow">Get in Touch</p>
          <h1 className="contact-page__title">Contact Scent-Ji</h1>
          <p className="contact-page__desc">
            We'd love to hear from you — whether you have a question about an order,
            a product enquiry, or simply want to say hello.
          </p>
        </div>
      </div>

      <div className="container contact-page__layout">
        {/* Form */}
        <div className="contact-page__form-wrap">
          {submitted ? (
            <div className="contact-page__success">
              <div className="contact-page__success-icon">✓</div>
              <h2>Thank you for your message.</h2>
              <p>We'll be in touch within 1–2 business days.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form__row">
                <div className="contact-form__field">
                  <label htmlFor="name">Your Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Sophie M."
                  />
                </div>
                <div className="contact-form__field">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="hello@example.com"
                  />
                </div>
              </div>
              <div className="contact-form__field">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Order enquiry / Product question / Other"
                />
              </div>
              <div className="contact-form__field">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="How can we help?"
                />
              </div>
              <button type="submit" className="btn-primary contact-form__submit">Send Message</button>
            </form>
          )}
        </div>

        {/* Info */}
        <div className="contact-page__info">
          <div className="contact-info-block">
            <h3>Email</h3>
            <a href="mailto:hello@scent-ji.com">hello@scent-ji.com</a>
            <p>We respond within 1–2 business days.</p>
          </div>

          <div className="contact-info-block">
            <h3>Based in</h3>
            <p>Hamilton, New Zealand</p>
            <p>Shipping from New Zealand to all NZ addresses and select international destinations.</p>
          </div>

          <div className="contact-info-block">
            <h3>Follow Scent-Ji</h3>
            <div className="contact-social">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">TikTok</a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">Pinterest</a>
            </div>
          </div>

          <div className="contact-info-block contact-brand-note">
            <p>Scent-Ji · 香玑 is a New Zealand–based aroma jewellery brand rooted in traditional
            Chinese he xiang (合香) culture. All products are handcrafted in small batches and
            declared as decorative fragrance jewellery — not medicinal devices.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
