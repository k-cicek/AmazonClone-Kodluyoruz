import React from "react";
import { HashRouter as BrowserRouter, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./Context/AuthContext";
import Home from "./Pages/Home";
import Account from "./Components/LoginPage/Account&Login Issues/Account";
import ForgotPassword from "./Components/LoginPage/ForgotPassword/ForgotPassword";
import Login from "./Components/LoginPage/Login/Login";
import Register from "./Components/LoginPage/Register/Register";
import SignIn from "./Components/LoginPage/SignIn/SignIn";
import Products from "./Pages/Products";
import ProductDetail from "./Pages/Products/Components/ProductDetail";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import LoginDropdown from "./Components/Navbar/components/LoginDropdown";
import Footer from "./Components/Footer";

function Routes() {
  return (
    <div className="Routes">
      <BrowserRouter>
        <AuthProvider>
          <Switch>
            <Route exact path="/">
              <Navbar />
              <LoginDropdown className="login-sub-nav" />
              <Header />
              <Home />
              <Footer />
            </Route>
            <Route exact path="/products">
              <Navbar />
              <LoginDropdown className="login-sub-nav" />
              <Header />
              <Products />
              <Footer />
            </Route>
            <Route exact path="/products/:productId">
              <Navbar />
              <LoginDropdown className="login-sub-nav" />
              <Header />
              <ProductDetail />
              <Footer />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signIn">
              <SignIn />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="/forgotPassword">
              <ForgotPassword />
            </Route>
            <Route exact path="/account">
              <Account />
            </Route>
          </Switch>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default Routes;
