import React from 'react'
import { Algopicker, Footer, Input, Intro, Output } from './components'
import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#2980b9',
        },
        secondary: {
            main: '#e5ebeb',
        },
    },
})

export default (props) => (
    <>
        <Algopicker />
        <Intro />
        <Input />
        <Output />
        <Footer />
    </>
)
