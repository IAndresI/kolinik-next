import Image from "next/image";
import doctor1 from "@/app/assets/doctors/doctor1.png";
import Link from "next/link";

export default function Doctor() {
  return (
    <div>
      <section className="preview preview--small">
        <span className="preview__name">Doctor Profile</span>
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
                doctor profile
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section className="profile">
        <div className="container">
          <div className="profile__menu menu-aside">
            <span className="menu-aside__line"></span>
            <span className="menu-aside__line"></span>
            <span className="menu-aside__line"></span>
          </div>
          <div className="profile__inner">
            <div className="profile__content">
              <div className="profile__card">
                <div className="profile__image-container">
                  <Image
                    src={doctor1}
                    quality={100}
                    fill
                    alt="doctor image"
                    className="profile__image"
                  />
                </div>
                <div className="profile__card-description">
                  <div className="profile__name">
                    <span className="profile__prefix">Dr: </span>Shipon Kumar
                  </div>
                  <div className="profile__post">Gastoroenterology, MBBS</div>
                  <p className="profile__text text">
                    Diam cum eu urna, nunc duis pulvinafusce elit mollisnulla
                    soluta aliquam adipisicing vehicula ac. Turpis ipsum dolor
                  </p>
                  <a href="#" className="profile__link link">
                    Appointment
                  </a>
                </div>
              </div>
              <table className="profile__table">
                <tbody>
                  <tr>
                    <th>About Me</th>
                    <td>
                      Contrary to popular belief, Lorem Ipsum is n sxhas roots
                      in a piece of classNameical Latin literature from 4making
                      it over 2000 years old.{" "}
                    </td>
                  </tr>
                  <tr>
                    <th>Age</th>
                    <td>28 Years</td>
                  </tr>
                  <tr>
                    <th>Work Experiences</th>
                    <td>
                      <ul className="profile__list list">
                        <li className="profile__list-item">
                          There are many variations of passages of Lorem
                          available, but the majority
                        </li>
                        <li className="profile__list-item">
                          Finibus onorum et alorum by icero classNameical lite
                          rature, discovered
                        </li>
                        <li className="profile__list-item">
                          Various versions have evolved over the years so mes by
                          accident, sometimes on purpose
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <th>Education</th>
                    <td>
                      <ul className="profile__list list">
                        <li className="profile__list-item">
                          MBBS , FCES in Gastoroenterology
                        </li>
                        <li className="profile__list-item">PHD in Medicien</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <th>Additional Information</th>
                    <td>
                      <ul className="profile__list list">
                        <li className="profile__list-item">Gamaes, Movie</li>
                        <li className="profile__list-item">
                          try to make new thinks
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <th>Social Media</th>
                    <td>
                      <ul className="profile__list profile__list--social list">
                        <li className="profile__list-item">
                          <a
                            href="#"
                            className="profile__social-link link icon-facebook-f"
                          ></a>
                        </li>
                        <li className="profile__list-item">
                          <a
                            href="#"
                            className="profile__social-link link icon-linkedin"
                          ></a>
                        </li>
                        <li className="profile__list-item">
                          <a
                            href="#"
                            className="profile__social-link link icon-pinterest-p"
                          ></a>
                        </li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="profile__aside aside">
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
                <div className="aside__title">Other Doctors</div>
                <ul className="aside__button-list list">
                  <li className="aside__button-item">
                    <button
                      className="aside__button aside__button--tab"
                      data-tab="doc0"
                    >
                      <span className="aside__button-prefix">Dr:</span>
                      Shipon Kumar
                    </button>
                  </li>
                  <li className="aside__button-item">
                    <button
                      className="aside__button aside__button--tab"
                      data-tab="doc1"
                    >
                      <span className="aside__button-prefix">Dr:</span>
                      Murad Khan
                    </button>
                  </li>
                  <li className="aside__button-item">
                    <button
                      className="aside__button aside__button--tab"
                      data-tab="doc2"
                    >
                      <span className="aside__button-prefix">Dr:</span>
                      Marina Yigo
                    </button>
                  </li>
                  <li className="aside__button-item">
                    <button
                      className="aside__button aside__button--tab"
                      data-tab="doc3"
                    >
                      <span className="aside__button-prefix">Dr:</span>
                      Ahosan Habib
                    </button>
                  </li>
                  <li className="aside__button-item">
                    <button
                      className="aside__button aside__button--tab"
                      data-tab="doc4"
                    >
                      <span className="aside__button-prefix">Dr:</span>
                      Naziur Rahman
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
