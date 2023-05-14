import { useTranslation } from "react-i18next";

export const useNavLinks = () => {
  const { t } = useTranslation();

  const navLinks = [
    {
      id: "about",
      title: t("navbar.about"),
    },
    {
      id: "work",
      title: t("navbar.work"),
    },
    {
      id: "contact",
      title: t("navbar.contact"),
    },
  ];

  return navLinks;
};
