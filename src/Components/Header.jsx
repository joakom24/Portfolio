import React from 'react'
import '../Components/Header.css'
const Header = () =>  {
    return(
        <header>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <a className="navbar-brand" href={'index.html'}>Joaquín <span className="mussi">Mussi</span><span className="punto">.</span></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav m-auto">
                            <li className="nav-item">
                                <a className="nav-link" href={'index.html'}>Descargar CV</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav btn">
                            <li className="nav-item">
                                <button type="button" class="btn btn-1">boton1</button>
                            </li>
                        </ul>
                        <ul className="navbar-nav btn">
                            <li className="nav-item">
                                <button type="button" class="btn btn-2">boton2</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="head pt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <span className="principal-span">Hola! Soy</span>
                            <h1 className="titulo1">Joaquín <span class="mussi">Mussi</span></h1>
                            <p className="parrafo1">Desarrollador Web FullStack JS en progreso...</p>
                        </div>
                        <div className="col-md-6">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Lionel_Messi_20180626.jpg" alt="" className="fotoperfil" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;