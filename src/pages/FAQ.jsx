import FAQAccordion from '../components/FAQAccordion';
import Newsletter from '../components/Newsletter';
import './FAQ.css';

const FAQ_ITEMS = [
  {
    question: 'What are aroma beads made of?',
    answer: 'Scent-Ji aroma beads are made from natural aromatic plant materials — including sandalwood, sage, lavender, rose, osmanthus, and other dried herbs — combined with elm bark flour as a natural binder. No synthetic fragrance oils. No prohibited materials. All ingredients are natural and plant-derived.',
  },
  {
    question: 'How long does the scent last?',
    answer: 'Depending on the specific blend and how often you wear the piece, the scent typically lasts 3–8 months. Blends with aged sandalwood or resinous base notes (such as our Golden Sandal Blessing Bracelet) tend to last longer — up to 12 months. Lighter floral blends may begin to fade after 3–4 months. Storing your piece in the provided silk pouch when not in use significantly extends the scent life.',
  },
  {
    question: 'Can I wear it every day?',
    answer: 'Yes. Our bracelets are designed for daily wear. The aroma beads are durable for regular use. We do recommend removing your bracelet during exercise if you expect to sweat heavily, as this can affect both the beads and the elastic thread over time.',
  },
  {
    question: 'Can it get wet?',
    answer: 'No — please keep your aroma bracelet away from water. The beads are made from compressed natural plant materials, and sustained water contact will soften them, cause them to lose their shape, or break them down entirely. Remove your bracelet before showering, swimming, or washing dishes. If it gets lightly damp, pat dry gently and allow to air dry completely before wearing again.',
  },
  {
    question: 'Do you ship across New Zealand?',
    answer: 'Yes. We ship to all New Zealand addresses. Standard shipping takes 2–5 business days. Orders over NZ$80 qualify for free shipping. We also ship to Australia and select international destinations — please contact us at hello@scent-ji.com for international shipping enquiries.',
  },
  {
    question: 'What is your return policy?',
    answer: 'We accept returns on unused, unworn items in their original packaging within 14 days of delivery. Because our products contain natural aroma materials, we cannot accept returns on opened or worn items for hygiene reasons. To initiate a return, please contact us at hello@scent-ji.com with your order number.',
  },
  {
    question: 'Are Scent-Ji products safe for children?',
    answer: 'Our products are intended for adults. They are decorative jewellery items — not toys — and contain small beads that present a choking hazard. Please keep all Scent-Ji products away from children under the age of 3.',
  },
  {
    question: 'Are these products medicinal or therapeutic?',
    answer: 'No. Scent-Ji products are decorative fragrance jewellery only. They make no medicinal, therapeutic, or health claims. They are not designed to treat, prevent, or cure any condition. All packaging clearly states: "For decorative use only. Not for consumption." This is an important distinction we take seriously.',
  },
];

export default function FAQ() {
  return (
    <div className="faq-page">
      <div className="faq-page__hero">
        <div className="container">
          <p className="faq-page__eyebrow">Help & Information</p>
          <h1 className="faq-page__title">Frequently Asked Questions</h1>
          <p className="faq-page__desc">
            Everything you need to know about Scent-Ji products, shipping, and care.
          </p>
        </div>
      </div>

      <div className="faq-page__body">
        <div className="container faq-page__layout">
          <aside className="faq-page__sidebar">
            <h3>Topics</h3>
            <ul>
              <li><a href="#product">Product</a></li>
              <li><a href="#care">Care</a></li>
              <li><a href="#shipping">Shipping</a></li>
              <li><a href="#returns">Returns</a></li>
              <li><a href="#safety">Safety</a></li>
            </ul>
            <div className="faq-page__contact-box">
              <p>Still have questions?</p>
              <a href="/contact" className="btn-outline">Contact Us</a>
            </div>
          </aside>

          <div className="faq-page__content">
            <FAQAccordion items={FAQ_ITEMS} />
          </div>
        </div>
      </div>

      <Newsletter />
    </div>
  );
}
