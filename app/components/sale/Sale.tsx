import { useTranslations } from "next-intl";

interface ISaleProps {}

export const Sale = (props: ISaleProps) => {
  const t = useTranslations("Index.Sale");

  return (
    <section className="sale">
      <div className="container">
        <div className="sale__inner">
          <div className="sale__description">
            <div className="sale__title">{t("title")}</div>
            <div className="slae__text">{t("subTitle")}</div>
          </div>
          <a href="/service" className="sale__link">
            {t("link")}
          </a>
        </div>
      </div>
    </section>
  );
};
