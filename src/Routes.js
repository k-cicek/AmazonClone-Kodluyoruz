import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar";

function Routes() {
  return (
    <div className="Routes">
      <Router>
        <Switch>
          <Route path="/">
            <Navbar />
            <Header />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Routes;
