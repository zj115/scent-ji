import './QuantitySelector.css';

export default function QuantitySelector({ value, onChange, min = 1, max = 99 }) {
  return (
    <div className="qty-selector">
      <button
        className="qty-selector__btn"
        onClick={() => onChange(Math.max(min, value - 1))}
        disabled={value <= min}
        aria-label="Decrease quantity"
      >−</button>
      <span className="qty-selector__value">{value}</span>
      <button
        className="qty-selector__btn"
        onClick={() => onChange(Math.min(max, value + 1))}
        disabled={value >= max}
        aria-label="Increase quantity"
      >+</button>
    </div>
  );
}
