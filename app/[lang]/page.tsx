import bgImage from "@/app/assets/preview/bg.jpg";
import { Review } from "../components/review/Review";
import { reviewsArr } from "../lib/constants";
import { CustomPopup } from "../components/popup/CustomPopup";
import { CustomTabs } from "../components/tabs/CustomTabs";
import { Count } from "../components/count/Count";
import { useTranslations } from "next-intl";
import { Services } from "../components/service/Services";
import { OurDoctors } from "../components/doctors/OurDoctors";
import { PricingPlan } from "../components/plan/PricingPlan";
import { News } from "../components/news/News";
import { Appointment } from "../components/appointment/Appointment";
import { Sale } from "../components/sale/Sale";

export default function Home() {
  const t = useTranslations("Index");

  return (
    <div>
      <section
        className="preview"
        style={{ backgroundImage: `url(${bgImage.src})` }}
      >
        <div className="container">
          <div className="preview__inner">
            <div className="preview__title">{t("Preview.title")}</div>
            <div className="preview__text">{t("Preview.subTitle")}</div>
            <div className="preview__links-container">
              <a href="#appointment" className="preview__link link">
                {t("Preview.appointment")}
              </a>
              <a href="/service" className="preview__link link">
                {t("Preview.learnMore")}
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="information">
        <div className="container">
          <div className="information__inner">
            <div className="information__item">
              <div className="information__image icon-clock-o"></div>
              <div className="information__description">
                <div className="information__title">
                  {t("Preview.schedule")}
                </div>
                <time className="information__text">08:30 am to 05:00 pm</time>
              </div>
            </div>
            <div className="information__item">
              <div className="information__image icon-map-marker"></div>
              <div className="information__description">
                <div className="information__title">{t("Preview.address")}</div>
                <address className="information__text">
                  <a href="#" className="information__link link">
                    Medino, NY 10012, USA
                  </a>
                </address>
              </div>
            </div>
            <div className="information__item">
              <div className="information__image icon-envelope"></div>
              <div className="information__description">
                <div className="information__title">{t("Preview.email")}</div>
                <a
                  href="mailto:democompany.com"
                  className="information__link link"
                >
                  democompany.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Appointment />
      <Services />
      <OurDoctors />
      <section className="department" id="department">
        <div className="container">
          <div className="department__title title title--special">
            <div className="title__main">Our Departments Best For You</div>
            <p className="title__text">
              Lorem ipsum dolor sit amet, nunc sodales massa turpis cursus
              iaculis, ur nam. Ultricies sapien fusce vitae duis, ut torquent a.
              Pede nec libero tristique, eget fusce, quis lorem vel tortor
              lacinia amet.
            </p>
          </div>
          <div className="department__inner">
            <CustomTabs />
          </div>
        </div>
      </section>
      <Sale />
      <Review reviews={reviewsArr} />
      <section className="theatre">
        <div className="container">
          <div className="theatre__inner">
            <div className="theatre__video">
              <CustomPopup openButton={<div className="theatre__button"></div>}>
                <div className="modal">
                  <section>
                    <iframe
                      autoFocus
                      className="popup__video"
                      src="https://www.youtube.com/embed/4dtV3iF4MPg"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </section>
                </div>
              </CustomPopup>
            </div>
            <div className="theatre__description">
              <div className="review__title title title--special-2">
                <div className="title__main">
                  World Best Operation Theatre In Here
                </div>
              </div>
              <p className="theatre__text">
                Fusce gravida at dolor, in blandit mi morbi donec metupendisse
                diam morbi dui, ut tortor ullamcorper porta ac, aliquet duis
                velit malesuada. Molestie elit soluta felis. Sed eu purus quam
                faubus cras maecenas quam pede. Nullam vehicula arcu
                pellentesque sed, et vestibulum at eu, dictumst egestas.
              </p>
              <a href="#" className="theatre__link link">
                read more
              </a>
            </div>
          </div>
        </div>
      </section>
      <PricingPlan />
      <section className="statistic">
        <div className="container">
          <ul className="statistic__list list">
            <li className="statistic__item">
              <div className="statistic__counter-container">
                <Count
                  className="statistic__counter"
                  enableScrollSpy={true}
                  start={0}
                  end={40}
                  duration={2.75}
                />
              </div>
              <div className="statistic__name">Total Starf</div>
            </li>
            <li className="statistic__item">
              <div className="statistic__counter-container">
                <Count
                  className="statistic__counter"
                  enableScrollSpy={true}
                  start={0}
                  end={15}
                  duration={2.75}
                />
              </div>
              <div className="statistic__name">Patients Bed</div>
            </li>
            <li className="statistic__item">
              <div className="statistic__counter-container">
                <Count
                  className="statistic__counter"
                  enableScrollSpy={true}
                  start={0}
                  end={512}
                  duration={2.75}
                />
              </div>
              <div className="statistic__name">Consultation Room</div>
            </li>
            <li className="statistic__item">
              <div className="statistic__counter-container">
                <Count
                  className="statistic__counter"
                  enableScrollSpy={true}
                  start={0}
                  end={15}
                  duration={2.75}
                />
              </div>
              <div className="statistic__name">ICU Support </div>
            </li>
          </ul>
        </div>
      </section>
      <News />
    </div>
  );
}
