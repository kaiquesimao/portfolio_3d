import { useState } from "react";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(true);
  return (
    <nav
      className={`${styles.paddingX} fixed top-0 z-20 flex w-full items-center bg-primary py-5`}
    >
      <div
        className={"mx-auto flex w-full max-w-7xl items-center justify-between"}
      >
        <Link
          to={"/"}
          className={"flex items-center gap-2"}
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt={"logo"} className={"size-9 object-contain"} />
          <p className={"flex cursor-pointer text-lg font-bold text-white"}>
            Kaique | Portfolio
          </p>
        </Link>
        <ul className={"hidden list-none flex-row gap-10 sm:flex"}>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } cursor-pointer text-lg font-medium hover:text-white`}
              onClickCapture={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className={"flex flex-1 items-center justify-end sm:hidden"}>
          <img
            src={toggle ? menu : close}
            alt={"menu"}
            className={"size-7 cursor-pointer object-contain"}
            onClickCapture={() => setToggle(!toggle)}
          />
          <div
            className={`${
              toggle ? "hidden" : "flex"
            } black-gradient absolute right-0 top-20 z-10 mx-4 my-2 min-w-36 rounded-xl p-6`}
          >
            <ul
              className={
                "flex list-none flex-col items-start justify-end gap-4"
              }
            >
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  /* eslint-disable-next-line tailwindcss/no-custom-classname */
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } font-poppins cursor-pointer text-base font-medium`}
                  onClickCapture={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
