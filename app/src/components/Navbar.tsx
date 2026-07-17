"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { styles } from "../styles";
import { languages, navLinks } from "../constants";
import { brasil, close, logo, menu, usa } from "../assets";
import { useTranslation } from "react-i18next";
import {
  DEFAULT_LOCALE,
  isLocale,
  Locale,
  localizedPath,
} from "../constants/seo";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const router = useRouter();
  const pathname = usePathname();
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(true);

  const pathSegments = pathname.split("/").filter(Boolean);
  const localeSegment = pathSegments[0];
  const currentLocale: Locale = isLocale(localeSegment)
    ? localeSegment
    : DEFAULT_LOCALE;
  const pathWithoutLocale =
    pathSegments.length > 1 ? `/${pathSegments.slice(1).join("/")}` : "";
  const isHome = pathWithoutLocale === "";

  const handleLanguageChange = (language: {
    nativeName: string;
    code: string;
  }) => {
    if (!isLocale(language.code)) {
      return;
    }
    const nextPath = localizedPath(language.code, pathWithoutLocale || "/");
    void i18n.changeLanguage(language.code);
    router.replace(nextPath);
  };

  const countryImgStyleClass = (language: string) =>
    `box-border size-9 cursor-pointer object-contain ${
      currentLocale === language || i18n.resolvedLanguage === language
        ? "rounded-full border-2 border-white"
        : ""
    }`;

  const homeHref = localizedPath(currentLocale);
  const blogHref = localizedPath(currentLocale, "/blog");

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
          href={homeHref}
          className={
            "flex min-w-0 max-w-[calc(100%-2.75rem)] items-center gap-2 sm:max-w-none"
          }
          onClick={() => {
            setActive("");
            if (isHome) {
              window.scrollTo(0, 0);
            }
          }}
        >
          <Image
            src={logo}
            alt={t("hero_title")}
            width={36}
            height={36}
            priority
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

        <ul className={"hidden list-none flex-row items-center gap-10 sm:flex"}>
          {isHome
            ? navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${active === link.id ? "text-white" : "text-secondary"} cursor-pointer text-lg font-medium hover:text-white`}
                  onClickCapture={() => setActive(link.id)}
                >
                  <a href={`#${link.id}`}>{t(link.title)}</a>
                </li>
              ))
            : null}
          <li
            className={`${active === "blog" ? "text-white" : "text-secondary"} cursor-pointer text-lg font-medium hover:text-white`}
          >
            <Link href={blogHref} onClick={() => setActive("blog")}>
              {t("blog")}
            </Link>
          </li>

          <button
            type="button"
            onClick={() => {
              handleLanguageChange(languages.portuguese);
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
            type="button"
            onClick={() => {
              handleLanguageChange(languages.english);
            }}
          >
            <Image
              src={usa}
              alt={t("country_img_en")}
              width={36}
              height={36}
              className={countryImgStyleClass(languages.english.code)}
              title={t("change_language")}
            />
          </button>
        </ul>

        <div className={"flex shrink-0 items-center justify-end sm:hidden"}>
          <div className="relative size-7">
            <Image
              src={menu}
              alt={t("menu_open")}
              width={28}
              height={28}
              className={`absolute size-7 transition-opacity duration-500 ${toggle ? "opacity-100" : "opacity-0"} cursor-pointer object-contain`}
              onClickCapture={() => setToggle(!toggle)}
            />
            <Image
              src={close}
              alt={t("menu_close")}
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
              {isHome
                ? navLinks.map((link) => (
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
                  ))
                : null}
              <li
                className={`${active === "blog" ? "text-white" : "text-secondary"} cursor-pointer font-[Poppins] text-base font-medium`}
              >
                <Link
                  href={blogHref}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive("blog");
                  }}
                >
                  {t("blog")}
                </Link>
              </li>
              <div className={"flex flex-row justify-between gap-4"}>
                <button
                  type="button"
                  onClick={() => {
                    handleLanguageChange(languages.portuguese);
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
                  type="button"
                  onClick={() => {
                    handleLanguageChange(languages.english);
                  }}
                >
                  <Image
                    src={usa}
                    alt={t("country_img_en")}
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
