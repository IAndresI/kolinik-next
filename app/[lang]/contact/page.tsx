import Link from "next/link";

export default function Contact() {
  return (
    <div>
      <section className="preview preview--small">
        <span className="preview__name">Contact Us</span>
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
                contact
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section className="contact">
        <div className="container">
          <div className="contact__inner">
            <div className="contact__form-container">
              <div className="contact__title title">
                <div className="title__main">Send Message</div>
              </div>
              <form className="contact__form">
                <input
                  type="text"
                  className="contact__input"
                  placeholder="Your Name"
                />
                <input
                  type="email"
                  className="contact__input"
                  placeholder="Email"
                />
                <input
                  type="text"
                  className="contact__input"
                  placeholder="Website"
                />
                <textarea
                  className="contact__input contact__input--big"
                  placeholder="Write Message"
                ></textarea>
                <button type="submit" className="contact__submit">
                  send message
                </button>
              </form>
            </div>
            <div className="contact__information">
              <ul className="contact__list list">
                <li className="contact__item">
                  <div className="contact__item-title">Office Address</div>
                  <address className="contact__item-text text">
                    4920 Northwest 2 Avenue Medford, MN 55049 kigkong,USA
                  </address>
                </li>
                <li className="contact__item">
                  <div className="contact__item-title">Phone Number</div>
                  <a
                    className="contact__link link text"
                    href="tel:+888-555-333"
                  >
                    +888-555-333
                  </a>
                </li>
                <li className="contact__item">
                  <div className="contact__item-title">Email Address</div>
                  <a
                    className="contact__link link text"
                    href="mailto:kolinik@gmail.com"
                  >
                    kolinik@gmail.com
                  </a>
                  <a
                    className="contact__link link text"
                    href="mailto:kolinik@yandex.ru"
                  >
                    kolinik@yandex.ru
                  </a>
                </li>
                <li className="contact__item">
                  <div className="contact__item-title">Fax Number</div>
                  <address className="contact__item-text text">
                    4920 Northwest 2 Avenue Medford, MN 55049 kigkong,USA
                  </address>
                </li>
              </ul>
              <div className="contact__subtitle">
                Call Now
                <a href="tel:+888-555-333" className="contact__link">
                  +888-555-333
                </a>
              </div>
              <form className="contact__form contact__form--sm">
                <input
                  type="tel"
                  className="contact__input"
                  placeholder="Enter Phone Number"
                />
                <button className="contact__submit" type="submit">
                  Free call back
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
