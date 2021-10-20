import React, { useContext } from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function Routes() {
  return (
    <div className="Routes">
      <Router>
        <Switch>
          <Route path="/"></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Routes;
