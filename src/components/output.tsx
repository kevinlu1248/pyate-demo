import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Container from '@material-ui/core/Container';
import LinearProgress from '@material-ui/core/LinearProgress';

interface Props {
    data: Array<[string, number]>;
    loadingCounter: number;
}

const useStyles = makeStyles({
    container: {
        marginTop: 12,
        marginBottom: 12,
        border: '1px solid #c4c4c4',
        borderRadius: 4,
        padding: 0,
    },
    tableContainer: {
        height: 500,
    },
});

export default (props: Props) => {
    const classes = useStyles();
    return (
        <>
            <Typography variant="h5">Your terms:</Typography>
            <Container classes={{ root: classes.container }}>
                <TableContainer classes={{ root: classes.tableContainer }}>
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
                                            color={
                                                props.loadingCounter > 0
                                                    ? 'textSecondary'
                                                    : 'inherit'
                                            }
                                        >
                                            {row[0]}
                                        </Typography>
                                    </TableCell>
                                    <TableCell align="right">
                                        <Typography
                                            variant="inherit"
                                            color={
                                                props.loadingCounter > 0
                                                    ? 'textSecondary'
                                                    : 'inherit'
                                            }
                                        >
                                            {row[1].toPrecision(4)}
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                {props.loadingCounter > 0 && <LinearProgress />}
            </Container>
        </>
    );
};
