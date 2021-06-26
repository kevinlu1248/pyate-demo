import React from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

export default (props) => (
    <>
        <Typography variant="h5" gutterBottom>
            Your text:
        </Typography>
        <TextField
            id="outlined-multiline-static"
            label="Your text to be analyzed by PyATE"
            multiline
            rows={10}
            defaultValue="My name is ComboBasic. I am a term extraction algorithm."
            variant="outlined"
            onChange={props.handleInputChange}
            autoFocus
            fullWidth
        />
    </>
);
