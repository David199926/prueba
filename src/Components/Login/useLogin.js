import { useState } from 'react';
// redux
import { useDispatch } from 'react-redux';
import { logIn as logInAction } from '../../redux/index';
// firebase
import { logIn as logInFirebase } from '../../firebase/userAuth';


export default function useLogin(email, password, setEmailError, setPasswordError) {
   
    const [FBError, setFBError] = useState("");
    const dispatch = useDispatch();

    const resetErrors = () => {
        setFBError("");
    }

    const fireBaseLogin = (successCallback) => {
        logInFirebase(email, password)
        .then((res) => {
            dispatch(logInAction(res.user.uid));
            successCallback();
        })
        .catch((err) => {
            switch (err.code) {
                case "auth/wrong-password":
                    setPasswordError("Contraseña incorrecta");
                    break;
                case "auth/invalid-email":
                    setEmailError("Correo inválido");
                    break;
                default: setFBError(err.message);
            }
        })
    }

    // Login function
    const tryToAccess = (successCallback) => {
        resetErrors();
        fireBaseLogin(successCallback);
    }

    return {
        tryToAccess,
        FBError,
        setFBError
    }
}
