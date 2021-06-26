import React from 'react';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Link from '@material-ui/core/Link';

import LinkIcon from '@material-ui/icons/Link';
import GitHubIcon from '@material-ui/icons/GitHub';
import DescriptionIcon from '@material-ui/icons/Description';

export default (props) => (
    <>
        <Divider variant="middle" />
        <Typography>
            <Link href="https://pypi.org/project/pyate/">
                <LinkIcon />
            </Link>
            <Link href="https://github.com/kevinlu1248/pyate">
                <GitHubIcon />
            </Link>
            <Link href="https://kevinlu1248.github.io/pyate/">
                <DescriptionIcon />
            </Link>
        </Typography>
        <br />
        <Typography variant="caption" align="center">
            If something is wrong, feel free to throw a Github issue or email me
            at&nbsp;
            <Link href="mailto:kevinlu1248@gmail.com">
                kevinlu1248@gmail.com
            </Link>
        </Typography>
        <br />
        <Typography variant="caption" align="center">
            Made by Kevin Lu | Copyright (C) 2021
        </Typography>
    </>
);
