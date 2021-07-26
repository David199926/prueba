// firebase operations
import { updateUserFavs } from '../../firebase/usersCollection'
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
    FLUSH_FAVORITE_POSTS
} from './postsTypes';

const initialState = {
    all: {
        loading: false,
        error: '',
        data: []
    },
    favs: {
        loading: false,
        error: '',
        data: []
    }
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
            const { selectedPost, updatedAll } = findSelectedPost(action.id, state.all.data);
            var updatedFavs = selectedPost === null ? state.favs.data : [...state.favs.data, selectedPost];
            if (action.persist) updateUserFavs(action.userId, updatedFavs);
            return {
                ...state,
                all: {
                    ...state.all,
                    data: updatedAll,
                },
                favs: {
                    ...state.favs,
                    data: updatedFavs
                }
            }

        case REMOVE_FROM_FAVORITES:
            var updatedFavs = state.favs.data.filter(fav => fav.id !== action.id);
            if (action.persist) updateUserFavs(action.userId, updatedFavs);
            return {
                ...state,
                all: {
                    ...state.all,
                    data: removeFavFromAll(action.id, state.all.data),
                },
                favs: {
                    ...state.favs,
                    data: state.favs.data.filter(fav => fav.id !== action.id)
                }
            }

        case FETCH_FAVORITE_POSTS:
            return {
                ...state,
                favs: {
                    ...state.favs,
                    loading: true,
                }
            }

        case FETCH_FAVORITE_POSTS_SUCCESS:
            const ids = action.posts.map(post => post.id)
            return {
                all: {
                    ...state.all,
                    data: state.all.data.map(post => ({
                        ...post,
                        isFav: ids.includes(post.id), 
                    }))
                },
                favs: {
                    ...state.favs,
                    loading: false,
                    data: action.posts
                }
            }

        case FETCH_FAVORITE_POSTS_FAILURE:
            return {
                ...state,
                favs: {
                    ...state.favs,
                    loading: false,
                    error: action.error,
                }
            }

        case FETCH_ALL_POSTS:
            return {
                ...state,
                all: {
                    ...state.all,
                    loading: true,
                }
            }

        case FETCH_ALL_POSTS_SUCCESS:
            return {
                ...state,
                all: {
                    ...state.all,
                    loading: false,
                    data: action.data,
                }
            }

        case FETCH_ALL_POSTS_FAILURE:
            return {
                ...state,
                all: {
                    ...state.all,
                    loading: false,
                    error: action.error,
                }
            }
        
        case FLUSH_ALL_POSTS:
            return {
                ...state,
                all: {
                    ...state.all,
                    data: []
                }
            }

        case FLUSH_FAVORITE_POSTS: 
            return {
                ...state,
                favs: {
                    ...state.favs,
                    data: []
                }
            }
        default: return state;
    }
}

export default postsReducer;