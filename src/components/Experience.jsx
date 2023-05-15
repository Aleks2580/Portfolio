import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { useContext } from "react";
import { ThemeContext } from "../App";
import { useTranslation } from "react-i18next";

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#1d1836", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div>
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
    </div>
  </VerticalTimelineElement>
);

const Experience = () => {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();
  return (
    <>
      <motion.div variants={textVariant()}>
        <p
          className={`${
            theme === "dark"
              ? `${styles.sectionSubText}`
              : `${styles.sectionSubTextLightTheme}`
          }}`}
        >
          {t("work.introduction")}
        </p>
        <h2
          className={`${
            theme === "dark"
              ? `${styles.sectionHeadText}`
              : `${styles.sectionHeadTextLightTheme}`
          }}`}
        >
          {t("work.overview")}
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => {
            return <ExperienceCard key={index} experience={experience} />;
          })}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
