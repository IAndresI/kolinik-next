import Image from "next/image";

import expirience1 from "@/app/assets/expirience/1.png";
import expirience2 from "@/app/assets/expirience/2.jpg";
import expirience3 from "@/app/assets/expirience/3.jpg";
import expirience4 from "@/app/assets/expirience/4.jpg";
import missionBg1 from "@/app/assets/mission/bg1.jpg";
import missionBg2 from "@/app/assets/mission/bg2.jpeg";
import Link from "next/link";

export default function Mission() {
  return (
    <div>
      <section className="preview preview--small">
        <span className="preview__name">Our Mission & Vision</span>
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
                mission & vision
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section className="mission">
        <div className="container">
          <ul className="mission__list list">
            <li className="mission__item content-image">
              <div className="content-image__image-container">
                <Image
                  src={missionBg1}
                  fill
                  alt="mission image"
                  className="content-image__image"
                />
              </div>
              <div className="content-image__description">
                <div className="content-image__title">Our Mission</div>
                <div className="content-image__subtitle text">
                  Fermentum metus libero dolorla liberrbised ligula curabitur
                  kommodo
                </div>
                <p className="content-image__text text">
                  Neque ligula nam massa aliquet tempus, nulla aliquam nascetur
                  suspendisse eros arcu, tortor porta turpis pellentesque et
                  platea vitae id risus. Sed mauris porttitor quam, magna
                  molestie aenean quis ornare sed. Pharetra in suspendisse.
                </p>
                <ul className="content-image__features features--shield list">
                  <li className="features__item">Low Investment</li>
                  <li className="features__item">Over View On Service</li>
                  <li className="features__item">24/7 Customer Support</li>
                  <li className="features__item">Life Time Membership</li>
                </ul>
              </div>
            </li>
            <li className="mission__item content-image">
              <div className="content-image__image-container">
                <Image
                  src={missionBg2}
                  fill
                  alt="mission image"
                  className="content-image__image"
                />
              </div>
              <div className="content-image__description">
                <div className="content-image__title">Our Vision</div>
                <div className="content-image__subtitle text">
                  Fermentum metus libero dolorla liberrbised ligula curabitur
                  kommodo
                </div>
                <p className="content-image__text text">
                  Neque ligula nam massa aliquet tempus, nulla aliquam nascetur
                  suspendisse eros arcu, tortor porta turpis pellentesque et
                  platea vitae id risus. Sed mauris porttitor quam, magna
                  molestie aenean quis ornare sed. Pharetra in suspendisse.
                </p>
                <ul className="content-image__features features--shield list">
                  <li className="features__item">Low Investment</li>
                  <li className="features__item">Over View On Service</li>
                  <li className="features__item">24/7 Customer Support</li>
                  <li className="features__item">Life Time Membership</li>
                </ul>
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
    </div>
  );
}
