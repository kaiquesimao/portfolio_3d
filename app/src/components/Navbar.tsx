import { useContext, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { styles } from "../styles";
import { languages, navLinks } from "../constants";
import { brasil, close, logo, menu, usa } from "../assets";
import { useTranslation } from "react-i18next";
import MobileContext from "../contexts/MobileContext.tsx";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(true);
  const isMobile = useContext(MobileContext);

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
        className={"mx-auto flex w-full max-w-7xl items-center justify-between"}
      >
        <Link
          href={"/"}
          className={"flex items-center gap-2"}
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
            className={"h-auto w-9 object-contain"}
          />
          <p className={"flex cursor-pointer text-lg font-bold text-white"}>
            {t("page_title")}
          </p>
        </Link>

        {/* desktop */}
        {!isMobile && (
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
        )}

        {/* mobile */}
        {isMobile && (
          <div className={"flex flex-1 items-center justify-end sm:hidden"}>
            <div className="relative">
              <Image
                src={menu}
                alt={"menu"}
                width={28}
                height={28}
                className={`absolute transition-opacity duration-500 ${toggle ? "opacity-100" : "opacity-0"} cursor-pointer object-contain`}
                onClickCapture={() => setToggle(!toggle)}
              />
              <Image
                src={close}
                alt={"close"}
                width={28}
                height={28}
                className={`transition-opacity duration-500 ${toggle ? "opacity-0" : "opacity-100"} cursor-pointer object-contain`}
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
                      className={countryImgStyleClass(
                        languages.portuguese.code,
                      )}
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
        )}
      </div>
    </nav>
  );
};

export default Navbar;
