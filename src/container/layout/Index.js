import React from "react"
import TopNav from "../../component/navbar/Topnav"
import Grid from "@material-ui/core/Grid"
import NoMatch from "./NoMatch"
import Home from "../pages/Home"
import { makeStyles } from "@material-ui/core/styles"
import Footer from "../../component/footer/Footer"
import { Route, Switch } from "react-router-dom"
import PrivacyPolicy from "../pages/PrivacyPolicy"
import TermsAndConditions from "../pages/TermsAndConditions"

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
