import React from 'react'
// Styles
import './Login.scss'
// Material Design
import { Button } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
// My components
import MyTextField from './MyTextField';
import PasswordInput from './Password';
import ExternalAuth from './ExternalAuth/ExternalAuth';

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

const Login = () => {
    const classes = useStyles();

    return (
        <div className="login-page">
            <div className="login-panel">
                <h1 className="login-title">Inicia <strong>Sesión</strong></h1>
                <div className="login-inputs">
                    {/* Nombre de usuario */}
                    <MyTextField
                        label="Nombre de usuario"
                        fullWidth
                        variant="outlined"
                    />
                    {/* Contraseña de usuario */}
                    <PasswordInput
                        error={""}
                        helperText={""}
                    />
                    {/* Contraseña de usuario */}
                    <a href="#" className="password-link">¿Olvidaste tu contraseña?</a>
                </div>
                <Button
                    variant="contained"
                    className={classes.button}
                    type="submit"
                >
                    Acceder
                </Button>
                {/* Accesos de Facebook y Google */}
                <ExternalAuth />
            </div>
        </div>
    )
}

export default Login;

