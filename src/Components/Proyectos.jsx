import React from 'react'
import '../Components/Proyectos.scss'


const Proyectos = (props) => {
    return (
        <div className="container">
            <div className="proyectos">
                <h1><span class="proyectos__pro">Pro</span>yectos</h1>
                <hr />
            </div>
            <div className="proyectos__cards">
                <div className="proyectos__card1">
                    <img src={props.foto} alt="" />
                    <p>{props.parrafo}</p>
                    <div className="proyectos__iconos">
                        <img src={props.icon}alt="" />
                        <img src={props.icon} alt="" />
                        <img src={props.icon} alt="" />
                        <img src={props.icon} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Proyectos
