import React from "react";
import { HashRouter as BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Account from "./Components/LoginPage/Account&Login Issues/Account";
import Login from "./Components/LoginPage/Login/Login";
import Password from "./Components/LoginPage/PasswordAssistance/Password";
import Register from "./Components/LoginPage/Register/Register";
import SignIn from "./Components/LoginPage/SignIn/SignIn";
import Products from "./Pages/Products";
import ProductDetail from "./Pages/Products/Components/ProductDetail";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import LoginDropdown from "./Components/Navbar/components/LoginDropdown";

function Routes() {
  return (
    <div className="Routes">
      <BrowserRouter>
        <Navbar />
        <LoginDropdown className="login-sub-nav" />
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
          <Route exact path="/products/:productId">
            <ProductDetail />
          </Route>
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
      </BrowserRouter>
    </div>
  );
}

export default Routes;
