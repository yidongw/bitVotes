import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  link: {
    color: "white",
    textDecoration: "none",
  }
};

function Layout(props) {


    const { classes } = props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>

            <Typography variant="h6" color="inherit" className={classes.grow}>
              <Link to="/" className={classes.link}>
                BCH POLL
              </Link>
            </Typography>

            <Link to="/create" className={classes.link}>
              <Button color="inherit">
                Create
              </Button>
            </Link>
          </Toolbar>
        </AppBar>
        {props.children}
      </div>
    );

}

export default withStyles(styles)(Layout);
