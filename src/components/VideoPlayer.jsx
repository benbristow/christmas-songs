import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import YouTube from "react-youtube";

const styles = () => ({
  container: {
    height: '100%'
  }
});

const youtubeOptions = {
  height: "100%",
  width: "100%",
  playerVars: {
    autoplay: 1,
    controls: 1,
    disablekb: 1,
    iv_load_policy: 3, //Hide annotations
    modestbranding: 1
  }
};

export const VideoPlayer = ({ classes, selectedVideo, onVideoFinished }) => {
  const youtubePlayerReady = event => {
    if (typeof onVideoFinished === "function") {
      event.target.addEventListener("onStateChange", videoState => {
        if (videoState.data === 0) {
          onVideoFinished();
        }
      });
    }
  }


  return selectedVideo ? (
    <YouTube
      containerClassName={classes.container}
      videoId={selectedVideo.youtubeId}
      opts={youtubeOptions}
      onReady={youtubePlayerReady}
    />
  ) : null;
}

VideoPlayer.propTypes = {
  selectedVideo: PropTypes.object.isRequired,
  onVideoFinished: PropTypes.func
};

export default withStyles(styles)(VideoPlayer);
