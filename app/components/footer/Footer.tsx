import React from "react";
import Image from "next/image";
import Link from "next/link";

import meteor from "@/app/assets/footer/meteor.png";
import videocreek from "@/app/assets/footer/videocreek.png";
import behance from "@/app/assets/footer/behance.png";
import laborator from "@/app/assets/footer/laborator.png";
import { useTranslations } from "next-intl";

type Props = {};

export const Footer = (props: Props) => {
  const t = useTranslations("Footer");

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="container">
          <div className="footer__sponsor-container">
            <ul className="footer__sponsor-list list">
              <li className="footer__sponsor">
                <Image
                  src={meteor}
                  width={180}
                  height={30}
                  alt="sponsor image"
                  className="footer__image"
                />
              </li>
              <li className="footer__sponsor">
                <Image
                  src={behance}
                  width={180}
                  height={30}
                  alt="sponsor image"
                  className="footer__image"
                />
              </li>
              <li className="footer__sponsor">
                <Image
                  src={videocreek}
                  width={180}
                  height={30}
                  alt="sponsor image"
                  className="footer__image"
                />
              </li>
              <li className="footer__sponsor">
                <Image
                  src={laborator}
                  width={180}
                  height={30}
                  alt="sponsor image"
                  className="footer__image"
                />
              </li>
            </ul>
          </div>
          <div className="footer__content">
            <div className="footer__item footer__item--lg">
              <div className="footer__title">{t("About.title")}</div>
              <p className="footer__text">{t("About.text")}</p>
            </div>
            <div className="footer__item footer__item">
              <div className="footer__title">{t("UsefulLink.title")}</div>
              <ul className="footer__list list">
                <li className="footer__list-item">
                  <Link href="/about" className="footer__link link">
                    {t("UsefulLink.About")}
                  </Link>{" "}
                </li>
                <li className="footer__list-item">
                  <Link href="/service1" className="footer__link link">
                    {t("UsefulLink.OurServices")}
                  </Link>{" "}
                </li>
                <li className="footer__list-item">
                  <Link href="/mission" className="footer__link link">
                    {t("UsefulLink.CompanyMission")}
                  </Link>{" "}
                </li>
                <li className="footer__list-item">
                  <Link href="/doctors" className="footer__link link">
                    {t("UsefulLink.FindDoctor")}
                  </Link>{" "}
                </li>
                <li className="footer__list-item">
                  <a href="#appointment" className="footer__link link">
                    {t("UsefulLink.Appointment")}
                  </a>{" "}
                </li>
              </ul>
            </div>
            <div className="footer__item footer__item">
              <div className="footer__title">{t("OurServices.title")}</div>
              <ul className="footer__list list">
                <li className="footer__list-item">
                  <a href="#department" className="footer__link link">
                    {t("OurServices.Cardiology")}
                  </a>{" "}
                </li>
                <li className="footer__list-item">
                  <a href="#department" className="footer__link link">
                    {t("OurServices.Outpatient")}
                  </a>{" "}
                </li>
                <li className="footer__list-item">
                  <a href="#department" className="footer__link link">
                    {t("OurServices.Gynaecological")}
                  </a>{" "}
                </li>
                <li className="footer__list-item">
                  <a href="#department" className="footer__link link">
                    {t("OurServices.DentalSurgery")}
                  </a>{" "}
                </li>
                <li className="footer__list-item">
                  <a href="#department" className="footer__link link">
                    {t("OurServices.Laboratory")}
                  </a>{" "}
                </li>
              </ul>
            </div>
            <div className="footer__item footer__item">
              <div className="footer__title">{t("Terms.title")}</div>
              <ul className="footer__list list">
                <li className="footer__list-item">
                  <Link href="/privacy" className="footer__link link">
                    {t("Terms.Announcement")}
                  </Link>{" "}
                </li>
                <li className="footer__list-item">
                  <Link href="/privacy" className="footer__link link">
                    {t("Terms.PrivacyPolicy")}
                  </Link>{" "}
                </li>
                <li className="footer__list-item">
                  <Link href="/privacy" className="footer__link link">
                    {t("Terms.TermsOfService")}
                  </Link>
                </li>
                <li className="footer__list-item">
                  <Link href="/privacy" className="footer__link link">
                    {t("Terms.RefundPolicy")}
                  </Link>{" "}
                </li>
                <li className="footer__list-item">
                  <Link href="/privacy" className="footer__link link">
                    {t("Terms.LicencesInfo")}
                  </Link>{" "}
                </li>
              </ul>
            </div>
            <div className="footer__item footer__item">
              <div className="footer__title">{t("Support.title")}</div>
              <ul className="footer__list list">
                <li className="footer__list-item">
                  <Link href="/faq" className="footer__link link">
                    {t("Support.FAQ")}
                  </Link>{" "}
                </li>
                <li className="footer__list-item">
                  <Link href="/contact" className="footer__link link">
                    {t("Support.GetSupport")}
                  </Link>{" "}
                </li>
                <li className="footer__list-item">
                  <Link href="/blog" className="footer__link link">
                    {t("Support.OurForum")}
                  </Link>{" "}
                </li>
                <li className="footer__list-item">
                  <Link href="/blog" className="footer__link link">
                    {t("Support.MemberArea")}
                  </Link>{" "}
                </li>
                <li className="footer__list-item">
                  <Link href="/contact" className="footer__link link">
                    {t("Support.ContactUs")}
                  </Link>{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__rights">
        {t("Copyright", { year: new Date().getFullYear() })}
      </div>
    </footer>
  );
};
