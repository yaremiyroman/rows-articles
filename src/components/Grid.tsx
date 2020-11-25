import React, { Children } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { isConstructorDeclaration } from 'typescript';

interface IProps {
  children: JSX.Element[] | JSX.Element | any
}

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

const GridedContainer = ({ children }: IProps): any => {
  console.log(``)
  return (
    <div>
      {children.map((child: any): [any] => (
        <span key={child}>
          {child}
        </span>
      ))}
    </div>
)}

  
// const classes = useStyles()
// return (
//   <div className={classes.root} style={gridStyles}>
//     <Grid container spacing={3}>
//       <Grid item xs={12}>
//         <Paper className={classes.paper}> - 1 - </sPaper>
//       </Grid>
//     </Grid>
//   </div>
// )

export default GridedContainer
