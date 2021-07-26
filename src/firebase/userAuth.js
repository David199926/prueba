import firebase from "firebase/app";
import "firebase/auth";
/**
 * Registro por medio de correo
 * @param {string} email 
 * @param {string} password 
 * @returns 
 */
export const register = async (email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
}

/**
 * Inicio de sesion con correo y contraseña
 * @param {string} email 
 * @param {string} password 
 * @returns 
 */
export const logIn = async (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
}

/**
 * Autenticacion por medio de redes sociales
 * @param {*} provider 
 * @returns 
 */
export const socialMediaAuth = (provider) => {
    return firebase.auth().signInWithPopup(provider)
}

/**
 * Cerrar sesion
 * @returns 
 */
export const logOut = async () => {
    return firebase.auth().signOut;
}
