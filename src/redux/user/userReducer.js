import { LOG_IN, LOG_OUT } from './userTypes';

const initialState = {
    userId: ''
}

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOG_IN: return {
            ...state,
            userId: action.userId,
        }
        case LOG_OUT: return {
            ...state,
            userId: "",
        }
        default: return state;
    }
}

export default userReducer;