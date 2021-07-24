// Action constants
import {
    ADD_TO_FAVORITES,
    REMOVE_FROM_FAVORITES,
    FETCH_ALL_POSTS
} from './postsTypes';

const initialState = {
    all: [
        { id: 1, title: "Post1fromStore", isFav: false },
        { id: 2, title: "Post2fromStore", isFav: false },
        { id: 3, title: "Post3fromStore", isFav: false },
    ],
    favs: [],
}

// Utilities
const findSelectedPost = (id, all) => {
    let selectedPost = null;
    let updatedAll = [...all];

    for (let i = 0; i < updatedAll.length; i++) {
        if (updatedAll[i].id === id) {
            updatedAll[i].isFav = true;
            selectedPost = updatedAll[i];
        }
    }
    return { selectedPost, updatedAll };
}
const removeFavFromAll = (id, all) => {
    return all.map(post => {
        if (post.id !== id) {
            return post;
        } else {
            return { ...post, isFav: false }
        }
    })
}

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_FAVORITES:
            const { selectedPost, updatedAll } = findSelectedPost(action.id, state.all);
            return {
                ...state,
                all: updatedAll,
                favs: selectedPost === null ? state.favs : [...state.favs, selectedPost]
            }
        case REMOVE_FROM_FAVORITES:
            return {
                ...state,
                all: removeFavFromAll(action.id, state.all),
                favs: state.favs.filter(fav => fav.id !== action.id)
            }
        default: return state;
    }
}

export default postsReducer;