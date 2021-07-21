import React from 'react'
//Styles
import './Inicio.scss';
// Resources
import world from '../../../Resources/Imagen_AI.png';
import company from '../../../Resources/CompanyName.png';
import product from '../../../Resources/team.png';

const Inicio = () => {
    return (
        <div id="inicio">
            <img src={world} alt="principal" className="background" />
            <div className="main-title text-block">
                <span>Bienvenido a tu</span>
                <span><strong>Entrevista Técnica</strong> en</span>
                <img src={company} alt="company name" className="company-name" />
            </div>
            <Banner />
        </div>
    )
}

// componente de banner
const Banner = () => {
    return (
        <div id="banner">
            <div id="content">
                <img alt="product" src={product} />
                <div className="text-block">
                    <span>Trabajamos para</span>
                    <span><strong>Convertir ideas</strong> en</span>
                    <span><strong>Productos.</strong></span>
                </div>
            </div>
        </div>
    )
}

export default Inicio;
