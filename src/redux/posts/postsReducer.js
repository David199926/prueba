// Action constants
import {
    ADD_TO_FAVORITES,
    REMOVE_FROM_FAVORITES,
    FETCH_ALL_POSTS,
    FETCH_ALL_POSTS_SUCCESS,
    FETCH_ALL_POSTS_FAILURE,
} from './postsTypes';

const initialState = {
    loading: false,
    error: '',
    all: [],
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
        // Async actions
        case FETCH_ALL_POSTS:
            return {
                ...state,
                loading: true,
            }
        case FETCH_ALL_POSTS_SUCCESS:
            return {
                ...state,
                loading: false,
                all: action.data,
            }
        case FETCH_ALL_POSTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
            }
        default: return state;
    }
}

export default postsReducer;