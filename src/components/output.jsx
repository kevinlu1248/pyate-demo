import React from 'react';
import Typography from '@material-ui/core/Typography';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import LinearProgress from '@material-ui/core/LinearProgress';

export default (props) => (
    <>
        <Typography variant="h5">Your terms:</Typography>
        <Box 
            mt={2} 
            mb={2} 
            border={1} 
            borderRadius={4} 
            borderColor="#c4c4c4"
        >
            <TableContainer style={{height: 500}}>
                <Table aria-label="simple table" size="small" stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell>Term name</TableCell>
                            <TableCell align="right">Termhood</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.data.map((row) => (
                            <TableRow key={row[0]}>
                                <TableCell component="th" scope="row">
                                    <Typography 
                                        variant="inherit"
                                        color={props.loadingCounter > 0 ? "textSecondary": "inherit"}
                                    >
                                        {row[0]}
                                    </Typography>
                                </TableCell>
                                <TableCell align="right">
                                    <Typography 
                                        variant="inherit" 
                                        color={props.loadingCounter > 0 ? "textSecondary": "inherit"}
                                    >
                                        {row[1].toPrecision(4)}
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            {(props.loadingCounter > 0) &&
                <LinearProgress />
            }
        </Box>
    </>
);
