import './SectionTitle.css';

export default function SectionTitle({ label, title, subtitle, align = 'left' }) {
  return (
    <div className={`section-title section-title--${align}`}>
      {label && <p className="section-title__label">{label}</p>}
      <h2 className="section-title__heading">{title}</h2>
      {subtitle && <p className="section-title__subtitle">{subtitle}</p>}
    </div>
  );
}
