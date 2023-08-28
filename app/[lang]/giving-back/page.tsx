import Image from "next/image";
import missionBg1 from "@/app/assets/mission/bg1.jpg";
import missionBg2 from "@/app/assets/mission/bg2.jpeg";
import chooseIcon from "@/app/assets/choose/fast.png";
import supportIcon from "@/app/assets/choose/support.png";
import teamIcon from "@/app/assets/choose/team.png";
import transparencyIcon from "@/app/assets/choose/transparency.png";
import Link from "next/link";

export default function GivingBack() {
  return (
    <div>
      <section className="preview preview--small">
        <span className="preview__name">Giving Back</span>
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
                giving back
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section className="giving">
        <div className="container">
          <ul className="giving__list list">
            <li className="giving__item content-image">
              <div className="content-image__image-container">
                <Image
                  src={missionBg1}
                  fill
                  alt="giving image"
                  className="content-image__image"
                />
              </div>
              <div className="content-image__description">
                <div className="content-image__title">Health Confarance </div>
                <time className="content-image__time">31 May 2020</time>
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
            <li className="giving__item content-image">
              <div className="content-image__image-container">
                <Image
                  src={missionBg2}
                  fill
                  alt="giving image"
                  className="content-image__image"
                />
              </div>
              <div className="content-image__description">
                <div className="content-image__title">Doctor Meetup In UK</div>
                <time className="content-image__time">30 May 2020</time>
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
            <li className="giving__item content-image">
              <div className="content-image__image-container">
                <Image
                  src={missionBg2}
                  fill
                  alt="giving image"
                  className="content-image__image"
                />
              </div>
              <div className="content-image__description">
                <div className="content-image__title">Career In Medical</div>
                <time className="content-image__time">29 May 2020</time>
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
            <li className="giving__item content-image">
              <div className="content-image__image-container">
                <Image
                  src={missionBg1}
                  fill
                  alt="giving image"
                  className="content-image__image"
                />
              </div>
              <div className="content-image__description">
                <div className="content-image__title">
                  World Healthday - 2020
                </div>
                <time className="content-image__time">25 May 2020</time>
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
      <section className="choose">
        <div className="container">
          <div className="choose__inner">
            <div className="choose__description">
              <div className="choose__title title title--special-2">
                <div className="title__main">Why We Are</div>
                <p className="title__text">
                  Ncidunt ipsum eget consectetuer egestas natoque cras,macus
                  penatibus eleifend nam id, mi pede mollis, consequat non
                  pretium.
                </p>
              </div>

              <ul className="choose__list list">
                <li className="choose__item">
                  <div className="choose__item-header">
                    <Image
                      className="choose__icon"
                      src={chooseIcon}
                      alt="choose icon"
                    />
                    <div className="choose__name">Fast Services</div>
                  </div>
                  <div className="choose__text text">
                    Sollicitudin sit nullam pharingilla odio ultricies erat
                    sapien purus.
                  </div>
                </li>
                <li className="choose__item">
                  <div className="choose__item-header">
                    <Image
                      className="choose__icon"
                      src={teamIcon}
                      alt="choose icon"
                    />
                    <div className="choose__name">Team Work</div>
                  </div>
                  <div className="choose__text text">
                    Sollicitudin sit nullam pharingilla odio ultricies erat
                    sapien purus.
                  </div>
                </li>
                <li className="choose__item">
                  <div className="choose__item-header">
                    <Image
                      className="choose__icon"
                      src={transparencyIcon}
                      alt="choose icon"
                    />
                    <div className="choose__name">Transparence</div>
                  </div>
                  <div className="choose__text text">
                    Sollicitudin sit nullam pharingilla odio ultricies erat
                    sapien purus.
                  </div>
                </li>
                <li className="choose__item">
                  <div className="choose__item-header">
                    <Image
                      className="choose__icon"
                      src={supportIcon}
                      alt="choose icon"
                    />
                    <div className="choose__name">25/7 Support</div>
                  </div>
                  <div className="choose__text text">
                    Sollicitudin sit nullam pharingilla odio ultricies erat
                    sapien purus.
                  </div>
                </li>
              </ul>
            </div>
            <div className="choose__image-container">
              <Image
                src={missionBg2}
                fill
                alt="choose image"
                className="choose__image"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="question question--white">
        <div className="container">
          <div className="question__inner">
            <div className="question__preview">
              <div className="question__preview-title">
                Have Questions About Your Our Services?
              </div>
              <p className="question__preview-text text">
                Penatibus dui in orci metus, ornare mollis vestibulum nam erat
                vestilum ligula lorem nibh.
              </p>
              <a href="#" className="question__link link">
                Asked Your Question
              </a>
            </div>
            <div className="question__description">
              <div className="question__accordion question__accordion--style-2">
                <button className="question__button">
                  Why People Choose Us?{" "}
                </button>
                <div className="question__answer">
                  <p className="question__text text">
                    Condimentum aliquam mauris, aliquam vel quasi sed prsent.
                    Lacus justo aliquam felis tempor risus ut, tincidunt
                    quismrcu aenean. Adipiscing libero donec placeratarcu.
                  </p>
                </div>
                <button className="question__button">
                  Our Mission & Vision?{" "}
                </button>
                <div className="question__answer">
                  <p className="question__text text">
                    Condimentum aliquam mauris, aliquam vel quasi sed prsent.
                    Lacus justo aliquam felis tempor risus ut, tincidunt
                    quismrcu aenean. Adipiscing libero donec placeratarcu.
                  </p>
                </div>
                <button className="question__button">
                  How To Get Service?
                </button>
                <div className="question__answer">
                  <p className="question__text text">
                    Condimentum aliquam mauris, aliquam vel quasi sed prsent.
                    Lacus justo aliquam felis tempor risus ut, tincidunt
                    quismrcu aenean. Adipiscing libero donec placeratarcu.
                  </p>
                </div>
                <button className="question__button">
                  How To Get Service?
                </button>
                <div className="question__answer">
                  <p className="question__text text">
                    Condimentum aliquam mauris, aliquam vel quasi sed prsent.
                    Lacus justo aliquam felis tempor risus ut, tincidunt
                    quismrcu aenean. Adipiscing libero donec placeratarcu.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
