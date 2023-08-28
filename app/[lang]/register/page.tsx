import Link from "next/link";

export default function Register() {
  return (
    <div>
      <section className="preview preview--small">
        <span className="preview__name">Registration</span>
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
                register
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section className="entry entry--registration">
        <div className="container">
          <div className="entry__inner">
            <div className="entry__title title">
              <div className="title__main">Create Account</div>
            </div>
            <form className="entry__form">
              <input
                type="text"
                className="entry__input"
                placeholder="First Name"
              />
              <input
                type="text"
                className="entry__input"
                placeholder="Last Name"
              />
              <input
                type="email"
                className="entry__input"
                placeholder="Email"
              />
              <input
                type="tel"
                className="entry__input"
                placeholder="Phone Number"
              />
              <input
                type="password"
                className="entry__input"
                placeholder="Password"
              />
              <input
                type="password"
                className="entry__input"
                placeholder="Re-Password"
              />
              <label className="entry__label">
                Lorem ipsum dolor sit amet, cras venenatis dolor.
                <input type="checkbox" className="entry__input" />
              </label>
              <button type="submit" className="entry__submit">
                create account
              </button>
            </form>
            <div className="entry__row">
              <div className="entry__question">
                <Link href="/login" className="entry__link link">
                  Already have an account?
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
