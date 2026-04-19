import { Link } from 'react-router-dom';
import './Breadcrumbs.css';

export default function Breadcrumbs({ crumbs }) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      {crumbs.map((crumb, i) => (
        <span key={i} className="breadcrumbs__item">
          {i < crumbs.length - 1 ? (
            <>
              <Link to={crumb.href}>{crumb.label}</Link>
              <span className="breadcrumbs__sep">›</span>
            </>
          ) : (
            <span className="breadcrumbs__current">{crumb.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
