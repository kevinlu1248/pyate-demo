import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

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

    function renderNewOutput(algo, text) {
        setLoadingCounter(loadingCounter + 1);
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
                    setLoadingCounter(loadingCounter - 1);
                })
            )
            .then((data) => {})
            .catch(console.error);
    }

    function handleInputChange(event) {
        let newText = event.target.value;
        renderNewOutput(algo, newText);
        setText(newText);
    }

    function handleAlgoChange(event) {
        let newAlgo = event.target.value;
        renderNewOutput(newAlgo, text);
        setAlgo(newAlgo);
    }

    return (
        <>
            <Input handleInputChange={handleInputChange} />
            <Algopicker handleAlgoChange={handleAlgoChange} />
            <Output data={data} loadingCounter={loadingCounter}/>
        </>
    );
};
