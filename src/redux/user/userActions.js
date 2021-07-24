import { LOG_IN, LOG_OUT } from './userTypes';

export const logIn = (id) => {
    return {
        type: LOG_IN,
        userId: id
    }
}

export const logOut = () => {
    return {
        type: LOG_OUT,
    }
}