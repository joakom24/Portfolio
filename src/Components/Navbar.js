import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../Styles/Navbar.css";
import logo from "../img/logo.png";
import "./Responsive/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [t, i18n] = useTranslation("global");
  const [stateIdioma, setStateIdioma] = useState(true);
  const click = (e) => {
    e.preventDefault();
    setStateIdioma(!stateIdioma);
    stateIdioma ? i18n.changeLanguage("en") : i18n.changeLanguage("es");
  };
  const style = (e) => {
    e.preventDefault();
    setOpen(false);
  };
  return (
    <div className="header">
      <ul>
        <li className="nav-logo">
          <NavLink to="/home" exact>
            <img src={logo} alt="logo" class="Logo" />
          </NavLink>
        </li>
      </ul>
      <ul
        className="nav-list"
        style={open ? { left: "0px" } : { left: "-100%" }}
      >
        <li className="nav-item" onClick={style}>
          <NavLink exact to="/">
            {t("navbar.Inicio")}
          </NavLink>
        </li>
        <li className="nav-item" onClick={style}>
          <NavLink exact to="/sobremi">
            {t("navbar.Sobre-mí")}
          </NavLink>
        </li>
        <li className="nav-item" onClick={style}>
          <NavLink exact to="/proyectos">
            {t("navbar.Proyectos")}
          </NavLink>
        </li>
        <li className="nav-item" onClick={style}>
          <NavLink exact to="/habilidades">
            {t("navbar.Habilidades")}
          </NavLink>
        </li>
        <li className="nav-item" onClick={style}>
          <NavLink exact to="/contacto">
            {t("navbar.Contacto")}
          </NavLink>
        </li>
        <li className="nav-item bandera" onClick={style}>
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
      <div className="bars-cont">
        <FontAwesomeIcon
          icon={faBars}
          class="bars"
          onClick={() => setOpen(!open)}
        />
      </div>
    </div>
  );
};

export default Navbar;
