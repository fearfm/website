import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Player from "../../component/player/Player"
import { Box } from "@material-ui/core"
import { NowplayingContext } from "../../context/Nowplaying"

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
  },
}))

function Home() {
  const nowplaying = React.useContext(NowplayingContext)
  const classes = useStyles()
  return (
    <Grid
      className={classes.root}
      container
      direction="row"
      justify="center"
      alignItems="center"
    >
      <Grid item xs={12} sm={8} md={4}>
        {nowplaying !== null && (
          <Box justifyContent="center" alignItems="center" textAlign="center">
            <Player
              image={nowplaying.track.image}
              artist={nowplaying.track.artist}
              show={nowplaying.tracklist.artist + " - " + nowplaying.tracklist.title}
              title={nowplaying.track.title}
            />
          </Box>
        )}
      </Grid>
    </Grid>
  )
}

export default Home
