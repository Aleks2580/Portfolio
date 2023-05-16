import { useTranslation } from "react-i18next";
import { assistant, frontend } from "../assets";

export const useExperiences = () => {
  const { t } = useTranslation();

  const experiences = [
    {
      title: "Frontend Developer",
      company_name: "Freelance",
      icon: frontend,
      iconBg: "#aaa6c3",

      date: "Oct 2021 - April 2021",
      points: [
        "Built interactive web applications, emphasizing user engagement and functionality.",
        "Designed and implemented user experiences, aligning interactivity and data structures with business requirements.",
        "Utilized a diverse technical stack, including HTML, CSS, SASS, Bootstrap, Material UI, Ant Design, JavaScript, React, Redux, Tailwind, Three.js, Node.js, and PostgreSQL.",
        "Ensured cross-browser compatibility and responsive design, providing seamless user experiences across all platforms.",
      ],
    },
    {
      title: "Assistant Manager",
      company_name: "Golden Vault Financial Consulting Co., Ltd, Shanghai",
      icon: assistant,
      iconBg: "#aaa6c3",
      date: "Aug 2018 - Sep 2021",
      points: [
        "Communicated with foreign companies for consultancy in business management and entering the Chinese market.",
        "Was responsible for consulting support to Russian companies with business in China.",
        "Efficiently communicated with website engineers, building the English and Russian websites in order to increase internet traffic.",
      ],
    },
  ];

  return experiences;
};
