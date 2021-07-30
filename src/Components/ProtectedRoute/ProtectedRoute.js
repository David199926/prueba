import React from 'react'
// React router dom
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProtectedRoute = (props) => {

    const userId = useSelector((state) => state.user.userId)
    const ownProps = delete {...props}.component;
    const Component = props.component;
    const logged = props.logged;

    const render = () => {
        if (logged) {
            // logged users can see the content
            return userId ?
            <Component/> : <Redirect to="/" />
        } else {
            // non logged users can see the content
            return userId ?
            <Redirect to="/posts" /> : <Component/>
        }
    }

    return (
        <Route {...ownProps} render={render}/>
    )
}

export default ProtectedRoute
