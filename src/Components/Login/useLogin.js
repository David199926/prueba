import { useState, useEffect, useContext } from 'react';
// redux
import { ReactReduxContext } from 'react-redux';
import { logIn } from '../../redux/index';

import {
    WRONG_PASSWORD,
    INVALID_EMAIL,
    NOT_FOUND,
    TOO_MANY_REQUESTS
} from '../../constants/Constants'

const translateErrorCodes = {
    [WRONG_PASSWORD]: "Contraseña incorrecta",
    [INVALID_EMAIL]: "Correo inválido",
    [NOT_FOUND]: "Usuario no registrado",
    [TOO_MANY_REQUESTS]: "Haz intentado demasiadas veces iniciar sesión con esta cuenta, inténtalo más tarde"
}


export default function useLogin(email, password, setEmailError, setPasswordError) {

    const [FBError, setFBError] = useState("");
    const { store } = useContext(ReactReduxContext)
    const { getState, dispatch, subscribe } = store

    //const error = useSelector(state => state.user.error);

    const updateErrorMessages = (err) => {
        resetErrors();
        switch (err.code) {
            case WRONG_PASSWORD:
                setPasswordError(translateErrorCodes[WRONG_PASSWORD]);
                break;
            case INVALID_EMAIL:
                setEmailError(translateErrorCodes[INVALID_EMAIL]);
                break;
            case NOT_FOUND:
                setEmailError(translateErrorCodes[NOT_FOUND]);
                break;
            case TOO_MANY_REQUESTS:
                setFBError(translateErrorCodes[TOO_MANY_REQUESTS]);
                break;
            default: setFBError(err.message);
        }
    }

    const resetErrors = () => {
        setFBError("");
        setEmailError("");
        setPasswordError("");
    }
    // Login function
    const tryToAccess = () => {
        resetErrors();
        dispatch(logIn(email, password))
    }

    useEffect(() => {
        subscribe(() => {
            const error = getState().user.error;
            if (error !== "") updateErrorMessages(error)
        })
    }, [])

    return {
        tryToAccess,
        FBError,
        setFBError
    }
}
