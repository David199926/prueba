import { useState } from 'react';

export default function useDrawer() {

    const [drawerOpen, setDrawerOpen] = useState(false);

    // Toggle drawer
    const toggleDrawer = (open) => {
        setDrawerOpen(open);
    }

    const openDrawer = () => toggleDrawer(true);
    const closeDrawer = () => toggleDrawer(false);

    return {
        drawerOpen,
        openDrawer,
        closeDrawer,
    }
}