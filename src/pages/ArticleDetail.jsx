import { useParams, Link } from 'react-router-dom';
import { getArticleBySlug, articles } from '../data/articles';
import Newsletter from '../components/Newsletter';
import Breadcrumbs from '../components/Breadcrumbs';
import './ArticleDetail.css';

export default function ArticleDetail() {
  const { slug } = useParams();
  const article = getArticleBySlug(slug);

  if (!article) {
    return (
      <div className="container" style={{ padding: '120px 40px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 32, marginBottom: 16 }}>Article not found</h2>
        <Link to="/wellness" className="btn-primary">Back to Journal</Link>
      </div>
    );
  }

  const related = articles.filter(a => a.id !== article.id).slice(0, 2);

  return (
    <div className="article-page">
      <div className="container">
        <Breadcrumbs crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Wellness', href: '/wellness' },
          { label: article.title },
        ]} />
      </div>

      <div className="article-page__hero">
        <div className="container article-page__hero-inner">
          <p className="article-page__meta">{article.category} · {article.readTime} · {article.date}</p>
          <h1 className="article-page__title">{article.title}</h1>
          <p className="article-page__subtitle">{article.subtitle}</p>
        </div>
      </div>

      <div className="article-page__cover">
        <img src={article.image} alt={article.title} />
      </div>

      <div className="container article-page__body-wrap">
        <div className="article-page__body" dangerouslySetInnerHTML={{ __html: article.content }} />
      </div>

      {related.length > 0 && (
        <div className="article-page__related">
          <div className="container">
            <h2 className="article-page__related-title">More from the journal</h2>
            <div className="article-page__related-grid">
              {related.map(a => (
                <Link key={a.id} to={`/wellness/${a.slug}`} className="article-page__related-card">
                  <div className="article-page__related-img">
                    <img src={a.image} alt={a.title} />
                  </div>
                  <p className="article-page__related-cat">{a.category} · {a.readTime}</p>
                  <h3 className="article-page__related-card-title">{a.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      <Newsletter />
    </div>
  );
}
