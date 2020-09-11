import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { MenuList, MenuItem, Grid } from "@material-ui/core"
import {useAuth0, withAuthenticationRequired} from "@auth0/auth0-react";

const useStyles = makeStyles((theme) => ({
  root: {},
}))

export const Dashboard = withAuthenticationRequired(() => {
  const classes = useStyles()
  const { user, logout } = useAuth0();

  const logoutClickHandler = () => {
    logout({ returnTo: window.location.origin });
  };

  return (
    <Grid
      className={classes.root}
      container
      direction="row"
      justify="center"
      alignItems="center"
    >
      <Grid item xs={12} md={8}>
        <MenuList>
          <MenuItem>My sets</MenuItem>
          <MenuItem onClick={logoutClickHandler}>Logout</MenuItem>
        </MenuList>
      </Grid>
    </Grid>
  )
});
