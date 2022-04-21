import React from "react";
import { motion } from "framer-motion";
import Html from "../img/Card/html-5.png";
import Css from "../img/Card/css-3.png";
import Js from "../img/Card/js.png";
import ds from "../img/ds.png";
import Reactlogo from "../img/react2.png";
import mlogo from "../img/mlogo.png";
import chakra from "../img/Card/chakra.png";
import Node from "../img/node2.png";
import Express from "../img/express.png";
import heroku from "../img/heroku.png";
import Bootstrap from "../img/Card/boot.png";
import Card from "../Components/Card.js";
import "../Styles/Proyectos.css";
import "./Responsive/Proyectos.css";
import { useTranslation } from "react-i18next";
const Proyectos = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="container"
    >
      <div className="proyectos-title">
        <h1>
          <span className="pro">{t("proyectos.titulo1")}</span>
          {t("proyectos.titulo2")}
        </h1>
      </div>
      <div className="proyectos">
        <div className="proyectos-cards">
          <div className="card1">
            <Card
              description={t("proyectos.descripcion2")}
              lenguaje1={Html}
              lenguaje2={Css}
              lenguaje3={Js}
              to={"https://monolandia-7816e.web.app/"}
              lenguaje4={Bootstrap}
              link={t("proyectos.pagina")}
              github={t("proyectos.git")}
              git={"https://github.com/joakom24/MonoLandia"}
            />
          </div>
        </div>
        <div className="proyectos-cards">
          <div className="card2">
            <Card
              description={t("proyectos.descripcion3")}
              lenguaje1={Reactlogo}
              lenguaje2={mlogo}
              git={"https://github.com/joakom24/ClimaReactAPI"}
              to={"https://reactappweather-7c1cb.web.app/"}
              link={t("proyectos.pagina")}
              github={t("proyectos.git")}
            />
          </div>
        </div>
        <div className="proyectos-cards">
          <div className="card3">
            <Card
              description={t("proyectos.descripcion4")}
              lenguaje1={Reactlogo}
              lenguaje2={chakra}
              git={"https://github.com/joakom24/Petinder"}
              to={"https://petinder-75b0e.web.app"}
              link={t("proyectos.pagina")}
              github={t("proyectos.git")}
            />
          </div>
        </div>
        <div className="proyectos-cards">
          <div className="card4">
            <Card
              description={t("proyectos.descripcion5")}
              lenguaje1={Node}
              lenguaje2={Express}
              lenguaje3={ds}
              lenguaje4={heroku}
              git={"https://github.com/joakom24/LeitoMessiBot"}
              github={t("proyectos.git")}
              link={t("proyectos.pagina")}
              to={"https://github.com/joakom24/LeitoMessiBot"}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Proyectos;
