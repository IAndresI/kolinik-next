"use client";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { useTranslations } from "next-intl";

export interface IAccordionProps {
  items: {
    label: string;
    text: JSX.Element;
  }[];
}

export const CustomAccordion = ({ items }: IAccordionProps) => {
  const t = useTranslations("OurExpertDoctors");

  return (
    <Accordion
      className="question__accordion"
      allowMultipleExpanded
      allowZeroExpanded
    >
      {items.map((item) => (
        <AccordionItem className="question__accordion-item" key={item.label}>
          <AccordionItemHeading>
            <AccordionItemButton className="question__button">
              {item.label}
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel className="question__answer">
            {item.text}
          </AccordionItemPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
