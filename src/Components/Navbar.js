import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../Styles/Navbar.css";
import logo from "../img/logo.png";
import { useTranslation } from "react-i18next";
const Navbar = () => {
  const [t, i18n] = useTranslation("global");
  const [stateIdioma, setStateIdioma] = useState(true);
  const click = (e) => {
    e.preventDefault();
    setStateIdioma(!stateIdioma);
    stateIdioma ? i18n.changeLanguage("en") : i18n.changeLanguage("es");
  };

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
            {t("navbar.Inicio")}
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact to="/sobremi">
            {t("navbar.Sobre-mí")}
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact to="/proyectos">
            {t("navbar.Proyectos")}
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact to="/habilidades">
            {t("navbar.Habilidades")}
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact to="/contacto">
            {t("navbar.Contacto")}
          </NavLink>
        </li>
        <li className="nav-item bandera">
          <NavLink exact to="/english">
            <img
              src={
                stateIdioma
                  ? require("../img/bandera.png")
                  : require("../img/bandera2.png")
              }
              alt="lenguaje-ingles"
              onClick={click}
              id="img-idioma"
            />
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
