import React, { Fragment, Component } from "react";
import { withStyles, MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { shuffle } from "lodash";

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

const styles = () => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    overflow: 'hidden'
  },
  container: {
    flexGrow: 1
  },
  videoListContainer: {
    display: 'flex',
    position: 'relative'
  },
  videoContainer: {
    flex: 1
  },
  video: {
    width: '100%',
    flexGrow: 1
  }
});

class App extends Component {
  constructor(props) {
    super(props);

    const videos = shuffle(Videos);

    let startingVideo = videos[0];
    if (window.location.hash.indexOf("#") === 0) {
      let hashId = window.location.hash.slice(1);
      startingVideo = videos.find(video => video.youtubeId === hashId) || startingVideo;
    }

    this.state = {
      videos,
      selectedVideo: startingVideo,
      videoListShowing: true
    };
    this.updateHashParam();
  }

  componentDidUpdate = () => {
    this.updateHashParam();
  };

  updateHashParam = () => {
    const { selectedVideo } = this.state;
    window.location.hash = `#${selectedVideo.youtubeId}`;
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
                <Grid className={classes.videoListContainer} item xs={2}>
                  <VideoList
                    videos={videos}
                    selectedVideo={selectedVideo}
                    onSelect={video => this.setState({ selectedVideo: video })}
                  />
                </Grid>
              ) : null}

              <Grid className={classes.videoContainer} item xs={videoListShowing ? 10 : 12}>
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
