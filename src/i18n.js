import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./languages/english/en.json";
import ruTranslation from "./languages/russian/ru.json";
import cnTranslation from "./languages/chinese/cn.json";

const lng = localStorage.getItem("language") || "EN"; // Default language

i18n.use(initReactI18next).init({
  resources: {
    EN: {
      translation: enTranslation,
    },
    RU: {
      translation: ruTranslation,
    },
    CN: {
      translation: cnTranslation,
    },
  },
  lng: lng,
  fallbackLng: lng,
  interpolation: {
    escapeValue: false,
  },
  react: {
    bindI18n: "languageChanged",
    useSuspense: false,
  },
});

export default i18n;
