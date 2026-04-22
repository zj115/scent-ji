import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Login.css';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const { resetPassword } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');
    setLoading(true);

    const { error } = await resetPassword(email);

    if (error) {
      setError(error.message);
    } else {
      setMessage('密码重置邮件已发送，请查收邮箱。');
    }
    setLoading(false);
  };

  return (
    <div className="login-page">
      <div className="login-page__inner">
        <Link to="/" className="login-page__logo">Scent-Ji · 香玑</Link>

        <h2 style={{ textAlign: 'center', marginBottom: '24px', fontSize: '24px' }}>重置密码</h2>

        {error && (
          <div style={{ padding: '12px', marginBottom: '16px', backgroundColor: '#fee', color: '#c33', borderRadius: '4px', fontSize: '14px' }}>
            {error}
          </div>
        )}
        {message && (
          <div style={{ padding: '12px', marginBottom: '16px', backgroundColor: '#efe', color: '#3a3', borderRadius: '4px', fontSize: '14px' }}>
            {message}
          </div>
        )}

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="login-form__field">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="hello@example.com"
            />
          </div>
          <button type="submit" className="btn-primary login-form__submit" disabled={loading}>
            {loading ? '发送中...' : '发送重置邮件'}
          </button>
        </form>

        <p className="login-page__back">
          <Link to="/login">← 返回登录</Link>
        </p>
      </div>
    </div>
  );
}
