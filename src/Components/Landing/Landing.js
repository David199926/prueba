import React, { Component } from 'react'
// My componentes
import Nav from './Nav/Nav';
import Inicio from './Inicio/Inicio';
import Beneficios from './Beneficios/Beneficios';
import Contact from './Contact/Contact';

export default class Landing extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <Inicio/>
                <Beneficios/>
                <Contact />
            </div>
        )
    }
}
