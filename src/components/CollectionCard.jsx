import { Link } from 'react-router-dom';
import './CollectionCard.css';

export default function CollectionCard({ collection }) {
  return (
    <Link to={`/collections/${collection.slug}`} className="collection-card">
      <div className="collection-card__image-wrap">
        <img
          src={collection.image}
          alt={collection.name}
          className="collection-card__image"
          loading="lazy"
        />
        <div className="collection-card__overlay" />
      </div>
      <div className="collection-card__info">
        <p className="collection-card__zh">{collection.subtitle}</p>
        <h3 className="collection-card__name">{collection.name}</h3>
        <p className="collection-card__desc">{collection.description}</p>
        <span className="collection-card__link">Explore →</span>
      </div>
    </Link>
  );
}
