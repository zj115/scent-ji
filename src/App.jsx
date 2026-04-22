import { BrowserRouter, Routes, Route, ScrollRestoration } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';

import Header from './components/Header';
import Footer from './components/Footer';
import AnnouncementBar from './components/AnnouncementBar';

import Home from './pages/Home';
import Shop from './pages/Shop';
import Collections from './pages/Collections';
import CollectionDetail from './pages/CollectionDetail';
import ProductDetail from './pages/ProductDetail';
import OurStory from './pages/OurStory';
import Wellness from './pages/Wellness';
import ArticleDetail from './pages/ArticleDetail';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import ThankYou from './pages/ThankYou';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Account from './pages/Account';
import ResetPassword from './pages/ResetPassword';

function ScrollToTop() {
  if (typeof window !== 'undefined') {
    window.scrollTo(0, 0);
  }
  return null;
}

function Layout({ children }) {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout><Home /></Layout>} />
            <Route path="/shop" element={<Layout><Shop /></Layout>} />
            <Route path="/collections" element={<Layout><Collections /></Layout>} />
            <Route path="/collections/:slug" element={<Layout><CollectionDetail /></Layout>} />
            <Route path="/products/:slug" element={<Layout><ProductDetail /></Layout>} />
            <Route path="/our-story" element={<Layout><OurStory /></Layout>} />
            <Route path="/wellness" element={<Layout><Wellness /></Layout>} />
            <Route path="/wellness/:slug" element={<Layout><ArticleDetail /></Layout>} />
            <Route path="/faq" element={<Layout><FAQ /></Layout>} />
            <Route path="/contact" element={<Layout><Contact /></Layout>} />
            <Route path="/cart" element={<Layout><Cart /></Layout>} />
            <Route path="/checkout" element={<Layout><Checkout /></Layout>} />
            <Route path="/thank-you" element={<Layout><ThankYou /></Layout>} />
            <Route path="/login" element={<Login />} />
            <Route path="/account" element={<Layout><Account /></Layout>} />
            <Route path="/forgot-password" element={<ResetPassword />} />
            <Route path="*" element={<Layout><NotFound /></Layout>} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  );
}
