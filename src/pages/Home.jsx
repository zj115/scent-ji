import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { collections } from '../data/collections';
import { testimonials } from '../data/testimonials';
import { articles } from '../data/articles';
import ProductCard from '../components/ProductCard';
import TestimonialCard from '../components/TestimonialCard';
import Newsletter from '../components/Newsletter';
import SectionTitle from '../components/SectionTitle';
import Reveal from '../components/Reveal';
import './Home.css';

const bestsellers = products.filter(p => p.tags.includes('bestseller'));

export default function Home() {
  return (
    <div className="home">

      {/* Hero */}
      <section className="hero">
        <div className="hero__image">
          <img src="/assets/products/product-1.jpg" alt="Scent-Ji Aroma Jewelry" fetchpriority="high" loading="eager" />
          <div className="hero__overlay" />
        </div>
        <div className="hero__content">
          <p className="hero__eyebrow">香玑 · New Zealand</p>
          <h1 className="hero__title">
            Scent-Ji<br />
            <em>Traditional Chinese</em><br />
            Aroma Jewelry
          </h1>
          <p className="hero__subtitle">
            Handmade natural aroma beads inspired by Chinese heritage,<br />
            crafted for modern daily wellness.
          </p>
          <div className="hero__ctas">
            <Link to="/shop" className="btn-primary">Shop Now</Link>
            <Link to="/collections" className="btn-outline hero__btn-outline">Explore Collections</Link>
          </div>
        </div>
      </section>

      {/* Brand strip */}
      <section className="brand-strip">
        <div className="brand-strip__inner">
          <span>Wearable Fragrance</span>
          <span className="brand-strip__dot">·</span>
          <span>Timeless Heritage</span>
          <span className="brand-strip__dot">·</span>
          <span>Handcrafted with Care</span>
          <span className="brand-strip__dot">·</span>
          <span>Natural Aroma</span>
        </div>
      </section>

      {/* Collections grid */}
      <section className="section home-collections">
        <div className="container">
          <Reveal>
            <SectionTitle
              label="Our Collections"
              title="Find your series"
              subtitle="Each collection is drawn from a different aspect of Chinese aroma tradition. Choose by intention."
            />
          </Reveal>
          <div className="home-collections__grid">
            {collections.map((col, i) => (
              <Reveal key={col.id} delay={i + 1}>
                <Link to={`/collections/${col.slug}`} className="home-col-card">
                  <div className="home-col-card__image-wrap">
                    <img src={col.image} alt={col.name} className="home-col-card__img" />
                    <div className="home-col-card__overlay" />
                  </div>
                  <div className="home-col-card__body">
                    <p className="home-col-card__zh">{col.subtitle}</p>
                    <h3 className="home-col-card__name">{col.name}</h3>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Bestsellers */}
      <section className="section home-bestsellers">
        <div className="container">
          <Reveal>
            <div className="home-bestsellers__header">
              <SectionTitle
                label="Most Loved"
                title="Best Sellers"
              />
              <Link to="/collections/best-sellers" className="home-bestsellers__all">View all →</Link>
            </div>
          </Reveal>
          <div className="home-bestsellers__grid">
            {bestsellers.slice(0, 3).map((p, i) => (
              <Reveal key={p.id} delay={i + 1}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Brand statement - split layout with real image */}
      <section className="home-statement">
        <div className="home-statement__inner">
          <Reveal variant="left" className="home-statement__image">
            <img src="/assets/products/product-6.jpg" alt="Scent-Ji craftsmanship" loading="lazy" />
          </Reveal>
          <Reveal className="home-statement__text">
            <p className="home-statement__label">Our Philosophy</p>
            <h2 className="home-statement__title">
              Scent is not decoration.<br />It is how we return to ourselves.
            </h2>
            <p className="home-statement__body">
              Scent-Ji was born from a simple belief: that the ancient Chinese practice of wearing
              aroma close to the body is as meaningful now as it was a thousand years ago.
              Each piece we make carries a carefully blended scent that moves with your warmth
              throughout the day — a quiet, continuous presence.
            </p>
            <p className="home-statement__body">
              We are not a perfume brand. We are a jewellery brand that happens to carry fragrance.
              The distinction matters.
            </p>
            <Link to="/our-story" className="btn-outline">Our Story</Link>
          </Reveal>
        </div>
      </section>

      {/* How to use */}
      <section className="section home-howtouse">
        <div className="container">
          <Reveal>
            <SectionTitle
              label="Getting Started"
              title="How Scent-Ji works"
              align="center"
            />
          </Reveal>
          <div className="home-howtouse__steps">
            {[
              { num: '01', title: 'Choose your intention', body: 'Calm, Blessing, Gift, or Best Sellers — each series is curated around a different mood or purpose.' },
              { num: '02', title: 'Wear it close', body: 'The natural aroma beads warm against your skin, releasing scent slowly and consistently throughout the day.' },
              { num: '03', title: 'Let it become ritual', body: 'Putting on your bracelet each morning becomes an intentional pause — a moment of quiet before the day begins.' },
              { num: '04', title: 'Store in the silk pouch', body: 'Each piece comes with a silk pouch. Use it to preserve the scent and care for the beads when not worn.' },
            ].map((step, i) => (
              <Reveal key={step.num} delay={i + 1}>
                <div className="howtouse-step">
                  <div className="howtouse-step__num">{step.num}</div>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Full-width image break */}
      <section className="home-image-break">
        <img src="/assets/products/product-9.jpg" alt="Jade Prosperity Necklace" />
        <div className="home-image-break__caption">
          <p>Jade Prosperity Necklace — NZ$89.00</p>
          <Link to="/products/jade-prosperity-necklace">Shop Now →</Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section home-testimonials">
        <div className="container">
          <Reveal>
            <SectionTitle
              label="From Our Community"
              title="What people say"
              align="center"
            />
          </Reveal>
          <div className="home-testimonials__grid">
            {testimonials.slice(0, 3).map((t, i) => (
              <Reveal key={t.id} delay={i + 1}>
                <TestimonialCard testimonial={t} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="section home-articles">
        <div className="container">
          <Reveal>
            <div className="home-articles__header">
              <SectionTitle label="Wellness Journal" title="From the journal" />
              <Link to="/wellness" className="home-articles__all">All Articles →</Link>
            </div>
          </Reveal>
          <div className="home-articles__grid">
            {articles.map((a, i) => (
              <Reveal key={a.id} delay={i + 1}>
                <Link to={`/wellness/${a.slug}`} className="home-article-card">
                  <div className="home-article-card__image">
                    <img src={a.image} alt={a.title} />
                  </div>
                  <div className="home-article-card__body">
                    <p className="home-article-card__cat">{a.category} · {a.readTime}</p>
                    <h3 className="home-article-card__title">{a.title}</h3>
                    <p className="home-article-card__excerpt">{a.excerpt}</p>
                    <span className="home-article-card__link">Read →</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </div>
  );
}
