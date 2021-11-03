import React, { useContext } from "react";
import "./LoginDropdown.css";
import { yourLists, accountList } from "../../assets/navbarData";
//import { useAuth } from "../../../../Context/AuthContext";
import { Link } from "react-router-dom";

export default function LoginDropdown() {
  return (
    <div className="login-dropdown-container">
      <div className="dropdown-header">
        <Link to="/login" type="submit" className="dropdown-login-button">
          Sign In
        </Link>
        <div className="header-text">
          <span>New customer?</span>
          <span>
            <a href="https://www.amazon.com/ap/register?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com%2F%3F_encoding%3DUTF8%26ref_%3Dnav_newcust&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=usflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&">
              Start here.
            </a>
          </span>
        </div>
      </div>
      <hr className="horizontal-line" />
      <div className="dropdown-body">
        <div className="yourLists lines">
          <p className="heading">Your List</p>
          {yourLists.map((list) => (
            <li key={list.id}>
              <a href={list.url}>{list.value}</a>
            </li>
          ))}
        </div>
        <div className="yourAccount lines">
          <p className="heading">Your Account</p>
          {accountList.map((list) => (
            <li key={list.id}>
              <a href={list.url}>{list.value}</a>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
}
