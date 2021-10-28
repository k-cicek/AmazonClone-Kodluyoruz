import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import {
  logoIcon,
  locationIcon,
  cartIcon,
  searchIcon,
} from "./assets/img/index";
import { categoriesList } from "./assets/navbarData";

function Navbar() {
  return (
    <nav>
      <div id="nav-belt">
        <div className="nav-left">
          <div className="logo-container">
            <Link className="hover-white-border" to="/">
              <img className="navbar-logo" src={logoIcon} alt="logo" />
            </Link>
          </div>

          <div>
            <Link
              className="location-container hover-white-border"
              to="/location"
            >
              <div className="location-logo-container">
                <img
                  className="location-logo"
                  src={locationIcon}
                  alt="location"
                />
              </div>

              <div className="lines-style ">
                <span className="first-line">Deliver to</span>
                <span className="second-line"> Turkey</span>
              </div>
            </Link>
          </div>
        </div>
        <div className="nav-fill">
          <form className="nav-searchbar-form searchbar-container">
            <select className="categories" title="Search in">
              {categoriesList.map((category) => (
                <option key={category.id}> {category.value} </option>
              ))}
            </select>

            <input className="searchbar-input" type="text" />

            <button className="searchIcon-container">
              <img className="search-icon" src={searchIcon} alt="search" />
            </button>
          </form>
        </div>
        <div className="nav-right">
          <div className=" language-container">Flag</div>
          <div className=" signIn-container ">
            <Link className="hover-white-border" to="/login">
              <div className="lines-style ">
                <span className="first-line">Hello, Sign in</span>
                <span className="second-line arrow-bottom">
                  Accounts & Lists
                </span>
              </div>
            </Link>
          </div>
          <Link className="hover-white-border" to="/returns">
            <div className=" returns-container lines-style ">
              <span className="first-line">Returns</span>
              <span className="second-line">& Orders</span>
            </div>
          </Link>
          <Link className="hover-white-border" to="/">
            <div className=" cart-container">
              <div className=" cart-count-container">
                <span className="cart-count">2</span>
                <span className="cartIcon-container">
                  <img className="cartIcon" src={cartIcon} alt="cart" />
                </span>
              </div>
              <div className=" cart-text-container">
                <span className="first-line"> </span>
                <span className="second-line">Cart</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;