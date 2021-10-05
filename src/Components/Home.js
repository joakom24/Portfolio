import React from "react";
import Caja from "../img/caja.png";
import { Link } from "react-router-dom";
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
          <Link to="/sobremi" exact className="info">
            Más Información
          </Link>
        </div>
        <img src={Caja} alt="" />
      </div>
    </div>
  );
};

export default Home;
