import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';

import LinkIcon from '@material-ui/icons/Link';
import GitHubIcon from '@material-ui/icons/GitHub';
import DescriptionIcon from '@material-ui/icons/Description';

interface Props {}

export default (props: Props) => (
    <>
        <div>
            <Box mx="auto" width="fit-content">
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
            </Box>
        </div>
        <Divider variant="middle" />
        <div>
            <Box mx="auto" width="fit-content" mt={1.5}>
                <Typography variant="caption" align="center">
                    If something is wrong, feel free to throw a Github issue or
                    email me at&nbsp;
                    <Link href="mailto:kevinlu1248@gmail.com">
                        kevinlu1248@gmail.com
                    </Link>
                </Typography>
            </Box>
            <Box mx="auto" width="fit-content">
                <Typography variant="caption" align="center">
                    Made by Kevin Lu | Copyright (C) 2021
                </Typography>
            </Box>
        </div>
    </>
);
