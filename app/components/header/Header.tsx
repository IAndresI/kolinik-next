"use client";
import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../assets/logo/logo.png";
import enIcon from "../../assets/locale/en.png";
import ruIcon from "../../assets/locale/ru.png";
import { useRouter, usePathname } from "next-intl/client";

interface IHeaderProps {}

export const Header = (props: IHeaderProps) => {
  const t = useTranslations("Header");
  const currentLocale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <div className="header__info">
            <Link href="/" className="header__logo-link link">
              <Image
                src={logo}
                width={120}
                height={80}
                alt="logo image"
                className="header__logo"
              />
            </Link>
            <address className="header__address">
              <div className="header__address-item">
                <div className="header__info-icon icon-map-marker"></div>
                <div className="header__address-description">
                  <div className="header__address-title">{t("location")}</div>
                  <a href="/" className="header__address-link link">
                    Medino, NY 10012, USA
                  </a>
                </div>
              </div>
              <div className="header__address-item">
                <div className="header__info-icon icon-envelope"></div>
                <div className="header__address-description">
                  <div className="header__address-title">{t("email")}</div>
                  <a
                    href="mailto:democompany.com"
                    className="header__address-link link"
                  >
                    democompany.com
                  </a>
                </div>
              </div>
              <div className="header__address-item">
                <button
                  className="header__locale-button"
                  onClick={() =>
                    currentLocale === "ru"
                      ? router.replace(pathname, { locale: "en" })
                      : router.replace(pathname, { locale: "ru" })
                  }
                >
                  <Image
                    width={44}
                    height={40}
                    src={currentLocale === "ru" ? enIcon : ruIcon}
                    alt="locale icon"
                  />
                </button>
              </div>
            </address>
            <a className="header__phone" href="tel:1234567">
              {t("phone")} - 1234567
            </a>
          </div>
          <div className="header__menu">
            <nav className="header__nav">
              <button className="header__burger">
                <span className="header__burger-line"></span>
                <span className="header__burger-line"></span>
                <span className="header__burger-line"></span>
              </button>
              <ul className="header__nav-list list">
                <li className="header__nav-item">
                  <Link
                    href="/"
                    className={`${
                      pathname == "/" ? "header__link--active" : ""
                    } header__link link"`}
                  >
                    {t("links.home")}
                  </Link>
                </li>
                <li className="header__nav-item">
                  <Link
                    href="/about"
                    className={`${
                      pathname === "/about" ? "header__link--active" : ""
                    } header__link link"`}
                  >
                    {t("links.about")}
                  </Link>
                </li>
                <li className="header__nav-item">
                  <Link
                    href="/service"
                    className={`${
                      pathname === "/service" ? "header__link--active" : ""
                    } header__link link"`}
                  >
                    {t("links.service")}
                  </Link>
                </li>
                <li className="header__nav-item">
                  <Link
                    href="/doctors"
                    className={`${
                      pathname === "/doctors" ? "header__link--active" : ""
                    } header__link link"`}
                  >
                    {t("links.doctor")}
                  </Link>
                </li>
                <li className="header__nav-item">
                  <Link
                    href="/blog"
                    className={`${
                      pathname === "/blog" ? "header__link--active" : ""
                    } header__link link"`}
                  >
                    {t("links.blog")}
                  </Link>
                </li>
                <li className="header__nav-item">
                  <Link
                    href="/contact"
                    className={`${
                      pathname === "/contact" ? "header__link--active" : ""
                    } header__link link"`}
                  >
                    {t("links.contact")}
                  </Link>
                </li>
                <li className="header__nav-item">
                  <Link
                    href="/giving-back"
                    className={`${
                      pathname === "/giving-back" ? "header__link--active" : ""
                    } header__link link"`}
                  >
                    {t("links.givingBack")}
                  </Link>
                </li>
                <li className="header__nav-item">
                  <Link
                    href="/mission"
                    className={`${
                      pathname === "/mission" ? "header__link--active" : ""
                    } header__link link"`}
                  >
                    {t("links.mission")}
                  </Link>
                </li>
                <li className="header__nav-item">
                  <Link
                    href="/timeline"
                    className={`${
                      pathname === "/timeline" ? "header__link--active" : ""
                    } header__link link"`}
                  >
                    {t("links.timeline")}
                  </Link>
                </li>
              </ul>
            </nav>
            <form action="" className="header__form">
              <input type="text" className="header__input" />
              <button
                className="header__submit icon-search"
                type="submit"
              ></button>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
};
