import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { shuffle } from "lodash";

import VideoListItem from "./VideoListItem";
import Videos from "../data/videos.json";

const styles = {
  root: {
    maxHeight: "100%",
    overflowY: "scroll"
  }
};

class VideoList extends Component {
  constructor(props) {
    super(props);

    let videos = shuffle(Videos);
    this.state = { videos };
  }

  componentDidMount() {
    // Play first video by default
    this.props.onSelect(this.state.videos[0]);
  }

  render() {
    const { classes } = this.props;
    const { videos } = this.state;

    return (
      <div className={classes.root}>
        <div className={classes.inner}>
          {videos.map((video, index) => (
            <VideoListItem
              key={index}
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
  selectedVideo: PropTypes.object,
  onSelect: PropTypes.func.isRequired
};

export default withStyles(styles)(VideoList);
