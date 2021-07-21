import React from 'react';
// Styles scss
import './Contact.scss';
// Resources
import inst from '../../../Resources/Icons/Instagram.svg';
import logo from '../../../Resources/LogoNav.png';
// Material ui
import { Button } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

// Styles
const useStyles = makeStyles((theme) => ({
    button: {
        borderRadius: "50px",
        height: "3.2rem",
        width: "13rem",
        fontSize: "1.125rem",
        fontWeight: "500",
    },

}))

const Contact = () => {
    // Style classes
    const classes = useStyles();

    const Links = () => (
        <div className="contact-links">
            <a href="https://www.instagram.com/waconomads/" target="_blank" rel="noreferrer">
                <img src={inst} alt="instagram" />
            </a>
            <Button
                variant="contained"
                className={classes.button}
                onClick={() => window.open('https://wacoservices.com', '_blank')}
            >
                Conocer más
            </Button>
        </div>
    )

    return (
        <div>
            <div className="contact-container">
                <div className="text-block">
                    <div>
                        <span>Gracias por&nbsp;</span><span><strong>completar el ejercicio</strong></span>
                    </div>
                    <div>
                        <span>Te invitamos a ver más información</span>
                    </div>
                </div>
                <Links />
            </div>
            <footer>
                <img src={logo} alt="logo" />
            </footer>
        </div>
    )
}

export default Contact;
