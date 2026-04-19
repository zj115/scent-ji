import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

export default function Login() {
  const [tab, setTab] = useState('login');
  const [form, setForm] = useState({ email: '', password: '', firstName: '', lastName: '' });

  const handleChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    // Demo only — no backend
    alert('This is a demo site. No real authentication is implemented.');
  };

  return (
    <div className="login-page">
      <div className="login-page__inner">
        <Link to="/" className="login-page__logo">Scent-Ji · 香玑</Link>

        <div className="login-tabs">
          <button
            className={`login-tab ${tab === 'login' ? 'active' : ''}`}
            onClick={() => setTab('login')}
          >Sign In</button>
          <button
            className={`login-tab ${tab === 'register' ? 'active' : ''}`}
            onClick={() => setTab('register')}
          >Create Account</button>
        </div>

        {tab === 'login' ? (
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="login-form__field">
              <label>Email Address</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="hello@example.com" />
            </div>
            <div className="login-form__field">
              <label>Password</label>
              <input type="password" name="password" value={form.password} onChange={handleChange} required placeholder="••••••••" />
            </div>
            <button type="submit" className="btn-primary login-form__submit">Sign In</button>
            <p className="login-form__forgot"><a href="#">Forgot your password?</a></p>
          </form>
        ) : (
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="login-form__row">
              <div className="login-form__field">
                <label>First Name</label>
                <input name="firstName" value={form.firstName} onChange={handleChange} required placeholder="Sophie" />
              </div>
              <div className="login-form__field">
                <label>Last Name</label>
                <input name="lastName" value={form.lastName} onChange={handleChange} required placeholder="Miller" />
              </div>
            </div>
            <div className="login-form__field">
              <label>Email Address</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="hello@example.com" />
            </div>
            <div className="login-form__field">
              <label>Password</label>
              <input type="password" name="password" value={form.password} onChange={handleChange} required placeholder="••••••••" />
            </div>
            <button type="submit" className="btn-primary login-form__submit">Create Account</button>
          </form>
        )}

        <p className="login-page__back">
          <Link to="/shop">← Continue Shopping</Link>
        </p>
      </div>
    </div>
  );
}
