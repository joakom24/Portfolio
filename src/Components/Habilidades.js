import React from "react";
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
import Php from "../img/PHP.png";
import Laravel from "../img/laravel.png";
import AdobeXD from "../img/adobe.png";
import VS from "../img/vs.png";
import Terminal from "../img/terminal.png";
const Habilidades = () => {
  return (
    <div class="container">
      <div className="habilidades-title">
        <h1>
          Habi<span className="lidades">lidades</span>
        </h1>
      </div>
      <div className="habilidades">
        <Habilidad img={Html} />
        <Habilidad img={Css} />
        <Habilidad img={Js} />
        <Habilidad img={Reactlogo} />
        <Habilidad img={Firebase} />
        <Habilidad img={Node} />
        <Habilidad img={Boots} />
        <Habilidad img={Python} />
        <Habilidad img={Mysql} />
        <Habilidad img={Express} />
        <Habilidad img={Mongo} />
        <Habilidad img={Npm} />
        <Habilidad img={Git} />
        <Habilidad img={Github} />
        <Habilidad img={Php} />
        <Habilidad img={Laravel} />
        <Habilidad img={AdobeXD} />
        <Habilidad img={VS} />
        <Habilidad img={Terminal} />
      </div>
    </div>
  );
};

export default Habilidades;
