import Image from "next/image";

import doctor1 from "@/app/assets/doctors/doctor1.png";
import doctor2 from "@/app/assets/doctors/doctor2.png";
import doctor3 from "@/app/assets/doctors/doctor3.png";
import fast from "@/app/assets/choose/fast.png";
import news1 from "@/app/assets/news/1.jpg";
import news2 from "@/app/assets/news/2.jpg";
import news3 from "@/app/assets/news/3.png";
import Link from "next/link";

export default function BlogDetails() {
  return (
    <div>
      <section className="preview preview--small">
        <span className="preview__name">Blog Post</span>
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
                Blog Post
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section className="blog">
        <div className="container">
          <div className="blog__inner">
            <div className="blog__menu menu-aside">
              <span className="menu-aside__line"></span>
              <span className="menu-aside__line"></span>
              <span className="menu-aside__line"></span>
            </div>
            <div className="blog__item blog__item--details news news--big">
              <div className="news__item">
                <div className="news__image-container">
                  <Image
                    src={news1}
                    fill
                    alt="news image"
                    className="news__image"
                  />
                  <time className="news__date">24 March 2020</time>
                </div>
                <div className="news__description">
                  <div className="news__title">
                    Medical and Love Have 4 Things In Common
                  </div>
                  <div className="news__author">
                    By Admin
                    <div className="news__tag">
                      <a href="#" className="news__tag-link link">
                        Doctor
                      </a>
                      ,
                      <a href="#" className="news__tag-link link">
                        Clinic
                      </a>
                    </div>
                  </div>
                  <p className="news__text">
                    Quis aenean, a cursus ut ultrices felis mauris metus,
                    nascetur erat, vulputate sed luctus vevamus harum vitae.
                    Auctor etiam magna. Leo orci lorem posuere. Pede ligula
                    vitae placerat vestibulum sollicitudin facilisis, nec
                    euismod faucibus viverra ctus pulvinar lacus et mi in
                    interdum, volutpat vitae lorem viverra, in et ad ipsum
                    habitasse orci quisque. Odio augue ut felis netus ratione.
                    Dignissim cursus, velit metus, porta ad nec magna volutpat
                    molestie ligula, lorem et cubilia cras sapien nunc.{" "}
                    <br></br> Quam vestibulum integer, curabitur in in. Magna
                    dignissim diam nibh, sed sed urna cras lectus amet tellus,
                    aliquam porttitor lacinia velit blandit, orci odio justo,
                    vel enim sed sed. Donec erat in libero. Nunc fusce laoreet
                    lectus nam nam, et aut neque fusce, non libero sed luctus
                    aptent. Fusce vitae integer vestibulum nisl mauris sit,
                    integer donec, posuere vel, lobortis dictum. Eros aenean a.
                    Tempor at feugiat arcu, pretium pharetra et sociis.
                    Curabitur urna odio cum, ultricies rutrum ped
                  </p>
                  <div className="news__title">
                    Medical and Love Have 4 Things In Common
                  </div>
                  <p className="news__text">
                    Aliquam eleifend ante, accumsan condimentum. Maecenas
                    constetuer in in nec id, vestibulum in nibh nec, quam
                    condimentum odio vitae, turpis mus porttitor, convallis est
                    nulla. Tellus justlacus cras id ac fringilla, nunc justo
                    mauris eget sagittis, pellentesque quis ornare mauris
                    pellentesque accumsan vel. Wisi non sodales vulputate
                    laoreet massa mollis, in in sed fringilla, justo vestibulum
                    mi, eget eu vero urna justo. Leo justo parturient lorem,
                    eleifend metus nulla
                  </p>
                  <ul className="news__image-list list">
                    <li className="news__image-container">
                      <Image
                        src={news2}
                        fill
                        alt="news image"
                        className="news__image news__image--sm"
                      />
                    </li>
                    <li className="news__image-container">
                      <Image
                        src={news3}
                        fill
                        alt="news image"
                        className="news__image news__image--sm"
                      />
                    </li>
                  </ul>
                  <p className="news__text">
                    Aliquam eleifend ante, accumsan condimentum. Maecenas
                    constetuer in in nec id, vestibulum in nibh nec, quam
                    condimentum odio vitae, turpis mus porttitor, convallis est
                    nulla. Tellus justlacus cras id ac fringilla, nunc justo
                    mauris eget sagittis, pellentesque quis ornare mauris
                    pellentesque accumsan vel. Wisi non sodales vulputate
                    laoreet massa mollis, in in sed fringilla, justo vestibulum
                    mi, eget eu vero urna justo. Leo justo parturient lorem,
                    eleifend metus nulla
                  </p>
                  <div className="news__tag-container">
                    <div className="news__tag-title">
                      Tags
                      <div className="news__tag">
                        <a href="#" className="news__tag-link link">
                          Doctor
                        </a>
                        ,
                        <a href="#" className="news__tag-link link">
                          Clinic
                        </a>
                      </div>
                    </div>
                    <ul className="news__social-list list">
                      <li className="news__social-item">
                        <a
                          href="#"
                          className="news__social-link link icon-facebook-f"
                        ></a>
                      </li>
                      <li className="news__social-item">
                        <a
                          href="#"
                          className="news__social-link link icon-linkedin"
                        ></a>
                      </li>
                      <li className="news__social-item">
                        <a
                          href="#"
                          className="news__social-link link icon-pinterest-p"
                        ></a>
                      </li>
                      <li className="news__social-item">
                        <a
                          href="#"
                          className="news__social-link link icon-twitter"
                        ></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="blog__aside aside">
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
                <div className="aside__title">Other Categories</div>
                <ul className="aside__button-list list">
                  <li className="aside__button-item">
                    <button
                      className="aside__button aside__button--tab"
                      data-tab="all"
                    >
                      All News
                      <span className="aside__button-counter">(23)</span>
                    </button>
                  </li>
                  <li className="aside__button-item">
                    <button
                      className="aside__button aside__button--tab"
                      data-tab="card"
                    >
                      Cardiology
                      <span className="aside__button-counter">(5)</span>
                    </button>
                  </li>
                  <li className="aside__button-item">
                    <button
                      className="aside__button aside__button--tab"
                      data-tab="med"
                    >
                      Medical Research
                      <span className="aside__button-counter">(9)</span>
                    </button>
                  </li>
                  <li className="aside__button-item">
                    <button
                      className="aside__button aside__button--tab"
                      data-tab="health"
                    >
                      Health Tips
                      <span className="aside__button-counter">(6)</span>
                    </button>
                  </li>
                  <li className="aside__button-item">
                    <button
                      className="aside__button aside__button--tab"
                      data-tab="rep"
                    >
                      Medical Report
                      <span className="aside__button-counter">(3)</span>
                    </button>
                  </li>
                </ul>
              </div>
              <div className="aside__item">
                <div className="aside__title">Popular Posts</div>
                <ul className="aside__list list">
                  <li className="aside__popular-item">
                    <a
                      href="#"
                      className="aside__popular-link aside__popular-link--image link"
                    >
                      <div className="aside__popular-imagecontainer">
                        <Image
                          src={fast}
                          fill
                          alt="post image"
                          className="aside__popular-image"
                        />
                      </div>
                    </a>
                    <div className="aside__popular-content">
                      <a href="#" className="aside__popular-link link">
                        <div className="aside__popular-name">
                          Accumsan Condimtum. Maecenas
                        </div>
                      </a>
                      <div className="aside__popular-information">
                        <div className="aside__popular-author">
                          Post By{" "}
                          <span className="aside__pupular-authorname">
                            Admin
                          </span>
                        </div>
                        <time className="aside__popular-time">21 Dec 2020</time>
                      </div>
                    </div>
                  </li>
                  <li className="aside__popular-item">
                    <a
                      href="#"
                      className="aside__popular-link aside__popular-link--image link"
                    >
                      <div className="aside__popular-imagecontainer">
                        <Image
                          src={fast}
                          fill
                          alt="post image"
                          className="aside__popular-image"
                        />
                      </div>
                    </a>
                    <div className="aside__popular-content">
                      <a href="#" className="aside__popular-link link">
                        <div className="aside__popular-name">
                          Quisque elit nonet ligula in accumsan
                        </div>
                      </a>
                      <div className="aside__popular-information">
                        <div className="aside__popular-author">
                          Post By{" "}
                          <span className="aside__pupular-authorname">
                            Admin
                          </span>
                        </div>
                        <time className="aside__popular-time">9 Dec 2020</time>
                      </div>
                    </div>
                  </li>
                  <li className="aside__popular-item">
                    <a
                      href="#"
                      className="aside__popular-link aside__popular-link--image link"
                    >
                      <div className="aside__popular-imagecontainer">
                        <Image
                          src={fast}
                          fill
                          alt="post image"
                          className="aside__popular-image"
                        />
                      </div>
                    </a>
                    <div className="aside__popular-content">
                      <a href="#" className="aside__popular-link link">
                        <div className="aside__popular-name">
                          Curabitur luctus sollicidin neque tellus neque tellus
                          neque tellus.
                        </div>
                      </a>
                      <div className="aside__popular-information">
                        <div className="aside__popular-author">
                          Post By{" "}
                          <span className="aside__pupular-authorname">
                            Admin
                          </span>
                        </div>
                        <time className="aside__popular-time">5 Dec 2020</time>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="aside__item">
                <div className="aside__title">Tags</div>
                <ul className="aside__tag-list list">
                  <li className="aside__tag-item">
                    <button className="aside__tag-button aside__tag-button--active">
                      Medical
                    </button>
                  </li>
                  <li className="aside__tag-item">
                    <button className="aside__tag-button">Cardiology</button>
                  </li>
                  <li className="aside__tag-item">
                    <button className="aside__tag-button">Doctors</button>
                  </li>
                  <li className="aside__tag-item">
                    <button className="aside__tag-button">Live support</button>
                  </li>
                  <li className="aside__tag-item">
                    <button className="aside__tag-button">
                      Medical research
                    </button>
                  </li>
                  <li className="aside__tag-item">
                    <button className="aside__tag-button">Clinic</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="blog__comments comments">
            <div className="comments__title">
              <span className="comments__counter">03</span>
              Comments
            </div>
            <ul className="comments__list list">
              <li className="comments__item">
                <div className="comments__post">
                  <a href="#" className="comments__link link">
                    Reply
                  </a>
                  <div className="comments__image-container">
                    <Image
                      src={doctor1}
                      fill
                      alt="author image"
                      className="comments__image"
                    />
                  </div>
                  <div className="comments__description">
                    <div className="comments__author">
                      Andre Spez
                      <time className="comments__time">10 Hours Ago</time>
                    </div>
                    <p className="comments__text text">
                      Lorem ipsum dolor sit amet, lobortis nulla lorem, sed ac
                      facilisis aenean. Puru lectus diam fermentum, orci massa,
                      vulputate non amet lectus non ullamco
                    </p>
                  </div>
                </div>
                <ul className="comments__answer-list list">
                  <li className="comments__post comments__post--answer">
                    <a href="#" className="comments__link link">
                      Reply
                    </a>
                    <div className="comments__image-container">
                      <Image
                        src={doctor2}
                        fill
                        alt="author image"
                        className="comments__image"
                      />
                    </div>
                    <div className="comments__description">
                      <div className="comments__author">
                        Maria Sidorik
                        <time className="comments__time">5 Hours Ago</time>
                      </div>
                      <p className="comments__text text">
                        Lorem ipsum dolor sit amet, lobortis nulla lorem, sed ac
                        facilisis aenean!
                      </p>
                    </div>
                  </li>
                </ul>
              </li>
              <li className="comments__item">
                <div className="comments__post">
                  <a href="#" className="comments__link link">
                    Reply
                  </a>
                  <div className="comments__image-container">
                    <Image
                      src={doctor3}
                      fill
                      alt="author image"
                      className="comments__image"
                    />
                  </div>
                  <div className="comments__description">
                    <div className="comments__author">
                      Andre Spez
                      <time className="comments__time">10 Hours Ago</time>
                    </div>
                    <p className="comments__text text">
                      Lorem ipsum dolor sit amet, lobortis nulla lorem, sed ac
                      facilisis aenean. Puru lectus diam fermentum, orci massa,
                      vulputate non amet lectus non ullamco
                    </p>
                  </div>
                </div>
              </li>
            </ul>
            <div className="comments__title">Leave A Comment</div>
            <form className="comments__form">
              <div className="comments__row">
                <input
                  type="text"
                  className="comments__input"
                  placeholder="Name*"
                />
                <input
                  type="email"
                  className="comments__input"
                  placeholder="Email*"
                />
              </div>
              <textarea
                className="comments__input comments__input--lg"
                placeholder="Write Message"
              ></textarea>
              <button className="comments__submit" type="submit">
                Post Comment
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
