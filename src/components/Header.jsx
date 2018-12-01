import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";

import ShareModalIcon from "./ShareModalIcon";

const styles = {
  grow: {
    flexGrow: 1
  }
};

const Header = ({ classes, onMenuIconClicked }) => (
  <AppBar position="static" color="primary">
    <Toolbar variant="dense">
      <IconButton
        color="inherit"
        aria-label="Open drawer"
        onClick={onMenuIconClicked}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" color="inherit">
        Christmas Songs
      </Typography>
      <div className={classes.grow} />
      <ShareModalIcon />
    </Toolbar>
  </AppBar>
);

Header.propTypes = {
  onMenuIconClicked: PropTypes.func.isRequired
};

export default withStyles(styles)(Header);
