import React from "react"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"
import { CircularProgress } from "@material-ui/core"
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline"
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline"
import { AudioplayerContext } from "../../context/Audioplayer"

const useStyles = makeStyles((theme) => ({
  controlIcon: {
    cursor: "pointer",
    fontSize: (props) => props.size,
  },
  circularProgress: {
    color: theme.palette.primary.contrastText,
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

  let icon = null
  if (audioplayerContext.loading) {
    icon = (
      <CircularProgress className={classes.circularProgress} size={props.size - 2} />
    )
  } else {
    if (audioplayerContext.playing) {
      icon = (
        <PauseCircleOutlineIcon
          className={classes.controlIcon}
          onClick={onPlayerPauseHandler}
        />
      )
    } else {
      icon = (
        <PlayCircleOutlineIcon
          className={classes.controlIcon}
          onClick={onPlayerPlayHandler}
        />
      )
    }
  }

  return icon
}

MiniControls.defaultProps = {
  size: 100,
}

MiniControls.propTypes = {
  size: PropTypes.number,
}

export default MiniControls
