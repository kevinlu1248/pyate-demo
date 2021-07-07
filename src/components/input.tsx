import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';

import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

interface Props {
    handleInputChange: (event: any) => void;
}

export default (props: Props) => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <>
            <Typography variant="h5" gutterBottom>
                Your text:
            </Typography>
            <Box mb={2} />
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
