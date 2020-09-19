import React from "react"
import TopNav from "../../component/navbar/Topnav"
import { MenuList, MenuItem, Grid } from "@material-ui/core"
import NoMatch from "./NoMatch"
import Home from "../pages/Home"
import { makeStyles } from "@material-ui/core/styles"
import Footer from "../../component/footer/Footer"
import { Route, Switch } from "react-router-dom"
import PrivacyPolicy from "../pages/PrivacyPolicy"
import TermsAndConditions from "../pages/TermsAndConditions"
import { Dashboard } from "../pages/Admin/Dashboard"
import { useAuth0 } from "@auth0/auth0-react"
import { MySets } from "../pages/Admin/MySets"
import { Add } from "../pages/Admin/MySets/Add"
import { Link } from "react-router-dom"

const useStyles = makeStyles({
  root: {
    height: "100%",
  },
  content: {
    minHeight: "calc(100vh - 100px)",
    padding: "100px 20px",
  },
  patreon: {
    width: 310,
  },
})

function Layout() {
  const classes = useStyles()
  const { logout } = useAuth0()

  const logoutClickHandler = () => {
    logout({ returnTo: window.location.origin })
  }

  return (
    <div className={classes.root}>
      <TopNav />
      <Grid container direction="row" justify="center" alignItems="stretch">
        <Grid item xs={12} className={classes.content}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/privacy-policy">
              <PrivacyPolicy />
            </Route>
            <Route exact path="/terms-and-conditions">
              <TermsAndConditions />
            </Route>
            <Route path="/admin">
              <Grid container direction="row" justify="center" alignItems="center">
                <Grid item xs={12} md={2}>
                  <MenuList>
                    <Link to="/admin/my-sets">
                      <MenuItem>My sets</MenuItem>
                    </Link>
                    <MenuItem onClick={logoutClickHandler}>Logout</MenuItem>
                  </MenuList>
                </Grid>
                <Grid item xs={12} md={10}>
                  <Route exact path="/admin">
                    <Dashboard />
                  </Route>
                  <Route exact path="/admin/my-sets">
                    <MySets />
                  </Route>
                  <Route exact path="/admin/my-sets/add">
                    <Add />
                  </Route>
                </Grid>
              </Grid>
            </Route>
            <Route>
              <NoMatch />
            </Route>
          </Switch>
        </Grid>
      </Grid>
      <Footer />
    </div>
  )
}

export default Layout
