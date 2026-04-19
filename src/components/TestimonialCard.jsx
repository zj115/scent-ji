import './TestimonialCard.css';

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="testimonial-card">
      <div className="testimonial-card__stars">
        {'★'.repeat(testimonial.rating)}
      </div>
      <p className="testimonial-card__text">"{testimonial.text}"</p>
      <div className="testimonial-card__footer">
        <span className="testimonial-card__name">{testimonial.name}</span>
        <span className="testimonial-card__sep">·</span>
        <span className="testimonial-card__location">{testimonial.location}</span>
      </div>
      <p className="testimonial-card__product">{testimonial.product}</p>
    </div>
  );
}
