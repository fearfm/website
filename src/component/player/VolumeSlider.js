import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import { Grid, Slider } from "@material-ui/core"
import { AudioplayerContext } from "../../context/Audioplayer"
import VolumeUpIcon from "@material-ui/icons/VolumeUp"
import VolumeOffIcon from "@material-ui/icons/VolumeOff"

const VolumeSlider = withStyles({
  root: {
    color: "#52af77",
    height: 8,
    "&$vertical": {
      width: 8,
    },
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover": {
      boxShadow: "0px 0px 0px 8px rgba(84, 199, 97, 0.16)",
    },
    "&$active": {
      boxShadow: "0px 0px 0px 12px rgba(84, 199, 97, 0.16)",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
  vertical: {
    "& $rail": {
      width: 8,
    },
    "& $track": {
      width: 8,
    },
    "& $thumb": {
      marginLeft: -8,
      marginBottom: -11,
    },
  },
})(Slider)

// const useStyles = makeStyles((theme) => ({
//   show: {
//     fontSize: "1rem",
//     paddingBottom: 20,
//   },
//   artist: {
//     fontSize: "1.2rem",
//     color: theme.palette.text.secondary,
//   },
//   title: {
//     padding: "20px 0 10px 0",
//     fontSize: "1.4rem",
//     fontWeight: 500,
//   },
//   volumeSlider: {
//     margin: "20px 0",
//     width: "10px",
//   },
//   volumeSliderWrapper: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//   },
//   controlIcon: {
//     fontSize: 100,
//     cursor: "pointer",
//   },
//   overlayWrapper: {
//     position: "relative",
//     width: "100%",
//     height: "100%",
//     display: "flex",
//   },
//   overlay: {
//     height: "100%",
//     display: "none",
//     alignItems: "center",
//     justifyContent: "center",
//     margin: 0,
//     padding: 0,
//   },
//   overlayHover: {
//     display: "flex",
//     position: "absolute",
//     width: "100%",
//     height: "100%",
//     background: "black",
//     justifyContent: "center",
//     alignItems: "center",
//     opacity: 0.6,
//     top: 0,
//   },
// }))

const VolumeManager = ({ artist, title, show, image }) => {
  // const classes = useStyles()

  const audioplayerContext = React.useContext(AudioplayerContext)
  // const [controls, setControls] = React.useState(
  //   audioplayerContext.playing ? false : true
  // )

  const [muted, setMuted] = React.useState(false)

  const onVolumeChangeHandler = (event, value) => {
    setMuted(value > 0 ? false : true)
    const volume = value / 100
    audioplayerContext.setVolume(volume)
  }

  const getPlayerVolumeLabel = (value) => {
    return Math.round(value) + "%"
  }

  // const enableControls = () => {
  //   setControls(true)
  // }

  // const disableControls = () => {
  //   if (audioplayerContext.playing) {
  //     setControls(false)
  //   }
  // }

  return (
    <VolumeSlider
      orientation="vertical"
      onChange={onVolumeChangeHandler}
      value={audioplayerContext.volume * 100}
      valueLabelDisplay="auto"
      valueLabelFormat={getPlayerVolumeLabel}
      aria-labelledby="vertical-slider"
    />
  )
}

VolumeManager.propTypes = {
  show: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}

export default VolumeManager
