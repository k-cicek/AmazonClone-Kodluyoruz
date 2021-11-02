import React from "react";
import "./FooterNavLink.css";
import { logoIcon } from "../Footer/assets/img";
import { Link } from "react-router-dom";

function FooterNavLink() {
  return (
    <div className="footer-link">
      <span>
        <div className="footer_logo">
          <Link to="/">
            <img className="navbar-logo" src={logoIcon} alt="logo" />
          </Link>
        </div>
      </span>
      <span>
        <div>
          <a className="option-border" href="">
            <span>English</span>
          </a>
          <a className="option-border" href="">
            <span> $ USD - U. S. Dollar</span>
          </a>
          <a className="option-border" href="">
            <span>United States</span>
          </a>
        </div>
      </span>
    </div>
  );
}

export default FooterNavLink;
