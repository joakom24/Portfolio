import React from "react";
import "../Styles/Footer.css";
import Github from "../img/github.svg";
import Linkedin from "../img/linkedin.svg";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="Container">
      <div className="foot">
        <h5 className="h5-footer">"Lo que no sé, lo aprendo."</h5>
        <div className="botones-foot">
          <Link
            to={{ pathname: "https://github.com/joakom24" }}
            target="_blank"
          >
            <img src={Github} alt="Github" />
          </Link>
          <Link
            to={{ pathname: "https://www.linkedin.com/in/joaquínmussi/" }}
            target="_blank"
          >
            <img src={Linkedin} alt="Linkedin" />
          </Link>
        </div>
        <p>©2021 Joaquín Mussi. Hecho con ReactJs.</p>
      </div>
    </div>
  );
};

export default Footer;
