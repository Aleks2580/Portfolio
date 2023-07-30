import { useTranslation } from "react-i18next";
import { jetSearch, rms, emarket, cocktails, omnifood, dmk } from "../assets";

export const useWorks = () => {
  const { t } = useTranslation();

  const projects = [
    {
      name: "Jet Search",
      description: `${t("projects.jetsearch")}`,
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "antdesign",
          color: "pink-text-gradient",
        },
      ],
      image: jetSearch,
    },
    {
      name: "DMK official website",
      description: `${t("projects.dmk")}`,
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "motion",
          color: "green-text-gradient",
        },
        {
          name: "antdesign",
          color: "pink-text-gradient",
        },
      ],
      image: dmk,
    },
    {
      name: "RMS",
      description: `${t("projects.rms")}`,
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "postgreSQL",
          color: "green-text-gradient",
        },
        {
          name: "antdesign",
          color: "pink-text-gradient",
        },
        {
          name: "nodejs",
          color: "blue-text-gradient",
        },
      ],
      image: rms,
      source_code_link:
        "https://github.com/Aleks2580/restaurant-management-software",
    },
    {
      name: "Emarket",
      description: `${t("projects.emarket")}`,
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "nodejs",
          color: "green-text-gradient",
        },
        {
          name: "postgreSQL",
          color: "pink-text-gradient",
        },
      ],
      image: emarket,
      source_code_link: "https://github.com/Aleks2580/E-commerce-website",
    },
    {
      name: "Cocktails & Dreams",
      description: `${t("projects.cocktails")}`,
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "nodejs",
          color: "green-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: cocktails,
      source_code_link: "https://github.com/Aleks2580/Cocktails-dreams",
    },
    {
      name: "Food Subscription",
      description: `${t("projects.food")}`,
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "html",
          color: "pink-text-gradient",
        },
      ],
      image: omnifood,
      source_code_link: "https://github.com/Aleks2580/Food-subscription",
    },
  ];
  return projects;
};
