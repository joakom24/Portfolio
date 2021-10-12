import React from "react";
import { NavLink } from "react-router-dom";
import "../Styles/Navbar.css";
import bandera from "../img/bandera.png";
import logo from "../img/logo.png";
const Navbar = () => {
  return (
    <div className="header">
      <ul className="nav-list">
        <li className="nav-item">
          <NavLink to="/home" exact>
            <img src={logo} alt="" />
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact to="/">
            Inicio
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact to="/sobremi">
            Sobre mí
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact to="/proyectos">
            Proyectos
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact to="/habilidades">
            Habilidades
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact to="/contacto">
            Contacto
          </NavLink>
        </li>
        <li className="nav-item bandera">
          <NavLink exact to="/english">
            <img src={bandera} alt="lenguaje-ingles" />
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
