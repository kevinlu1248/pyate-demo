import React from 'react';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

const ALGOS = [
    ["combo_basic", "ComboBasic"],
    ["basic", "Basic"],
    ["c_values", "C-Values"],
    ["term_extractor", "TermExtractor"],
    ["weirdness", "Weirdness"]
]

export default (props) => (
    <>
        <Typography variant="h5">Your algorithm:</Typography>
        <Box mb={1}/>
        <FormControl component="fieldset">
            <RadioGroup
                aria-label="position"
                name="position"
                defaultValue="combo_basic"
                onChange={props.handleAlgoChange}
            >
                {ALGOS.map(row => 
                    <FormControlLabel
                        value={row[0]}
                        control={<Radio color="primary" />}
                        label={row[1]}
                    />
                )}
            </RadioGroup>
        </FormControl>
        <Typography variant="subtitle1">
            <Button color="primary" disabled>Advanced options</Button>
        </Typography>
        <Box mb={3}/>
    </>
);
