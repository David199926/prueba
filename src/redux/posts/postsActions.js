// Action constants
import {
    ADD_TO_FAVORITES,
    REMOVE_FROM_FAVORITES,
    FETCH_ALL_POSTS
} from './postsTypes';

export const addToFavorites = (id) => {
    return {
        type: ADD_TO_FAVORITES,
        id: id,
    }
}

export const removeFromFavorites = (id) => {
    return {
        type: REMOVE_FROM_FAVORITES,
        id: id,
    }
}

export const fetchAllPosts = () => {
    return {
        type: FETCH_ALL_POSTS,
    }
}