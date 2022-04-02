import React from "react";
import { motion } from "framer-motion";
import "../Styles/Habilidades.css";
import Habilidad from "../Components/Habilidad";
import Html from "../img/html2.png";
import Css from "../img/css2.png";
import Js from "../img/js2.png";
import Reactlogo from "../img/react2.png";
import Firebase from "../img/firebase2.png";
import Node from "../img/node2.png";
import Boots from "../img/boot2.png";
import Python from "../img/python2.png";
import Mysql from "../img/mysql2.png";
import Express from "../img/express2.png";
import Mongo from "../img/mongo2.png";
import Npm from "../img/npm.png";
import Git from "../img/git.png";
import Github from "../img/github.png";
import AdobeXD from "../img/adobe.png";
import VS from "../img/vs.png";
import Terminal from "../img/terminal.png";
import { useTranslation } from "react-i18next";
import "./Responsive/Habilidades.css";
const Habilidades = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="container"
    >
      <div className="habilidades-title">
        <h1>
          {t("habilidad.titulo")}
          <span className="lidades">{t("habilidad.titulo2")}</span>
        </h1>
      </div>
      <div className="habilidades">
        <div className="front">
          <h3>Front-end</h3>
          <div className="front-img">
            <Habilidad img={Html} />
            <Habilidad img={Css} />
            <Habilidad img={Js} />
            <Habilidad img={Reactlogo} />
            <Habilidad img={Boots} />
          </div>
        </div>
        <div className="back">
          <h3>Back-end</h3>
          <div className="back-img">
            <Habilidad img={Node} />
            <Habilidad img={Express} />
            <Habilidad img={Python} />
          </div>
        </div>
        <div className="base">
          <h3>{t("habilidad.titulo3")}</h3>
          <div className="base-img">
            <Habilidad img={Mongo} />
            <Habilidad img={Firebase} />
            <Habilidad img={Mysql} />
          </div>
        </div>
        <div className="otros">
          <h3>{t("habilidad.titulo4")}</h3>
          <div className="otros-img">
            <Habilidad img={Npm} />
            <Habilidad img={Git} />
            <Habilidad img={Github} />
            <Habilidad img={AdobeXD} />
            <Habilidad img={VS} />
            <Habilidad img={Terminal} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Habilidades;
