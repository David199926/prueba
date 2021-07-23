import React, { useState, useEffect } from 'react'
// Styles
import './Nav.scss'
// Resources
import logo from '../../../Resources/LogoNav.png';
import menu from '../../../Resources/Icons/Menu.svg';
// material ui
import { makeStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';
// My Components
import MyDrawer from '../../Common/MyDrawer/MyDrawer';
  
const Nav = (props) => {
    // State
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [navInTop, setNavInTop] = useState(true);
    let scrollListener = null;

    // Effects
    useEffect(() => {
        scrollListener = document.addEventListener("scroll", e => {
            var onTop = document.scrollingElement.scrollTop === 0;
            if (onTop !== navInTop) setNavInTop(onTop)
        })
        return () => {
            document.removeEventListener("scroll", scrollListener)
        }
    }, [navInTop])

    // Styles
    const useStyles = makeStyles((theme) => ({
        button: {
            borderRadius: "15px",
            height: "30px",
            width: "70px",
        },
        nav: {
            backgroundColor: navInTop ? "transparent" : "black",
            borderColor:  navInTop ? "#232323" : "black",
        }
    }))
    // Style classes
    const classes = useStyles();

    // Toggle drawer
    const toggleDrawer = (open) => (event) => {
        setDrawerOpen(open);
    }

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
                toggleDrawer(false)();
                window.location.href = "#inicio";
            }
        },
        {
            title: "beneficios",
            onClick: () => {
                toggleDrawer(false)();
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
        <div className={`${classes.nav} navbar`}>
            <img className="logo" src={logo} alt="company-logo" />
            <Actions />
            {/* Menu Icon */}
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
                items={navItems}
            />
        </div>
    )
}

export default Nav;
