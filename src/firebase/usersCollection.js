import db from './firestore'

export const updateUserFavs = (userId, favs) => {
    db.collection('usuarios').doc(userId).set({favs: favs})
}

export const getUserFavs = async (userId) => {
    const doc = await db.collection('usuarios').doc(userId).get();
    if (doc.exists) {
        return doc.data().favs
    }
    else {
        return [];
    }
}

export const onUserChange = (userId, callback) => {
    return db.collection('usuarios').doc(userId)
    .onSnapshot((doc) => callback(doc)) 
}