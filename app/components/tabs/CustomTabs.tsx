"use client";
import Image from "next/image";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useTranslations } from "next-intl";

import departmentBg from "@/app/assets/department/bg.jpg";
import departmentDental from "@/app/assets/department/dental.png";
import departmentGynecology from "@/app/assets/department/gynecology.png";
import departmentLaboratory from "@/app/assets/department/laboratory.png";
import departmentCardiology from "@/app/assets/department/cardiology.png";
import departmentEmergency from "@/app/assets/department/emergency.png";

import "react-tabs/style/react-tabs.css";

const tabs = [
  { title: "Dental", image: departmentDental, advantages: [1, 2, 3, 4, 5] },
  {
    title: "Gynecology",
    image: departmentGynecology,
    advantages: [1, 2, 3],
  },
  {
    title: "Laboratory",
    image: departmentLaboratory,
    advantages: [1, 2, 3, 4],
  },
  {
    title: "Cardiology",
    image: departmentCardiology,
    advantages: [1, 2],
  },
  {
    title: "Emergency",
    image: departmentEmergency,
    advantages: [1, 2, 3, 4, 5, 6],
  },
];

export const CustomTabs = () => {
  const t = useTranslations("Index.Tabs");

  return (
    <Tabs>
      <TabList className="department__button-list list">
        {tabs.map((tab, i) => (
          <Tab key={tab.title} className="department__button-item">
            <button className="department__button" data-tab={tab.title}>
              <div
                className="department__image"
                style={{
                  backgroundImage: `url(${tab.image.src})`,
                }}
              ></div>
              <div className="department__name">
                {t(`${tab.title}.title` as any)}
              </div>
            </button>
          </Tab>
        ))}
      </TabList>
      <div className="department__list list">
        {tabs.map((tab, i) => (
          <TabPanel
            key={tab.title + i}
            className="department__item"
            data-content={tab.title}
          >
            <div className="department__image-container">
              <Image
                src={departmentBg}
                fill={true}
                alt="department image"
                className="department__bg-image"
              />
            </div>
            <div className="department__description">
              <div className="department__description-title">
                {t(`${tab.title}.title` as any)}
              </div>
              <p className="department__description-text">
                {t(`${tab.title}.description` as any)}
              </p>
              <ul className="department__features-list list features">
                {tab.advantages.map((advantage) => (
                  <li key={tab.title + advantage} className="features__item">
                    {t(`${tab.title}.advantages.${advantage}` as any)}
                  </li>
                ))}
              </ul>
            </div>
          </TabPanel>
        ))}
      </div>
    </Tabs>
  );
};
