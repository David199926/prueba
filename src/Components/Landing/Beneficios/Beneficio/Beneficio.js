import React from 'react'
// Styles
import './Beneficio.scss'

 const Beneficio = ({title, img}) => {
    return (
        <div className="beneficio-boddy">
            <img src={img} alt={`${title}-img`} />
            <span className="beneficio-title">{title}</span>
        </div>
    )
}

export default Beneficio;