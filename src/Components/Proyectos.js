import React from "react";
import { motion } from "framer-motion";
import Monos from "../img/monos.png";
import Html from "../img/Card/html-5.png";
import Css from "../img/Card/css-3.png";
import Js from "../img/Card/js.png";
import Reactlogo from "../img/react.png";
import Firebase from "../img/firebase.png";
import Node from "../img/node.png";
import Express from "../img/express.png";
import Bootstrap from "../img/Card/boot.png";
import Card from "../Components/Card.js";
import Mongo from "../img/mongo.png";
import Laravel from "../img/laravel.png";
import Php from "../img/PHP.png";
import Mysql from "../img/mysql-logo.png";
import Google from "../img/google.png";
import Speed from "../img/speed.png";
import "../Styles/Proyectos.css";
const Proyectos = () => {
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
          <span className="pro">Pro</span>yectos
        </h1>
      </div>
      <div className="proyectos">
        <div className="proyectos-cards">
          <div className="card">
            <Card
              img={Monos}
              description="Página web creada con el fin de informar sobre la vida e historia de los Monos.
              "
              lenguaje1={Html}
              lenguaje2={Css}
              lenguaje3={Js}
              lenguaje4={Bootstrap}
              link="Ir a la página"
              github="Ir al Github"
            />
          </div>
        </div>
        <div className="proyectos-cards">
          <div className="card">
            <Card
              img={Google}
              description="Página web creada con el fin de informar sobre la vida e historia de los Monos.
              "
              lenguaje1={Reactlogo}
              lenguaje2={Node}
              lenguaje3={Express}
              lenguaje4={Firebase}
              link="Ir a la página"
              github="Ir al Github"
            />
          </div>
        </div>
        <div className="proyectos-cards">
          <div className="card">
            <Card
              img={Speed}
              description="Página web creada con el fin de informar sobre la vida e historia de los Monos.
              "
              lenguaje1={Mongo}
              lenguaje2={Laravel}
              lenguaje3={Mysql}
              lenguaje4={Php}
              link="Ir a la página"
              github="Ir al Github"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Proyectos;
