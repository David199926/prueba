import { useState, useEffect } from 'react';
// material ui
import { makeStyles } from "@material-ui/core/styles";

export default function useNav() {
    // State
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
    const useStyles = makeStyles(() => ({
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

    const classes = useStyles();
    return classes
}