import { useState, useRef, FormEvent, ChangeEvent } from "react";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion.ts";
import { styles } from "../styles.ts";
import { EarthCanvas } from "./canvas";
import emailjs from "@emailjs/browser";
import "react-phone-number-input/style.css";
import PhoneInputWithCountrySelect from "react-phone-number-input";

const ContactSection = () => {
  const formRef = useRef(null);
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

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
        alert("Obrigado pelo contato. Responderei em breve.");
        setFormState({
          name: "",
          phone: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        alert("Algo deu errado. Tente novamente.");
      });
  };

  return (
    <div
      className={
        "flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row"
      }
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className={"flex-[0.75] rounded-2xl bg-black-100 p-8"}
      >
        <p className={styles.sectionSubText}>Entrar em contato</p>
        <h3 className={styles.sectionHeadText}>Contato</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className={"mt-12 flex flex-col gap-8"}
        >
          <label className={"flex flex-col"}>
            <span className={"mb-4 font-medium text-white"}>Seu Nome</span>
            <input
              required={true}
              inputMode={"text"}
              type={"text"}
              name={"name"}
              autoComplete={"name"}
              value={formState.name}
              onChange={handleChange}
              placeholder={"Qual é o seu nome?"}
              className={
                "rounded-lg border-none bg-tertiary px-6 py-4 font-medium text-white outline-none placeholder:text-secondary"
              }
            />
          </label>

          <label className={"flex flex-col"}>
            <span className={"mb-4 font-medium text-white"}>Seu Telefone</span>
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
                className:
                  "rounded-lg border-none bg-tertiary px-6 py-4 font-medium text-white outline-none placeholder:text-secondary",
              }}
              autoComplete={"on"}
              defaultCountry={"BR"} //TODO internacionalizar
              addInternationalOption={false}
              placeholder={"Qual é o seu número de telefone?"}
              initialValueFormat={"national"}
              displayInitialValueAsLocalNumber
              limitMaxLength
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              value={formState.phone}
              onChange={(value) =>
                setFormState({ ...formState, phone: `${value}` })
              }
            />
          </label>

          <label className={"flex flex-col"}>
            <span className={"mb-4 font-medium text-white"}>Seu Email</span>
            <input
              required={true}
              inputMode={"email"}
              type={"email"}
              name={"email"}
              autoComplete={"email"}
              value={formState.email}
              onChange={handleChange}
              placeholder={"Qual é o seu email?"}
              className={
                "rounded-lg border-none bg-tertiary px-6 py-4 font-medium text-white outline-none placeholder:text-secondary"
              }
            />
          </label>

          <label className={"flex flex-col"}>
            <span className={"mb-4 font-medium text-white"}>Sua Mensagem</span>
            <textarea
              inputMode={"text"}
              required={true}
              rows={7}
              name={"message"}
              autoComplete={"off"}
              value={formState.message}
              onChange={handleChange}
              placeholder={"O que você gostaria de me dizer?"}
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
            {loading ? "Enviando..." : "Enviar"}
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
