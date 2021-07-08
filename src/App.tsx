import * as React from 'react';
import { Demonstrater, Footer, Intro } from './components';
import { createMuiTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

interface Props {}

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#2980b9',
        },
        secondary: {
            main: '#e5ebeb',
        },
    },
});

const useStyles = makeStyles({
    root: {
        padding: '24px 48px',
    },
});

export default (props: Props) => {
    const classes = useStyles();
    return (
        <Container classes={{ root: classes.root }}>
            <Intro />
            <Demonstrater />
            <Footer />
        </Container>
    );
};
