import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import VideoListItem from "./VideoListItem";

const styles = {
  root: {
    maxHeight: "100%",
    overflowY: "scroll"
  }
};

class VideoList extends Component {
  render() {
    const { classes, videos } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.inner}>
          {videos.map(video => (
            <VideoListItem
              key={video.youtubeId}
              video={video}
              onSelect={this.props.onSelect}
            />
          ))}
        </div>
      </div>
    );
  }
}

VideoList.propTypes = {
  selectedVideo: PropTypes.object.isRequired,
  videos: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired
};

export default withStyles(styles)(VideoList);
