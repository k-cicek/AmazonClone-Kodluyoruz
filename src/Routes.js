import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Account from "./Components/LoginPage/Account&Login Issues/Account";
import Login from "./Components/LoginPage/Login/Login";
import Password from "./Components/LoginPage/PasswordAssistance/Password";
import Register from "./Components/LoginPage/Register/Register";
import SignIn from "./Components/LoginPage/SignIn/SignIn";

function Routes() {
  return (
    <div className="Routes">
      <Router>
        <Switch>
        <Route path="/login">
            <Login />
          </Route>
          <Route path="/signIn">
            <SignIn />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/forgotPassword">
            <Password />
          </Route>
          <Route path="/account">
            <Account />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Routes;
