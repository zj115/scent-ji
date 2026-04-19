import { Link } from 'react-router-dom';
import { collections } from '../data/collections';
import SectionTitle from '../components/SectionTitle';
import './Collections.css';

export default function Collections() {
  return (
    <div className="collections-page">

      <div className="collections-page__hero">
        <div className="container">
          <p className="collections-page__eyebrow">香玑 Collections</p>
          <h1 className="collections-page__title">Every piece begins<br /><em>with an intention.</em></h1>
          <p className="collections-page__subtitle">
            Four series, each rooted in a different tradition of Chinese aroma culture.
            Choose by mood, by meaning, or by who you are giving it to.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="collections-page__grid">
          {collections.map((col, i) => (
            <Link
              key={col.id}
              to={`/collections/${col.slug}`}
              className={`col-feature-card ${i % 2 === 1 ? 'col-feature-card--reverse' : ''}`}
            >
              <div className="col-feature-card__image-wrap">
                <img src={col.image} alt={col.name} className="col-feature-card__img" />
                <div className="col-feature-card__overlay" />
              </div>
              <div className="col-feature-card__body">
                <p className="col-feature-card__zh">{col.subtitle}</p>
                <h2 className="col-feature-card__name">{col.name}</h2>
                <p className="col-feature-card__desc">{col.longDescription}</p>
                <span className="col-feature-card__cta">Explore Collection →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
}
