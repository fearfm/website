import React from "react"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"
import { Grid, Typography } from "@material-ui/core"
import { AudioplayerContext } from "../../context/Audioplayer"
import MiniControls from "./MiniControls"
import VolumeManager from "./VolumeManager"

const useStyles = makeStyles((theme) => ({
  show: {
    fontSize: "1rem",
    paddingBottom: 20,
  },
  artist: {
    fontSize: "1.2rem",
    color: theme.palette.text.secondary,
  },
  title: {
    padding: "20px 0 10px 0",
    fontSize: "1.4rem",
    fontWeight: 500,
  },
  controlIcon: {
    fontSize: 100,
    cursor: "pointer",
  },
  overlayWrapper: {
    position: "relative",
    width: "100%",
    height: "100%",
    display: "flex",
  },
  overlay: {
    height: "100%",
    display: "none",
    alignItems: "center",
    justifyContent: "center",
    margin: 0,
    padding: 0,
  },
  overlayHover: {
    display: "flex",
    position: "absolute",
    width: "100%",
    height: "100%",
    background: "black",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.6,
    top: 0,
  },
}))

const Player = ({ artist, title, show, image }) => {
  const classes = useStyles()
  const audioplayerContext = React.useContext(AudioplayerContext)
  const [controls, setControls] = React.useState(
    audioplayerContext.playing ? false : true
  )

  const enableControls = () => {
    setControls(true)
  }

  const disableControls = () => {
    if (audioplayerContext.playing) {
      setControls(false)
    }
  }

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography className={classes.show} variant="h2">
          {show}
        </Typography>
      </Grid>
      <Grid item xs={1} />
      <Grid item xs={10}>
        <div
          className={classes.overlayWrapper}
          onMouseEnter={enableControls}
          onMouseLeave={disableControls}
        >
          <img
            style={{ height: "intrinsic" }}
            width="100%"
            src={image}
            alt={artist + " - " + title}
          />
          <div className={controls ? classes.overlayHover : classes.overlay}>
            <MiniControls />
          </div>
        </div>
      </Grid>
      <VolumeManager />
      <Grid item xs={12}>
        <Typography className={classes.title} variant="h1">
          {title}
        </Typography>
        <Typography className={classes.artist} variant="h3">
          {artist}
        </Typography>
      </Grid>
    </Grid>
  )
}

Player.propTypes = {
  show: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}

export default Player
