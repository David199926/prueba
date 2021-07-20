import { createTheme } from '@material-ui/core';

const buttonBorder = 2;

export const theme = createTheme({
    palette: {
        primary: {
            main: "#00FF68",
        }
    }, overrides: {
        MuiButton: {
            root: {
                fontSize: "1rem",
                borderRadius: "15px",
                lineHeight: 0,
            },
            label: {
                textTransform: "none",
            },
            outlined: {
                position: "relative",
                color: "#fff",
                boxShadow: "0px 0px 5px 2px rgba(1, 255, 47, 0.5)",
                border: `${buttonBorder}px solid transparent`,
                backgroundClip: "padding-box",
                backgroundColor: "#0E0E0E",
                '&:before': {
                    content: '""',
                    position: "absolute",
                    top: 0, right: 0, bottom: 0, left: 0,
                    zIndex: -1,
                    margin: -buttonBorder,
                    borderRadius: "inherit",
                    background: "linear-gradient(to right, #00E6E3 2.73%, #00FF68 100%)",
                }
            },
            contained: {
                backgroundColor: "linear-gradient(to right, #00E6E3 2.73%, #00FF68 100%)",
            }
        },
        MuiDrawer: {
            paper: {
                backgroundColor: "#1D2127",
            }
        }
    },
    props: {
        MuiButton: {
          disableRipple: true,
        },
    },
});