import { TextField } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

const inputColor = "#bdbdbd";
// Styles
const useStyles = makeStyles((theme) => ({
    textfield: {
        '& label': {
            color: inputColor,
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset, &:hover fieldset': {
                borderColor: inputColor,
            },
            '&.Mui-focused:hover fieldset': {
                borderColor: theme.palette.primary.main,
            },
        }
    },
    input: {
        color: inputColor
    }
}))

const MyTextField = (props) => {

    const classes = useStyles();

    return (
        <TextField
            className={classes.textfield}
            InputProps={{
                className: classes.input
            }}
            {...props}
        />
    )
}

export default MyTextField;