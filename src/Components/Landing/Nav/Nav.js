import React, { useState, useEffect } from 'react'
// Styles
import './Nav.scss'
// Resources
import logo from '../../../Resources/LogoNav.png';
import menu from '../../../Resources/Icons/Menu.svg';
// material ui
import { Drawer, List, ListItem } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

const Nav = () => {
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
        list: {
            width: 250,
            color: "white",
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
            {/* <Button variant="outlined" className={classes.button}>Login</Button> */}
            <button className="login-btn" >Login</button>
        </div>
    )

    // Drawer actions
    const DrawerContent = () => (
        <List className={classes.list}>
            {["inicio", "beneficios"].map((item, index) => (
                <ListItem
                    button
                    onClick={() => {
                        toggleDrawer(false)();
                        window.location.href = `#${item}`;
                    }}
                    key={`link-${index}`}
                >
                    {item.toUpperCase()}
                </ListItem>
            ))}
            <ListItem button>
                LOGIN
            </ListItem>
        </List>
    )

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
            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
                <DrawerContent />
            </Drawer>
        </div>
    )
}

export default Nav;
