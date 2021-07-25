import React, { useState } from 'react';

import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import FormHelperText from '@material-ui/core/FormHelperText';
// icons
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import { makeStyles } from "@material-ui/core/styles";
import { styles, inputColor } from '../MyTextField/MyTextFieldStyles'

// Styles
const useStyles = makeStyles((theme) => ({
    textfield: styles(theme),
    input: {
        color: inputColor
    },
    icon: {
        color: inputColor,
    }
}))

function PasswordInput({ password, onChange, error, helperText }) {

    const classes = useStyles();
    // state
    const [showPassword, setShowPassword] = useState(false);
    // handle state change
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    }

    return (
        <FormControl fullWidth variant="outlined" error={error} className={classes.textfield}>
            <InputLabel htmlFor="password" className={classes.input}>Contraseña</InputLabel>
            <OutlinedInput
                className={classes.input}
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={onChange}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            onClick={handleClickShowPassword}
                            onMouseDown={(event) => { event.preventDefault(); }}
                            edge="end"
                            className={classes.icon}
                        >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                }
                labelWidth={80}
            />
            <FormHelperText error>{helperText}</FormHelperText>
        </FormControl>
    )
}

export default PasswordInput;