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

  render() {
    const { selectedVideo } = this.props;

    if (!selectedVideo) {
      return null;
    }

    return (
      <YouTube
        videoId={selectedVideo.youtubeId}
        opts={this.youtubeOptions}
        onReady={this._onReady}
      />
    );
  }
}

VideoPlayer.propTypes = {
  selectedVideo: PropTypes.object
};

export default VideoPlayer;
