// Action constants
import {
    ADD_TO_FAVORITES,
    REMOVE_FROM_FAVORITES,
    FETCH_ALL_POSTS
} from './postsTypes';

const initialState = {
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
const fetchAllPosts = () => {
    return [
        { id: 1, title: "Post1fromStore", isFav: false },
        { id: 2, title: "Post2fromStore", isFav: false },
        { id: 3, title: "Post3fromStore", isFav: false },
        { id: 4, title: "Post4fromStore", isFav: false },
        { id: 5, title: "Post5fromStore", isFav: false },
        { id: 6, title: "Post6fromStore", isFav: false },
        { id: 7, title: "Post7fromStore", isFav: false },
        { id: 8, title: "Post8fromStore", isFav: false },
        { id: 9, title: "Post9fromStore", isFav: false },
        { id: 10, title: "Post10fromStore", isFav: false },
        { id: 11, title: "Post11fromStore", isFav: false },
        { id: 12, title: "Post12fromStore", isFav: false },
        { id: 13, title: "Post13fromStore", isFav: false },
        { id: 14, title: "Post14fromStore", isFav: false },
        { id: 15, title: "Post15fromStore", isFav: false },
    ]
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
        case FETCH_ALL_POSTS:
            return {
                ...state,
                all: fetchAllPosts()
            }
        default: return state;
    }
}

export default postsReducer;