import React from 'react';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Link from '@material-ui/core/Link';
import { spacing } from '@material-ui/system';

export default (props) => (
    <>
        <Typography variant="h5">Your algorithm:</Typography>
        <FormControl component="fieldset">
            <RadioGroup
                row
                aria-label="position"
                name="position"
                defaultValue="combo_basic"
                onChange={props.handleAlgoChange}
            >
                <FormControlLabel
                    value="combo_basic"
                    control={<Radio color="primary" />}
                    label="ComboBasic"
                />
                <FormControlLabel
                    value="basic"
                    control={<Radio color="primary" />}
                    label="Basic"
                />
                <FormControlLabel
                    value="cvalue"
                    control={<Radio color="primary" />}
                    label="C-Value"
                />
                <FormControlLabel
                    value="term_extractor"
                    control={<Radio color="primary" />}
                    label="Term Extractor"
                />
                <FormControlLabel
                    value="weirdness"
                    control={<Radio color="primary" />}
                    label="Weirdness"
                />
            </RadioGroup>
        </FormControl>
        <Typography variant="subtitle1" mb={10}>
            <Link href="#">Advanced options</Link>
        </Typography>
    </>
);
