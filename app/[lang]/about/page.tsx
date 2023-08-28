import Image from "next/image";

import provideSlide1 from "@/app/assets/provide/slide1.jpg";
import provideSlide2 from "@/app/assets/provide/slide2.jpg";
import provideSlide3 from "@/app/assets/provide/slide3.jpg";
import provideSlide4 from "@/app/assets/provide/slide4.jpg";
import expirience1 from "@/app/assets/expirience/1.png";
import expirience2 from "@/app/assets/expirience/2.jpg";
import expirience3 from "@/app/assets/expirience/3.jpg";
import expirience4 from "@/app/assets/expirience/4.jpg";
import news1 from "@/app/assets/news/1.jpg";
import news2 from "@/app/assets/news/2.jpg";
import news3 from "@/app/assets/news/3.png";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("Index");

  return (
    <div>
      <section className="preview preview--small">
        <span className="preview__name">About Us</span>
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
                about
              </a>
            </li>
          </ul>
        </div>
      </section>
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
                  alt="provide image"
                  className="provide__image"
                  fill
                />
              </div>
              <div className="provide__slider-item">
                <Image
                  src={provideSlide2}
                  alt="provide image"
                  className="provide__image"
                  fill
                />
              </div>
              <div className="provide__slider-item">
                <Image
                  src={provideSlide3}
                  alt="provide image"
                  className="provide__image"
                  fill
                />
              </div>
              <div className="provide__slider-item">
                <Image
                  src={provideSlide4}
                  alt="provide image"
                  className="provide__image"
                  fill
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
      <section className="plan plan--bg">
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
                <li className="plan__advantage-item">
                  Full Blood Examination.
                </li>
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
                <li className="plan__advantage-item">
                  Full Blood Examination.
                </li>
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
                <li className="plan__advantage-item">
                  Full Blood Examination.
                </li>
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
      <section className="expirience">
        <div className="container">
          <div className="expirience__inner">
            <div className="expirience__image-list">
              <div className="expirience__image-container">
                <Image
                  src={expirience1}
                  fill
                  alt="expirience image"
                  className="expirience__image"
                />
              </div>
              <div className="expirience__image-container">
                <Image
                  src={expirience2}
                  fill
                  alt="expirience image"
                  className="expirience__image"
                />
              </div>
              <div className="expirience__image-container">
                <Image
                  src={expirience3}
                  fill
                  alt="expirience image"
                  className="expirience__image"
                />
              </div>
              <div className="expirience__image-container">
                <Image
                  src={expirience4}
                  fill
                  alt="expirience image"
                  className="expirience__image"
                />
              </div>
            </div>
            <div className="expirience__description">
              <div className="expirience__description-title title title--special-2">
                <div className="title__main">
                  30 Years More Services Experiences
                </div>
              </div>
              <div className="expirience__text text">
                Suspendisse nulla praesent, neque volutpat lacinia libero nullam
                ut, in auctor nonummy mi augu massa ult tellus ut integer
                ultrices facilisis semper.
              </div>
              <ul className="expirience__progress-list list">
                <li className="expirience__progress-item">
                  <div className="expirience__progress-name">
                    Heart Surgery
                    <div className="expirience__progress-counter">
                      80<span className="expririence__postfix">%</span>
                    </div>
                  </div>
                  <progress
                    className="expirience__progress"
                    max="100"
                    value="80"
                  ></progress>
                </li>
                <li className="expirience__progress-item">
                  <div className="expirience__progress-name">
                    Laborate Analysis
                    <div className="expirience__progress-counter">
                      90<span className="expririence__postfix">%</span>
                    </div>
                  </div>
                  <progress
                    className="expirience__progress"
                    max="100"
                    value="90"
                  ></progress>
                </li>
                <li className="expirience__progress-item">
                  <div className="expirience__progress-name">
                    Customer Support
                    <div className="expirience__progress-counter">
                      75<span className="expririence__postfix">%</span>
                    </div>
                  </div>
                  <progress
                    className="expirience__progress"
                    max="100"
                    value="75"
                  ></progress>
                </li>
                <li className="expirience__progress-item">
                  <div className="expirience__progress-name">
                    Medical Research
                    <div className="expirience__progress-counter">
                      85<span className="expririence__postfix">%</span>
                    </div>
                  </div>
                  <progress
                    className="expirience__progress"
                    max="100"
                    value="85"
                  ></progress>
                </li>
              </ul>
            </div>
          </div>
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
      <section className="news">
        <div className="container">
          <ul className="news__list list">
            <li className="news__item">
              <a href="/blog/details" className="news__image-link link">
                <div className="news__image-container">
                  <Image
                    src={news1}
                    alt="news image"
                    className="news__image"
                    fill
                  />
                </div>
                <time className="news__date">24 March 2020</time>
              </a>
              <div className="news__description">
                <div className="news__author">
                  By Admin
                  <span className="news__tag">
                    <div className="news__tag">
                      <a href="/blog" className="news__tag-link link">
                        Doctor
                      </a>
                      ,
                      <a href="/blog" className="news__tag-link link">
                        Clinic
                      </a>
                    </div>
                  </span>
                </div>
                <a className="news__title link" href="/blog/details">
                  Medical and Love Have 4 Things In Common
                </a>
                <div className="news__text">
                  Consequat vulputate eget metumpeng magna commodo purus etiam.
                </div>
                <a href="/blog/details" className="news__link">
                  read more
                </a>
              </div>
            </li>
            <li className="news__item">
              <a href="/blog/details" className="news__image-link link">
                <div className="news__image-container">
                  <Image
                    src={news2}
                    alt="news image"
                    className="news__image"
                    fill
                  />
                </div>
                <time className="news__date">28 March 2020</time>
              </a>
              <div className="news__description">
                <div className="news__author">
                  By Admin
                  <div className="news__tag">
                    <a href="/blog" className="news__tag-link link">
                      Care
                    </a>
                    ,
                    <a href="/blog" className="news__tag-link link">
                      Surgery
                    </a>
                  </div>
                </div>
                <a className="news__title link" href="/blog/details">
                  Being A Star In You dustry Is A Matter
                </a>
                <div className="news__text">
                  Consequat vulputate eget metumpeng magna commodo purus etiam.
                </div>
                <a href="/blog/details" className="news__link">
                  read more
                </a>
              </div>
            </li>
            <li className="news__item">
              <a href="/blog/details" className="news__image-link link">
                <div className="news__image-container">
                  <Image
                    src={news3}
                    alt="news image"
                    className="news__image"
                    fill
                  />
                </div>
                <time className="news__date">30 March 2020</time>
              </a>
              <div className="news__description">
                <div className="news__author">
                  By Admin
                  <div className="news__tag">
                    <a href="/blog" className="news__tag-link link">
                      Health
                    </a>
                    ,
                    <a href="/blog" className="news__tag-link link">
                      Medical
                    </a>
                  </div>
                </div>
                <a className="news__title link" href="/blog/details">
                  22 Tips To Start Building A Medical
                </a>
                <div className="news__text">
                  Consequat vulputate eget metumpeng magna commodo purus etiam.
                </div>
                <a href="/blog/details" className="news__link">
                  read more
                </a>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
