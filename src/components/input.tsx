import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';

import { useTheme, makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

interface Props {
    handleInputChange: (event: any) => void;
}

const useStyles = makeStyles({
    title: {
        marginBottom: 16,
    },
    caption: {
        marginBottom: 16,
    },
});

export default (props: Props) => {
    const theme = useTheme();
    const classes = useStyles();
    const matches = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <>
            <Typography
                variant="h5"
                gutterBottom
                classes={{ root: classes.title }}
            >
                Your text:
            </Typography>
            <TextField
                id="outlined-multiline-static"
                label="Your text to be analyzed by PyATE"
                multiline
                rows={matches ? 25 : 10}
                defaultValue="My name is ComboBasic. I am a term extraction algorithm."
                variant="outlined"
                onChange={props.handleInputChange}
                autoFocus
                fullWidth
            />
            <Box mb={5} />
        </>
    );
};
