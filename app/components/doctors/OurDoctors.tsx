import doctor1 from "@/app/assets/doctors/doctor1.png";
import doctor2 from "@/app/assets/doctors/doctor2.png";
import doctor3 from "@/app/assets/doctors/doctor3.png";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export type SocialTypes = "facebook" | "twitter" | "google";

export interface IOurDoctorsProps {
  doctors: {
    image: string;
    name: string;
    department: string;
    description: string;
    link: string;
    socials: {
      type: SocialTypes;
      link: string;
    }[];
  }[];
}

const getSocialIconClass = (type: SocialTypes) => {
  switch (type) {
    case "facebook":
      return "icon-facebook-f";
    case "twitter":
      return "doctors__link--azure icon-twitter";
    case "google":
      return "doctors__link--red icon-google-plus";
    default:
      return null;
  }
};

export const OurDoctors = ({ doctors }: IOurDoctorsProps) => {
  const t = useTranslations("OurExpertDoctors");

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
          {doctors.map((doctor) => (
            <li key={doctor.name} className="doctors__item">
              <Link href={doctor.link} className="doctors__image-container">
                <Image
                  src={doctor.image}
                  fill
                  alt="doctor image"
                  className="doctors__image"
                />
              </Link>
              <Link href="/doctors/1" className="doctors__name">
                <span className="doctors__prefix">Dr. </span>
                {doctor.name}
              </Link>
              <div className="doctors__post">{doctor.department}</div>
              <p className="doctors__about">{doctor.description}</p>
              <ul className="doctors__social-list list">
                {doctor.socials.map((social) => (
                  <li key={social.link} className="doctors__social-item">
                    <Link
                      href={social.link}
                      className={`doctors__link ${getSocialIconClass(
                        social.type
                      )} link`}
                    ></Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
