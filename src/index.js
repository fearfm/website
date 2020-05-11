import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";

const root = document.getElementById("root")

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/">
          <Home/>
      </Route>
    </Switch>
  </BrowserRouter>,
  root
);
