import React from "react";
import { motion } from "framer-motion";
import Caja from "../img/caja.png";
import { Link } from "react-router-dom";
import "../Styles/Home.css";
import "./Responsive/Home.css";
import { useTranslation } from "react-i18next";
const Home = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="container"
    >
      <div className="first">
        <div className="title-container">
          <h1 className="title">
            <span className="h1">&lt;h1&gt;</span>
            {t("home.Hola,")} <br />
            {t("home.soy-Joaquín-Mussi")}
            <span className="h1">&lt;/h1&gt;</span>
          </h1>
          <h5>
            <span className="fullstack">{t("home.Desarrollador-Web")}</span>
            {t("home.Fullstack")}
          </h5>
          <Link to="/sobremi" className="info">
            {t("home.Más-Información")}
          </Link>
        </div>
        <img src={Caja} alt="Caja-fullstack" />
      </div>
    </motion.div>
  );
};

export default Home;
