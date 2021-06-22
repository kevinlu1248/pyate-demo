import React from 'react'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'

export default (props) => (
    <>
        <Typography variant="h4" gutterBottom>
            Your text:
        </Typography>
        <TextField
            id="outlined-multiline-static"
            label="Your text to be analyzed by PyATE"
            multiline
            rows={4}
            defaultValue="My name is ComboBasic. I am a term extraction algorithm."
            variant="outlined"
            fullWidth
        />
    </>
)
