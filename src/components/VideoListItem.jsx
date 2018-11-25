import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const styles = {
  media: {
    objectFit: "cover"
  }
};

class VideoListItem extends Component {
  render() {
    const { video, onSelect, classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardActionArea
          onClick={() => {
            onSelect(video);
          }}
        >
          <CardMedia
            component="img"
            alt={video.title}
            className={classes.media}
            height="140"
            image={`https://img.youtube.com/vi/${video.youtubeId}/0.jpg`}
            title={video.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {video.title}
            </Typography>
            <Typography component="p">{video.artist}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
}

VideoListItem.propTypes = {
  video: PropTypes.object.isRequired,
  onSelect: PropTypes.func.isRequired
};

export default withStyles(styles)(VideoListItem);
