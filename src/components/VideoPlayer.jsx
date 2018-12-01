import React, { Component } from "react";
import PropTypes from "prop-types";
import YouTube from "react-youtube";

class VideoPlayer extends Component {
  youtubeOptions = {
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

  youtubePlayerReady = event => {
    const { onVideoFinished } = this.props;

    if (typeof onVideoFinished === "function") {
      event.target.addEventListener("onStateChange", videoState => {
        if (videoState.data === 0) {
          onVideoFinished();
        }
      });
    }
  };

  render() {
    const { selectedVideo } = this.props;

    return selectedVideo ? (
      <YouTube
        videoId={selectedVideo.youtubeId}
        opts={this.youtubeOptions}
        onReady={this.youtubePlayerReady}
      />
    ) : null;
  }
}

VideoPlayer.propTypes = {
  selectedVideo: PropTypes.object.isRequired,
  onVideoFinished: PropTypes.func
};

export default VideoPlayer;
