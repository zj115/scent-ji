import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Login.css';

export default function Login() {
  const [tab, setTab] = useState('login');
  const [form, setForm] = useState({ email: '', password: '', firstName: '', lastName: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { signIn, signUp } = useAuth();
  const navigate = useNavigate();

  const handleChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (tab === 'login') {
      const { error } = await signIn(form.email, form.password);
      if (error) {
        setError(error.message);
        setLoading(false);
      } else {
        navigate('/account');
      }
    } else {
      if (form.password.length < 6) {
        setError('密码长度至少为6位');
        setLoading(false);
        return;
      }
      const { error } = await signUp(form.email, form.password, {
        name: `${form.firstName} ${form.lastName}`
      });
      if (error) {
        setError(error.message);
        setLoading(false);
      } else {
        alert('注册成功！请查收邮件验证账户。');
        setTab('login');
        setLoading(false);
      }
    }
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

        {error && (
          <div style={{ padding: '12px', marginBottom: '16px', backgroundColor: '#fee', color: '#c33', borderRadius: '4px', fontSize: '14px' }}>
            {error}
          </div>
        )}

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
            <button type="submit" className="btn-primary login-form__submit" disabled={loading}>
              {loading ? '登录中...' : 'Sign In'}
            </button>
            <p className="login-form__forgot"><Link to="/forgot-password">Forgot your password?</Link></p>
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
            <button type="submit" className="btn-primary login-form__submit" disabled={loading}>
              {loading ? '注册中...' : 'Create Account'}
            </button>
          </form>
        )}

        <p className="login-page__back">
          <Link to="/shop">← Continue Shopping</Link>
        </p>
      </div>
    </div>
  );
}
