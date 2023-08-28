import Image from "next/image";
import React from "react";

type Props = {};

export default function NotFound(props: Props) {
  return (
    <main className="main">
      <section className="preview preview--small">
        <span className="preview__name">Page Not Found</span>
      </section>
      <section className="breadcrumps">
        <div className="container">
          <ul className="breadcrumps__list list">
            <li className="breadcrumps__item breadcrumps__item--home">
              <a className="breadcrumps__link link" href="/">
                home
              </a>
            </li>
            <li className="breadcrumps__item breadcrumps__item--current">
              <span className="breadcrumps__link link">404</span>
            </li>
          </ul>
        </div>
      </section>
      <section className="error">
        <div className="container">
          <div className="error__image-container">
            <Image
              src="/images/error/image.png"
              width={425}
              height={250}
              alt="404 image"
              className="error__image"
            />
          </div>
          <p className="error__text text">
            Quisque cras molestie dictum, aliquam litora. Tempus amet
            pellentesque vitae ante, consectequat sed vestibulum fringilla
            dictum, enim a taciti et orci fusce, non suspendisse, nunc at
            rutrumPellentesque turpis et nonummy eu nulla. Quis gravida ultrices
            nam.{" "}
            <a href="/" className="error__link">
              Back To Home
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
