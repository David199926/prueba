import firebase from './firebase-config';

export const socialMediaAuth = (provider) => {
    return firebase.auth().signInWithPopup(provider)
    .then((res) => {
        return res.user;
    })
    .catch((err) => {
        return err;
    })
}

export const register = async (email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
}

export const logOut = async () => {
    return firebase.auth().signOut;
}
