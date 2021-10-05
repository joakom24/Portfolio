import React from "react";
import "../Styles/Proyectos.css";
const Card = (props) => {
  return (
    <div class="card-complete">
      <img src={props.img} alt="" />
      <div className="description">
        <p>{props.description}</p>
      </div>
      <div className="lenguajes">
        <img src={props.lenguaje1} alt="" />
        <img src={props.lenguaje2} alt="" />
        <img src={props.lenguaje3} alt="" />
        <img src={props.lenguaje4} alt="" />
      </div>
      <div className="botones">
        <button>{props.link}</button>
        <button>{props.github}</button>
      </div>
    </div>
  );
};

export default Card;
