import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';

interface Props {}

export default (props: Props) => (
    <>
        <Typography variant="h2">
            Automated Term Extraction Demonstrater
        </Typography>
        <Typography variant="caption">
            Web app to demonstrate term extraction algorithms, using PyATE as
            backend (
            <Link href="https://github.com/kevinlu1248/pyate">
                https://github.com/kevinlu1248/pyate
            </Link>
            ). When text is entered into the input, the list of predicted terms
            as well as their "termhoods" will be listed. The termhood is a value
            correlated with the probability of each phrase being a term, that
            is, it is a value denoting how much the phrase looks like a term.
        </Typography>
        <Box mb={3} />
    </>
);
