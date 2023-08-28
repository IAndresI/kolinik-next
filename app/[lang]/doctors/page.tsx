import Image from "next/image";
import doctor1 from "@/app/assets/doctors/doctor1.png";
import doctor2 from "@/app/assets/doctors/doctor2.png";
import doctor3 from "@/app/assets/doctors/doctor3.png";
import Link from "next/link";

export default function Doctor() {
  return (
    <div>
      <section className="preview preview--small">
        <span className="preview__name">Our Doctors</span>
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
                doctors
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section className="doctors">
        <div className="container">
          <div className="doctors__title title">
            <div className="doctors__title title">
              <div className="title__main">Our Expert Doctor</div>
              <p className="title__text">
                Condimentum rutrum placerat egestas condimentum mi eros.
                Eleifend cras quirntum Feugiat elit placerat. Diam tempor
                malesuada.
              </p>
            </div>
          </div>
          <ul className="doctors__list list">
            <li className="doctors__item">
              <Link href="/doctors/1" className="doctors__image-container">
                <Image
                  src={doctor1}
                  fill
                  alt="doctor image"
                  className="doctors__image"
                />
              </Link>
              <Link href="/doctors/1" className="doctors__name">
                <span className="doctors__prefix">Dr. </span>Johan Makkelli
              </Link>
              <div className="doctors__post">Physical Medicine, MBBS</div>
              <div className="doctors__about">
                Pharetra ultricies aenean, sit metus integer arcu turpis
                dndimentum pellentesque world.
              </div>
              <ul className="doctors__social-list list">
                <li className="doctors__social-item">
                  <a
                    href="#"
                    className="doctors__link icon-facebook-f link"
                  ></a>
                </li>
                <li className="doctors__social-item">
                  <a
                    href="#"
                    className="doctors__link doctors__link--azure icon-twitter link"
                  ></a>
                </li>
                <li className="doctors__social-item">
                  <a
                    href="#"
                    className="doctors__link doctors__link--red icon-google-plus link"
                  ></a>
                </li>
              </ul>
            </li>
            <li className="doctors__item">
              <Link href="/doctors/1" className="doctors__image-container">
                <Image
                  src={doctor2}
                  fill
                  alt="doctor image"
                  className="doctors__image"
                />
              </Link>
              <Link href="/doctors/1" className="doctors__name">
                <span className="doctors__prefix">Dr. </span>Khaled Hossen
              </Link>
              <div className="doctors__post">Gynecology, MBBS</div>
              <div className="doctors__about">
                Pharetra ultricies aenean, sit metus integer arcu turpis
                dndimentum pellentesque world.
              </div>
              <ul className="doctors__social-list list">
                <li className="doctors__social-item">
                  <a
                    href="#"
                    className="doctors__link icon-facebook-f link"
                  ></a>
                </li>
                <li className="doctors__social-item">
                  <a
                    href="#"
                    className="doctors__link doctors__link--azure icon-twitter link"
                  ></a>
                </li>
                <li className="doctors__social-item">
                  <a
                    href="#"
                    className="doctors__link doctors__link--red icon-google-plus link"
                  ></a>
                </li>
              </ul>
            </li>
            <li className="doctors__item">
              <Link href="/doctors/1" className="doctors__image-container">
                <Image
                  src={doctor3}
                  fill
                  alt="doctor image"
                  className="doctors__image"
                />
              </Link>
              <Link href="/doctors/1" className="doctors__name">
                <span className="doctors__prefix">Dr. </span>Marina Yigo
              </Link>
              <div className="doctors__post">Gastoroenterology, MBBS</div>
              <div className="doctors__about">
                Pharetra ultricies aenean, sit metus integer arcu turpis
                dndimentum pellentesque world.
              </div>
              <ul className="doctors__social-list list">
                <li className="doctors__social-item">
                  <a
                    href="#"
                    className="doctors__link icon-facebook-f link"
                  ></a>
                </li>
                <li className="doctors__social-item">
                  <a
                    href="#"
                    className="doctors__link doctors__link--azure icon-twitter link"
                  ></a>
                </li>
                <li className="doctors__social-item">
                  <a
                    href="#"
                    className="doctors__link doctors__link--red icon-google-plus link"
                  ></a>
                </li>
              </ul>
            </li>
            <li className="doctors__item">
              <Link href="/doctors/1" className="doctors__image-container">
                <Image
                  src={doctor1}
                  fill
                  alt="doctor image"
                  className="doctors__image"
                />
              </Link>
              <Link href="/doctors/1" className="doctors__name">
                <span className="doctors__prefix">Dr. </span>Marina Yigo
              </Link>
              <div className="doctors__post">Gastoroenterology, MBBS</div>
              <div className="doctors__about">
                Pharetra ultricies aenean, sit metus integer arcu turpis
                dndimentum pellentesque world.
              </div>
              <ul className="doctors__social-list list">
                <li className="doctors__social-item">
                  <a
                    href="#"
                    className="doctors__link icon-facebook-f link"
                  ></a>
                </li>
                <li className="doctors__social-item">
                  <a
                    href="#"
                    className="doctors__link doctors__link--azure icon-twitter link"
                  ></a>
                </li>
                <li className="doctors__social-item">
                  <a
                    href="#"
                    className="doctors__link doctors__link--red icon-google-plus link"
                  ></a>
                </li>
              </ul>
            </li>
            <li className="doctors__item">
              <Link href="/doctors/1" className="doctors__image-container">
                <Image
                  src={doctor2}
                  fill
                  alt="doctor image"
                  className="doctors__image"
                />
              </Link>
              <Link href="/doctors/1" className="doctors__name">
                <span className="doctors__prefix">Dr. </span>Marina Yigo
              </Link>
              <div className="doctors__post">Gastoroenterology, MBBS</div>
              <div className="doctors__about">
                Pharetra ultricies aenean, sit metus integer arcu turpis
                dndimentum pellentesque world.
              </div>
              <ul className="doctors__social-list list">
                <li className="doctors__social-item">
                  <a
                    href="#"
                    className="doctors__link icon-facebook-f link"
                  ></a>
                </li>
                <li className="doctors__social-item">
                  <a
                    href="#"
                    className="doctors__link doctors__link--azure icon-twitter link"
                  ></a>
                </li>
                <li className="doctors__social-item">
                  <a
                    href="#"
                    className="doctors__link doctors__link--red icon-google-plus link"
                  ></a>
                </li>
              </ul>
            </li>
            <li className="doctors__item">
              <Link href="/doctors/1" className="doctors__image-container">
                <Image
                  src={doctor3}
                  fill
                  alt="doctor image"
                  className="doctors__image"
                />
              </Link>
              <Link href="/doctors/1" className="doctors__name">
                <span className="doctors__prefix">Dr. </span>Marina Yigo
              </Link>
              <div className="doctors__post">Gastoroenterology, MBBS</div>
              <div className="doctors__about">
                Pharetra ultricies aenean, sit metus integer arcu turpis
                dndimentum pellentesque world.
              </div>
              <ul className="doctors__social-list list">
                <li className="doctors__social-item">
                  <a
                    href="#"
                    className="doctors__link icon-facebook-f link"
                  ></a>
                </li>
                <li className="doctors__social-item">
                  <a
                    href="#"
                    className="doctors__link doctors__link--azure icon-twitter link"
                  ></a>
                </li>
                <li className="doctors__social-item">
                  <a
                    href="#"
                    className="doctors__link doctors__link--red icon-google-plus link"
                  ></a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
      <section className="question">
        <div className="container">
          <div className="question__inner">
            <div className="question__appointment appointment appointment--block">
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
            </div>
            <div className="question__description">
              <div className="question__title title title--special-2">
                <div className="title__main">Some Common Questions</div>
              </div>
              <div className="question__accordion">
                <button className="question__button">
                  Why People Choose Us?{" "}
                </button>
                <div className="question__answer">
                  <span className="question__text question__text--bold">
                    Our Mission
                  </span>
                  <p className="question__text text">
                    Lorem ipsum dolor sit amet, mi volutpat, aenean potenti
                    facililacus nam lacus, ridiculus aenean eros, nulla id orci.
                    Accumsan veecilisi mauris posuere, facilisis aliquam.
                  </p>
                  <span className="question__text question__text--bold">
                    Our Vission
                  </span>
                  <p className="question__text text">
                    sollicitudin dolor sit amet, mi volutpat, aenean potenti
                    facilisilacus nam lacus, ridiculus aenean eros, nulla id
                    orci.
                  </p>
                </div>
                <button className="question__button">
                  Our Mission & Vision?{" "}
                </button>
                <div className="question__answer">
                  <span className="question__text question__text--bold">
                    Our Mission
                  </span>
                  <p className="question__text text">
                    Lorem ipsum dolor sit amet, mi volutpat, aenean potenti
                    facililacus nam lacus, ridiculus aenean eros, nulla id orci.
                    Accumsan veecilisi mauris posuere, facilisis aliquam.
                  </p>
                  <span className="question__text question__text--bold">
                    Our Vission
                  </span>
                  <p className="question__text text">
                    sollicitudin dolor sit amet, mi volutpat, aenean potenti
                    facilisilacus nam lacus, ridiculus aenean eros, nulla id
                    orci.
                  </p>
                </div>
                <button className="question__button">
                  How To Get Service?
                </button>
                <div className="question__answer">
                  <span className="question__text question__text--bold">
                    Our Mission
                  </span>
                  <p className="question__text text">
                    Lorem ipsum dolor sit amet, mi volutpat, aenean potenti
                    facililacus nam lacus, ridiculus aenean eros, nulla id orci.
                    Accumsan veecilisi mauris posuere, facilisis aliquam.
                  </p>
                  <span className="question__text question__text--bold">
                    Our Vission
                  </span>
                  <p className="question__text text">
                    sollicitudin dolor sit amet, mi volutpat, aenean potenti
                    facilisilacus nam lacus, ridiculus aenean eros, nulla id
                    orci.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="plan">
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
    </div>
  );
}
