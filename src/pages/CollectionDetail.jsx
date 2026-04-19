import { useParams, Link } from 'react-router-dom';
import { getCollectionBySlug } from '../data/collections';
import { getProductsByCollection, getBestsellers } from '../data/products';
import ProductCard from '../components/ProductCard';
import Breadcrumbs from '../components/Breadcrumbs';
import './CollectionDetail.css';

export default function CollectionDetail() {
  const { slug } = useParams();
  const collection = getCollectionBySlug(slug);

  if (!collection) {
    return (
      <div className="container" style={{ padding: '120px 40px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 32, marginBottom: 16 }}>Collection not found</h2>
        <Link to="/collections" className="btn-primary">Browse Collections</Link>
      </div>
    );
  }

  const products = slug === 'best-sellers'
    ? getBestsellers()
    : getProductsByCollection(collection.id);

  return (
    <div className="col-detail">
      <div className="col-detail__banner">
        <img src={collection.image} alt={collection.name} className="col-detail__banner-img" />
        <div className="col-detail__banner-overlay" />
        <div className="col-detail__banner-text">
          <p className="col-detail__banner-zh">{collection.subtitle}</p>
          <h1 className="col-detail__banner-title">{collection.name}</h1>
          <p className="col-detail__banner-desc">{collection.description}</p>
        </div>
      </div>

      <div className="container">
        <Breadcrumbs crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Collections', href: '/collections' },
          { label: collection.name },
        ]} />

        <div className="col-detail__intro">
          <p>{collection.longDescription}</p>
        </div>

        {products.length > 0 ? (
          <div className="col-detail__grid">
            {products.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        ) : (
          <div className="col-detail__empty">
            <p>No products in this collection yet.</p>
            <Link to="/shop" className="btn-primary">Browse All Products</Link>
          </div>
        )}
      </div>
    </div>
  );
}
