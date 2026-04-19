import { Link } from 'react-router-dom';
import { articles } from '../data/articles';
import Newsletter from '../components/Newsletter';
import './Wellness.css';

export default function Wellness() {
  const [featured, ...rest] = articles;

  return (
    <div className="wellness-page">

      {/* Hero article — large */}
      <section className="wellness-hero">
        <Link to={`/wellness/${featured.slug}`} className="wellness-hero__card">
          <div className="wellness-hero__image">
            <img src={featured.image} alt={featured.title} />
            <div className="wellness-hero__overlay" />
          </div>
          <div className="wellness-hero__text">
            <p className="wellness-hero__cat">{featured.category} · {featured.readTime} · {featured.date}</p>
            <h1 className="wellness-hero__title">{featured.title}</h1>
            <p className="wellness-hero__excerpt">{featured.excerpt}</p>
            <span className="wellness-hero__link">Read Article →</span>
          </div>
        </Link>
      </section>

      {/* Page header */}
      <div className="container wellness-page__header">
        <p className="wellness-page__label">Wellness Journal</p>
        <h2 className="wellness-page__heading">Scent, culture, and the art of daily ritual.</h2>
      </div>

      {/* Article grid */}
      <div className="container wellness-page__grid">
        {rest.map(article => (
          <Link key={article.id} to={`/wellness/${article.slug}`} className="wellness-card">
            <div className="wellness-card__image">
              <img src={article.image} alt={article.title} loading="lazy" />
            </div>
            <div className="wellness-card__body">
              <p className="wellness-card__cat">{article.category} · {article.readTime} · {article.date}</p>
              <h2 className="wellness-card__title">{article.title}</h2>
              <p className="wellness-card__subtitle">{article.subtitle}</p>
              <p className="wellness-card__excerpt">{article.excerpt}</p>
              <span className="wellness-card__link">Read →</span>
            </div>
          </Link>
        ))}
      </div>

      <Newsletter />
    </div>
  );
}
