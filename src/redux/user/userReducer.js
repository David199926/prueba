import {
    LOG_IN,
    LOG_IN_SUCCESS,
    LOG_IN_FAILURE,
    LOG_OUT,
    LOG_OUT_SUCCESS,
    LOG_OUT_FAILURE
} from './userTypes';


const initialState = {
    userId: '',
    loading: false,
    error: "",
}

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOG_IN: return {
            ...state,
            loading: true,
        }
        case LOG_IN_SUCCESS: return {
            ...state,
            userId: action.userId,
            loading: false,
        }
        case LOG_IN_FAILURE: return {
            ...state,
            error: action.error ,
            loading: false,
        }
        case LOG_OUT: return {
            ...state,
            loading: true,
        }
        case LOG_OUT_SUCCESS: return {
            ...state,
            userId: "",
            loading: false,
        }
        case LOG_OUT_FAILURE: return {
            ...state,
            error: action.error,
            loading: false,
        }
        default: return state;
    }
}

export default userReducer;