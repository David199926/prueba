import {
    LOG_IN,
    LOG_IN_SUCCESS,
    LOG_IN_FAILURE,
    LOG_OUT,
    LOG_OUT_SUCCESS,
    LOG_OUT_FAILURE
} from './userTypes';
import {
    logIn as logInFirebase,
    logOut as logOutFirebase
} from '../../firebase/userAuth'

export const tryToLogIn = () => {
    return {
        type: LOG_IN,
    }
}

export const logInSuccess = (userId) => {
    return {
        type: LOG_IN_SUCCESS,
        userId: userId
    }
}

export const logInFailure = (error) => {
    return {
        type: LOG_IN_FAILURE,
        error: error,
    }
}

export const tryToLogOut = () => {
    return {
        type: LOG_OUT,
    }
}

export const logOutSuccess = () => {
    return {
        type: LOG_OUT_SUCCESS,
    }
}

export const logOutFailure = (error) => {
    return {
        type: LOG_OUT_FAILURE,
        error: error,
    }
}

export const logIn = (email, password) => {
    return (dispatch) => {
        dispatch(tryToLogIn())

        logInFirebase(email, password)
        .then((res) => {
            dispatch(logInSuccess(res.user.uid))
        })
        .catch((err) => {
            dispatch(logInFailure(err))
        })
    }
}

export const logOut = () => {
    return (dispatch) => {
        dispatch(tryToLogOut())

        logOutFirebase()
        .then(() => {
            dispatch(logOutSuccess())
        })
        .catch((err) => {
            dispatch(logOutFailure(err))
        })
    }
}

 

