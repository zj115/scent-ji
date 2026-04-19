import { Link } from 'react-router-dom';
import Newsletter from '../components/Newsletter';
import './OurStory.css';

export default function OurStory() {
  return (
    <div className="story-page">

      {/* Hero */}
      <section className="story-hero">
        <div className="story-hero__image">
          <img src="/assets/products/product-1.jpg" alt="Scent-Ji Aroma Jewelry" />
          <div className="story-hero__overlay" />
        </div>
        <div className="story-hero__content">
          <p className="story-hero__eyebrow">Our Story · 我们的故事</p>
          <h1 className="story-hero__title">
            From Traditional<br /><em>Chinese Aroma</em><br />to New Zealand Wellness
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="story-intro">
        <div className="container story-intro__inner">
          <div className="story-intro__text">
            <p className="story-intro__lead">
              Scent-Ji was born from a single question: what would happen if the ancient Chinese
              practice of wearing fragrance were brought into modern daily life — not as a novelty,
              but as a genuine continuation of tradition?
            </p>
            <p>
              For over a thousand years, Chinese artisans have shaped aromatic herbs into wearable
              form. Emperors wore scented garments as a mark of cultivation. Scholars burned
              he xiang (合香) — blended aroma — while writing. The practice of carrying fragrance
              close to the body was understood not as decoration, but as a daily act of intention.
            </p>
            <p>
              We make each piece by hand, blending dried aromatics according to traditional formulae
              and pairing them with natural crystals chosen for their complementary qualities.
              Each bracelet is a small object with a considered purpose.
            </p>
          </div>
          <div className="story-intro__image">
            <img src="/assets/products/product-2.jpg" alt="Handcrafted Scent-Ji jewelry" />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="story-values">
        <div className="container">
          <p className="story-values__label">What we believe</p>
          <div className="story-values__grid">
            <div className="story-value">
              <div className="story-value__num">一</div>
              <h3>Tradition made wearable</h3>
              <p>
                Chinese aroma culture has a depth and nuance that is rarely encountered in
                contemporary wellness products. We work to honour that depth — not as imitation,
                but as continuation.
              </p>
            </div>
            <div className="story-value">
              <div className="story-value__num">二</div>
              <h3>Natural materials only</h3>
              <p>
                Every bead we make uses natural aromatic ingredients — dried herbs, resins, and
                botanical extracts. No synthetic fragrance. No shortcuts. The scent you wear is
                exactly what it says it is.
              </p>
            </div>
            <div className="story-value">
              <div className="story-value__num">三</div>
              <h3>Made by hand, slowly</h3>
              <p>
                We make in small batches. Each bracelet is shaped, assembled, and checked by hand.
                We believe in the difference that human attention makes — in the object, and in the
                experience of wearing it.
              </p>
            </div>
            <div className="story-value">
              <div className="story-value__num">四</div>
              <h3>Jewellery with purpose</h3>
              <p>
                We are not a perfume brand. We make jewellery that carries fragrance — a distinction
                that matters. The object should be beautiful on its own. The scent is an additional
                dimension, not the whole story.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Split — large image with text */}
      <section className="story-split">
        <div className="story-split__image">
          <img src="/assets/products/product-6.jpg" alt="Scent-Ji mala bracelet detail" />
        </div>
        <div className="story-split__text">
          <p className="story-split__label">The Material</p>
          <h2 className="story-split__title">What goes into each bead</h2>
          <p>
            Our aroma beads are made from a mixture of dried aromatic herbs ground into a fine
            powder, combined with natural elm bark flour as a binder, and shaped by hand. Once
            dried slowly at room temperature, they are polished and strung alongside crystals
            chosen for their complement to each specific blend.
          </p>
          <p>
            The process is unchanged from the traditional method of making xiang zhu (香珠).
            It is slow, imprecise in the way that handmade things always are, and deeply
            satisfying to do.
          </p>
          <p>
            Each blend uses between five and twelve ingredients. The formula for each series
            is developed through testing and refinement over many batches.
          </p>
        </div>
      </section>

      {/* Large image — full bleed */}
      <section className="story-fullbleed">
        <img src="/assets/products/product-9.jpg" alt="Scent-Ji jewelry lifestyle" />
        <div className="story-fullbleed__caption">
          <p>香玑 · Scent-Ji · New Zealand</p>
        </div>
      </section>

      {/* Compliance */}
      <section className="story-compliance">
        <div className="container story-compliance__inner">
          <h2>A note on our products</h2>
          <p>
            All Scent-Ji aroma jewellery is designed and sold as decorative jewellery with
            natural fragrance. Our products are not medicinal, therapeutic, or pharmaceutical
            in nature. We make no health claims. The scent is real, natural, and beautiful —
            but we sell jewellery, not wellness interventions.
          </p>
          <p>
            Our pieces are not suitable for direct consumption and should be kept away from
            children under the age of three. If you have questions about specific ingredients,
            please contact us before purchasing.
          </p>
          <Link to="/contact" className="btn-outline">Get in Touch</Link>
        </div>
      </section>

      <Newsletter />
    </div>
  );
}
