import React from 'react';
// Styles
import './Beneficios.scss';
// My components
import Beneficio from './Beneficio/Beneficio';
// Resources
import clock from '../../../Resources/Clock.png';
import home from '../../../Resources/Home.png';
import workshop from '../../../Resources/Workshop.png';
import snacks from '../../../Resources/Snacks.png';
import remote from '../../../Resources/Remote.png';
import tech from '../../../Resources/Tech.png';

// Material ui carousel
import Carousel from 'react-elastic-carousel'

const Beneficios = () => {
    return (
        <div id="beneficios">
            <div className="beneficios-title">
                <span>Entre los <strong className="beneficios">beneficios</strong> que</span>
                <span><strong>ofrecemos</strong> se encuentran</span>
            </div>
            <Carrusel />
        </div>
    )
}

const beneficios = [
    {
        title: "Flexibilidad horaria",
        img: clock
    },
    {
        title: "Home office",
        img: home
    },
    {
        title: "Capacitaciones y workshops",
        img: workshop
    },
    {
        title: "Snacks, frutas y bebidas gratis",
        img: snacks
    },
    {
        title: "Semana Remota",
        img: remote
    },
    {
        title: "Trabajar en últimas tecnologías",
        img: tech
    },
]

const Carrusel = () => {

    const breakPoints = [
        { width: 1, itemsToShow: 1, itemsToScroll: 1 }, // Small
        { width: 576, itemsToShow: 2, itemsToScroll: 2 }, // Medium
        { width: 768, itemsToShow: 4, itemsToScroll: 2 }, // Large
    ]

    return (
        <div className="carousel-container" >
            <Carousel
                breakPoints={breakPoints}
            >
                {beneficios.map((item, index) => (
                    <Beneficio title={item.title} img={item.img} key={`beneficio-${index}`} />
                ))}
            </Carousel>
        </div >
    )
}

export default Beneficios;
