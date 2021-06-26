import React from 'react';
import { Demonstrater, Footer, Intro } from './components';
import { createMuiTheme } from '@material-ui/core/styles';

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

export default (props) => (
    <>
        <Intro />
        <Demonstrater />
        <Footer />
    </>
);
