import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

import Input from './input.jsx';
import Algopicker from './algopicker.jsx';
import Output from './output.jsx';

export default (props) => {
    const [text, setText] = useState(
        'My name is ComboBasic. I am a term extraction algorithm.'
    );
    const [algo, setAlgo] = useState('combo_basic');
    const [data, setData] = useState([
        ['term extraction', 1.443],
        ['extraction algorithm', 1.443],
        ['term extraction algorithm', 1.299],
    ]);
    const [loadingCounter, setLoadingCounter] = useState(0); // done loading when counter is at 0, adds one for every request sent and removes one for every request not sent
    const [timeout, setTimeoutState] = useState(0);

    function renderNewOutput(algo, text) {
        setLoadingCounter(1);
        if (timeout) {
            clearTimeout(timeout);
        }
        setTimeoutState(setTimeout(() => {renderNewOutputRaw(algo, text)}, 800));
    }

    function renderNewOutputRaw(algo, text) {
        console.log(`Sent! Current loadingCounter=${loadingCounter}`);
        fetch('/ate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                text: text,
                algo: algo,
            }),
        })
            .then((resp) =>
                resp.json().then(({ didSucceed, errorMessage, response }) => {
                    if (didSucceed) {
                    } else {
                        alert(errorMessage);
                    }
                    setData(response);
                    setLoadingCounter(0);
                    console.log(`Received! loadingCounter=${loadingCounter}`)
                })
            )
            .then((data) => {})
            .catch(console.error);
    }

    function handleInputChange(event) {
        let newText = event.target.value;
        setText(newText);
        renderNewOutput(algo, newText);
    }

    function handleAlgoChange(event) {
        let newAlgo = event.target.value;
        setAlgo(newAlgo);
        renderNewOutput(newAlgo, text);
    }

    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <Input handleInputChange={handleInputChange} />
                </Grid>
                <Grid item xs={12} md={4}>
                    <Algopicker 
                        handleAlgoChange={handleAlgoChange}
                        algo={algo}
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <Output data={data} loadingCounter={loadingCounter}/>
                </Grid>
            </Grid>
        </>
    );
};
