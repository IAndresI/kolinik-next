import doctorImage from "@/app/assets/appointment/doctor.png";
import { useTranslations } from "next-intl";

interface IAppointmentProps {}

export const Appointment = (props: IAppointmentProps) => {
  const t = useTranslations("Appointment");

  return (
    <section
      className="appointment"
      id="appointment"
      style={{ backgroundImage: `url(${doctorImage.src})` }}
    >
      <div className="container">
        <div className="appointment__form-container">
          <div className="appointment__title">{t("title")}</div>
          <form className="appointment__form">
            <select name="" id="one" className="appointment__input">
              <option>Dacota</option>
              <option>Washington</option>
              <option>New York</option>
              <option>Bruklin</option>
              <option>Nevada</option>
            </select>
            <select name="" id="two" className="appointment__input">
              <option>Johan Kroyf</option>
              <option>Joe Due</option>
              <option>Alex Telles</option>
              <option>Ioan Gungberg</option>
              <option>Anastasia Ivanova</option>
            </select>
            <input
              type="text"
              className="appointment__input"
              placeholder={t("fullName")}
            />
            <input
              type="text"
              className="appointment__input"
              placeholder={t("phone")}
            />
            <input
              type="date"
              className="appointment__input"
              placeholder={t("date")}
            />
            <button className="appointment__submit" type="submit">
              {t("button")}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
