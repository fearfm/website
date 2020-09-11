import React from "react"
import { Link, useLocation } from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import { Tooltip, Typography } from "@material-ui/core"
import Logo from "../logo/Logo"
import IconFacebook from "@material-ui/icons/Facebook"
import IconInstagram from "@material-ui/icons/Instagram"
import MiniControls from "../player/MiniControls"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#000918",
  },
  socialIcons: {
    textAlign: "right",
    flexGrow: 1,
  },
  icon: {
    marginLeft: 10,
    color: "rgba(255, 255, 255, 0.4)",
    "&:hover": {
      color: "#fff",
    },
  },
}))

function TopNav() {
  const classes = useStyles()
  const location = useLocation()

  return (
    <AppBar className={classes.root}>
      <Toolbar>
        <Link to="/">
          <Logo />
        </Link>
        <Typography className={classes.socialIcons}>
          {location.pathname !== "/" && <MiniControls fontSize={24} />}
          <Tooltip title="Fear.FM on Facebook" aria-label="Facebook">
            <a
              href="https://www.facebook.com/Fear.FM/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconFacebook className={classes.icon} />
            </a>
          </Tooltip>
          <Tooltip title="Fear.FM on Instagram">
            <a
              href="https://www.instagram.com/fearfmofficial"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconInstagram className={classes.icon} />
            </a>
          </Tooltip>
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default TopNav
