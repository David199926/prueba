import React, { useState } from 'react';
// React Router
import { Link } from 'react-router-dom';
// Styles
import './Signin.scss';
// Resources
import logo from '../../Resources/CompanyName.png';
import arrow from '../../Resources/Icons/Arrow.svg';
// Material Design
import { Button } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
// My components
import MyTextField from '../Common/MyTextField/MyTextField';
import PasswordInput from '../Common/Password/Password';
// firebase
import { register } from '../../firebase/userAuth';

// Styles
const useStyles = makeStyles((theme) => ({
    button: {
        borderRadius: "50px",
        height: "3.2rem",
        width: "13rem",
        fontSize: "1.125rem",
        fontWeight: "500",
        marginTop: "2rem",
    },
}))

const Signin = () => {

    const [registered, setRegistered] = useState(false);
    const [signinError, setSigninError] = useState("");

    const pageContent = () => {
        return signinError !== "" ? // Hubo error
            <SigninMessage error errorMessage={signinError}/> :
            registered ? // registro exitoso
            <SigninMessage /> : // aun no se registra
            <SignInForm setRegistered={setRegistered} setSigninError={setSigninError} />
    }

    return (
        <div className="signin-page">
            {/* regresar a pagina de inicio */}
            <LandingLink />
            <div className="signin-panel">
                <h1 className="signin-title"><strong>Registrate</strong></h1>
                {pageContent()}
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
            <img src={arrow} alt="logo" className="arrow-link" />
            <img src={logo} alt="logo" className="logo-link" />
        </Link>
    )
}

// Formulario de registro
const SignInForm = ({ setRegistered, setSigninError }) => {
    // Hooks
    const classes = useStyles();
    // State
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Siginn function
    const signIn = () => {
        register(email, password)
        .then(() => {
            setRegistered(true)
        })
        .catch((err) => {
            setSigninError(err.message)
        })
    }

    return (
        <div className="signin-inputs">
            {/* Nombre de usuario */}
            <MyTextField
                label="Correo"
                fullWidth
                variant="outlined"
                value={email}
                onChange={e => setEmail(e.target.value)}
                type="email"
            />
            {/* Contraseña de usuario */}
            <PasswordInput
                error={""}
                helperText={""}
                password={password}
                onChange={e => setPassword(e.target.value)}
            />
            {/* Link de login */}
            <Link className="form-link" to="/login">¿Ya tienes cuenta? inicia sesión aquí</Link>
            <Button
                variant="contained"
                className={classes.button}
                type="submit"
                onClick={signIn}
            >
                Crear cuenta
            </Button>
        </div>
    )
}

const SigninMessage = ({ error, errorMessage }) => (
    
    <div className="signin-message">
        {/* titulo de error */}
        {
            !error ?
            <h2 className="title">Usuario registrado exitosamente</h2> :
            <h2 className="title">Ha ocurrido un error</h2>
        }
        {/* mensaje de error */}
        {
            error ? 
            <span className="error-message">{errorMessage}</span> : null
        }
        <Link className="form-link" to="/login">Regresar a inicio de sesión</Link>
    </div>
)

export default Signin;

