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

const PageNav = (props) => {

    // State
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [userName, setUserName] = useState("Felipe");

    // Toggle drawer
    const toggleDrawer = (open) => (event) => {
        setDrawerOpen(open);
    }

    // logOut fuction
    const logOut = (event) => { props.history.push('/login') }

    // Drawer actions
    const drawerItems = [
        {
            title: "Cerrar sesión",
            onClick: logOut
        }
    ];

    const UserNameComponent = () => (
        <div className="user-name">
            <span>Hola <strong>{userName}</strong></span>
        </div>
    )

    // Componentes de accion del nav
    const Actions = (props) => (
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
                onClick={toggleDrawer(true)}
            />
            {/* Drawer */}
            <MyDrawer
                anchor="left"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
                items={drawerItems}
            >
                <UserNameComponent/>
            </MyDrawer>
        </div>
    )
}



export default PageNav;
