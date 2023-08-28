import servicesDental from "@/app/assets/services-item/dental.png";
import servicesGynecology from "@/app/assets/services-item/gynaecological.png";
import servicesOphtalmology from "@/app/assets/services-item/ophtalmology.png";
import servicesCardiology from "@/app/assets/services-item/cardiology.png";
import servicesOutpatient from "@/app/assets/services-item/outpatient.png";
import servicesLaboratory from "@/app/assets/services-item/laboratory.png";
import { useTranslations } from "next-intl";

interface IServicesProps {}

export const Services = (props: IServicesProps) => {
  const t = useTranslations("Services");

  return (
    <section className="services">
      <div className="container">
        <div className="services__title title">
          <div className="title__main">{t("title")}</div>
          <p className="title__text">{t("subTitle")}</p>
        </div>
        <ul className="services__list list">
          <li className="services__item">
            <div
              className="services__image"
              style={{ backgroundImage: `url(${servicesCardiology.src})` }}
            ></div>
            <div className="services__name">{t("list.cardiology.title")}</div>
            <p className="services__text">{t("list.cardiology.description")}</p>
          </li>
          <li className="services__item">
            <div
              className="services__image"
              style={{ backgroundImage: `url(${servicesDental.src})` }}
            ></div>
            <div className="services__name">{t("list.dental.title")}</div>
            <p className="services__text">{t("list.dental.description")}</p>
          </li>
          <li className="services__item">
            <div
              className="services__image"
              style={{ backgroundImage: `url(${servicesOphtalmology.src})` }}
            ></div>
            <div className="services__name">{t("list.ophtalmology.title")}</div>
            <p className="services__text">
              {t("list.ophtalmology.description")}
            </p>
          </li>
          <li className="services__item">
            <div
              className="services__image"
              style={{ backgroundImage: `url(${servicesOutpatient.src})` }}
            ></div>
            <div className="services__name">{t("list.outpatient.title")}</div>
            <p className="services__text">{t("list.outpatient.description")}</p>
          </li>
          <li className="services__item">
            <div
              className="services__image"
              style={{ backgroundImage: `url(${servicesGynecology.src})` }}
            ></div>
            <div className="services__name">
              {t("list.gynaecological.title")}
            </div>
            <p className="services__text">
              {t("list.gynaecological.description")}
            </p>
          </li>
          <li className="services__item">
            <div
              className="services__image"
              style={{ backgroundImage: `url(${servicesLaboratory.src})` }}
            ></div>
            <div className="services__name">{t("list.analysis.title")}</div>
            <p className="services__text">{t("list.analysis.description")}</p>
          </li>
        </ul>
      </div>
    </section>
  );
};
