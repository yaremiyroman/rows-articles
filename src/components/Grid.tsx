import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);

const gridStyles = {
   'display': 'flex',
   'align-items': 'center',
   'justify-content': 'center',
   'width': '100%',
   'height': '100%',
   'padding': '10px',
   'margin': '0',
}

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root} style={gridStyles}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}> - 1 - </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}> - 6 - </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}> - 6 - </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}> - 3 - </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}> - 3 - </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}> - 3 - </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}> - 3 - </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
