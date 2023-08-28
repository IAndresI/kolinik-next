import Image from "next/image";

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
        <span className="preview__name">Our Service - 1</span>
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
      <section className="appointment appointment--withtext">
        <div className="container">
          <div className="appointment__inner">
            <div className="appointment__form-container">
              <div className="appointment__title">Book Appointment</div>
              <form className="appointment__form">
                <select name="" id="one" className="appointment__input">
                  <option>Dacota</option>
                  <option>Washington</option>
                  <option>New York</option>
                  <option>Bruklin</option>
                  <option>Nevada</option>
                </select>
                <select name="" id="two" className="appointment__input">
                  <option>Johan Kroyf</option>
                  <option>Joe Due</option>
                  <option>Alex Telles</option>
                  <option>Ioan Gungberg</option>
                  <option>Anastasia Ivanova</option>
                </select>
                <input
                  type="text"
                  className="appointment__input"
                  placeholder="Full Name"
                />
                <input
                  type="text"
                  className="appointment__input"
                  placeholder="Phone Number"
                />
                <input
                  type="date"
                  className="appointment__input"
                  placeholder="Appointment Date"
                />
                <button className="appointment__submit" type="submit">
                  book your appointment
                </button>
              </form>
            </div>
            <div className="appointment__description">
              <div className="appointment__description-title title title--special-2">
                <div className="title__main">
                  Why People Get Services From In Here{" "}
                </div>
              </div>
              <div className="appointment__text text">
                Ridiculus elit amet sagittis arcu cras ornare, amet a amet urna
                viIpsum sociosqu. Mi consequat nec, per urna sed consectetuer
                sed anding modi lorem mattis lorem, tellus mauris ut sed.
                <br></br>
                Vestibulum vehicula in lacus, sit at nullam sit id vitae
                volutpat, at nunc at, pellentesque dictum diam. Vivamus id
                tempus nec pellentesque nibh odio, cras accusamus vitae
                dignissimos nulla,
              </div>
              <ul className="appointment__list list feauters">
                <li className="feauters__item">
                  Ridiculus elit amet sagittis arcu cras ornare
                </li>
                <li className="feauters__item">Condimentum pulvinar velit</li>
                <li className="feauters__item">
                  Vestibulum tellus, tellus orci nec donec nonummy.
                </li>
                <li className="feauters__item">
                  Suspendisse fusce, et suspendisse tincidunt.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Review reviews={reviewsArr} />
    </div>
  );
}
