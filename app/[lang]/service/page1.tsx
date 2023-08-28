import Image from "next/image";

import review1 from "@/app/assets/review/1.png";
import review2 from "@/app/assets/review/2.png";

import cardiology from "@/app/assets/services-item/cardiology.png";
import dental from "@/app/assets/services-item/dental.png";
import gynaecological from "@/app/assets/services-item/gynaecological.png";
import laboratory from "@/app/assets/services-item/laboratory.png";
import ophtalmology from "@/app/assets/services-item/ophtalmology.png";
import outpatient from "@/app/assets/services-item/outpatient.png";
import Link from "next/link";
import { Review } from "@/app/components/review/Review";
import { reviewsArr } from "@/app/lib/constants";

export default function Mission() {
  return (
    <div>
      <section className="preview preview--small">
        <span className="preview__name">Our Service - 2</span>
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
                our service 1
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section className="services services--page">
        <div className="container">
          <ul className="services__list list">
            <li className="services__item">
              <div className="services__image">
                <Image src={cardiology} fill alt="Cardiology icon" />
              </div>

              <div className="services__name">Cardiology</div>
              <p className="services__text">
                Lorem ipsum dolor sit amenuodales massa turpis cursus iaculis
                urna nam. Ultricies sapien fusce
              </p>
            </li>
            <li className="services__item">
              <div className="services__image">
                {" "}
                <Image src={dental} fill alt="dental icon" />
              </div>

              <div className="services__name">Dental Surgery</div>
              <p className="services__text">
                Lorem ipsum dolor sit amenuodales massa turpis cursus iaculis
                urna nam. Ultricies sapien fusce
              </p>
            </li>
            <li className="services__item">
              <div className="services__image">
                <Image src={ophtalmology} fill alt="ophtalmology icon" />
              </div>

              <div className="services__name">Ophtalmology</div>
              <p className="services__text">
                Lorem ipsum dolor sit amenuodales massa turpis cursus iaculis
                urna nam. Ultricies sapien fusce
              </p>
            </li>
            <li className="services__item">
              <div className="services__image">
                <Image src={outpatient} fill alt="outpatient icon" />
              </div>

              <div className="services__name">Outpatient Surgery</div>
              <p className="services__text">
                Lorem ipsum dolor sit amenuodales massa turpis cursus iaculis
                urna nam. Ultricies sapien fusce
              </p>
            </li>
            <li className="services__item">
              <div className="services__image">
                <Image src={gynaecological} fill alt="gynaecological icon" />
              </div>

              <div className="services__name">Gynaecological</div>
              <p className="services__text">
                Lorem ipsum dolor sit amenuodales massa turpis cursus iaculis
                urna nam. Ultricies sapien fusce
              </p>
            </li>
            <li className="services__item">
              <div className="services__image">
                <Image src={laboratory} fill alt="laboratory icon" />
              </div>

              <div className="services__name">Laboratory Analysis</div>
              <p className="services__text">
                Lorem ipsum dolor sit amenuodales massa turpis cursus iaculis
                urna nam. Ultricies sapien fusce
              </p>
            </li>
          </ul>
        </div>
      </section>
      <section className="sale">
        <div className="container">
          <div className="sale__inner">
            <div className="sale__description">
              <div className="sale__title">
                30% Off Any Diganestic Let`s Check
              </div>
              <div className="slae__text">
                You can get upto 30% off for 45 days in here! So Contact with Us{" "}
              </div>
            </div>
            <a href="/service" className="sale__link">
              get services
            </a>
          </div>
        </div>
      </section>
      <Review reviews={reviewsArr} />
    </div>
  );
}
