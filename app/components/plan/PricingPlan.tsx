import { useTranslations } from "next-intl";

interface IPricingPlanProps {}

export const PricingPlan = (props: IPricingPlanProps) => {
  const t = useTranslations("Pricing");

  return (
    <section className="plan">
      <div className="container">
        <div className="plan__title title">
          <div className="title__main">{t("title")}</div>
          <p className="title__text">{t("subTitle")}</p>
        </div>
        <ul className="plan__list list">
          <li className="plan__item">
            <div className="plan__header">
              <div className="plan__name">Basic</div>
              <div className="plan__price">
                57<span className="plan__postfix">/{t("period")}</span>
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
              {t("link")}
            </a>
          </li>
          <li className="plan__item">
            <div className="plan__header">
              <div className="plan__name">Standart</div>
              <div className="plan__price">
                86<span className="plan__postfix">/{t("period")}</span>
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
              {t("link")}
            </a>
          </li>
          <li className="plan__item">
            <div className="plan__header">
              <div className="plan__name">Premium</div>
              <div className="plan__price">
                98<span className="plan__postfix">/{t("period")}</span>
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
              {t("link")}
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};
