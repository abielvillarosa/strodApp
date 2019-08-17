import React from 'react';
import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core';
import logo from './images/stro-logo.png';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

const NavBar = () => {
    const classes = useStyles();
    return(
        <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
          <img src= { logo } alt="logo" className={classes.logo}></img>
            {/* <Typography variant="h6" className={classes.title}>
              StrØ
            </Typography> */}
            {/* <Button color="inherit">Login</Button> */}
          </Toolbar>
        </AppBar>
      </div>
    )
}

export default NavBar;