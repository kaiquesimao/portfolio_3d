import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { styles } from "../styles";
import { languages, navLinks } from "../constants";
import { brasil, close, logo, menu, usa } from "../assets";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(true);

  const handleLanguageChange = async (language: {
    nativeName: string;
    code: string;
  }) => {
    try {
      return await i18n.changeLanguage(language.code);
    } catch (error) {
      return console.error(error);
    }
  };

  const countryImgStyleClass = (language: string) =>
    `box-border size-9 cursor-pointer object-contain ${
      i18n.resolvedLanguage === language
        ? "rounded-full border-2 border-white"
        : ""
    }`;

  return (
    <nav
      className={`${styles.paddingX} fixed top-0 z-20 flex w-full items-center bg-primary py-5`}
    >
      <div
        className={
          "mx-auto flex w-full max-w-7xl items-center justify-between gap-3"
        }
      >
        <Link
          href={"/"}
          className={
            "flex min-w-0 max-w-[calc(100%-2.75rem)] items-center gap-2 sm:max-w-none"
          }
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <Image
            src={logo}
            alt={"logo"}
            width={36}
            height={36}
            className={"size-9 shrink-0 object-contain"}
          />
          <p
            className={
              "min-w-0 truncate text-base font-bold text-white sm:overflow-visible sm:whitespace-nowrap sm:text-lg"
            }
          >
            <span className={"sm:hidden"}>{t("hero_title")}</span>
            <span className={"hidden sm:inline"}>{t("page_title")}</span>
          </p>
        </Link>

        {/* desktop — visibility via CSS so SSR and client stay in sync */}
        <ul className={"hidden list-none flex-row gap-10 sm:flex"}>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${active === link.id ? "text-white" : "text-secondary"} cursor-pointer text-lg font-medium hover:text-white`}
              onClickCapture={() => setActive(link.id)}
            >
              <a href={`#${link.id}`}>{t(link.title)}</a>
            </li>
          ))}

          <button
            onClick={() => {
              void handleLanguageChange(languages.portuguese);
            }}
          >
            <Image
              src={brasil}
              alt={t("country_img")}
              width={36}
              height={36}
              className={countryImgStyleClass(languages.portuguese.code)}
              title={t("change_language")}
            />
          </button>
          <button
            onClick={() => {
              void handleLanguageChange(languages.english);
            }}
          >
            <Image
              src={usa}
              alt={t("country_img")}
              width={36}
              height={36}
              className={countryImgStyleClass(languages.english.code)}
              title={t("change_language")}
            />
          </button>
        </ul>

        {/* mobile — visibility via CSS so SSR and client stay in sync */}
        <div className={"flex shrink-0 items-center justify-end sm:hidden"}>
          <div className="relative size-7">
            <Image
              src={menu}
              alt={"menu"}
              width={28}
              height={28}
              className={`absolute size-7 transition-opacity duration-500 ${toggle ? "opacity-100" : "opacity-0"} cursor-pointer object-contain`}
              onClickCapture={() => setToggle(!toggle)}
            />
            <Image
              src={close}
              alt={"close"}
              width={28}
              height={28}
              className={`size-7 transition-opacity duration-500 ${toggle ? "opacity-0" : "opacity-100"} cursor-pointer object-contain`}
              onClickCapture={() => setToggle(!toggle)}
            />
          </div>
          <div
            className={`transition-opacity duration-500 ${toggle ? "opacity-0" : "opacity-100"} black-gradient absolute right-0 top-20 z-10 mx-4 my-2 min-w-36 rounded-xl p-6 ${toggle ? "hidden" : ""}`}
          >
            <ul
              className={
                "flex list-none flex-col items-start justify-end gap-4"
              }
            >
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${active === link.id ? "text-white" : "text-secondary"} cursor-pointer font-[Poppins] text-base font-medium`}
                  onClickCapture={() => {
                    setToggle(!toggle);
                    setActive(link.id);
                  }}
                >
                  <a href={`#${link.id}`}>{t(link.title)}</a>
                </li>
              ))}
              <div className={"flex flex-row justify-between gap-4"}>
                <button
                  onClick={() => {
                    void handleLanguageChange(languages.portuguese);
                  }}
                >
                  <Image
                    src={brasil}
                    alt={t("country_img")}
                    width={36}
                    height={36}
                    className={countryImgStyleClass(languages.portuguese.code)}
                    title={t("change_language")}
                  />
                </button>
                <button
                  onClick={() => {
                    void handleLanguageChange(languages.english);
                  }}
                >
                  <Image
                    src={usa}
                    alt={t("country_img")}
                    width={36}
                    height={36}
                    className={countryImgStyleClass(languages.english.code)}
                    title={t("change_language")}
                  />
                </button>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
