import Link from "next/link";

export default function Privacy() {
  return (
    <div>
      <section className="preview preview--small">
        <span className="preview__name">Privacy & Policy</span>
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
                Privacy & Policy
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section className="privacy">
        <div className="container">
          <div className="privacy__inner">
            <div className="privacy__aside">
              <ul className="privacy__button-list list">
                <li className="privacy__button-item">
                  <button className="privacy__button" data-tab="over">
                    Overwiew
                  </button>
                </li>
                <li className="privacy__button-item">
                  <button className="privacy__button" data-tab="terms">
                    Terms Of Service
                  </button>
                </li>
                <li className="privacy__button-item">
                  <button className="privacy__button" data-tab="refund">
                    Refund Policy
                  </button>
                </li>
                <li className="privacy__button-item">
                  <button className="privacy__button" data-tab="data">
                    Data Collection & Use
                  </button>
                </li>
                <li className="privacy__button-item">
                  <button className="privacy__button" data-tab="cookies">
                    Cookies Data
                  </button>
                </li>
                <li className="privacy__button-item">
                  <button className="privacy__button" data-tab="security">
                    Data Security
                  </button>
                </li>
                <li className="privacy__button-item">
                  <button className="privacy__button" data-tab="customer">
                    Customer Information
                  </button>
                </li>
              </ul>
            </div>
            <div className="privacy__description" data-content="over">
              <div className="privacy__title">Overview</div>
              <p className="privacy__text text">
                Nullam turpis dolorem, vivamus placerat in donec est, nonummy
                tristique massa a, dui felis inNulla lorem aenean montes varius
                massula sed, ut at ante, quis velit, at amet amet placerat.
                Vestibulum in porttitsum eros vel in, imperdiet amet aliquam et
                purus dictum. In nunc nulla orci. A massa curabitur, etiam iure
                ulum, blandit ullamcorper, justo at aenean pulvinar. Felis
                aliquam hac duis et feugiat eu. Duis feugiat volutpat bibendum,
                eget a nisl est eros, nibh metus placerat faucibus penatibus,
                natoque diam.
              </p>
              <div className="privacy__title">
                Consent and Information Collection and Use
              </div>
              <p className="privacy__text text">
                Rictumst molestie dui nulla bibendum tellus. Purus tincidunt
                amet pellentesque dis aliquet,congue penatibus suspendissjusto,
                eget adipiscing, eros in donec ligula cursus integer. Accumsan
                egestas turpis pagna debitis, placerat vestibulum commodo
                nascetur odio at, tortor dui posuere ornare donec mauris,
                phasummodo augue. A sodales venenatis, amet massa fringilla,
                euismod elit tellus amet. Commodo molestie dolor amet imperdiet
                feugiat. Enim lacus eu duis est. Risus gravida eget, consequat
                tortor, felis elit dolor mauris purus pellentesque augue, leo
                nisl dis vehicula, vehicula magna. Porttitor praesent facilisis
                aliquet.
              </p>
              <ul className="privacy__features-list list">
                <li className="privacy__features-item text">
                  There are many variations of passages of Lorem available, but
                  the majority
                </li>
                <li className="privacy__features-item text">
                  Finibus onorum et by icero classNameical literature,
                  discovered
                </li>
                <li className="privacy__features-item text">
                  There are many variations of passages of Lorem available, but
                  the majority
                </li>
                <li className="privacy__features-item text">
                  Finibus onorum et by icero classNameical literature,
                  discovered
                </li>
              </ul>
              <p className="privacy__text text">
                Rictumst molestie dui nulla bibendum tellus. Purus tincidunt
                amet pellentesque dis aliquet,congue penatibus suspendissjusto,
                eget adipiscing, eros in donec ligula cursus integer. Accumsan
                egestas turpis pagna debitis, placerat vestibulum commodo
                nascetur odio at, tortor dui posuere ornare donec mauris,
                phasummodo augue. A sodales venenatis, amet massa fringilla,
                euismod elit tellus amet. Commodo molestie dolor amet imperdiet
                feugiat. Enim lacus eu duis est. Risus gravida eget, consequat
                tortor, felis elit dolor mauris purus pellentesque augue, leo
                nisl dis vehicula, vehicula magna. Porttitor praesent facilisis
                aliquet.
              </p>
              <div className="privacy__title">Cookies and Log Files</div>
              <p className="privacy__text text">
                Rictumst molestie dui nulla bibendum tellus. Purus tincidunt
                amet pellentesque dis aliquet,congue penatibus suspendissjusto,
                eget adipiscing, eros in donec ligula cursus integer. Accumsan
                egestas turpis pagna debitis, placerat vestibulum commodo
                nascetur odio at, tortor dui posuere ornare donec mauris,
                phasummodo augue. A sodales venenatis, amet massa fringilla,
                euismod elit tellus amet. Commodo molestie dolor amet imperdiet
                feugiat. Enim lacus eu duis est. Risus gravida eget, consequat
                tortor, felis elit dolor mauris purus pellentesque augue, leo
                nisl dis vehicula, vehicula magna. Porttitor praesent facilisis
                aliquet.
              </p>
              <div className="privacy__title">Data Security and Retention</div>
              <p className="privacy__text text">
                Rictumst molestie dui nulla bibendum tellus. Purus tincidunt
                amet pellentesque dis aliquet,congue penatibus suspendissjusto,
                eget adipiscing, eros in donec ligula cursus integer. Accumsan
                egestas turpis pagna debitis, placerat vestibulum commodo
                nascetur odio at, tortor dui posuere ornare donec mauris,
                phasummodo augue. A sodales venenatis, amet massa fringilla,
                euismod elit tellus amet. Commodo molestie dolor amet imperdiet
                feugiat. Enim lacus eu duis est. Risus gravida eget, consequat
                tortor, felis elit dolor mauris purus pellentesque augue, leo
                nisl dis vehicula, vehicula magna. Porttitor praesent facilisis
                aliquet.
              </p>
              <div className="privacy__title">Information Form Customer</div>
              <p className="privacy__text text">
                Rictumst molestie dui nulla bibendum tellus. Purus tincidunt
                amet pellentesque dis aliquet,congue penatibus suspendissjusto,
                eget adipiscing, eros in donec ligula cursus integer. Accumsan
                egestas turpis pagna debitis, placerat vestibulum commodo
                nascetur odio at, tortor dui posuere ornare donec mauris,
                phasummodo augue. A sodales venenatis, amet massa fringilla,
                euismod elit tellus amet. Commodo molestie dolor amet imperdiet
                feugiat. Enim lacus eu duis est. Risus gravida eget, consequat
                tortor, felis elit dolor mauris purus pellentesque augue, leo
                nisl dis vehicula, vehicula magna. Porttitor praesent facilisis
                aliquet.
              </p>
            </div>
            <div className="privacy__description" data-content="terms">
              <div className="privacy__title">Overview1</div>
              <p className="privacy__text text">
                Nullam turpis dolorem, vivamus placerat in donec est, nonummy
                tristique massa a, dui felis inNulla lorem aenean montes varius
                massula sed, ut at ante, quis velit, at amet amet placerat.
                Vestibulum in porttitsum eros vel in, imperdiet amet aliquam et
                purus dictum. In nunc nulla orci. A massa curabitur, etiam iure
                ulum, blandit ullamcorper, justo at aenean pulvinar. Felis
                aliquam hac duis et feugiat eu. Duis feugiat volutpat bibendum,
                eget a nisl est eros, nibh metus placerat faucibus penatibus,
                natoque diam.
              </p>
              <div className="privacy__title">
                Consent and Information Collection and Use
              </div>
              <p className="privacy__text text">
                Rictumst molestie dui nulla bibendum tellus. Purus tincidunt
                amet pellentesque dis aliquet,congue penatibus suspendissjusto,
                eget adipiscing, eros in donec ligula cursus integer. Accumsan
                egestas turpis pagna debitis, placerat vestibulum commodo
                nascetur odio at, tortor dui posuere ornare donec mauris,
                phasummodo augue. A sodales venenatis, amet massa fringilla,
                euismod elit tellus amet. Commodo molestie dolor amet imperdiet
                feugiat. Enim lacus eu duis est. Risus gravida eget, consequat
                tortor, felis elit dolor mauris purus pellentesque augue, leo
                nisl dis vehicula, vehicula magna. Porttitor praesent facilisis
                aliquet.
              </p>
              <ul className="privacy__features-list list">
                <li className="privacy__features-item text">
                  There are many variations of passages of Lorem available, but
                  the majority
                </li>
                <li className="privacy__features-item text">
                  Finibus onorum et by icero classNameical literature,
                  discovered
                </li>
                <li className="privacy__features-item text">
                  There are many variations of passages of Lorem available, but
                  the majority
                </li>
                <li className="privacy__features-item text">
                  Finibus onorum et by icero classNameical literature,
                  discovered
                </li>
              </ul>
              <p className="privacy__text text">
                Rictumst molestie dui nulla bibendum tellus. Purus tincidunt
                amet pellentesque dis aliquet,congue penatibus suspendissjusto,
                eget adipiscing, eros in donec ligula cursus integer. Accumsan
                egestas turpis pagna debitis, placerat vestibulum commodo
                nascetur odio at, tortor dui posuere ornare donec mauris,
                phasummodo augue. A sodales venenatis, amet massa fringilla,
                euismod elit tellus amet. Commodo molestie dolor amet imperdiet
                feugiat. Enim lacus eu duis est. Risus gravida eget, consequat
                tortor, felis elit dolor mauris purus pellentesque augue, leo
                nisl dis vehicula, vehicula magna. Porttitor praesent facilisis
                aliquet.
              </p>
              <div className="privacy__title">Cookies and Log Files</div>
              <p className="privacy__text text">
                Rictumst molestie dui nulla bibendum tellus. Purus tincidunt
                amet pellentesque dis aliquet,congue penatibus suspendissjusto,
                eget adipiscing, eros in donec ligula cursus integer. Accumsan
                egestas turpis pagna debitis, placerat vestibulum commodo
                nascetur odio at, tortor dui posuere ornare donec mauris,
                phasummodo augue. A sodales venenatis, amet massa fringilla,
                euismod elit tellus amet. Commodo molestie dolor amet imperdiet
                feugiat. Enim lacus eu duis est. Risus gravida eget, consequat
                tortor, felis elit dolor mauris purus pellentesque augue, leo
                nisl dis vehicula, vehicula magna. Porttitor praesent facilisis
                aliquet.
              </p>
              <div className="privacy__title">Data Security and Retention</div>
              <p className="privacy__text text">
                Rictumst molestie dui nulla bibendum tellus. Purus tincidunt
                amet pellentesque dis aliquet,congue penatibus suspendissjusto,
                eget adipiscing, eros in donec ligula cursus integer. Accumsan
                egestas turpis pagna debitis, placerat vestibulum commodo
                nascetur odio at, tortor dui posuere ornare donec mauris,
                phasummodo augue. A sodales venenatis, amet massa fringilla,
                euismod elit tellus amet. Commodo molestie dolor amet imperdiet
                feugiat. Enim lacus eu duis est. Risus gravida eget, consequat
                tortor, felis elit dolor mauris purus pellentesque augue, leo
                nisl dis vehicula, vehicula magna. Porttitor praesent facilisis
                aliquet.
              </p>
              <div className="privacy__title">Information Form Customer</div>
              <p className="privacy__text text">
                Rictumst molestie dui nulla bibendum tellus. Purus tincidunt
                amet pellentesque dis aliquet,congue penatibus suspendissjusto,
                eget adipiscing, eros in donec ligula cursus integer. Accumsan
                egestas turpis pagna debitis, placerat vestibulum commodo
                nascetur odio at, tortor dui posuere ornare donec mauris,
                phasummodo augue. A sodales venenatis, amet massa fringilla,
                euismod elit tellus amet. Commodo molestie dolor amet imperdiet
                feugiat. Enim lacus eu duis est. Risus gravida eget, consequat
                tortor, felis elit dolor mauris purus pellentesque augue, leo
                nisl dis vehicula, vehicula magna. Porttitor praesent facilisis
                aliquet.
              </p>
            </div>
            <div className="privacy__description" data-content="refund">
              <div className="privacy__title">Overview2</div>
              <p className="privacy__text text">
                Nullam turpis dolorem, vivamus placerat in donec est, nonummy
                tristique massa a, dui felis inNulla lorem aenean montes varius
                massula sed, ut at ante, quis velit, at amet amet placerat.
                Vestibulum in porttitsum eros vel in, imperdiet amet aliquam et
                purus dictum. In nunc nulla orci. A massa curabitur, etiam iure
                ulum, blandit ullamcorper, justo at aenean pulvinar. Felis
                aliquam hac duis et feugiat eu. Duis feugiat volutpat bibendum,
                eget a nisl est eros, nibh metus placerat faucibus penatibus,
                natoque diam.
              </p>
              <div className="privacy__title">
                Consent and Information Collection and Use
              </div>
              <p className="privacy__text text">
                Rictumst molestie dui nulla bibendum tellus. Purus tincidunt
                amet pellentesque dis aliquet,congue penatibus suspendissjusto,
                eget adipiscing, eros in donec ligula cursus integer. Accumsan
                egestas turpis pagna debitis, placerat vestibulum commodo
                nascetur odio at, tortor dui posuere ornare donec mauris,
                phasummodo augue. A sodales venenatis, amet massa fringilla,
                euismod elit tellus amet. Commodo molestie dolor amet imperdiet
                feugiat. Enim lacus eu duis est. Risus gravida eget, consequat
                tortor, felis elit dolor mauris purus pellentesque augue, leo
                nisl dis vehicula, vehicula magna. Porttitor praesent facilisis
                aliquet.
              </p>
              <ul className="privacy__features-list list">
                <li className="privacy__features-item text">
                  There are many variations of passages of Lorem available, but
                  the majority
                </li>
                <li className="privacy__features-item text">
                  Finibus onorum et by icero classNameical literature,
                  discovered
                </li>
                <li className="privacy__features-item text">
                  There are many variations of passages of Lorem available, but
                  the majority
                </li>
                <li className="privacy__features-item text">
                  Finibus onorum et by icero classNameical literature,
                  discovered
                </li>
              </ul>
              <p className="privacy__text text">
                Rictumst molestie dui nulla bibendum tellus. Purus tincidunt
                amet pellentesque dis aliquet,congue penatibus suspendissjusto,
                eget adipiscing, eros in donec ligula cursus integer. Accumsan
                egestas turpis pagna debitis, placerat vestibulum commodo
                nascetur odio at, tortor dui posuere ornare donec mauris,
                phasummodo augue. A sodales venenatis, amet massa fringilla,
                euismod elit tellus amet. Commodo molestie dolor amet imperdiet
                feugiat. Enim lacus eu duis est. Risus gravida eget, consequat
                tortor, felis elit dolor mauris purus pellentesque augue, leo
                nisl dis vehicula, vehicula magna. Porttitor praesent facilisis
                aliquet.
              </p>
              <div className="privacy__title">Cookies and Log Files</div>
              <p className="privacy__text text">
                Rictumst molestie dui nulla bibendum tellus. Purus tincidunt
                amet pellentesque dis aliquet,congue penatibus suspendissjusto,
                eget adipiscing, eros in donec ligula cursus integer. Accumsan
                egestas turpis pagna debitis, placerat vestibulum commodo
                nascetur odio at, tortor dui posuere ornare donec mauris,
                phasummodo augue. A sodales venenatis, amet massa fringilla,
                euismod elit tellus amet. Commodo molestie dolor amet imperdiet
                feugiat. Enim lacus eu duis est. Risus gravida eget, consequat
                tortor, felis elit dolor mauris purus pellentesque augue, leo
                nisl dis vehicula, vehicula magna. Porttitor praesent facilisis
                aliquet.
              </p>
              <div className="privacy__title">Data Security and Retention</div>
              <p className="privacy__text text">
                Rictumst molestie dui nulla bibendum tellus. Purus tincidunt
                amet pellentesque dis aliquet,congue penatibus suspendissjusto,
                eget adipiscing, eros in donec ligula cursus integer. Accumsan
                egestas turpis pagna debitis, placerat vestibulum commodo
                nascetur odio at, tortor dui posuere ornare donec mauris,
                phasummodo augue. A sodales venenatis, amet massa fringilla,
                euismod elit tellus amet. Commodo molestie dolor amet imperdiet
                feugiat. Enim lacus eu duis est. Risus gravida eget, consequat
                tortor, felis elit dolor mauris purus pellentesque augue, leo
                nisl dis vehicula, vehicula magna. Porttitor praesent facilisis
                aliquet.
              </p>
              <div className="privacy__title">Information Form Customer</div>
              <p className="privacy__text text">
                Rictumst molestie dui nulla bibendum tellus. Purus tincidunt
                amet pellentesque dis aliquet,congue penatibus suspendissjusto,
                eget adipiscing, eros in donec ligula cursus integer. Accumsan
                egestas turpis pagna debitis, placerat vestibulum commodo
                nascetur odio at, tortor dui posuere ornare donec mauris,
                phasummodo augue. A sodales venenatis, amet massa fringilla,
                euismod elit tellus amet. Commodo molestie dolor amet imperdiet
                feugiat. Enim lacus eu duis est. Risus gravida eget, consequat
                tortor, felis elit dolor mauris purus pellentesque augue, leo
                nisl dis vehicula, vehicula magna. Porttitor praesent facilisis
                aliquet.
              </p>
            </div>
            <div className="privacy__description" data-content="data">
              <div className="privacy__title">Overview3</div>
              <p className="privacy__text text">
                Nullam turpis dolorem, vivamus placerat in donec est, nonummy
                tristique massa a, dui felis inNulla lorem aenean montes varius
                massula sed, ut at ante, quis velit, at amet amet placerat.
                Vestibulum in porttitsum eros vel in, imperdiet amet aliquam et
                purus dictum. In nunc nulla orci. A massa curabitur, etiam iure
                ulum, blandit ullamcorper, justo at aenean pulvinar. Felis
                aliquam hac duis et feugiat eu. Duis feugiat volutpat bibendum,
                eget a nisl est eros, nibh metus placerat faucibus penatibus,
                natoque diam.
              </p>
              <div className="privacy__title">
                Consent and Information Collection and Use
              </div>
              <p className="privacy__text text">
                Rictumst molestie dui nulla bibendum tellus. Purus tincidunt
                amet pellentesque dis aliquet,congue penatibus suspendissjusto,
                eget adipiscing, eros in donec ligula cursus integer. Accumsan
                egestas turpis pagna debitis, placerat vestibulum commodo
                nascetur odio at, tortor dui posuere ornare donec mauris,
                phasummodo augue. A sodales venenatis, amet massa fringilla,
                euismod elit tellus amet. Commodo molestie dolor amet imperdiet
                feugiat. Enim lacus eu duis est. Risus gravida eget, consequat
                tortor, felis elit dolor mauris purus pellentesque augue, leo
                nisl dis vehicula, vehicula magna. Porttitor praesent facilisis
                aliquet.
              </p>
              <ul className="privacy__features-list list">
                <li className="privacy__features-item text">
                  There are many variations of passages of Lorem available, but
                  the majority
                </li>
                <li className="privacy__features-item text">
                  Finibus onorum et by icero classNameical literature,
                  discovered
                </li>
                <li className="privacy__features-item text">
                  There are many variations of passages of Lorem available, but
                  the majority
                </li>
                <li className="privacy__features-item text">
                  Finibus onorum et by icero classNameical literature,
                  discovered
                </li>
              </ul>
              <p className="privacy__text text">
                Rictumst molestie dui nulla bibendum tellus. Purus tincidunt
                amet pellentesque dis aliquet,congue penatibus suspendissjusto,
                eget adipiscing, eros in donec ligula cursus integer. Accumsan
                egestas turpis pagna debitis, placerat vestibulum commodo
                nascetur odio at, tortor dui posuere ornare donec mauris,
                phasummodo augue. A sodales venenatis, amet massa fringilla,
                euismod elit tellus amet. Commodo molestie dolor amet imperdiet
                feugiat. Enim lacus eu duis est. Risus gravida eget, consequat
                tortor, felis elit dolor mauris purus pellentesque augue, leo
                nisl dis vehicula, vehicula magna. Porttitor praesent facilisis
                aliquet.
              </p>
              <div className="privacy__title">Cookies and Log Files</div>
              <p className="privacy__text text">
                Rictumst molestie dui nulla bibendum tellus. Purus tincidunt
                amet pellentesque dis aliquet,congue penatibus suspendissjusto,
                eget adipiscing, eros in donec ligula cursus integer. Accumsan
                egestas turpis pagna debitis, placerat vestibulum commodo
                nascetur odio at, tortor dui posuere ornare donec mauris,
                phasummodo augue. A sodales venenatis, amet massa fringilla,
                euismod elit tellus amet. Commodo molestie dolor amet imperdiet
                feugiat. Enim lacus eu duis est. Risus gravida eget, consequat
                tortor, felis elit dolor mauris purus pellentesque augue, leo
                nisl dis vehicula, vehicula magna. Porttitor praesent facilisis
                aliquet.
              </p>
              <div className="privacy__title">Data Security and Retention</div>
              <p className="privacy__text text">
                Rictumst molestie dui nulla bibendum tellus. Purus tincidunt
                amet pellentesque dis aliquet,congue penatibus suspendissjusto,
                eget adipiscing, eros in donec ligula cursus integer. Accumsan
                egestas turpis pagna debitis, placerat vestibulum commodo
                nascetur odio at, tortor dui posuere ornare donec mauris,
                phasummodo augue. A sodales venenatis, amet massa fringilla,
                euismod elit tellus amet. Commodo molestie dolor amet imperdiet
                feugiat. Enim lacus eu duis est. Risus gravida eget, consequat
                tortor, felis elit dolor mauris purus pellentesque augue, leo
                nisl dis vehicula, vehicula magna. Porttitor praesent facilisis
                aliquet.
              </p>
              <div className="privacy__title">Information Form Customer</div>
              <p className="privacy__text text">
                Rictumst molestie dui nulla bibendum tellus. Purus tincidunt
                amet pellentesque dis aliquet,congue penatibus suspendissjusto,
                eget adipiscing, eros in donec ligula cursus integer. Accumsan
                egestas turpis pagna debitis, placerat vestibulum commodo
                nascetur odio at, tortor dui posuere ornare donec mauris,
                phasummodo augue. A sodales venenatis, amet massa fringilla,
                euismod elit tellus amet. Commodo molestie dolor amet imperdiet
                feugiat. Enim lacus eu duis est. Risus gravida eget, consequat
                tortor, felis elit dolor mauris purus pellentesque augue, leo
                nisl dis vehicula, vehicula magna. Porttitor praesent facilisis
                aliquet.
              </p>
            </div>
            <div className="privacy__description" data-content="cookies">
              <div className="privacy__title">Overview4</div>
              <p className="privacy__text text">
                Nullam turpis dolorem, vivamus placerat in donec est, nonummy
                tristique massa a, dui felis inNulla lorem aenean montes varius
                massula sed, ut at ante, quis velit, at amet amet placerat.
                Vestibulum in porttitsum eros vel in, imperdiet amet aliquam et
                purus dictum. In nunc nulla orci. A massa curabitur, etiam iure
                ulum, blandit ullamcorper, justo at aenean pulvinar. Felis
                aliquam hac duis et feugiat eu. Duis feugiat volutpat bibendum,
                eget a nisl est eros, nibh metus placerat faucibus penatibus,
                natoque diam.
              </p>
              <div className="privacy__title">
                Consent and Information Collection and Use
              </div>
              <p className="privacy__text text">
                Rictumst molestie dui nulla bibendum tellus. Purus tincidunt
                amet pellentesque dis aliquet,congue penatibus suspendissjusto,
                eget adipiscing, eros in donec ligula cursus integer. Accumsan
                egestas turpis pagna debitis, placerat vestibulum commodo
                nascetur odio at, tortor dui posuere ornare donec mauris,
                phasummodo augue. A sodales venenatis, amet massa fringilla,
                euismod elit tellus amet. Commodo molestie dolor amet imperdiet
                feugiat. Enim lacus eu duis est. Risus gravida eget, consequat
                tortor, felis elit dolor mauris purus pellentesque augue, leo
                nisl dis vehicula, vehicula magna. Porttitor praesent facilisis
                aliquet.
              </p>
              <ul className="privacy__features-list list">
                <li className="privacy__features-item text">
                  There are many variations of passages of Lorem available, but
                  the majority
                </li>
                <li className="privacy__features-item text">
                  Finibus onorum et by icero classNameical literature,
                  discovered
                </li>
                <li className="privacy__features-item text">
                  There are many variations of passages of Lorem available, but
                  the majority
                </li>
                <li className="privacy__features-item text">
                  Finibus onorum et by icero classNameical literature,
                  discovered
                </li>
              </ul>
              <p className="privacy__text text">
                Rictumst molestie dui nulla bibendum tellus. Purus tincidunt
                amet pellentesque dis aliquet,congue penatibus suspendissjusto,
                eget adipiscing, eros in donec ligula cursus integer. Accumsan
                egestas turpis pagna debitis, placerat vestibulum commodo
                nascetur odio at, tortor dui posuere ornare donec mauris,
                phasummodo augue. A sodales venenatis, amet massa fringilla,
                euismod elit tellus amet. Commodo molestie dolor amet imperdiet
                feugiat. Enim lacus eu duis est. Risus gravida eget, consequat
                tortor, felis elit dolor mauris purus pellentesque augue, leo
                nisl dis vehicula, vehicula magna. Porttitor praesent facilisis
                aliquet.
              </p>
              <div className="privacy__title">Cookies and Log Files</div>
              <p className="privacy__text text">
                Rictumst molestie dui nulla bibendum tellus. Purus tincidunt
                amet pellentesque dis aliquet,congue penatibus suspendissjusto,
                eget adipiscing, eros in donec ligula cursus integer. Accumsan
                egestas turpis pagna debitis, placerat vestibulum commodo
                nascetur odio at, tortor dui posuere ornare donec mauris,
                phasummodo augue. A sodales venenatis, amet massa fringilla,
                euismod elit tellus amet. Commodo molestie dolor amet imperdiet
                feugiat. Enim lacus eu duis est. Risus gravida eget, consequat
                tortor, felis elit dolor mauris purus pellentesque augue, leo
                nisl dis vehicula, vehicula magna. Porttitor praesent facilisis
                aliquet.
              </p>
              <div className="privacy__title">Data Security and Retention</div>
              <p className="privacy__text text">
                Rictumst molestie dui nulla bibendum tellus. Purus tincidunt
                amet pellentesque dis aliquet,congue penatibus suspendissjusto,
                eget adipiscing, eros in donec ligula cursus integer. Accumsan
                egestas turpis pagna debitis, placerat vestibulum commodo
                nascetur odio at, tortor dui posuere ornare donec mauris,
                phasummodo augue. A sodales venenatis, amet massa fringilla,
                euismod elit tellus amet. Commodo molestie dolor amet imperdiet
                feugiat. Enim lacus eu duis est. Risus gravida eget, consequat
                tortor, felis elit dolor mauris purus pellentesque augue, leo
                nisl dis vehicula, vehicula magna. Porttitor praesent facilisis
                aliquet.
              </p>
              <div className="privacy__title">Information Form Customer</div>
              <p className="privacy__text text">
                Rictumst molestie dui nulla bibendum tellus. Purus tincidunt
                amet pellentesque dis aliquet,congue penatibus suspendissjusto,
                eget adipiscing, eros in donec ligula cursus integer. Accumsan
                egestas turpis pagna debitis, placerat vestibulum commodo
                nascetur odio at, tortor dui posuere ornare donec mauris,
                phasummodo augue. A sodales venenatis, amet massa fringilla,
                euismod elit tellus amet. Commodo molestie dolor amet imperdiet
                feugiat. Enim lacus eu duis est. Risus gravida eget, consequat
                tortor, felis elit dolor mauris purus pellentesque augue, leo
                nisl dis vehicula, vehicula magna. Porttitor praesent facilisis
                aliquet.
              </p>
            </div>
            <div className="privacy__description" data-content="security">
              <div className="privacy__title">Overview5</div>
              <p className="privacy__text text">
                Nullam turpis dolorem, vivamus placerat in donec est, nonummy
                tristique massa a, dui felis inNulla lorem aenean montes varius
                massula sed, ut at ante, quis velit, at amet amet placerat.
                Vestibulum in porttitsum eros vel in, imperdiet amet aliquam et
                purus dictum. In nunc nulla orci. A massa curabitur, etiam iure
                ulum, blandit ullamcorper, justo at aenean pulvinar. Felis
                aliquam hac duis et feugiat eu. Duis feugiat volutpat bibendum,
                eget a nisl est eros, nibh metus placerat faucibus penatibus,
                natoque diam.
              </p>
              <div className="privacy__title">
                Consent and Information Collection and Use
              </div>
              <p className="privacy__text text">
                Rictumst molestie dui nulla bibendum tellus. Purus tincidunt
                amet pellentesque dis aliquet,congue penatibus suspendissjusto,
                eget adipiscing, eros in donec ligula cursus integer. Accumsan
                egestas turpis pagna debitis, placerat vestibulum commodo
                nascetur odio at, tortor dui posuere ornare donec mauris,
                phasummodo augue. A sodales venenatis, amet massa fringilla,
                euismod elit tellus amet. Commodo molestie dolor amet imperdiet
                feugiat. Enim lacus eu duis est. Risus gravida eget, consequat
                tortor, felis elit dolor mauris purus pellentesque augue, leo
                nisl dis vehicula, vehicula magna. Porttitor praesent facilisis
                aliquet.
              </p>
              <ul className="privacy__features-list list">
                <li className="privacy__features-item text">
                  There are many variations of passages of Lorem available, but
                  the majority
                </li>
                <li className="privacy__features-item text">
                  Finibus onorum et by icero classNameical literature,
                  discovered
                </li>
                <li className="privacy__features-item text">
                  There are many variations of passages of Lorem available, but
                  the majority
                </li>
                <li className="privacy__features-item text">
                  Finibus onorum et by icero classNameical literature,
                  discovered
                </li>
              </ul>
              <p className="privacy__text text">
                Rictumst molestie dui nulla bibendum tellus. Purus tincidunt
                amet pellentesque dis aliquet,congue penatibus suspendissjusto,
                eget adipiscing, eros in donec ligula cursus integer. Accumsan
                egestas turpis pagna debitis, placerat vestibulum commodo
                nascetur odio at, tortor dui posuere ornare donec mauris,
                phasummodo augue. A sodales venenatis, amet massa fringilla,
                euismod elit tellus amet. Commodo molestie dolor amet imperdiet
                feugiat. Enim lacus eu duis est. Risus gravida eget, consequat
                tortor, felis elit dolor mauris purus pellentesque augue, leo
                nisl dis vehicula, vehicula magna. Porttitor praesent facilisis
                aliquet.
              </p>
              <div className="privacy__title">Cookies and Log Files</div>
              <p className="privacy__text text">
                Rictumst molestie dui nulla bibendum tellus. Purus tincidunt
                amet pellentesque dis aliquet,congue penatibus suspendissjusto,
                eget adipiscing, eros in donec ligula cursus integer. Accumsan
                egestas turpis pagna debitis, placerat vestibulum commodo
                nascetur odio at, tortor dui posuere ornare donec mauris,
                phasummodo augue. A sodales venenatis, amet massa fringilla,
                euismod elit tellus amet. Commodo molestie dolor amet imperdiet
                feugiat. Enim lacus eu duis est. Risus gravida eget, consequat
                tortor, felis elit dolor mauris purus pellentesque augue, leo
                nisl dis vehicula, vehicula magna. Porttitor praesent facilisis
                aliquet.
              </p>
              <div className="privacy__title">Data Security and Retention</div>
              <p className="privacy__text text">
                Rictumst molestie dui nulla bibendum tellus. Purus tincidunt
                amet pellentesque dis aliquet,congue penatibus suspendissjusto,
                eget adipiscing, eros in donec ligula cursus integer. Accumsan
                egestas turpis pagna debitis, placerat vestibulum commodo
                nascetur odio at, tortor dui posuere ornare donec mauris,
                phasummodo augue. A sodales venenatis, amet massa fringilla,
                euismod elit tellus amet. Commodo molestie dolor amet imperdiet
                feugiat. Enim lacus eu duis est. Risus gravida eget, consequat
                tortor, felis elit dolor mauris purus pellentesque augue, leo
                nisl dis vehicula, vehicula magna. Porttitor praesent facilisis
                aliquet.
              </p>
              <div className="privacy__title">Information Form Customer</div>
              <p className="privacy__text text">
                Rictumst molestie dui nulla bibendum tellus. Purus tincidunt
                amet pellentesque dis aliquet,congue penatibus suspendissjusto,
                eget adipiscing, eros in donec ligula cursus integer. Accumsan
                egestas turpis pagna debitis, placerat vestibulum commodo
                nascetur odio at, tortor dui posuere ornare donec mauris,
                phasummodo augue. A sodales venenatis, amet massa fringilla,
                euismod elit tellus amet. Commodo molestie dolor amet imperdiet
                feugiat. Enim lacus eu duis est. Risus gravida eget, consequat
                tortor, felis elit dolor mauris purus pellentesque augue, leo
                nisl dis vehicula, vehicula magna. Porttitor praesent facilisis
                aliquet.
              </p>
            </div>
            <div className="privacy__description" data-content="customer">
              <div className="privacy__title">Overview6</div>
              <p className="privacy__text text">
                Nullam turpis dolorem, vivamus placerat in donec est, nonummy
                tristique massa a, dui felis inNulla lorem aenean montes varius
                massula sed, ut at ante, quis velit, at amet amet placerat.
                Vestibulum in porttitsum eros vel in, imperdiet amet aliquam et
                purus dictum. In nunc nulla orci. A massa curabitur, etiam iure
                ulum, blandit ullamcorper, justo at aenean pulvinar. Felis
                aliquam hac duis et feugiat eu. Duis feugiat volutpat bibendum,
                eget a nisl est eros, nibh metus placerat faucibus penatibus,
                natoque diam.
              </p>
              <div className="privacy__title">
                Consent and Information Collection and Use
              </div>
              <p className="privacy__text text">
                Rictumst molestie dui nulla bibendum tellus. Purus tincidunt
                amet pellentesque dis aliquet,congue penatibus suspendissjusto,
                eget adipiscing, eros in donec ligula cursus integer. Accumsan
                egestas turpis pagna debitis, placerat vestibulum commodo
                nascetur odio at, tortor dui posuere ornare donec mauris,
                phasummodo augue. A sodales venenatis, amet massa fringilla,
                euismod elit tellus amet. Commodo molestie dolor amet imperdiet
                feugiat. Enim lacus eu duis est. Risus gravida eget, consequat
                tortor, felis elit dolor mauris purus pellentesque augue, leo
                nisl dis vehicula, vehicula magna. Porttitor praesent facilisis
                aliquet.
              </p>
              <ul className="privacy__features-list list">
                <li className="privacy__features-item text">
                  There are many variations of passages of Lorem available, but
                  the majority
                </li>
                <li className="privacy__features-item text">
                  Finibus onorum et by icero classNameical literature,
                  discovered
                </li>
                <li className="privacy__features-item text">
                  There are many variations of passages of Lorem available, but
                  the majority
                </li>
                <li className="privacy__features-item text">
                  Finibus onorum et by icero classNameical literature,
                  discovered
                </li>
              </ul>
              <p className="privacy__text text">
                Rictumst molestie dui nulla bibendum tellus. Purus tincidunt
                amet pellentesque dis aliquet,congue penatibus suspendissjusto,
                eget adipiscing, eros in donec ligula cursus integer. Accumsan
                egestas turpis pagna debitis, placerat vestibulum commodo
                nascetur odio at, tortor dui posuere ornare donec mauris,
                phasummodo augue. A sodales venenatis, amet massa fringilla,
                euismod elit tellus amet. Commodo molestie dolor amet imperdiet
                feugiat. Enim lacus eu duis est. Risus gravida eget, consequat
                tortor, felis elit dolor mauris purus pellentesque augue, leo
                nisl dis vehicula, vehicula magna. Porttitor praesent facilisis
                aliquet.
              </p>
              <div className="privacy__title">Cookies and Log Files</div>
              <p className="privacy__text text">
                Rictumst molestie dui nulla bibendum tellus. Purus tincidunt
                amet pellentesque dis aliquet,congue penatibus suspendissjusto,
                eget adipiscing, eros in donec ligula cursus integer. Accumsan
                egestas turpis pagna debitis, placerat vestibulum commodo
                nascetur odio at, tortor dui posuere ornare donec mauris,
                phasummodo augue. A sodales venenatis, amet massa fringilla,
                euismod elit tellus amet. Commodo molestie dolor amet imperdiet
                feugiat. Enim lacus eu duis est. Risus gravida eget, consequat
                tortor, felis elit dolor mauris purus pellentesque augue, leo
                nisl dis vehicula, vehicula magna. Porttitor praesent facilisis
                aliquet.
              </p>
              <div className="privacy__title">Data Security and Retention</div>
              <p className="privacy__text text">
                Rictumst molestie dui nulla bibendum tellus. Purus tincidunt
                amet pellentesque dis aliquet,congue penatibus suspendissjusto,
                eget adipiscing, eros in donec ligula cursus integer. Accumsan
                egestas turpis pagna debitis, placerat vestibulum commodo
                nascetur odio at, tortor dui posuere ornare donec mauris,
                phasummodo augue. A sodales venenatis, amet massa fringilla,
                euismod elit tellus amet. Commodo molestie dolor amet imperdiet
                feugiat. Enim lacus eu duis est. Risus gravida eget, consequat
                tortor, felis elit dolor mauris purus pellentesque augue, leo
                nisl dis vehicula, vehicula magna. Porttitor praesent facilisis
                aliquet.
              </p>
              <div className="privacy__title">Information Form Customer</div>
              <p className="privacy__text text">
                Rictumst molestie dui nulla bibendum tellus. Purus tincidunt
                amet pellentesque dis aliquet,congue penatibus suspendissjusto,
                eget adipiscing, eros in donec ligula cursus integer. Accumsan
                egestas turpis pagna debitis, placerat vestibulum commodo
                nascetur odio at, tortor dui posuere ornare donec mauris,
                phasummodo augue. A sodales venenatis, amet massa fringilla,
                euismod elit tellus amet. Commodo molestie dolor amet imperdiet
                feugiat. Enim lacus eu duis est. Risus gravida eget, consequat
                tortor, felis elit dolor mauris purus pellentesque augue, leo
                nisl dis vehicula, vehicula magna. Porttitor praesent facilisis
                aliquet.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
