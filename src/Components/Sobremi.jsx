import React from 'react'
import monalisa from '../img/monalisa.png'
import background from '../img/Home.jpg'
import '../Components/Sobremi.scss'
const Sobremi = () => {
    return (
        <div className="sobremi">
            <div className="container">
                <div className="sobremi__foto">
                    <img src={monalisa} alt="" />
                </div>
                <div className="sobremi__texto">
                    <h1>Sobre <span class="sobremi__span2">mí</span></h1>
                    <hr />
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem </p>
                    <a href="">Ir a Linkedin</a>
                </div>
            </div>
        </div>
    )
}

export default Sobremi;
