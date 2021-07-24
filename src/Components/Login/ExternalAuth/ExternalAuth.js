import React from 'react'
// Styles
import './ExternalAuth.scss';
// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebookF,
    faGoogle,
 } from '@fortawesome/free-brands-svg-icons'
 // firebase
import { facebookProvider, googleProvider } from '../../../firebase/authMetods';
import { socialMediaAuth } from '../../../firebase/userAuth';
// redux
import { useDispatch } from 'react-redux';
import { logIn } from '../../../redux/user/userActions'

const ExternalAuth = (props) => {

    const dispatch = useDispatch();

    const mediaAuth = (provider) => async () => {
        const res = await socialMediaAuth(provider);
        dispatch(logIn(res.uid));
        props.history.push('/posts');
    }

    return (
        <div className="exAuth-container">
            <button
                className="acces-btn facebook"
                onClick={mediaAuth(facebookProvider)}
            >
                <FontAwesomeIcon icon={faFacebookF} className="acces-icon"/>
                Ingresar con Facebook
            </button>
            <button
                className="acces-btn google"
                onClick={mediaAuth(googleProvider)}
            >
                <FontAwesomeIcon icon={faGoogle} className="acces-icon"/>
                Ingresar con Google
            </button>
        </div>
    )
}

export default ExternalAuth;