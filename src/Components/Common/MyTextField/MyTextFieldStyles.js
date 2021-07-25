export const inputColor = "#bdbdbd";

export const styles = (theme) => (
    {
        '& label': {
            color: inputColor,
        },
        '& .MuiOutlinedInput-root:not(.Mui-error)': {
            '& fieldset, &:hover fieldset': {
                borderColor: inputColor,
            },
            '&.Mui-focused fieldset': {
                borderColor: theme.palette.primary.main,
            },

        },
        '& .MuiOutlinedInput-input': {
            "&:-webkit-autofill, &:-webkit-autofill:hover, &:-webkit-autofill:focus":
            {
                "-webkit-box-shadow": "0 0 0 1000px #151515 inset !important",
                "-webkit-text-fill-color": "#bdbdbd",
            }
        }
    }
)
