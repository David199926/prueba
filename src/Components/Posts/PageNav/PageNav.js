import React, { useState } from 'react';
// Styles
import './PageNav.scss';
// Resources
import logo from '../../../Resources/CompanyName.png';
import menu from '../../../Resources/Icons/Menu.svg';
// Material ui
import { Button } from '@material-ui/core';
// My components
import MyDrawer from '../../Common/MyDrawer/MyDrawer';
// redux
import { useDispatch } from 'react-redux';
import { logOut as logOutAction, flushAllPosts, flushFavPosts } from '../../../redux/index';
// Custom hooks
import useDrawer from '../../Common/MyDrawer/useDrawer';

const PageNav = () => {
    // State
    const [userName, setUserName] = useState("Felipe");
    const { drawerOpen, openDrawer, closeDrawer } = useDrawer();

    const dispatch = useDispatch();
    // logOut fuction
    const logOut = () => {
        dispatch(logOutAction());
        dispatch(flushAllPosts());
        dispatch(flushFavPosts());
    }

    const UserNameComponent = () => (
        <div className="user-name">
            <span>Hola <strong>{userName}</strong></span>
        </div>
    )

    // Componentes de accion del nav
    const Actions = () => (
        <div className="nav-actions">
            {/* nombre del usuario que inicio sesion */}
            <UserNameComponent/>
            {/* boton para iniciar sesion */}
            <Button
                variant="outlined"
                onClick={logOut}
            >
                Cerrar sesión
            </Button>
        </div>
    )


    return (
        <div className="page-nav">
            <img src={logo} alt="logo" className="nav-logo" />
            <Actions />
            {/* boton de menu */}
            <img
                className="menuIcon"
                src={menu}
                alt="menu-icon"
                onClick={openDrawer}
            />
            {/* Drawer */}
            <MyDrawer
                anchor="left"
                open={drawerOpen}
                onClose={closeDrawer}
                items={[
                    {
                        title: "Cerrar sesión",
                        onClick: logOut
                    }
                ]}
            >
                <UserNameComponent/>
            </MyDrawer>
        </div>
    )
}



export default PageNav;
