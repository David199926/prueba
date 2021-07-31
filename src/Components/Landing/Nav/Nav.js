import React from 'react'
// Styles
import './Nav.scss'
// Resources
import logo from '../../../Resources/LogoNav.png';
import menu from '../../../Resources/Icons/Menu.svg';
// My Components
import MyDrawer from '../../Common/MyDrawer/MyDrawer';
import useDrawer from '../../Common/MyDrawer/useDrawer';
// router
import { withRouter } from "react-router";
import { Link } from 'react-router-dom';
// Custom hooks
import useNav from './useNav'
  
const Nav = (props) => {
    
    const { drawerOpen, openDrawer, closeDrawer } = useDrawer();
    const styles = useNav();

    // Navbar actions
    const Actions = () => (
        <div className="actions">
            <a href="#inicio">INICIO</a>
            <a href="#beneficios">BENEFICIOS</a>
            <Link to="/login">
                <button className="login-btn" >Login</button>
            </Link>
        </div>
    )

    const navItems = [
        {
            title: "inicio",
            onClick: () => {
                closeDrawer();
                window.location.href = "#inicio";
            }
        },
        {
            title: "beneficios",
            onClick: () => {
                closeDrawer();
                window.location.href = "#beneficios";
            }
        },
        {
            title: "login",
            onClick: () => {
                props.history.push("/login");
            }
        }
    ]

    return (
        <div className={`${styles.nav} navbar`}>
            <img className="logo" src={logo} alt="company-logo" />
            <Actions />
            {/* Menu Icon */}
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
                items={navItems}
            />
        </div>
    )
}

export default withRouter(Nav);
