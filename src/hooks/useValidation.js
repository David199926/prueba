import { useState } from 'react';

export default function useLogin() {
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("")

    const updateEmail = (e) => {setEmail(e.target.value)}
    const updatePassword = (e) => {setPassword(e.target.value)}

    const resetErrors = () => {
        setEmailError("");
        setPasswordError("");
    }

    const checkEmpty = () => {
        let ok = true;
        if (email === "") {
            setEmailError("Campo requerido")
            ok = false;
        }
        if (password === "") {
            setPasswordError("Campo requerido")
            ok = false;
        }
        return ok;
    }

    // Login function
    const isValid = () => {
        resetErrors();
        // Empty fields check
        if (!checkEmpty()) return false;
        // firebase check
        return true;
    }

    return {
        isValid,
        email,
        updateEmail,
        password,
        updatePassword,
        emailError,
        setEmailError,
        passwordError,
        setPasswordError
    }
}
