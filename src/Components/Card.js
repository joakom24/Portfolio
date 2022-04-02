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
        <img src={props.lenguaje3} />
        <img src={props.lenguaje4} />
      </div>
      <div className="botones">
        <Link to={{ pathname: props.to }} target="_blank">
          <button>{props.link}</button>
        </Link>
        <Link to={{ pathname: props.git }} target="_blank">
          <button>{props.github}</button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
