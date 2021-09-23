import React from "react";
import Caja from "../img/caja.png";
import flecha from "../img/Flecha.png";
import "../Styles/Home.css";
const Home = () => {
  return (
    <div className="container">
      <div className="first">
        <div className="title-container">
          <h1 className="title">
            <span className="h1">&lt;h1&gt;</span>Hola, <br />
            soy Joaquín Mussi
            <span className="h1">&lt;/h1&gt;</span>
          </h1>
          <h5>
            <span className="fullstack">FullStack</span> Developer
          </h5>
          <a href="#" className="info">
            Más Información
          </a>
        </div>
        <img src={Caja} alt="" />
      </div>
      <div className="flecha">
        <a href="">
          <p>Deslizar</p>
        </a>
        <a href="">
          <img src={flecha} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Home;
