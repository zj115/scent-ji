import { useState, useRef, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import './Header.css';

const SHOP_MENU = [
  { label: 'Shop All', to: '/shop' },
  { label: 'Bestsellers', to: '/collections/best-sellers' },
  { label: 'New Arrivals', to: '/shop?filter=new' },
  { label: 'Gift Sets', to: '/collections/gift' },
  { label: 'Calm Collection', to: '/collections/calm' },
  { label: 'Blessing Collection', to: '/collections/blessing' },
  { label: 'Aroma Bracelets', to: '/shop?filter=bracelets' },
  { label: 'Crystal Aroma Jewelry', to: '/shop?filter=crystal' },
];

const CURRENCIES = ['NZD $', 'AUD $', 'USD $', 'GBP £'];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const [currencyOpen, setCurrencyOpen] = useState(false);
  const [currency, setCurrency] = useState('NZD $');
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileShopOpen, setMobileShopOpen] = useState(false);
  const { totalItems } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const shopRef = useRef(null);
  const currRef = useRef(null);
  const searchRef = useRef(null);

  // Throttled scroll
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => { setScrolled(window.scrollY > 40); ticking = false; });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Body lock when mobile menu open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  // Close dropdowns on outside click
  useEffect(() => {
    const handler = (e) => {
      if (shopRef.current && !shopRef.current.contains(e.target)) setShopOpen(false);
      if (currRef.current && !currRef.current.contains(e.target)) setCurrencyOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  // Escape closes search
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') { setSearchOpen(false); setShopOpen(false); setCurrencyOpen(false); } };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery('');
    }
  };

  const closeAll = () => {
    setMenuOpen(false);
    setSearchOpen(false);
    setShopOpen(false);
    setCurrencyOpen(false);
  };

  return (
    <>
      <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
        <div className="header__inner">

          {/* Mobile hamburger */}
          <button
            className={`header__hamburger ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>

          {/* Logo — center on mobile, left on desktop */}
          <Link to="/" className="header__logo" onClick={closeAll}>
            <span className="header__logo-en">Scent-Ji</span>
            <span className="header__logo-zh">香玑</span>
          </Link>

          {/* Desktop nav */}
          <nav className="header__nav">
            <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>

            {/* Shop dropdown */}
            <div className="header__dropdown" ref={shopRef}>
              <button
                className={`header__dropdown-trigger ${shopOpen ? 'open' : ''}`}
                onMouseEnter={() => setShopOpen(true)}
                onMouseLeave={() => setShopOpen(false)}
                onClick={() => setShopOpen(o => !o)}
              >
                Shop Scent-Ji
                <svg className="header__dropdown-arrow" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="m6 9 6 6 6-6"/>
                </svg>
              </button>
              <div
                className={`header__dropdown-menu ${shopOpen ? 'open' : ''}`}
                onMouseEnter={() => setShopOpen(true)}
                onMouseLeave={() => setShopOpen(false)}
              >
                {SHOP_MENU.map(item => (
                  <Link key={item.label} to={item.to} className="header__dropdown-item" onClick={() => setShopOpen(false)}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <NavLink to="/our-story" className={({ isActive }) => isActive ? 'active' : ''}>Our Story</NavLink>
            <NavLink to="/wellness" className={({ isActive }) => isActive ? 'active' : ''}>On The Topic of Incense</NavLink>
          </nav>

          {/* Right icons */}
          <div className="header__icons">

            {/* Currency */}
            <div className="header__currency" ref={currRef}>
              <button
                className="header__currency-btn"
                onClick={() => setCurrencyOpen(o => !o)}
              >
                {currency}
                <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="m6 9 6 6 6-6"/>
                </svg>
              </button>
              {currencyOpen && (
                <div className="header__currency-menu">
                  {CURRENCIES.map(c => (
                    <button
                      key={c}
                      className={`header__currency-item ${c === currency ? 'active' : ''}`}
                      onClick={() => { setCurrency(c); setCurrencyOpen(false); }}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Search */}
            <button
              className="header__icon-btn"
              onClick={() => { setSearchOpen(o => !o); setTimeout(() => searchRef.current?.focus(), 50); }}
              aria-label="Search"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </button>

            {/* Login / Account */}
            <Link to={user ? "/account" : "/login"} className="header__icon-btn header__login-link" aria-label={user ? "Account" : "Login"}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
              <span className="header__login-text">{user ? "Account" : "Login"}</span>
            </Link>

            {/* Cart */}
            <Link to="/cart" className="header__icon-btn header__cart-btn" aria-label="Cart">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              {totalItems > 0 && (
                <span className="header__cart-badge">{totalItems}</span>
              )}
            </Link>
          </div>
        </div>

        {/* Search overlay */}
        <div className={`header__search ${searchOpen ? 'header__search--open' : ''}`}>
          <form onSubmit={handleSearch}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <input
              ref={searchRef}
              type="text"
              placeholder="Search for bracelets, jade, sandalwood..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
            <button type="submit">Search</button>
            <button type="button" onClick={() => setSearchOpen(false)} className="header__search-close">✕</button>
          </form>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="header__mobile-overlay" onClick={() => setMenuOpen(false)} />
      )}

      <nav className={`header__mobile-nav ${menuOpen ? 'header__mobile-nav--open' : ''}`}>
        <div className="header__mobile-top">
          <span className="header__mobile-logo">Scent-Ji · 香玑</span>
          <button className="header__mobile-close" onClick={() => setMenuOpen(false)}>✕</button>
        </div>

        <NavLink to="/" end onClick={closeAll}>Home</NavLink>

        {/* Mobile shop accordion */}
        <div className="header__mobile-shop">
          <button
            className="header__mobile-shop-toggle"
            onClick={() => setMobileShopOpen(o => !o)}
          >
            Shop Scent-Ji
            <svg className={`header__mobile-arrow ${mobileShopOpen ? 'open' : ''}`} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m6 9 6 6 6-6"/>
            </svg>
          </button>
          {mobileShopOpen && (
            <div className="header__mobile-shop-items">
              {SHOP_MENU.map(item => (
                <Link key={item.label} to={item.to} className="header__mobile-shop-item" onClick={closeAll}>
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </div>

        <NavLink to="/our-story" onClick={closeAll}>Our Story</NavLink>
        <NavLink to="/wellness" onClick={closeAll}>On The Topic of Incense</NavLink>
        <NavLink to="/faq" onClick={closeAll}>FAQ</NavLink>
        <NavLink to="/contact" onClick={closeAll}>Contact</NavLink>

        <div className="header__mobile-divider" />

        <NavLink to={user ? "/account" : "/login"} onClick={closeAll} className="header__mobile-login">
          {user ? "My Account" : "Login / Create Account"}
        </NavLink>
        <NavLink to="/cart" onClick={closeAll} className="header__mobile-cart">
          Cart {totalItems > 0 && `(${totalItems})`}
        </NavLink>

        {/* Mobile currency */}
        <div className="header__mobile-currency">
          {CURRENCIES.map(c => (
            <button
              key={c}
              className={`header__mobile-curr-btn ${c === currency ? 'active' : ''}`}
              onClick={() => setCurrency(c)}
            >
              {c}
            </button>
          ))}
        </div>
      </nav>
    </>
  );
}
