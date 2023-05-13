import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { useContext } from "react";
import { ThemeContext } from "../App";

const ServiceCard = ({ index, icon, title }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className={`w-full green-pink-gradient p-[1px] rounded-[20px] ${
          theme === "dark" ? "shadow-card" : "shadow-cardLightTheme"
        }`}
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 onject-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <motion.div variants={textVariant()}>
        {/* <p className={styles.sectionSubText}>Introduction</p> */}
        <p
          className={`${
            theme === "dark"
              ? `${styles.sectionSubText}`
              : `${styles.sectionSubTextLightTheme}`
          }}`}
        >
          Introduction
        </p>
        <h2
          className={`${
            theme === "dark"
              ? `${styles.sectionHeadText}`
              : `${styles.sectionHeadTextLightTheme}`
          }}`}
        >
          Overview.
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className={`mt-4 ${
          theme === "dark" ? "text-secondary" : "text-secondary-light-theme"
        } text-[17px] max-w-3xl leading-[30px]`}
      >
        Passionate Frontend Developer specializing in React, Redux, CSS/Sass,
        and HTML. I excel at crafting user-focused software with an emphasis on
        clean design and interactivity. A strong team player, I thrive on
        unraveling complex problems. My experience extends to Node.js and
        PostgreSQL. I champion effective UI as the bridge between users and
        applications, ensuring a seamless, responsive experience through sharp
        visuals and intuitive design.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
