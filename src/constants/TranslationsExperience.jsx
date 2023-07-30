import { useTranslation } from "react-i18next";
import { assistant, frontend } from "../assets";

export const useExperiences = () => {
  const { t } = useTranslation();

  const experiences = [
    {
      title: `${t("experience.title3")}`,
      company_name: `${t("experience.company_name3")}`,
      icon: assistant,
      iconBg: "#aaa6c3",

      date: `${t("experience.date3")}`,
      points: [
        `${t("experience.point8")}`,
        `${t("experience.point9")}`,
        `${t("experience.point10")}`,
        `${t("experience.point11")}`,
        `${t("experience.point12")}`,
      ],
    },
    {
      title: `${t("experience.title1")}`,
      company_name: `${t("experience.company_name1")}`,
      icon: frontend,
      iconBg: "#aaa6c3",

      date: `${t("experience.date1")}`,
      points: [
        `${t("experience.point1")}`,
        `${t("experience.point2")}`,
        `${t("experience.point3")}`,
        `${t("experience.point4")}`,
      ],
    },
    {
      title: `${t("experience.title2")}`,
      company_name: `${t("experience.company_name2")}`,
      icon: assistant,
      iconBg: "#aaa6c3",
      date: `${t("experience.date2")}`,
      points: [
        `${t("experience.point5")}`,
        `${t("experience.point6")}`,
        `${t("experience.point7")}`,
      ],
    },
  ];

  return experiences;
};
