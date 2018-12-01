import React from "react";
import PropTypes from "prop-types";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";

const Header = ({ onMenuIconClicked }) => (
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
    </Toolbar>
  </AppBar>
);

Header.propTypes = {
  onMenuIconClicked: PropTypes.func.isRequired
};

export default Header;
