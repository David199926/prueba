import React, { Component } from 'react'
// My componentes
import Nav from './Nav/Nav';
import Inicio from './Inicio/Inicio';
import Beneficios from './Beneficios/Beneficios';
import Footer from './Footer/Footer';

export default class Landing extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <Inicio/>
                {/* 
                <Beneficios/>
                <Footer />*/}
            </div>
        )
    }
}
