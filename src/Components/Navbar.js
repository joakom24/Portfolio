import React from "react";
import { NavLink } from "react-router-dom";
import "../Styles/Navbar.css";
import bandera from "../img/bandera.png";
import logo from "../img/logo.png";
const Navbar = () => {
  return (
    <div class="header">
      <ul className="nav-list">
        <li className="nav-item">
          <NavLink to="/home" exact>
            <img src={logo} alt="" />
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/" exact class="active">
            Inicio
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/sobremi" exact>
            Sobre mí
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/proyectos" exact>
            Proyectos
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/habilidades" exact>
            Habilidades
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contacto" exact>
            Contacto
          </NavLink>
        </li>
        <li className="nav-item bandera">
          <NavLink to="/english" exact>
            <img src={bandera} alt="" />
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
