import { TextField } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import { styles, inputColor } from './MyTextFieldStyles'

// Styles
const useStyles = makeStyles((theme) => ({
    textfield: styles(theme),
    input: {
        color: inputColor
    }
}))

const MyTextField = (props) => {

    const classes = useStyles();

    return (
        <TextField
            id={props.id}
            className={classes.textfield}
            InputProps={{
                className: classes.input,
                type: props.type,
                autoComplete: "on",
                name: props.name
            }}
            {...props}
        />
    )
}

export default MyTextField;