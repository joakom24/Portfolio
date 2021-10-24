import React from "react";
import "../Styles/Proyectos.css";
import { Link } from "react-router-dom";
const Card = (props) => {
  return (
    <div className="card-complete">
      <div className="description">
        <p>{props.description}</p>
      </div>
      <div className="lenguajes">
        <img src={props.lenguaje1} alt="lenguaje1" />
        <img src={props.lenguaje2} alt="lenguaje2" />
        <img src={props.lenguaje3} alt="lenguaje3" />
        <img src={props.lenguaje4} alt="lenguaje4" />
      </div>
      <div className="botones">
        <Link
          to={{ pathname: "https://www.linkedin.com/in/joaquínmussi/" }}
          target="_blank"
        >
          <button>{props.link}</button>
        </Link>
        <Link to={{ pathname: "https://github.com/joakom24" }} target="_blank">
          <button>{props.github}</button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
