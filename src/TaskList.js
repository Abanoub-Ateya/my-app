import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography, Chip } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(2),
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

function TaskList() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography variant="h4" gutterBottom>
                        Task List
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        Task 1
                        <Chip label="Not Started" color="secondary" />
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        Task 2
                        <Chip label="In Progress" color="primary" />
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        Task 3
                        <Chip label="Finished" color="default" />
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        Task 4
                        <Chip label="Not Started" color="secondary" />
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

export default TaskList;
