import React from 'react'
// Styles
import './ExternalAuth.scss';
// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebookF,
    faGoogle,
 } from '@fortawesome/free-brands-svg-icons'

const ExternalAuth = () => {
    return (
        <div className="exAuth-container">
            <button className="acces-btn facebook">
                <FontAwesomeIcon icon={faFacebookF} className="acces-icon"/>
                Ingresar con Facebook
            </button>
            <button className="acces-btn google">
                <FontAwesomeIcon icon={faGoogle} className="acces-icon"/>
                Ingresar con Google
            </button>
        </div>
    )
}

export default ExternalAuth;