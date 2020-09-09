import React from "react"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline"
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline"
import { AudioplayerContext } from "../../context/Audioplayer"

const useStyles = makeStyles((theme) => ({
  controlIcon: {
    cursor: "pointer",
    fontSize: (props) => props.size ?? 100,
  },
}))

const MiniControls = (props) => {
  const classes = useStyles(props)
  const audioplayerContext = React.useContext(AudioplayerContext)

  const onPlayerPlayHandler = () => {
    audioplayerContext.isPlaying(true)
  }

  const onPlayerPauseHandler = () => {
    audioplayerContext.isPlaying(false)
  }

  return (
    <>
      {audioplayerContext.playing === false && (
        <PlayCircleOutlineIcon
          className={classes.controlIcon}
          onClick={onPlayerPlayHandler}
        />
      )}
      {audioplayerContext.playing === true && (
        <PauseCircleOutlineIcon
          className={classes.controlIcon}
          onClick={onPlayerPauseHandler}
        />
      )}
    </>
  )
}

MiniControls.propTypes = {
  fontSize: PropTypes.number.isRequired,
}

export default MiniControls
