import Image from "next/image";

import fast from "@/app/assets/choose/fast.png";
import news1 from "@/app/assets/news/1.jpg";
import news2 from "@/app/assets/news/2.jpg";
import news3 from "@/app/assets/news/3.png";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Статьи клиники «Эксимер»",
  description: "Информационные статьи на актуальные темы в сфере медицины",
};

export default function Blog() {
  return (
    <div>
      <section className="preview preview--small">
        <span className="preview__name">Blog</span>
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
            <ul className="blog__list list">
              <li className="blog__item news news--big" data-content="med">
                <div className="news__item">
                  <Link
                    href="/blog/test"
                    passHref
                    className="news__image-link link"
                  >
                    <div className="news__image-container">
                      <Image
                        src={news1}
                        fill
                        alt="news image"
                        className="news__image"
                      />
                    </div>
                    <time className="news__date">24 March 2020</time>
                  </Link>
                  <div className="news__description">
                    <Link
                      className="news__title news__title--link link"
                      href="/blog/test"
                    >
                      Medical and Love Have 4 Things In Common
                    </Link>
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
                    <div className="news__text">
                      Quis aenean, a cursus ut ultrices felis mauris metus,
                      nascetur erat, vulputate sed luctus vevamus harum vitae.
                      Auctor etiam magna. Leo orci lorem posuere. Pede ligula
                      vitae placerat vestibulum sollicitudin facilisis, nec
                      euismod faucibus viverra
                    </div>
                    <a href="#" className="news__link">
                      read more
                    </a>
                  </div>
                </div>
              </li>
              <li className="blog__item news news--big" data-content="health">
                <div className="news__item">
                  <a href="#" className="news__image-link link">
                    <div className="news__image-container">
                      <Image
                        src={news2}
                        fill
                        alt="news image"
                        className="news__image"
                      />
                    </div>
                    <time className="news__date">24 March 2020</time>
                  </a>
                  <div className="news__description">
                    <a className="news__title news__title--link link" href="#">
                      Medical and Love Have 4 Things In Common
                    </a>
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
                    <div className="news__text">
                      Quis aenean, a cursus ut ultrices felis mauris metus,
                      nascetur erat, vulputate sed luctus vevamus harum vitae.
                      Auctor etiam magna. Leo orci lorem posuere. Pede ligula
                      vitae placerat vestibulum sollicitudin facilisis, nec
                      euismod faucibus viverra
                    </div>
                    <a href="#" className="news__link">
                      read more
                    </a>
                  </div>
                </div>
              </li>
              <li className="blog__item news news--big" data-content="rep">
                <div className="news__item">
                  <a href="#" className="news__image-link link">
                    <div className="news__image-container">
                      <Image
                        src={news3}
                        fill
                        alt="news image"
                        className="news__image"
                      />
                    </div>
                    <time className="news__date">24 March 2020</time>
                  </a>
                  <div className="news__description">
                    <a className="news__title news__title--link link" href="#">
                      Medical and Love Have 4 Things In Common
                    </a>
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
                    <div className="news__text">
                      Quis aenean, a cursus ut ultrices felis mauris metus,
                      nascetur erat, vulputate sed luctus vevamus harum vitae.
                      Auctor etiam magna. Leo orci lorem posuere. Pede ligula
                      vitae placerat vestibulum sollicitudin facilisis, nec
                      euismod faucibus viverra
                    </div>
                    <a href="#" className="news__link">
                      read more
                    </a>
                  </div>
                </div>
              </li>
              <li className="blog__item news news--big" data-content="card">
                <div className="news__item">
                  <a href="#" className="news__image-link link">
                    <div className="news__image-container">
                      <Image
                        src={news3}
                        fill
                        alt="news image"
                        className="news__image"
                      />
                    </div>
                    <time className="news__date">24 March 2020</time>
                  </a>
                  <div className="news__description">
                    <a className="news__title news__title--link link" href="#">
                      Medical and Love Have 4 Things In Common
                    </a>
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
                    <div className="news__text">
                      Quis aenean, a cursus ut ultrices felis mauris metus,
                      nascetur erat, vulputate sed luctus vevamus harum vitae.
                      Auctor etiam magna. Leo orci lorem posuere. Pede ligula
                      vitae placerat vestibulum sollicitudin facilisis, nec
                      euismod faucibus viverra
                    </div>
                    <a href="#" className="news__link">
                      read more
                    </a>
                  </div>
                </div>
              </li>
            </ul>
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
          <ul className="blog__pagination list pagination">
            <li className="pagination__item">
              <a
                href="#"
                className="pagination__link pagination__link--current"
              >
                1
              </a>
            </li>
            <li className="pagination__item">
              <a href="#" className="pagination__link link">
                2
              </a>
            </li>
            <li className="pagination__item">
              <a href="#" className="pagination__link link">
                3
              </a>
            </li>
            <li className="pagination__item">
              <a href="#" className="pagination__link link">
                4
              </a>
            </li>
            <li className="pagination__item">
              <a href="#" className="pagination__link link">
                5
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
