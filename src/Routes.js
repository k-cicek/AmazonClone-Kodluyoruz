import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";

function Routes() {
  return (
    <div className="Routes">
      <Router>
        <Switch>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Routes;
