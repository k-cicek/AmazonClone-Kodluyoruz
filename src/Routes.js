import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Account from "./Components/LoginPage/Account&Login Issues/Account";
import ForgotPassword from "./Components/LoginPage/ForgotPassword/ForgotPassword";
import Login from "./Components/LoginPage/Login/Login";
import Register from "./Components/LoginPage/Register/Register";
import SignIn from "./Components/LoginPage/SignIn/SignIn";
import { AuthProvider } from "./Context/AuthContext";

function Routes() {
  return (
    <div className="Routes">
      <AuthProvider>
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
              <ForgotPassword />
            </Route>
            <Route path="/account">
              <Account />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default Routes;
