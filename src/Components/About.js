import React from "react";
import "../Styles/About.css";
import { Link } from "react-router-dom";
import monalisa from "../img/monalisa.png";
const About = () => {
  return (
    <div class="container-2">
      <div className="sobre-mi">
        <div className="sobre-mi-foto">
          <img src={monalisa} alt="" />
        </div>
        <div className="sobre-mi-texto">
          <h2>
            Sobre <span class="mi">mí</span>
          </h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem
          </p>
          <Link
            to={{ pathname: "https://www.linkedin.com/in/joaquínmussi/" }}
            target="_blank"
            class="btn-link"
          >
            Ir a Linkedin
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
