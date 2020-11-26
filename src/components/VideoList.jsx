import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import VideoListItem from "./VideoListItem";

const styles = {
  root: {
    overflowY: 'scroll',
    position: 'absolute',
    maxHeight: '100%'
  }
};

const VideoList = ({ classes, videos, onSelect }) => (
  <div className={classes.root}>
    {videos.map(video => (
      <VideoListItem
        key={video.youtubeId}
        video={video}
        onSelect={onSelect}
      />
    ))}
  </div>
);

VideoList.propTypes = {
  selectedVideo: PropTypes.object.isRequired,
  videos: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired
};

export default withStyles(styles)(VideoList);
