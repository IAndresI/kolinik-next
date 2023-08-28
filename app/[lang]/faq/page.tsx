import Link from "next/link";

export default function Faq() {
  return (
    <div className="main">
      <section className="preview preview--small">
        <span className="preview__name">Common Question About Us</span>
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
                FAQ
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section className="question question--white">
        <div className="container">
          <div className="question__inner">
            <div className="question__description">
              <div className="question__title title">
                <div className="title__main">Frequently Asked Questions</div>
                <p className="title__text">
                  Condimentum rutrum placerat egestas condimentum mi eros.
                  Eleifend cras quirntum Feugiat elit placerat. Diam tempor
                  malesuada.
                </p>
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
                    facilisis lacus nam lacus, ridiculus aenean eros, nulla id
                    orci. Accumsan vedonec Pretra quisque, facilisi mauris
                    posuere, facilisis aliquam sollicitudin sit. Quam risus
                    nulla ut dui, ullamcorper elit nam condimentum metus
                    aliquet, id in, taciti convallis proin.
                  </p>
                  <span className="question__text question__text--bold">
                    Our Vission
                  </span>
                  <p className="question__text text">
                    Sollicitudin dolor sit amet, mi volutpat, aenean potenti
                    facilisis lacus nam lacus, ridiculus aenean eros, nulla id
                    orci. Accumsan vedonec Pretra quisque, facilisi mauris
                    posuere, facilisis aliquam sit.
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
                    facilisis lacus nam lacus, ridiculus aenean eros, nulla id
                    orci. Accumsan vedonec Pretra quisque, facilisi mauris
                    posuere, facilisis aliquam sollicitudin sit. Quam risus
                    nulla ut dui, ullamcorper elit nam condimentum metus
                    aliquet, id in, taciti convallis proin.
                  </p>
                  <span className="question__text question__text--bold">
                    Our Vission
                  </span>
                  <p className="question__text text">
                    Sollicitudin dolor sit amet, mi volutpat, aenean potenti
                    facilisis lacus nam lacus, ridiculus aenean eros, nulla id
                    orci. Accumsan vedonec Pretra quisque, facilisi mauris
                    posuere, facilisis aliquam sit.
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
                    facilisis lacus nam lacus, ridiculus aenean eros, nulla id
                    orci. Accumsan vedonec Pretra quisque, facilisi mauris
                    posuere, facilisis aliquam sollicitudin sit. Quam risus
                    nulla ut dui, ullamcorper elit nam condimentum metus
                    aliquet, id in, taciti convallis proin.
                  </p>
                  <span className="question__text question__text--bold">
                    Our Vission
                  </span>
                  <p className="question__text text">
                    Sollicitudin dolor sit amet, mi volutpat, aenean potenti
                    facilisis lacus nam lacus, ridiculus aenean eros, nulla id
                    orci. Accumsan vedonec Pretra quisque, facilisi mauris
                    posuere, facilisis aliquam sit.
                  </p>
                </div>
                <button className="question__button">
                  Where Are Out Other Brunch
                </button>
                <div className="question__answer">
                  <span className="question__text question__text--bold">
                    Our Mission
                  </span>
                  <p className="question__text text">
                    Lorem ipsum dolor sit amet, mi volutpat, aenean potenti
                    facilisis lacus nam lacus, ridiculus aenean eros, nulla id
                    orci. Accumsan vedonec Pretra quisque, facilisi mauris
                    posuere, facilisis aliquam sollicitudin sit. Quam risus
                    nulla ut dui, ullamcorper elit nam condimentum metus
                    aliquet, id in, taciti convallis proin.Lorem ipsum dolor sit
                    amet, mi volutpat, aenean potenti facilisis lacus nam lacus,
                    ridiculus aenean eros, nulla id orci. Accumsan vedonec
                    Pretra quisque, facilisi mauris posuere, facilisis aliquam
                    sollicitudin sit. Quam risus nulla ut dui, ullamcorper elit
                    nam condimentum metus aliquet, id in, taciti convallis
                    proin.
                  </p>
                  <span className="question__text question__text--bold">
                    Our Vission
                  </span>
                  <p className="question__text text">
                    Sollicitudin dolor sit amet, mi volutpat, aenean potenti
                    facilisis lacus nam lacus, ridiculus aenean eros, nulla id
                    orci. Accumsan vedonec Pretra quisque, facilisi mauris
                    posuere, facilisis aliquam sit.
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
