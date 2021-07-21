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
import next from '../../../Resources/Icons/Next.png';
import prev from '../../../Resources/Icons/Prev.png';
// Material ui carousel
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

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
        img: snacks
    },
    {
        title: "Trabajar en últimas tecnologías",
        img: snacks
    },
]

const Carrusel = () => {

    //Styles
    const activeIndicatorStyles = {
        border: "none",
        color: "transparent",
        background: "linear-gradient(to right, #8FFF73 0%, #8FFFF9 100%)",
        backgroundClip: "content-box",
        opacity: 1,
        width: "12px",
        height: "12px",
        padding: "3px"
    }
    const indicatorStyles = {
        ...activeIndicatorStyles,
        opacity: 0.2
    }

    const styles = {
        width: "80%",
        height: "20rem",
        display: "block",
        margin: "auto"
    }

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
          slidesToSlide: 2
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1
        }
    };

    return (
        <Carousel
                responsive={responsive}
                showDots={true}
                autoPlay={false}
                focusOnSelect={true}
                renderArrowsWhenDisabled={true}
                renderButtonGroupOutside={true}
                renderDotsOutside={true}
            >
                
                {beneficios.map((item, index) => (
                    <Beneficio title={item.title} img={item.img} key={`beneficio-${index}`}/>
                ))}
                
            </Carousel>
    )
}

export default Beneficios;
