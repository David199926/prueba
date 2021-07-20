import React, { useState } from 'react'
// Styles
import './Nav.scss'
// Resources
import logo from '../../../Resources/LogoNav.png';
import menu from '../../../Resources/Icons/Menu.svg';
// material ui
import { Button, Drawer, List, ListItem } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

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
    }
}))

const Nav = () => {
    // Style classes
    const classes = useStyles();

    // State
    const [drawerOpen, setDrawerOpen] = useState(false);
    // Toggle drawer
    const toggleDrawer = (open) => (event) => {
        setDrawerOpen(open);
    }

    // Navbar actions
    const Actions = () => (
        <div className="actions">
            <a href="#inicio">INICIO</a>
            <a href="#beneficios">BENEFICIOS</a>
            <Button variant="outlined" className={classes.button}>Login</Button>
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
        <div className="navbar">
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
