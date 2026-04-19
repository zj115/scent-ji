import { useState } from 'react';
import './FAQAccordion.css';

export default function FAQAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div className="faq-accordion">
      {items.map((item, i) => (
        <div key={i} className={`faq-item ${openIndex === i ? 'faq-item--open' : ''}`}>
          <button className="faq-item__question" onClick={() => toggle(i)}>
            <span>{item.question}</span>
            <span className="faq-item__icon">{openIndex === i ? '−' : '+'}</span>
          </button>
          <div className="faq-item__answer-wrap">
            <div className="faq-item__answer" dangerouslySetInnerHTML={{ __html: item.answer }} />
          </div>
        </div>
      ))}
    </div>
  );
}
