import * as React from 'react'; 
import { Demonstrater, Footer, Intro } from './components';
import { createMuiTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

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

export default (props: Props) => (
    <Box py={3} px={6}>
        <Intro />
        <Demonstrater />
        <Footer />
    </Box>
);
