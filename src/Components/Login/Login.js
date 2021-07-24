import React, { useState } from 'react';
// React Router
import { Link } from 'react-router-dom';
// Styles
import './Login.scss';
// Resources
import logo from '../../Resources/CompanyName.png';
import arrow from '../../Resources/Icons/Arrow.svg';
// Material Design
import { Button } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
// My components
import MyTextField from './MyTextField';
import PasswordInput from './Password';
import ExternalAuth from './ExternalAuth/ExternalAuth';
// redux
import { useDispatch } from 'react-redux';
import { logIn as logInAction } from '../../redux/index';

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

const Login = (props) => {
    // Hooks
    const classes = useStyles();
    const dispatch = useDispatch();
    // State
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Login function
    const logIn = () => {
        dispatch(logInAction('123'));
        props.history.push('/posts');
    }

    return (
        <div className="login-page">
            {/* regresar a pagina de inicio */}
            <LandingLink />

            <div className="login-panel">
                <h1 className="login-title">Inicia <strong>Sesión</strong></h1>
                <div className="login-inputs">
                    {/* Nombre de usuario */}
                    <MyTextField
                        label="Correo"
                        fullWidth
                        variant="outlined"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    {/* Contraseña de usuario */}
                    <PasswordInput
                        error={""}
                        helperText={""}
                        password={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    {/* Contraseña de usuario */}
                    <a href="#" className="password-link">¿Olvidaste tu contraseña?</a>
                </div>
                <Button
                    variant="contained"
                    className={classes.button}
                    type="submit"
                    onClick={logIn}
                >
                    Acceder
                </Button>
                {/* Accesos de Facebook y Google */}
                <ExternalAuth />
            </div>
        </div>
    )
}

const LandingLink = () => {
    return (
        <Link
            className="landing-link"
            to="/"
        >
            <img src={arrow} alt="logo" className="arrow-link"/>
            <img src={logo} alt="logo" className="logo-link"/>
        </Link>
    )
}

export default Login;

