import Image from "next/image";

import missionBg1 from "@/app/assets/mission/bg1.jpg";
import missionBg2 from "@/app/assets/mission/bg2.jpeg";
import provideSlide1 from "@/app/assets/provide/slide1.jpg";
import provideSlide2 from "@/app/assets/provide/slide2.jpg";
import provideSlide3 from "@/app/assets/provide/slide3.jpg";
import provideSlide4 from "@/app/assets/provide/slide4.jpg";
import Link from "next/link";
import { Review } from "@/app/components/review/Review";
import { getReviews } from "@/app/lib/queries";

export default async function Timeline() {
  const reviews = await getReviews();

  return (
    <main>
      <section className="preview preview--small">
        <span className="preview__name">Our Timeline</span>
      </section>
      <section className="breadcrumps">
        <div className="container">
          <ul className="breadcrumps__list list">
            <li className="breadcrumps__item breadcrumps__item--home">
              <Link className="breadcrumps__link link" href="/">
                home
              </Link>
            </li>
            <li className="breadcrumps__item breadcrumps__item--current">
              <a className="breadcrumps__link link" href="#">
                timeline
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section className="timeline">
        <div className="container">
          <ul className="timeline__list list">
            <li className="timeline__item">
              <div className="timeline__image-container">
                <Image
                  src={missionBg1}
                  fill
                  alt="timeline image"
                  className="timeline__image"
                />
                <span className="timeline__date">1998</span>
              </div>
              <div className="timeline__description">
                <div className="timeline__title">Start Our Journey</div>
                <p className="timeline__text text">
                  Neque ligula nam massa aliquet tempus lquam nascetur
                  suspendisse eros arcu, tortor porturpis pellentesque, et
                  platea vitae id risus.ed mauris porttitor quammagna molestie
                </p>
              </div>
            </li>
            <li className="timeline__item">
              <div className="timeline__image-container">
                <Image
                  src={missionBg2}
                  fill
                  alt="timeline image"
                  className="timeline__image"
                />
                <span className="timeline__date">2001</span>
              </div>
              <div className="timeline__description">
                <div className="timeline__title">Change Our Focus</div>
                <p className="timeline__text text">
                  Neque ligula nam massa aliquet tempus lquam nascetur
                  suspendisse eros arcu, tortor porturpis pellentesque, et
                  platea vitae id risus.ed mauris porttitor quammagna molestie
                </p>
              </div>
            </li>
            <li className="timeline__item">
              <div className="timeline__image-container">
                <Image
                  src={missionBg1}
                  fill
                  alt="timeline image"
                  className="timeline__image"
                />
                <span className="timeline__date">2002</span>
              </div>
              <div className="timeline__description">
                <div className="timeline__title">Govment Approval</div>
                <p className="timeline__text text">
                  Neque ligula nam massa aliquet tempus lquam nascetur
                  suspendisse eros arcu, tortor porturpis pellentesque, et
                  platea vitae id risus.ed mauris porttitor quammagna molestie
                </p>
              </div>
            </li>
            <li className="timeline__item">
              <div className="timeline__image-container">
                <Image
                  src={missionBg2}
                  fill
                  alt="timeline image"
                  className="timeline__image"
                />
                <span className="timeline__date">2020</span>
              </div>
              <div className="timeline__description">
                <div className="timeline__title">Start IT Traning</div>
                <p className="timeline__text">
                  Neque ligula nam massa aliquet tempus lquam nascetur
                  suspendisse eros arcu, tortor porturpis pellentesque, et
                  platea vitae id risus.ed mauris porttitor quammagna molestie
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section className="newsletter">
        <div className="container">
          <div className="newsletter__title">Singup For Our Newsletter</div>
          <form className="newsletter__form">
            <input
              type="text"
              className="newsletter__input"
              placeholder="Enter Your Email Address"
            />
            <button
              className="newsletter__submit icon-paper-plane-o"
              type="submit"
            ></button>
          </form>
        </div>
      </section>
      {Array.isArray(reviews) && <Review reviews={reviews} />}
      <section className="provide">
        <div className="container">
          <div className="provide__title title title--special">
            <div className="title__main">
              We Provided Best Service For Good Health
            </div>
            <p className="title__text">
              Lorem ipsum dolor sit amet, nunc sodales massa turpis cursuialis
              ur nam. Ultricies sapien fusce vitae duis, ut torquent a. Pede nec
              libero tristique, eget fusce
            </p>
          </div>
          <div className="provide__inner">
            <div className="provide__slider">
              <div className="provide__slider-item">
                <Image
                  src={provideSlide1}
                  fill
                  alt="provide image"
                  className="provide__image"
                />
              </div>
              <div className="provide__slider-item">
                <Image
                  src={provideSlide2}
                  fill
                  alt="provide image"
                  className="provide__image"
                />
              </div>
              <div className="provide__slider-item">
                <Image
                  src={provideSlide3}
                  fill
                  alt="provide image"
                  className="provide__image"
                />
              </div>
              <div className="provide__slider-item">
                <Image
                  src={provideSlide4}
                  fill
                  alt="provide image"
                  className="provide__image"
                />
              </div>
              <button className="provide__button icon-chevron-left"></button>
              <button className="provide__button provide__button--next icon-chevron-right"></button>
            </div>
            <div className="provide__description">
              <div className="provide__description-title title title--special-2">
                <div className="title__main">Benefits Of Services</div>
              </div>
              <div className="provide__text text">
                Ridiculus elit amet sagittis arcu cras ornare, amet a amet urna
                vicras. Ipsum sociosqu. Mi consequat nec, per urna sed vitae mi
                lectusn egestas, in consectetuer sed. Nunc id venenatis
              </div>
              <ul className="provide__features-list list features">
                <li className="features__item">
                  Liver Function Tests. The Liver Function Tests (LFT)ed
                </li>
                <li className="features__item">Full Blood Examination.</li>
                <li className="features__item">
                  TSH (Thyroid Stimulating Hormone) Quantification Urinalysis.
                </li>
                <li className="features__item">
                  INR (International Normalized Ratio)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
