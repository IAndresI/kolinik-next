import Image from "next/image";

import bgImage from "@/app/assets/preview/bg.jpg";
import Link from "next/link";

export default function Mission() {
  return (
    <main>
      <section className="preview preview--small">
        <span className="preview__name">Service Details</span>
      </section>
      <section className="breadcrumps">
        <div className="container">
          <ul className="breadcrumps__list list">
            <li className="breadcrumps__item breadcrumps__item--home">
              <Link className="breadcrumps__link link" href="/">
                home
              </Link>
            </li>
            <li className="breadcrumps__item">
              <a className="breadcrumps__link link" href="/service">
                services
              </a>
            </li>
            <li className="breadcrumps__item breadcrumps__item--current">
              <a className="breadcrumps__link link" href="#">
                service details
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section className="details">
        <div className="container">
          <div className="details__menu menu-aside">
            <span className="menu-aside__line"></span>
            <span className="menu-aside__line"></span>
            <span className="menu-aside__line"></span>
          </div>
          <div className="details__inner">
            <div className="details__content">
              <div className="details__title">
                Got Stuck? Try Get Services To Streamline Your Cardiology
              </div>
              <p className="details__text text">
                Lectus pulvinar lacus et mi in interdum, volutpat vitae lorem
                viverra, in et ad ipsum habitasse orci quisque. Odio augue ut
                felis netus ratione. Dignissim cursus, velit metus, porta ad nec
                magnvpat molestie ligula, lorem et cubilia cras sapien nunc.
                Quam vestibulum integer, curabitur in iMagna dignissim diam
                nibh, sed sed urna cras lectus amet tellus, aliquam porttitor
                lacinia velit blandit orci odio justo, vel enim sed sed. Donec
                erat in libero. Nunc fusce laoreet lectus nam nam, et aut neque
                fusce, non libero sed luctus aptent. Fusce vitae integer
                vestibulum nisl mauris sit, integer donec, posuere vel, lobortis
                dictum. Eros aenean a. Tempor at feugiat arcu, pretium pharetra
                et sociis. Curabitur urna odio cum, ultricies rutrum pede.
              </p>
              <ul className="details__list list features">
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
              <div className="details__image-container">
                <Image
                  src={bgImage}
                  fill
                  alt="details image"
                  className="details__image"
                />
              </div>
              <div className="details__subtitle">
                Benefits of cardiology services
              </div>
              <p className="details__text text">
                Diam error molestie consequat suscipit, amet vivamus ad gravida
                nibh euismod, congue intdum ut erat. Aliquam sed in, quisque
                elit non, et ligula in accumsan scelerisque consectetuer at.
                Venenatis ullamcorper diam vitae, faucibus amet turpis leo pede
                risus, vitae mattis sed ut, justo lacinia orci amet augue
                consequat, erat phasellus imperdiet laoreet nisl morbi quis.
              </p>
              <div className="details__subtitle">Importent of cardiology</div>
              <p className="details__text text">
                Diam error molestie consequat suscipit, amet vivamus ad gravida
                nibh euismod, congue intdum ut erat. Aliquam sed in, quisque
                elit non, et ligula in accumsan scelerisque consectetuer at.
                Venenatis ullamcorper diam vitae, faucibus amet turpis leo pede
                risus, vitae mattis sed ut, justo lacinia orci amet augue
                consequat, erat phasellus imperdiet laoreet nisl morbi quis.
              </p>
            </div>
            <div className="details__aside aside">
              <button className="aside__menu">
                <span className="aside__menu-line"></span>
                <span className="aside__menu-line"></span>
              </button>
              <form className="aside__form">
                <input
                  type="text"
                  className="aside__input"
                  placeholder="Type Kye World"
                />
                <button
                  className="aside__submit icon-search"
                  type="submit"
                ></button>
              </form>
              <div className="aside__item">
                <div className="aside__title">Other Services</div>
                <ul className="aside__button-list list">
                  <li className="aside__button-item">
                    <button
                      className="aside__button aside__button--tab"
                      data-tab="gyn"
                    >
                      Gynaecology
                    </button>
                  </li>
                  <li className="aside__button-item">
                    <button
                      className="aside__button aside__button--tab"
                      data-tab="card"
                    >
                      Cardiology
                    </button>
                  </li>
                  <li className="aside__button-item">
                    <button
                      className="aside__button aside__button--tab"
                      data-tab="dentak"
                    >
                      Dental Surgery
                    </button>
                  </li>
                  <li className="aside__button-item">
                    <button
                      className="aside__button aside__button--tab"
                      data-tab="lab"
                    >
                      Laboratory Analysis
                    </button>
                  </li>
                  <li className="aside__button-item">
                    <button
                      className="aside__button aside__button--tab"
                      data-tab="med"
                    >
                      Medical Checkup
                    </button>
                  </li>
                </ul>
              </div>
              <div className="aside__item">
                <div className="aside__title">Book Appointment</div>
                <div className="aside__appointment appointment appointment--mini">
                  <div className="appointment__form-container">
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
              </div>
              <div className="aside__item">
                <div className="aside__title">Download Broucher</div>
                <ul className="aside__button-list list">
                  <li className="aside__button-item">
                    <button className="aside__button aside__button--download">
                      Gynaecology
                    </button>
                  </li>
                  <li className="aside__button-item">
                    <button className="aside__button aside__button--download">
                      Cardiology
                    </button>
                  </li>
                  <li className="aside__button-item">
                    <button className="aside__button aside__button--download">
                      Dental Surgery
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
