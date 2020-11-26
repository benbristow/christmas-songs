import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import IconButton from "@material-ui/core/IconButton";
import ShareIcon from "@material-ui/icons/Share";
import { EmailIcon, EmailShareButton, FacebookIcon, FacebookShareButton, LinkedinIcon, LinkedinShareButton, RedditIcon, RedditShareButton, TumblrIcon, TumblrShareButton, TwitterIcon, TwitterShareButton, WhatsappIcon, WhatsappShareButton } from "react-share";

const styles = theme => ({
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    position: "absolute",
    textAlign: "center",
    width: theme.spacing.unit * 50
  }
});

const ShareModalIcon = ({ classes }) => {
  const [open, setOpen] = useState(false);
  const url = window.location.href;

  const getModalStyle = () => {
    const top = 50;
    const left = 50;

    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`
    };
  }

  return (
    <div>
      <IconButton
        color="inherit"
        aria-label="Open drawer"
        onClick={() => setOpen(true)}
      >
        <ShareIcon />
      </IconButton>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={() => setOpen(false)}
      >
        <div style={getModalStyle()} className={classes.paper}>
          <div className="social-icon">
            <FacebookShareButton url={url}>
              <FacebookIcon size={48} round />
            </FacebookShareButton>
          </div>
          <div className="social-icon">
            <TwitterShareButton url={url}>
              <TwitterIcon size={48} round />
            </TwitterShareButton>
          </div>
          <div className="social-icon">
            <LinkedinShareButton url={url}>
              <LinkedinIcon size={48} round />
            </LinkedinShareButton>
          </div>
          <div className="social-icon">
            <RedditShareButton url={url}>
              <RedditIcon size={48} round />
            </RedditShareButton>
          </div>
          <div className="social-icon">
            <WhatsappShareButton url={url}>
              <WhatsappIcon size={48} round />
            </WhatsappShareButton>
          </div>
          <div className="social-icon">
            <TumblrShareButton url={url}>
              <TumblrIcon size={48} round />
            </TumblrShareButton>
          </div>
          <div className="social-icon">
            <EmailShareButton url={url}>
              <EmailIcon size={48} round />
            </EmailShareButton>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default withStyles(styles)(ShareModalIcon);
