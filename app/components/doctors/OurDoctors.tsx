import doctor1 from "@/app/assets/doctors/doctor1.png";
import doctor2 from "@/app/assets/doctors/doctor2.png";
import doctor3 from "@/app/assets/doctors/doctor3.png";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

interface IOurDoctorsProps {}

export const OurDoctors = (props: IOurDoctorsProps) => {
  const t = useTranslations("Index.OurExpert");

  return (
    <section className="doctors">
      <div className="container">
        <div className="doctors__title title">
          <div className="doctors__title title">
            <div className="title__main">{t("title")}</div>
            <p className="title__text">{t("subTitle")}</p>
          </div>
        </div>
        <ul className="doctors__list list">
          <li className="doctors__item">
            <Link href="/doctors/1" className="doctors__image-container">
              <Image
                src={doctor1}
                fill
                alt="doctor image"
                className="doctors__image"
              />
            </Link>
            <Link href="/doctors/1" className="doctors__name">
              <span className="doctors__prefix">Dr. </span>Marina Yigo
            </Link>
            <div className="doctors__post">Gastoroenterology, MBBS</div>
            <div className="doctors__about">
              Pharetra ultricies aenean, sit metus integer arcu turpis
              dndimentum pellentesque world.
            </div>
            <ul className="doctors__social-list list">
              <li className="doctors__social-item">
                <a href="#" className="doctors__link icon-facebook-f link"></a>
              </li>
              <li className="doctors__social-item">
                <a
                  href="#"
                  className="doctors__link doctors__link--azure icon-twitter link"
                ></a>
              </li>
              <li className="doctors__social-item">
                <a
                  href="#"
                  className="doctors__link doctors__link--red icon-google-plus link"
                ></a>
              </li>
            </ul>
          </li>
          <li className="doctors__item">
            <Link href="/doctors/1" className="doctors__image-container">
              <Image
                src={doctor2}
                fill
                alt="doctor image"
                className="doctors__image"
              />
            </Link>
            <Link href="/doctors/1" className="doctors__name">
              <span className="doctors__prefix">Dr. </span>Marina Yigo
            </Link>
            <div className="doctors__post">Gastoroenterology, MBBS</div>
            <div className="doctors__about">
              Pharetra ultricies aenean, sit metus integer arcu turpis
              dndimentum pellentesque world.
            </div>
            <ul className="doctors__social-list list">
              <li className="doctors__social-item">
                <a href="#" className="doctors__link icon-facebook-f link"></a>
              </li>
              <li className="doctors__social-item">
                <a
                  href="#"
                  className="doctors__link doctors__link--azure icon-twitter link"
                ></a>
              </li>
              <li className="doctors__social-item">
                <a
                  href="#"
                  className="doctors__link doctors__link--red icon-google-plus link"
                ></a>
              </li>
            </ul>
          </li>
          <li className="doctors__item">
            <Link href="/doctors/1" className="doctors__image-container">
              <Image
                src={doctor3}
                fill
                alt="doctor image"
                className="doctors__image"
              />
            </Link>
            <Link href="/doctors/1" className="doctors__name">
              <span className="doctors__prefix">Dr. </span>Marina Yigo
            </Link>
            <div className="doctors__post">Gastoroenterology, MBBS</div>
            <div className="doctors__about">
              Pharetra ultricies aenean, sit metus integer arcu turpis
              dndimentum pellentesque world.
            </div>
            <ul className="doctors__social-list list">
              <li className="doctors__social-item">
                <a href="#" className="doctors__link icon-facebook-f link"></a>
              </li>
              <li className="doctors__social-item">
                <a
                  href="#"
                  className="doctors__link doctors__link--azure icon-twitter link"
                ></a>
              </li>
              <li className="doctors__social-item">
                <a
                  href="#"
                  className="doctors__link doctors__link--red icon-google-plus link"
                ></a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
};
