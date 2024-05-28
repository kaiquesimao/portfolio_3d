import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion.ts";
import { styles } from "../styles.ts";
import { EarthCanvas } from "./canvas";
import emailjs from "@emailjs/browser";
import "react-phone-number-input/style.css";
import PhoneInputWithCountrySelect, {
  Country,
  Value,
} from "react-phone-number-input";
import { useTranslation } from "react-i18next";
import { CountryData } from "../utils/types.ts";

const ContactSection = () => {
  const { t } = useTranslation();
  const formRef = useRef(null);
  const [formState, setFormState] = useState({
    name: "",
    phone: "" as Value | undefined,
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [country, setCountry] = useState<Country | undefined>("BR");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICEID,
        import.meta.env.VITE_EMAILJS_TEMPLATEID,
        {
          from_name: formState.name,
          from_phone: formState.phone,
          from_email: formState.email,
          to_name: "Kaique",
          to_email: "kaique.gabriel.me@gmail.com",
          message: formState.message,
        },
        import.meta.env.VITE_EMAILJS_OPTIONS,
      )
      .then(() => {
        setLoading(false);
        alert(t("contact_success"));
        setFormState({
          name: "",
          phone: "" as Value,
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        alert(t("contact_error"));
      });
  };

  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((response) => response.json())
      .then((data: CountryData) => setCountry(data.country_code))
      .catch(() => setCountry("BR")); // default to BR if the fetch fails
  }, []);

  return (
    <div className={"flex flex-col-reverse gap-10 xl:mt-12 xl:flex-row"}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className={"flex-[0.75] rounded-2xl bg-black-100 p-8"}
      >
        <p className={styles.sectionSubText}>{t("contact_me")}</p>
        <h3 className={styles.sectionHeadText}>{t("contact")}</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className={"mt-12 flex flex-col gap-8"}
        >
          <label className={"flex flex-col"}>
            <span className={"mb-4 font-medium text-white"}>
              {t("your_name")}
            </span>
            <input
              required={true}
              inputMode={"text"}
              type={"text"}
              name={"name"}
              autoComplete={"name"}
              value={formState.name}
              onChange={handleChange}
              placeholder={t("your_name")}
              className={
                "rounded-lg border-none bg-tertiary px-6 py-4 font-medium text-white outline-none placeholder:text-secondary"
              }
            />
          </label>

          <label className={"flex flex-col"}>
            <span className={"mb-4 font-medium text-white"}>
              {t("your_phone")}
            </span>
            <PhoneInputWithCountrySelect
              countrySelectProps={{
                autoComplete: "country-name",
                name: "country",
                className:
                  "rounded-lg border-none bg-tertiary px-6 py-4 font-medium text-white outline-none placeholder:text-secondary",
              }}
              numberInputProps={{
                name: "phone",
                id: "phone",
                required: true,
                inputMode: "tel",
                type: "tel",
                autoComplete: "tel-national",
                placeholder: t("your_country"),
                className:
                  "rounded-lg border-none bg-tertiary px-6 py-4 font-medium text-white outline-none placeholder:text-secondary",
              }}
              autoComplete={"tel-national"}
              defaultCountry={country}
              addInternationalOption={false}
              initialValueFormat={"national"}
              displayInitialValueAsLocalNumber
              limitMaxLength
              value={formState.phone}
              onChange={(value) => setFormState({ ...formState, phone: value })}
            />
          </label>

          <label className={"flex flex-col"}>
            <span className={"mb-4 font-medium text-white"}>
              {t("your_email")}
            </span>
            <input
              required={true}
              inputMode={"email"}
              type={"email"}
              name={"email"}
              autoComplete={"email"}
              value={formState.email}
              onChange={handleChange}
              placeholder={t("your_email")}
              className={
                "rounded-lg border-none bg-tertiary px-6 py-4 font-medium text-white outline-none placeholder:text-secondary"
              }
            />
          </label>

          <label className={"flex flex-col"}>
            <span className={"mb-4 font-medium text-white"}>
              {t("your_message")}
            </span>
            <textarea
              inputMode={"text"}
              required={true}
              rows={7}
              name={"message"}
              autoComplete={"off"}
              value={formState.message}
              onChange={handleChange}
              placeholder={t("your_message")}
              className={
                "rounded-lg border-none bg-tertiary px-6 py-4 font-medium text-white outline-none placeholder:text-secondary"
              }
            />
          </label>

          <button
            className={
              "w-fit rounded-xl bg-tertiary px-8 py-3 font-bold text-white shadow-md shadow-primary outline-none"
            }
            type={"submit"}
            value={"Send"}
          >
            {loading ? t("sending") : t("send")}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className={"h-[350px] md:h-[550px] xl:h-auto xl:flex-1"}
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

const Contact = SectionWrapper(ContactSection, "contact");
export default Contact;
