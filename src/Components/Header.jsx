import React from 'react'
import '../Components/Header.scss'
import logo from '../img/-.png'
import bandera from '../img/bandera.png'
import foto from '../img/head.png'
import flecha from '../img/Flecha.png'
const Header = () =>  {
    return(
        <div className="header">
            <div class="container">
                <div className="header__navbar">
                    <ul className="header__navbar-nav">
                        <li className="header__nav-item">
                            <a className="header__navbar-brand" href={"index.html"}><img src={logo}/></a>
                        </li>
                        <li class="header__nav-item">
                        <a className="header__nav-link header__active" href={"index.html"}>Inicio</a>
                        </li>
                        <li class="header__nav-item">
                        <a className="header__nav-link">Sobre Mí</a>
                        </li>
                        <li class="header__nav-item">
                        <a className="header__nav-link">Proyectos</a>
                        </li>
                        <li class="header__nav-item">
                        <a className="header__nav-link">Habilidades</a>
                        </li>
                        <li class="header__nav-item">
                        <a className="header__nav-link">Contacto</a>
                        </li>
                        <li class="header__nav-item">
                        <a className="header__nav-link"><img src={bandera} className="header__bandera"/></a>
                        </li>
            
                    </ul>
                </div>
                <div className="header__principal-contenedor">
                    <div className="header__principal">
                        <h1><span class="header__h1">&lt;h1&gt;</span>Hola, <br /> soy Joaquín Mussi<span class="header__h1">&lt;/h1&gt;</span></h1>
                        <hr  class="header__hr"/>
                        <h4>FullStack <span class="header__developer">Developer</span></h4>
                        <a className="header__info">Más información</a>
                        <div className="header__flecha">
                            <a href=""><p className="header__deslizar">
                                Deslizar
                            </p>
                            <img src={flecha} alt="" /></a>
                        </div>
                    </div>
                    <div className="header__img-principal">
                        <img src={foto} alt="" />
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Header;