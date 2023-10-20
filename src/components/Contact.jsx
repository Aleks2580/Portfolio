import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { useContext } from "react";
import { ThemeContext } from "../App";
import { useTranslation } from "react-i18next";
import { message } from "antd";

const Contact = () => {
  const formRef = useRef();
  const [form, setFrom] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();
  const [messageApi, contextHolder] = message.useMessage();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFrom({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      messageApi.open({
        type: "warning",
        content: `${t("contact.messageWarning")}`,
      });
    } else {
      setLoading(true);
      emailjs
        .send(
          "service_50sglpm",
          "template_zkyvorj",
          {
            from_name: form.name,
            to_name: "Aleksei",
            from_email: form.email,
            to_email: "dev@alekseivlasov.com",
            message: form.message,
          },
          "eWyr2JRHz8VUIt7Rh"
        )
        .then(
          () => {
            setLoading(false);
            messageApi.open({
              type: "success",
              content: `${t("contact.messageOk")}`,
            });
            setFrom({ name: "", email: "", message: "" });
          },
          (error) => {
            setLoading(false);
            console.log(error);
            messageApi.open({
              type: "error",
              content: `${t("contact.messageError")}`,
            });
          }
        );
    }
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      {contextHolder}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p
          className={`${
            theme === "dark"
              ? `${styles.sectionSubText}`
              : `${styles.sectionSubTextLightTheme}`
          }}`}
        >
          {t("contact.get")}
        </p>
        <h3 className={styles.sectionHeadText}>{t("contact.contact")}</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              {t("contact.name")}
            </span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder={t("contact.type_name")}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              {t("contact.email")}
            </span>
            <input
              type="text"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder={t("contact.type_email")}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              {t("contact.message")}
            </span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder={t("contact.type_message")}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? `${t("contact.sending")}` : `${t("contact.send")}`}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h=[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
