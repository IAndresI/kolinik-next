"use client";
import { Breads } from "@/app/lib/constants";
import { IDivProps } from "@/app/types";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface IAppointmentProps extends IDivProps {
  items: { label: Breads; link: string }[];
}

export const Breadcrumps = ({
  className,
  items,
  ...props
}: IAppointmentProps) => {
  const t = useTranslations("Breadcrumps");
  const pathname = usePathname();

  return (
    <section {...props} className={`breadcrumps ${className}`}>
      <div className="container">
        <ul className="breadcrumps__list list">
          {items.map((item, i) => (
            <li
              key={item.label}
              className={`breadcrumps__item ${
                i === 0 && "breadcrumps__item--home"
              } ${item.link === pathname && "breadcrumps__item--current"}`}
            >
              {item.link === pathname ? (
                <span className="breadcrumps__link">{t(item.label)}</span>
              ) : (
                <Link className="breadcrumps__link link" href={item.link}>
                  {t(item.label)}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
