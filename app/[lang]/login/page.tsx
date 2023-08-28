import Image from "next/image";
import missionBg1 from "@/app/assets/mission/bg1.jpg";
import missionBg2 from "@/app/assets/mission/bg2.jpeg";
import chooseIcon from "@/app/assets/choose/fast.png";
import supportIcon from "@/app/assets/choose/support.png";
import teamIcon from "@/app/assets/choose/team.png";
import transparencyIcon from "@/app/assets/choose/transparency.png";
import Link from "next/link";

export default function About() {
  return (
    <div className="main">
      <section className="preview preview--small">
        <span className="preview__name">Login</span>
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
                login
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section className="entry">
        <div className="container">
          <div className="entry__inner">
            <div className="entry__title title">
              <div className="title__main">Login</div>
              <p className="title__text">With your social network</p>
            </div>
            <ul className="entry__login-list list">
              <li className="entry__login-item">
                <a href="#" className="entry__login-link link">
                  Facebook
                </a>
              </li>
              <li className="entry__login-item">
                <a
                  href="#"
                  className="entry__login-link entry__login-link--red link"
                >
                  Google Plus
                </a>
              </li>
              <li className="entry__login-item">
                <a
                  href="#"
                  className="entry__login-link entry__login-link--blue link"
                >
                  Twitter
                </a>
              </li>
            </ul>
            <div className="entry__subtitle">or</div>
            <form className="entry__form">
              <input
                type="text"
                className="entry__input"
                placeholder="User Name"
              />
              <input
                type="password"
                className="entry__input"
                placeholder="Password"
              />
              <button type="submit" className="entry__submit">
                login account
              </button>
            </form>
            <div className="entry__row">
              <div className="entry__question">
                <Link href="/register" className="entry__link link">
                  Don't have any account in here?
                </Link>
              </div>
              <div className="entry__question">
                <a href="#" className="entry__link link">
                  Forget password?
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
