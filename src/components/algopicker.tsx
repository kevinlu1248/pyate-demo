import * as React from 'react';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Alert from '@material-ui/lab/Alert';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const ALGOS = [
    [
        'combo_basic',
        'ComboBasic',
        <>
            ComboBasic is an extension of the Basic algorithm, designed by{' '}
            <Link href="https://arxiv.org/abs/1611.07804">
                Astrakhantsev (2016)
            </Link>
            , which calculates the termhood of a candidate term <i>t</i> by a
            weighted average of the number of times <i>t</i> contains another
            candidate, the number of times another term contains <i>t</i>, and
            the length of <i>t</i> in characters times the log of the frequency
            of <i>t</i>.{' '}
            <Link href="https://kevinlu1248.github.io/pyate/algorithms.html#combobasic">
                More info
            </Link>
        </>,
    ],
    [
        'basic',
        'Basic',
        <>
            The Basic algorithm was designed by{' '}
            <Link href="https://arxiv.org/abs/1611.07804">
                Astrakhantsev (2016)
            </Link>
            , which calculates the termhood of a candidate term <i>t</i> by a
            weighted average of the number of times another term contains{' '}
            <i>t</i>, and the length of <i>t</i> in characters times the log of
            the frequency of <i>t</i>.{' '}
            <Link href="https://kevinlu1248.github.io/pyate/algorithms.html#basic">
                More info
            </Link>
        </>,
    ],
    [
        'cvalues',
        'C-Values',
        <>
            The C-Value algorithm was designed by{' '}
            <Link href="https://www.researchgate.net/publication/220387502_Automatic_Recognition_of_Multi-word_Terms_The_C-value_NC-value_Method">
                Frantzi, Ananiado and Mima (2000)
            </Link>
            , which calculates the termhood of a term <i>t</i> by taking the log
            of words in <i>t</i> times the frequency of <i>t</i> subtracted by
            the mean of the termhoods of every candidate containing <i>t</i>.{' '}
            <Link href="https://kevinlu1248.github.io/pyate/algorithms.html#cvalues">
                More info
            </Link>
        </>,
    ],
    [
        'term_extractor',
        'TermExtractor',
        <>
            The TermExtractor algorithm was designed by{' '}
            <Link href="https://link.springer.com/chapter/10.1007/978-1-84628-858-6_32">
                Sclano and Velardi (2007)
            </Link>
            .{' '}
            <Link href="https://kevinlu1248.github.io/pyate/algorithms.html#cvalues">
                More info
            </Link>
            <br /> <br />
            <Alert severity="warning">
                The TermExtractor algorithm may take up a minute to run since it
                depends on counting terms from a larger general domain. If it
                takes even longer, try restarting the page (Heroku free trial's
                memory limit may have been exceeded).
            </Alert>
        </>,
    ],
    [
        'weirdness',
        'Weirdness',
        <>
            The Weirdness algorithm was designed by{' '}
            <Link href="http://ceur-ws.org/Vol-1031/paper3.pdf">
                Fedorenko, Astrakhantsev and Turdakov (2013)
            </Link>
            , which calculates the termhood of a candidate <i>t</i> by taking
            the quotient of the frequency of <i>t</i> in a technical corpus
            (such as in a medical journal) and the frequency in a general corpus
            (such as random Wikipedia pages).{' '}
            <Link href="https://kevinlu1248.github.io/pyate/algorithms.html#weirdness">
                More info
            </Link>
            <br /> <br />
            <Alert severity="warning">
                The Weirdness algorithm may take up a minute to run since it
                depends on counting terms from a larger general domain. If it
                takes even longer, try restarting the page (Heroku free trial's
                memory limit may have been exceeded).
            </Alert>
        </>,
    ],
];

interface Props {
    algo: string;
    handleAlgoChange: (
        event: any, // todo
        value: string
    ) => void;
}

export default (props: Props) => (
    <>
        <Typography variant="h5">Your algorithm:</Typography>
        <Box mb={1} />
        <FormControl component="fieldset">
            <RadioGroup
                aria-label="position"
                name="position"
                defaultValue="combo_basic"
                onChange={props.handleAlgoChange}
            >
                {ALGOS.map((row) => (
                    <FormControlLabel
                        value={row[0]}
                        control={<Radio color="primary" />}
                        label={row[1]}
                    />
                ))}
            </RadioGroup>
        </FormControl>
        <Box mb={1} />
        {ALGOS.map((row) => {
            if (props.algo == row[0]) {
                return <Typography variant="caption">{row[2]}</Typography>;
            }
        })}
        <Box mb={1} />
        <Typography variant="subtitle1">
            <Button color="primary" disabled>
                Advanced options
            </Button>
        </Typography>
        <Box mb={3} />
    </>
);
