import React, { useEffect } from 'react';
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
import MyTextField from '../Common/MyTextField/MyTextField';
import PasswordInput from '../Common/Password/Password';
import ExternalAuth from './ExternalAuth/ExternalAuth';
// custom hook
import useLogin from './useLogin'
import useValidation from '../../hooks/useValidation'


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
    const {
        isValid,
        email,
        updateEmail,
        password,
        updatePassword,
        emailError,
        setEmailError,
        passwordError,
        setPasswordError
    } = useValidation();
    const {
        tryToAccess,
        FBError,
        setFBError
    } = useLogin(email, password, setEmailError, setPasswordError);

    const logIn = (e) => {
        e.preventDefault();
        if (isValid()) {
            tryToAccess(() => {
                props.history.push("/posts")
            })
        }
    }

    return (
        <div className="login-page">
            {/* regresar a pagina de inicio */}
            <LandingLink />

            <div className="login-panel" >
                <h1 className="login-title">Inicia <strong>Sesión</strong></h1>
                <form onSubmit={logIn} action="" autoComplete="on">
                    <div className="login-inputs">
                        {/* Nombre de usuario */}
                        <MyTextField
                            id="user-email"
                            data-testid="user-email"
                            label="Correo"
                            name="email"
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
                            id="user-password"
                            data-testid="user-password"
                            error={passwordError !== ""}
                            helperText={passwordError}
                            password={password}
                            onChange={updatePassword}
                        />
                        {/* Link de registro */}
                        <Link className="form-link" to="/signin">¿No tienes cuenta? Registrate aquí</Link>
                    </div>
                    <Button
                        variant="contained"
                        className={classes.button}
                        type="submit"
                        data-testid="login"
                    >
                        Acceder
                    </Button>
                </form>
                {
                    FBError !== "" &&
                    <span className="error-message">Error: {FBError}</span>
                }
                {/* Accesos de Facebook y Google */}
                <ExternalAuth {...props} setFBAccessError={setFBError}/>
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

export default Login;

