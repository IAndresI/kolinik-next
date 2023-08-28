"use client";
import Image from "next/image";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import departmentBg from "@/app/assets/department/bg.jpg";
import departmentDental from "@/app/assets/department/dental.png";
import departmentGynecology from "@/app/assets/department/gynecology.png";
import departmentLaboratory from "@/app/assets/department/laboratory.png";
import departmentCardiology from "@/app/assets/department/cardiology.png";
import departmentEmergency from "@/app/assets/department/emergency.png";

import "react-tabs/style/react-tabs.css";

export const CustomTabs = () => {
  return (
    <Tabs>
      <TabList className="department__button-list list">
        <Tab className="department__button-item">
          <button className="department__button" data-tab="dental">
            <div
              className="department__image"
              style={{
                backgroundImage: `url(${departmentDental.src})`,
              }}
            ></div>
            <div className="department__name">Dental</div>
          </button>
        </Tab>
        <Tab className="department__button-item">
          <button className="department__button" data-tab="gynecology">
            <div
              className="department__image"
              style={{
                backgroundImage: `url(${departmentGynecology.src})`,
              }}
            ></div>
            <div className="department__name">Gynecology</div>
          </button>
        </Tab>
        <Tab className="department__button-item">
          <button className="department__button" data-tab="laboratory">
            <div
              className="department__image"
              style={{
                backgroundImage: `url(${departmentLaboratory.src})`,
              }}
            ></div>
            <div className="department__name">Laboratory</div>
          </button>
        </Tab>
        <Tab className="department__button-item">
          <button className="department__button" data-tab="cardiology">
            <div
              className="department__image"
              style={{
                backgroundImage: `url(${departmentCardiology.src})`,
              }}
            ></div>
            <div className="department__name">Cardiology</div>
          </button>
        </Tab>
        <Tab className="department__button-item">
          <button className="department__button" data-tab="emergency">
            <div
              className="department__image"
              style={{
                backgroundImage: `url(${departmentEmergency.src})`,
              }}
            ></div>
            <div className="department__name">Emergency</div>
          </button>
        </Tab>
      </TabList>
      <div className="department__list list">
        <TabPanel className="department__item">
          <div className="department__image-container">
            <Image
              src={departmentBg}
              fill={true}
              alt="department image"
              className="department__bg-image"
            />
          </div>
          <div className="department__description">
            <div className="department__description-title">Dental</div>
            <p className="department__description-text">
              Ridiculus elit amet sagittis arcu cras ornare, amet a amet urna
              vicras. Ipsum sociosqu. Mi consequat nec, per urna sed vitae mi
              lectusn egestas, in consectetuer sed. Nunc id venenatis
            </p>
            <ul className="department__features-list list features">
              <li className="features__item">
                Liver Function Tests. The Liver Function Tests (LFT)ed
              </li>
              <li className="features__item">Full Blood Examination.</li>
              <li className="features__item">
                TSH (Thyroid Stimulating Hormone) Quantification Urinalysis.
              </li>
              <li className="features__item">
                INR (International Normalized Ratio)
              </li>
            </ul>
          </div>
        </TabPanel>
        <TabPanel className="department__item" data-content="gynecology">
          <div className="department__image-container">
            <Image
              src={departmentBg}
              fill={true}
              alt="department image"
              className="department__bg-image"
            />
          </div>
          <div className="department__description">
            <div className="department__description-title">Gynecology</div>
            <p className="department__description-text">
              Ridiculus elit amet sagittis arcu cras ornare, amet a amet urna
              vicras. Ipsum sociosqu. Mi consequat nec, per urna sed vitae mi
              lectusn egestas, in consectetuer sed. Nunc id venenatis
            </p>
            <ul className="department__features-list list features">
              <li className="features__item">
                Liver Function Tests. The Liver Function Tests (LFT)ed
              </li>
              <li className="features__item">Full Blood Examination.</li>
              <li className="features__item">
                TSH (Thyroid Stimulating Hormone) Quantification Urinalysis.
              </li>
              <li className="features__item">
                INR (International Normalized Ratio)
              </li>
            </ul>
          </div>
        </TabPanel>
        <TabPanel className="department__item" data-content="laboratory">
          <div className="department__image-container">
            <Image
              src={departmentBg}
              fill={true}
              alt="department image"
              className="department__bg-image"
            />
          </div>
          <div className="department__description">
            <div className="department__description-title">Laboratory</div>
            <p className="department__description-text">
              Ridiculus elit amet sagittis arcu cras ornare, amet a amet urna
              vicras. Ipsum sociosqu. Mi consequat nec, per urna sed vitae mi
              lectusn egestas, in consectetuer sed. Nunc id venenatis
            </p>
            <ul className="department__features-list list features">
              <li className="features__item">
                Liver Function Tests. The Liver Function Tests (LFT)ed
              </li>
              <li className="features__item">Full Blood Examination.</li>
              <li className="features__item">
                TSH (Thyroid Stimulating Hormone) Quantification Urinalysis.
              </li>
              <li className="features__item">
                INR (International Normalized Ratio)
              </li>
            </ul>
          </div>
        </TabPanel>
        <TabPanel className="department__item" data-content="cardiology">
          <div className="department__image-container">
            <Image
              src={departmentBg}
              fill={true}
              alt="department image"
              className="department__bg-image"
            />
          </div>
          <div className="department__description">
            <div className="department__description-title">Cardiology</div>
            <p className="department__description-text">
              Ridiculus elit amet sagittis arcu cras ornare, amet a amet urna
              vicras. Ipsum sociosqu. Mi consequat nec, per urna sed vitae mi
              lectusn egestas, in consectetuer sed. Nunc id venenatis
            </p>
            <ul className="department__features-list list features">
              <li className="features__item">
                Liver Function Tests. The Liver Function Tests (LFT)ed
              </li>
              <li className="features__item">Full Blood Examination.</li>
              <li className="features__item">
                TSH (Thyroid Stimulating Hormone) Quantification Urinalysis.
              </li>
              <li className="features__item">
                INR (International Normalized Ratio)
              </li>
            </ul>
          </div>
        </TabPanel>
        <TabPanel className="department__item" data-content="emergency">
          <div className="department__image-container">
            <Image
              src={departmentBg}
              fill={true}
              alt="department image"
              className="department__bg-image"
            />
          </div>
          <div className="department__description">
            <div className="department__description-title">Emergency</div>
            <p className="department__description-text">
              Ridiculus elit amet sagittis arcu cras ornare, amet a amet urna
              vicras. Ipsum sociosqu. Mi consequat nec, per urna sed vitae mi
              lectusn egestas, in consectetuer sed. Nunc id venenatis
            </p>
            <ul className="department__features-list list features">
              <li className="features__item">
                Liver Function Tests. The Liver Function Tests (LFT)ed
              </li>
              <li className="features__item">Full Blood Examination.</li>
              <li className="features__item">
                TSH (Thyroid Stimulating Hormone) Quantification Urinalysis.
              </li>
              <li className="features__item">
                INR (International Normalized Ratio)
              </li>
            </ul>
          </div>
        </TabPanel>
      </div>
    </Tabs>
  );
};
