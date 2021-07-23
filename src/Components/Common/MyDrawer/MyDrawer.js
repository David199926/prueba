import React from 'react';
// Styles
import './MyDrawer.scss';
// Material ui
import { Drawer, List, ListItem } from '@material-ui/core';

const MyDrawer = ({ items, anchor, open, onClose }) => {
    return (
        <Drawer anchor={anchor} open={open} onClose={onClose}>
            <List className="drawer-list">
                {items.map((item, index) => (
                    <ListItem
                        button
                        onClick={item.onClick}
                        key={`item-${index}`}
                    >
                        {item.title.toUpperCase()}
                    </ListItem>
                ))}
            </List>
        </Drawer>
    )
}

export default MyDrawer
