import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';

export default (props) => (
    <>
        <Typography variant="h2">
            Automated Term Extraction Demonstrater
        </Typography>
        <Typography variant="caption">
            Web app to demonstrate term extraction algorithms, using PyATE as
            backend (<Link href="https://github.com/kevinlu1248/pyate">https://github.com/kevinlu1248/pyate</Link>)
        </Typography>
        <Box mb={3}/>
    </>
);
