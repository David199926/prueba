// firebase
import { register as FBRegister } from '../../firebase/userAuth';
import { useState } from 'react';

const errTraductor = {
    "auth/email-already-in-use": "Este correo ya se encuentra registrado",
    "auth/weak-password": "La contraseña debe poseer al menos 6 caracteres"
}

export default function useSignin(email, password) {

    const [registered, setRegistered] = useState(false);
    const [signinError, setSigninError] = useState("");

    const register = () => {
        FBRegister(email, password)
        .then(() => {
            setRegistered(true)
        })
        .catch((err) => {
            console.log(err)
            setSigninError(errTraductor[err.code] || err.message)
        })
    }

    return {
        register,
        registered,
        signinError
    }
}