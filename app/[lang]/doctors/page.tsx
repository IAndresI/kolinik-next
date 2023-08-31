import doctor1 from "@/app/assets/doctors/doctor1.png";
import doctor2 from "@/app/assets/doctors/doctor2.png";
import doctor3 from "@/app/assets/doctors/doctor3.png";
import { OurDoctors, SocialTypes } from "@/app/components/doctors/OurDoctors";
import { PricingPlan } from "@/app/components/plan/PricingPlan";
import { Breadcrumps } from "@/app/components/breadcrumps/Breadcrumps";
import { Breads } from "@/app/lib/constants";
import { useTranslations } from "next-intl";
import { AppointmentForm } from "@/app/components/appointment/AppointmentForm";
import { CustomAccordion } from "@/app/components/accordion/Accordion";

import "react-accessible-accordion/dist/fancy-example.css";

const doctorsArr: {
  image: string;
  name: string;
  department: string;
  description: string;
  link: string;
  socials: {
    type: SocialTypes;
    link: string;
  }[];
}[] = [
  {
    image: doctor2.src,
    name: "Marina Yigo",
    department: "Gynecology",
    description:
      "Pharetra ultricies aenean, sit metus integer arcu turpis dndimentum pellentesque world.",
    link: "#",
    socials: [
      {
        type: "facebook",
        link: "#",
      },
      {
        type: "twitter",
        link: "#",
      },
      {
        type: "google",
        link: "#",
      },
    ],
  },
  {
    image: doctor3.src,
    name: "Johan Makkelli",
    department: "Physical Medicine",
    description:
      "Pharetra ultricies aenean, sit metus integer arcu turpis dndimentum pellentesque world.",
    link: "#",
    socials: [
      {
        type: "facebook",
        link: "#",
      },
      {
        type: "twitter",
        link: "#",
      },
      {
        type: "google",
        link: "#",
      },
    ],
  },
  {
    image: doctor1.src,
    name: "Khaled Hossen",
    department: "Gastoroenterology",
    description:
      "Pharetra ultricies aenean, sit metus integer arcu turpis dndimentum pellentesque world.",
    link: "#",
    socials: [
      {
        type: "facebook",
        link: "#",
      },
      {
        type: "twitter",
        link: "#",
      },
      {
        type: "google",
        link: "#",
      },
    ],
  },
  {
    image: doctor2.src,
    name: "Marina Yigo",
    department: "Gynecology",
    description:
      "Pharetra ultricies aenean, sit metus integer arcu turpis dndimentum pellentesque world.",
    link: "#",
    socials: [
      {
        type: "facebook",
        link: "#",
      },
      {
        type: "twitter",
        link: "#",
      },
      {
        type: "google",
        link: "#",
      },
    ],
  },
  {
    image: doctor3.src,
    name: "Johan Makkelli",
    department: "Physical Medicine",
    description:
      "Pharetra ultricies aenean, sit metus integer arcu turpis dndimentum pellentesque world.",
    link: "#",
    socials: [
      {
        type: "facebook",
        link: "#",
      },
      {
        type: "twitter",
        link: "#",
      },
      {
        type: "google",
        link: "#",
      },
    ],
  },
  {
    image: doctor1.src,
    name: "Khaled Hossen",
    department: "Gastoroenterology",
    description:
      "Pharetra ultricies aenean, sit metus integer arcu turpis dndimentum pellentesque world.",
    link: "#",
    socials: [
      {
        type: "facebook",
        link: "#",
      },
      {
        type: "twitter",
        link: "#",
      },
      {
        type: "google",
        link: "#",
      },
    ],
  },
];

const dropdownOptions = ["one", "two", "three"];

export default function Doctor() {
  const t = useTranslations("OurDoctors");
  return (
    <div>
      <section className="preview preview--small">
        <span className="preview__name">{t("title")}</span>
      </section>
      <Breadcrumps
        items={[
          { label: Breads.home, link: "/" },
          { label: Breads.doctor, link: "/doctors" },
        ]}
      />
      <OurDoctors doctors={doctorsArr} />
      <section className="question">
        <div className="container">
          <div className="question__inner">
            <div className="question__appointment appointment appointment--block">
              <AppointmentForm />
            </div>

            <div className="question__description">
              <div className="question__title title title--special-2">
                <div className="title__main">{t("Questions.title")}</div>
              </div>
              <CustomAccordion
                items={[
                  {
                    label: t("Questions.list.Choose.title"),
                    text: (
                      <div className="question__answer">
                        <span className="question__text question__text--bold">
                          {t("Questions.list.Choose.subTitle")}
                        </span>
                        <p className="question__text text">
                          {t("Questions.list.Choose.text")}
                        </p>
                      </div>
                    ),
                  },
                  {
                    label: t("Questions.list.Mission.title"),
                    text: (
                      <div className="question__answer">
                        <span className="question__text question__text--bold">
                          {t("Questions.list.Mission.subTitle")}
                        </span>
                        <p className="question__text text">
                          {t("Questions.list.Mission.text")}
                        </p>
                      </div>
                    ),
                  },
                  {
                    label: t("Questions.list.Service.title"),
                    text: (
                      <div className="question__answer">
                        <span className="question__text question__text--bold">
                          {t("Questions.list.Service.subTitle")}
                        </span>
                        <p className="question__text text">
                          {t("Questions.list.Service.text")}
                        </p>
                      </div>
                    ),
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </section>
      <PricingPlan />
    </div>
  );
}
