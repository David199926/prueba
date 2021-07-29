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
// custom hooks
import useValidation from '../../hooks/useValidation';
import useSignin from './useSignin';

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

    const validationData = useValidation();
    const {
        register,
        registered,
        signinError
    } = useSignin(validationData.email, validationData.password)

    const pageContent = () => {
        return registered ?
            <SigninMessage /> : // registro exitoso
            <SignInForm {...validationData} register={register} signinError={signinError} /> // aun no se registra
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
const SignInForm = (props) => {

    const {
        isValid,
        email,
        updateEmail,
        password,
        updatePassword,
        emailError,
        passwordError,
        register,
        signinError
    } = props;
    // Hooks
    const classes = useStyles();

    // Siginn function
    const signIn = (e) => {
        e.preventDefault();
        if (isValid()) register();
    }

    return (
        <form onSubmit={signIn} action="" autoComplete="on">
            <div className="signin-inputs">
                {/* Nombre de usuario */}
                <MyTextField
                    id="user-email"
                    name="email"
                    label="Correo"
                    fullWidth
                    variant="outlined"
                    value={email}
                    onChange={updateEmail}
                    type="email"
                    error={emailError !== ""}
                    helperText={emailError}
                />
                {/* Contraseña de usuario */}
                <PasswordInput
                    error={passwordError !== ""}
                    helperText={passwordError}
                    password={password}
                    onChange={updatePassword}
                />
                {/* Link de login */}
                <Link className="form-link" to="/login">¿Ya tienes cuenta? inicia sesión aquí</Link>
                <Button
                    variant="contained"
                    className={classes.button}
                    type="submit"
                >
                    Crear cuenta
                </Button>
                <span className="error-message">{signinError}</span>
            </div>
        </form>
    )
}

const SigninMessage = () => (

    <div className="signin-message">
        <h2 className="title">Usuario registrado exitosamente</h2>
        <Link className="form-link" to="/login">Regresar a inicio de sesión</Link>
    </div>
)

export default Signin;

