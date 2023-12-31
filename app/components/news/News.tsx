import Image from "next/image";
import news1 from "@/app/assets/news/1.jpg";
import news2 from "@/app/assets/news/2.jpg";
import news3 from "@/app/assets/news/3.png";
import { useFormatter, useTranslations } from "next-intl";

interface INewsProps {}

export const News = (props: INewsProps) => {
  const t = useTranslations("News");
  const format = useFormatter();
  const dateTime = new Date();
  const formatteddateTime = format.dateTime(dateTime, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <section className="news">
      <div className="container">
        <ul className="news__list list">
          <li className="news__item">
            <a href="/blog/details" className="news__image-link link">
              <div className="news__image-container">
                <Image
                  src={news1}
                  fill={true}
                  alt="news image"
                  className="news__image"
                />
              </div>
              <time className="news__date">{formatteddateTime}</time>
            </a>
            <div className="news__description">
              <div className="news__author">
                {t("By")} Admin
                <span className="news__tag">
                  <div className="news__tag">
                    <a href="/blog" className="news__tag-link link">
                      Doctor
                    </a>
                    ,
                    <a href="/blog" className="news__tag-link link">
                      Clinic
                    </a>
                  </div>
                </span>
              </div>
              <a className="news__title link" href="/blog/details">
                Medical and Love Have 4 Things In Common
              </a>
              <div className="news__text">
                Consequat vulputate eget metumpeng magna commodo purus etiam.
              </div>
              <a href="/blog/details" className="news__link">
                {t("link")}
              </a>
            </div>
          </li>
          <li className="news__item">
            <a href="/blog/details" className="news__image-link link">
              <div className="news__image-container">
                <Image
                  src={news2}
                  fill={true}
                  alt="news image"
                  className="news__image"
                />
              </div>
              <time className="news__date">{formatteddateTime}</time>
            </a>
            <div className="news__description">
              <div className="news__author">
                {t("By")} Admin
                <div className="news__tag">
                  <a href="/blog" className="news__tag-link link">
                    Care
                  </a>
                  ,
                  <a href="/blog" className="news__tag-link link">
                    Surgery
                  </a>
                </div>
              </div>
              <a className="news__title link" href="/blog/details">
                Being A Star In You dustry Is A Matter
              </a>
              <div className="news__text">
                Consequat vulputate eget metumpeng magna commodo purus etiam.
              </div>
              <a href="/blog/details" className="news__link">
                {t("link")}
              </a>
            </div>
          </li>
          <li className="news__item">
            <a href="/blog/details" className="news__image-link link">
              <div className="news__image-container">
                <Image
                  src={news3}
                  fill={true}
                  alt="news image"
                  className="news__image"
                />
              </div>
              <time className="news__date">{formatteddateTime}</time>
            </a>
            <div className="news__description">
              <div className="news__author">
                {t("By")} Admin
                <div className="news__tag">
                  <a href="./blog" className="news__tag-link link">
                    Health
                  </a>
                  ,
                  <a href="./blog" className="news__tag-link link">
                    Medical
                  </a>
                </div>
              </div>
              <a className="news__title link" href="/blog/details">
                22 Tips To Start Building A Medical
              </a>
              <div className="news__text">
                Consequat vulputate eget metumpeng magna commodo purus etiam.
              </div>
              <a href="/blog/details" className="news__link">
                {t("link")}
              </a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
