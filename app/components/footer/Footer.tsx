import React from "react";
import Image from "next/image";
import Link from "next/link";

import meteor from "@/app/assets/footer/meteor.png";
import videocreek from "@/app/assets/footer/videocreek.png";
import behance from "@/app/assets/footer/behance.png";
import laborator from "@/app/assets/footer/laborator.png";

type Props = {};

export const Footer = (props: Props) => {
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
              <div className="footer__title">About Company</div>
              <p className="footer__text">
                Penatibus in, litora dictumst suspendamuanim egestas, libero
                mollis molestiae sit et sem nisl inquam vitae
                euismoellentesque.nd this is over head.
              </p>
            </div>
            <div className="footer__item footer__item">
              <div className="footer__title">Useful Link</div>
              <ul className="footer__list list">
                <li className="footer__list-item">
                  <Link href="/about" className="footer__link link">
                    About{" "}
                  </Link>{" "}
                </li>
                <li className="footer__list-item">
                  <Link href="/service1" className="footer__link link">
                    Our Services{" "}
                  </Link>{" "}
                </li>
                <li className="footer__list-item">
                  <Link href="/mission" className="footer__link link">
                    Company Mission
                  </Link>{" "}
                </li>
                <li className="footer__list-item">
                  <Link href="/doctors" className="footer__link link">
                    Find Doctor{" "}
                  </Link>{" "}
                </li>
                <li className="footer__list-item">
                  <a href="#appointment" className="footer__link link">
                    Appointment{" "}
                  </a>{" "}
                </li>
              </ul>
            </div>
            <div className="footer__item footer__item">
              <div className="footer__title">Our Services</div>
              <ul className="footer__list list">
                <li className="footer__list-item">
                  <a href="#department" className="footer__link link">
                    Cardiology{" "}
                  </a>{" "}
                </li>
                <li className="footer__list-item">
                  <a href="#department" className="footer__link link">
                    Outpatient{" "}
                  </a>{" "}
                </li>
                <li className="footer__list-item">
                  <a href="#department" className="footer__link link">
                    Gynaecological
                  </a>{" "}
                </li>
                <li className="footer__list-item">
                  <a href="#department" className="footer__link link">
                    Dental Surgery
                  </a>{" "}
                </li>
                <li className="footer__list-item">
                  <a href="#department" className="footer__link link">
                    Laboratory{" "}
                  </a>{" "}
                </li>
              </ul>
            </div>
            <div className="footer__item footer__item">
              <div className="footer__title">Terms</div>
              <ul className="footer__list list">
                <li className="footer__list-item">
                  <Link href="/privacy" className="footer__link link">
                    Announcement{" "}
                  </Link>{" "}
                </li>
                <li className="footer__list-item">
                  <Link href="/privacy" className="footer__link link">
                    Privacy Policy{" "}
                  </Link>{" "}
                </li>
                <li className="footer__list-item">
                  <Link href="/privacy" className="footer__link link">
                    Terms Of Service
                  </Link>
                </li>
                <li className="footer__list-item">
                  <Link href="/privacy" className="footer__link link">
                    Refund Policy{" "}
                  </Link>{" "}
                </li>
                <li className="footer__list-item">
                  <Link href="/privacy" className="footer__link link">
                    Licences Info{" "}
                  </Link>{" "}
                </li>
              </ul>
            </div>
            <div className="footer__item footer__item">
              <div className="footer__title">Support</div>
              <ul className="footer__list list">
                <li className="footer__list-item">
                  <Link href="/faq" className="footer__link link">
                    F.A.Q{" "}
                  </Link>{" "}
                </li>
                <li className="footer__list-item">
                  <Link href="/contact" className="footer__link link">
                    Get Support
                  </Link>{" "}
                </li>
                <li className="footer__list-item">
                  <Link href="/blog" className="footer__link link">
                    Our Forum{" "}
                  </Link>{" "}
                </li>
                <li className="footer__list-item">
                  <Link href="/blog" className="footer__link link">
                    Member Area
                  </Link>{" "}
                </li>
                <li className="footer__list-item">
                  <Link href="/contact" className="footer__link link">
                    Contact Us{" "}
                  </Link>{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__rights">
        Copyright © {new Date().getFullYear()}. All rights reserved
      </div>
    </footer>
  );
};
