import { createContext, useState } from "react";
import LanguageDropdown from "./LanguageDropdown";
import i18n from "i18next";

import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

import style from "./App.module.css";
import lightIcon from "./assets/moon.png";
import darkIcon from "./assets/day.png";

export const ThemeContext = createContext(null);

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.getItem("language") || "EN"
  );
  const changeLanguage = (language) => {
    localStorage.setItem("language", language);
    setSelectedLanguage(language);
    i18n.changeLanguage(language);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={style.icon_div}>
        <img
          onClick={toggleTheme}
          className={theme === "dark" ? style.icon_moon : style.icon_sun}
          src={theme === "dark" ? lightIcon : darkIcon}
          alt="icon-theme"
        />
      </div>

      <div className={style.language_dropdown}>
        <LanguageDropdown
          selectedLanguage={selectedLanguage}
          changeLanguage={changeLanguage}
        />
      </div>

      <div
        className={`relative z-0 ${
          theme === "dark" ? "bg-primary" : "bg-primary-white"
        }`}
      >
        <div
          className={`${
            theme === "dark" ? "bg-hero-pattern" : "bg-hero-pattern-white"
          } bg cover bg-no-repeat bg-center`}
        >
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
