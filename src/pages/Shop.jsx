import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import SectionTitle from '../components/SectionTitle';
import './Shop.css';

const SORT_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'name-asc', label: 'Name: A–Z' },
];

const FILTER_OPTIONS = [
  { value: 'all', label: 'All Products' },
  { value: 'calm', label: 'Calm Series' },
  { value: 'blessing', label: 'Blessing Series' },
  { value: 'gift', label: 'Gift Series' },
  { value: 'bestseller', label: 'Best Sellers' },
];

export default function Shop() {
  const [searchParams] = useSearchParams();
  const querySearch = searchParams.get('q') || '';

  const [filter, setFilter] = useState('all');
  const [sort, setSort] = useState('featured');
  const [search, setSearch] = useState(querySearch);

  const filtered = useMemo(() => {
    let list = products;
    if (filter !== 'all') {
      list = list.filter(p => p.tags.includes(filter));
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.subtitle.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
      );
    }
    switch (sort) {
      case 'price-asc': return [...list].sort((a, b) => a.price - b.price);
      case 'price-desc': return [...list].sort((a, b) => b.price - a.price);
      case 'name-asc': return [...list].sort((a, b) => a.name.localeCompare(b.name));
      default: return list;
    }
  }, [filter, sort, search]);

  return (
    <div className="shop-page">
      <div className="shop-page__hero">
        <div className="container">
          <p className="shop-page__eyebrow">Scent-Ji Shop</p>
          <h1 className="shop-page__title">All Products</h1>
          <p className="shop-page__subtitle">
            Handcrafted aroma jewellery. Natural materials. Made in small batches.
          </p>
        </div>
      </div>

      <div className="container shop-page__body">
        {/* Toolbar */}
        <div className="shop-toolbar">
          <div className="shop-toolbar__filters">
            {FILTER_OPTIONS.map(f => (
              <button
                key={f.value}
                className={`shop-filter-btn ${filter === f.value ? 'active' : ''}`}
                onClick={() => setFilter(f.value)}
              >
                {f.label}
              </button>
            ))}
          </div>
          <div className="shop-toolbar__right">
            <div className="shop-search">
              <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>
            <select
              value={sort}
              onChange={e => setSort(e.target.value)}
              className="shop-sort"
            >
              {SORT_OPTIONS.map(s => (
                <option key={s.value} value={s.value}>{s.label}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Count */}
        <p className="shop-page__count">{filtered.length} product{filtered.length !== 1 ? 's' : ''}</p>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="shop-grid">
            {filtered.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        ) : (
          <div className="shop-empty">
            <p>No products match your search.</p>
            <button className="btn-outline" onClick={() => { setSearch(''); setFilter('all'); }}>
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
