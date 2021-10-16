import React from "react";
import "../Styles/About.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Pdf from "../docs/Pdf.pdf";
import { useTranslation } from "react-i18next";
const About = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="container-2"
    >
      <div className="sobre-mi">
        <div className="sobre-mi-foto"></div>
        <div className="sobre-mi-texto">
          <h2>
            {t("about.Sobre")} <span className="mi">{t("about.mí")}</span>
          </h2>
          <p>{t("about.p")}</p>
          <Link
            to={{ pathname: "https://www.linkedin.com/in/joaquínmussi/" }}
            target="_blank"
            className="btn-link"
          >
            {t("about.linkedin")}
          </Link>
          <Link to={Pdf} target="_blank" className="btn-link-2">
            {t("about.cv")} CV
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
