import React, { Fragment, Component } from "react";
import {
  withStyles,
  MuiThemeProvider,
  createMuiTheme
} from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { sample, shuffle } from "lodash";

import Header from "./components/Header";
import VideoPlayer from "./components/VideoPlayer";
import VideoList from "./components/VideoList";
import Videos from "./data/videos";

const theme = createMuiTheme({
  palette: {
    primary: red
  },
  typography: {
    useNextVariants: true
  }
});

const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    maxHeight: "100vh",
    minHeight: "100vh"
  },
  container: {
    flexGrow: 1
  }
});

class App extends Component {
  constructor(props) {
    super(props);

    let videos = shuffle(Videos);
    this.state = { videos, selectedVideo: videos[0], videoListShowing: true };
  }

  onVideoSelect = video => {
    let videos = shuffle(Videos); // If select video, shuffle

    this.setState({ selectedVideo: video, videos });
  };

  onVideoFinished = () => {
    const { videos, selectedVideo } = this.state;

    let currentVideoIndex = videos.indexOf(selectedVideo);
    if (currentVideoIndex < videos.length - 1) {
      this.setState({ selectedVideo: videos[currentVideoIndex + 1] });
    } else {
      this.setState({ selectedVideo: videos[0] });
    }
  };

  render() {
    const { classes } = this.props;
    const { videos, selectedVideo, videoListShowing } = this.state;

    return (
      <Fragment>
        <CssBaseline />
        <MuiThemeProvider theme={theme}>
          <div className={classes.root}>
            <Header
              onMenuIconClicked={() =>
                this.setState({ videoListShowing: !videoListShowing })
              }
            />

            <Grid container className={classes.container}>
              {videoListShowing ? (
                <Grid item xs={2}>
                  <VideoList
                    videos={videos}
                    selectedVideo={selectedVideo}
                    onSelect={this.onVideoSelect}
                  />
                </Grid>
              ) : null}

              <Grid item xs={videoListShowing ? 10 : 12}>
                <VideoPlayer
                  selectedVideo={selectedVideo}
                  onVideoFinished={this.onVideoFinished}
                />
              </Grid>
            </Grid>
          </div>
        </MuiThemeProvider>
      </Fragment>
    );
  }
}

export default withStyles(styles)(App);
