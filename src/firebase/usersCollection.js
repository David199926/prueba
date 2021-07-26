import db from './firestore'

export const updateUserFavs = (userId, favs) => {
    const favsIds = favs.map(fav => fav.id)
    db.collection('usuarios').doc(userId).set({favs: favsIds})
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