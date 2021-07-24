// Action constants
import {
    ADD_TO_FAVORITES,
    REMOVE_FROM_FAVORITES,
    FETCH_ALL_POSTS,
    FETCH_ALL_POSTS_SUCCESS,
    FETCH_ALL_POSTS_FAILURE
} from './postsTypes';
import axios from 'axios';

// Posts API
const API_URL = 'http://waco-api.herokuapp.com/api';

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

// Async action creator
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