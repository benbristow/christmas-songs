import React, { Fragment, Component } from "react";
import {
  withStyles,
  MuiThemeProvider,
  createMuiTheme
} from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import SnowStorm from "react-snowstorm";

import Header from "./components/Header";
import VideoPlayer from "./components/VideoPlayer";
import VideoList from "./components/VideoList";

const theme = createMuiTheme({
  palette: {
    primary: red
  }
});

const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    maxHeight: "100vh",
    minHeight: "100vh"
  }
});

class App extends Component {
  state = { selectedVideo: null };

  render() {
    const { classes } = this.props;
    const { selectedVideo } = this.state;

    return (
      <Fragment>
        <CssBaseline />
        <SnowStorm freezeOnBlur={false} />
        <MuiThemeProvider theme={theme}>
          <div className={classes.root}>
            <Header />

            <Grid container>
              <Grid item xs={2}>
                <VideoList
                  selectedVideo={selectedVideo}
                  onSelect={selectedVideo => this.setState({ selectedVideo })}
                />
              </Grid>

              <Grid item xs={10}>
                <VideoPlayer selectedVideo={selectedVideo} />
              </Grid>
            </Grid>
          </div>
        </MuiThemeProvider>
      </Fragment>
    );
  }
}

export default withStyles(styles)(App);
