import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

import LinkIcon from '@material-ui/icons/Link';
import GitHubIcon from '@material-ui/icons/GitHub';
import DescriptionIcon from '@material-ui/icons/Description';

interface Props {}

const useStyles = makeStyles({
    centered: {
        margin: 'auto',
        width: 'fit-content',
    },
    desc: {
        margin: 'auto',
        width: 'fit-content',
        marginTop: 9,
    },
});

export default (props: Props) => {
    const classes = useStyles();
    return (
        <>
            <div>
                <Container classes={{ root: classes.centered }}>
                    <Typography variant="h3">
                        <Link href="https://pypi.org/project/pyate/">
                            <LinkIcon />
                        </Link>
                        &nbsp;
                        <Link href="https://github.com/kevinlu1248/pyate">
                            <GitHubIcon />
                        </Link>
                        &nbsp;
                        <Link href="https://kevinlu1248.github.io/pyate/">
                            <DescriptionIcon />
                        </Link>
                    </Typography>
                </Container>
            </div>
            <Divider variant="middle" />
            <div>
                <Container classes={{ root: classes.desc }}>
                    <Typography variant="caption" align="center">
                        If something is wrong, feel free to throw a Github issue
                        or email me at&nbsp;
                        <Link href="mailto:kevinlu1248@gmail.com">
                            kevinlu1248@gmail.com
                        </Link>
                    </Typography>
                </Container>
                <Container classes={{ root: classes.centered }}>
                    <Typography variant="caption" align="center">
                        Made by Kevin Lu | Copyright (C) 2021
                    </Typography>
                </Container>
            </div>
        </>
    );
};
