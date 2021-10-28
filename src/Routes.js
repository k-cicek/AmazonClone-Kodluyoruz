import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";

function Routes() {
  return (
    <div className="Routes">
      <Router>
        <Switch>
          <Route path="/">
            <Navbar />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Routes;
