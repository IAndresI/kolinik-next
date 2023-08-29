import { Review } from "@/app/components/review/Review";
import { Breads, reviewsArr } from "@/app/lib/constants";
import { Breadcrumps } from "@/app/components/breadcrumps/Breadcrumps";
import { Services } from "@/app/components/service/Services";
import { useTranslations } from "next-intl";
import { AppointmentForm } from "@/app/components/appointment/AppointmentForm";

export default function OurService() {
  const t = useTranslations("OurService");
  return (
    <div>
      <section className="preview preview--small">
        <span className="preview__name">{t("title")}</span>
      </section>
      <Breadcrumps
        items={[
          { label: Breads.home, link: "/" },
          { label: Breads.service, link: "/service" },
        ]}
      />
      <Services className="services--page" />

      <section className="appointment appointment--withtext">
        <div className="container">
          <div className="appointment__inner">
            <AppointmentForm />
            <div className="appointment__description">
              <div className="appointment__description-title title title--special-2">
                <div className="title__main">{t("GetHere.title")}</div>
              </div>
              <div className="appointment__text text">
                {t("GetHere.desc1")}
                <br />
                {t("GetHere.desc2")}
                <br />
                {t("GetHere.desc3")}
                <br />
                {t("GetHere.desc4")}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Review reviews={reviewsArr} />
    </div>
  );
}
