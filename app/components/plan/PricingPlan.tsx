interface IPricingPlanProps {}

export const PricingPlan = (props: IPricingPlanProps) => {
  return (
    <section className="plan">
      <div className="container">
        <div className="plan__title title">
          <div className="title__main">Choose Pricing Plan</div>
          <p className="title__text">
            Condimentum rutrum placerat egestas condimentum mi eros. Eleifend
            cras quirntum Feugiat elit placerat. Diam tempor malesuada.
          </p>
        </div>
        <ul className="plan__list list">
          <li className="plan__item">
            <div className="plan__header">
              <div className="plan__name">Basic</div>
              <div className="plan__price">
                57<span className="plan__postfix">/Month</span>
              </div>
            </div>
            <ul className="plan__advantage-list list">
              <li className="plan__advantage-item">Liver Function Tests.</li>
              <li className="plan__advantage-item">Full Blood Examination.</li>
              <li className="plan__advantage-item">
                TSH (Thyroid Stimulating{" "}
              </li>
              <li className="plan__advantage-item">
                INR (International Normalized
              </li>
            </ul>
            <a href="#" className="plan__link link">
              buy now
            </a>
          </li>
          <li className="plan__item">
            <div className="plan__header">
              <div className="plan__name">Standart</div>
              <div className="plan__price">
                86<span className="plan__postfix">/Month</span>
              </div>
            </div>
            <ul className="plan__advantage-list list">
              <li className="plan__advantage-item">Liver Function Tests.</li>
              <li className="plan__advantage-item">Full Blood Examination.</li>
              <li className="plan__advantage-item">
                TSH (Thyroid Stimulating{" "}
              </li>
              <li className="plan__advantage-item">
                INR (International Normalized
              </li>
            </ul>
            <a href="#" className="plan__link link">
              buy now
            </a>
          </li>
          <li className="plan__item">
            <div className="plan__header">
              <div className="plan__name">Premium</div>
              <div className="plan__price">
                98<span className="plan__postfix">/Yearly</span>
              </div>
            </div>
            <ul className="plan__advantage-list list">
              <li className="plan__advantage-item">Liver Function Tests.</li>
              <li className="plan__advantage-item">Full Blood Examination.</li>
              <li className="plan__advantage-item">
                TSH (Thyroid Stimulating{" "}
              </li>
              <li className="plan__advantage-item">
                INR (International Normalized
              </li>
            </ul>
            <a href="#" className="plan__link link">
              buy now
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};
