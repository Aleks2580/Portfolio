import React, { useState, useContext } from "react";
import { BrowserRouter, Link } from "react-router-dom";

import { styles } from "../styles";
import { menu, close } from "../assets";
import { ThemeContext } from "../App";
import { useTranslation } from "react-i18next";
import { useNavLinks } from "../constants/Translations";

const Navbar = () => {
  const { t } = useTranslation();
  const navLinks = useNavLinks();
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const { theme } = useContext(ThemeContext);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        theme === "dark" ? "bg-primary" : "bg-primary-white"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl  mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          {/* <img
            src={logo1}
            alt={logo1}
            className={`
            ${
              theme === "dark" ? "filter brightness-0 invert" : "text-black-100"
            }
               w-10 h-10 object-contain
              `}
          /> */}
          <p
            className={`${
              theme === "dark" ? "text-white" : "text-black-100"
            } text-[18px] font-bold cursor-pointer flex`}
          >
            {t("navbar.name")} &nbsp;
            <span className="sm:block hidden"> | {t("navbar.role")}</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title
                  ? `${theme === "dark" ? "text-white" : "text-black"}`
                  : `${
                      theme === "dark"
                        ? "text-secondary"
                        : "text-secondary-light-theme"
                    }`
              } ${theme === "dark" ? "hover:text-white" : "hover:text-black"}
                 text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt={menu}
            className={`${
              theme === "light"
                ? "w-[28px] h-[28px] object-contain cursor-pointer filter brightness-0"
                : "w-[28px] h-[28px] object-contain cursor-pointer"
            }`}
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setActive(link.title);
                    setToggle(!toggle);
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
