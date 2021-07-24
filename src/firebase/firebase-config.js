import firebase from "firebase";

const config = {
    apiKey: "AIzaSyC_4NMG-XHd3lVICbwxIzzm70HeJFi5e4c",
    authDomain: "prueba-tecnica-fe52a.firebaseapp.com",
    projectId: "prueba-tecnica-fe52a",
    storageBucket: "prueba-tecnica-fe52a.appspot.com",
    messagingSenderId: "453537311517",
    appId: "1:453537311517:web:8dd3b9ff070416c4cdcff4"
}

firebase.initializeApp(config);
export default firebase;