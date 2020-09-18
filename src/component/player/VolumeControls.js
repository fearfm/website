import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { AudioplayerContext } from "../../context/Audioplayer"
import VolumeUpIcon from "@material-ui/icons/VolumeUp"
import VolumeOffIcon from "@material-ui/icons/VolumeOff"

const useStyles = makeStyles((theme) => ({
  controlIcon: {
    color: "rgba(255, 255, 255, 0.4)",
    "&:focus, &:hover": {
      color: "#fff",
    },
    cursor: "pointer",
    marginLeft: 24,
  },
}))

const VolumeControls = () => {
  const classes = useStyles()
  const audioplayerContext = React.useContext(AudioplayerContext)

  const [previousVolume, setPreviousVolume] = React.useState(
    audioplayerContext.volume
  )

  const onMuteHandler = () => {
    setPreviousVolume(audioplayerContext.volume)
    audioplayerContext.setVolume(0)
  }

  const onUnMuteHandler = () => {
    audioplayerContext.setVolume(previousVolume)
  }

  return (
    <>
      {audioplayerContext.volume > 0 && (
        <VolumeUpIcon className={classes.controlIcon} onClick={onMuteHandler} />
      )}
      {audioplayerContext.volume === 0 && (
        <VolumeOffIcon className={classes.controlIcon} onClick={onUnMuteHandler} />
      )}
    </>
  )
}

export default VolumeControls
