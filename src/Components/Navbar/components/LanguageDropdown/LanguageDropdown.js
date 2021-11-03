import React, { useContext } from "react";
import "./LanguageDropdown.css";
import { languageList } from "../../assets/navbarData";
//import { useAuth } from "../../../../Context/AuthContext";
import { Link } from "react-router-dom";

export default function LanguageDropdown() {
  return (
    <div className="language-dropdown-container">
      <div className="dropdown-language-header">
        <div>
          <span>Change language</span>
          <span>Learn more</span>
        </div>
        <input className="radio-hover" name="English - EN" type="radio" />
        <li>
          <a href="/">English - EN</a>
        </li>
      </div>

      <hr className="horizontal-line" />

      <div className="dropdown-language-selection">
        {languageList.map((list) => (
          <>
            <input key={list.id} name="list.value" type="radio" />
            <li>
              <a className="lines" href={list.url}>
                {list.value}
              </a>
            </li>
          </>
        ))}
      </div>

      <hr className="horizontal-line" />
      <div className="dropdown-language-currency">
        <div className="change-currency lines">
          <span>Change currency</span>
          <span>Learn more</span>
          <span>$ - USD - U.S. Dollar </span>
          <span>Change</span>
        </div>

        <hr className="horizontal-line" />
        <div className="change-currency">
          <span>You are shopping on Amazon.com</span>
        </div>
        <div className="change-currency">
          <span>Change country/region</span>
        </div>
      </div>
    </div>
  );
}
