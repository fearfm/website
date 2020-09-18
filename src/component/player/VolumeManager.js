import React from "react"
import { makeStyles, withStyles } from "@material-ui/core/styles"
import { Grid, Slider } from "@material-ui/core"
import { AudioplayerContext } from "../../context/Audioplayer"
import VolumeControls from "./VolumeControls"

const useStyles = makeStyles({
  volumeSliderWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
})

const VolumeSlider = withStyles({
  root: {
    margin: "20px 0",
    "&$vertical": {
      width: 8,
    },
  },
  thumb: {
    height: 16,
    width: 16,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -4,
    marginLeft: -8,
    "&:focus, &:hover": {
      boxShadow: "0px 0px 0px 8px rgba(255, 255, 255, 0.16)",
    },
  },
  track: {
    borderRadius: 4,
  },
  rail: {
    borderRadius: 4,
  },
  vertical: {
    padding: 0,
    marginLeft: 24,
    "& $rail": {
      width: 8,
    },
    "& $track": {
      width: 8,
    },
    "& $thumb": {
      marginLeft: -4,
      marginBottom: -11,
    },
  },
})(Slider)

const VolumeManager = () => {
  const classes = useStyles()

  const audioplayerContext = React.useContext(AudioplayerContext)

  const onVolumeChangeHandler = (event, value) => {
    const volume = value / 100
    audioplayerContext.setVolume(volume)
  }

  const getPlayerVolumeLabel = (value) => {
    return Math.round(value) + "%"
  }

  return (
    <Grid item xs={1} className={classes.volumeSliderWrapper}>
      <VolumeSlider
        orientation="vertical"
        onChange={onVolumeChangeHandler}
        value={audioplayerContext.volume * 100}
        valueLabelDisplay="auto"
        valueLabelFormat={getPlayerVolumeLabel}
        aria-labelledby="vertical-slider"
      />
      <VolumeControls />
    </Grid>
  )
}

export default VolumeManager
