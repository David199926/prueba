// Action constants
import {
    ADD_TO_FAVORITES,
    REMOVE_FROM_FAVORITES,
    FETCH_ALL_POSTS,
    FETCH_ALL_POSTS_SUCCESS,
    FETCH_ALL_POSTS_FAILURE,
    FETCH_FAVORITE_POSTS,
    FETCH_FAVORITE_POSTS_SUCCESS,
    FETCH_FAVORITE_POSTS_FAILURE,
    FLUSH_ALL_POSTS,
    FLUSH_FAVORITE_POSTS,
} from './postsTypes';
// axios
import axios from 'axios';
// firebase
import { getUserFavs } from '../../firebase/usersCollection'; 

// Posts API
const API_URL = 'https://waco-api.herokuapp.com/api';

export const flushAllPosts = () => {
    return {
        type: FLUSH_ALL_POSTS,
    }
}
export const flushFavPosts = () => {
    return {
        type: FLUSH_FAVORITE_POSTS,
    }
}

// ALL FETCHING
export const fetchAllPosts = (posts) => {
    return {
        type: FETCH_ALL_POSTS,
    }
}
export const fetchAllPostsSuccess = (posts) => {
    return {
        type: FETCH_ALL_POSTS_SUCCESS,
        data: posts,
    }
}
export const fetchAllPostsFailure = (error) => { 
    return {
        type: FETCH_ALL_POSTS_FAILURE,
        error: error,
    }
}

// FAVS FETCHING
export const fetchFavPosts = () => {
    return {
        type: FETCH_FAVORITE_POSTS,
    }
}
export const fetchFavPostsSuccess = (posts) => {
    return {
        type: FETCH_FAVORITE_POSTS_SUCCESS,
        posts: posts,
    }
}
export const fetchFavPostsFailure = (error) => { 
    return {
        type: FETCH_FAVORITE_POSTS_FAILURE,
        error: error,
    }
}

// Async action creator
export const addToFavorites = (postsId, userId, persist) => {
    return {
        type: ADD_TO_FAVORITES,
        id: postsId,
        userId: userId,
        persist: persist,
    }
}

export const removeFromFavorites = (postsId, userId, persist) => {
    return {
        type: REMOVE_FROM_FAVORITES,
        id: postsId,
        userId: userId,
        persist: persist,
    }
}

export const fetchPosts = () => {
    return (dispatch) => {
        dispatch(fetchAllPosts())

        axios.get(`${API_URL}/posts`)
        .then( response => {
            const posts = response.data.data;
            dispatch(fetchAllPostsSuccess(posts));
        })
        .catch(error => {
            const errorMessage = error.message;
            dispatch(fetchAllPostsFailure(errorMessage));
        })
    }
}

export const fetchUserFavs = (userId) => {
    return (dispatch) => {
        dispatch(fetchFavPosts())
        getUserFavs(userId)
        .then( favs => {
            dispatch(fetchFavPostsSuccess(favs))
        })
        .catch( error => {
            const errorMessage = error.message;
            dispatch(fetchFavPostsFailure(errorMessage))
        })
    }
}