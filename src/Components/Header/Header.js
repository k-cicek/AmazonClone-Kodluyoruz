import React from "react";
import "./Header.css";
import { hamburgerMenu } from "./assets/img/index";
function Header() {
  return (
    <div id="nav-header">
      <div className="nav-left">
        <a className="nav-hamburger-menu hover-white-border">
          <img className="hamburger-menu" src={hamburgerMenu} alt="cart" />

          <div className="menu-line">All</div>
        </a>
      </div>
      <div className="nav-fill">
        <a
          className="options-line hover-white-border"
          href="https://www.amazon.com/events/epicdeals?ref_=nav_cs_gb_5d8ef71f209b44c2acab6343d6a5a05e"
        >
          <div className="">Today's Deals</div>
        </a>
        <a
          className="options-line hover-white-border"
          href="https://www.amazon.com/gp/help/customer/display.html?nodeId=508510&ref_=nav_cs_customerservice_2bf4fe8c5ec54e6bae2d1c24043f012b"
        >
          <div className="">Customer Service</div>
        </a>
        <a
          className="options-line hover-white-border"
          href="https://www.amazon.com/registries?_encoding=UTF8&redirect=true&ref_=nav_cs_registry_1c421982e26d4ec48ca364be68f201b5"
        >
          <div className="">Registry</div>
        </a>
        <a
          className="options-line hover-white-border"
          href="https://www.amazon.com/gift-cards/b/?ie=UTF8&node=2238192011&ref_=nav_cs_gc_4fb606b1a14b44e4823e00c03fc71f47"
        >
          <div className="">Gift Cards</div>
        </a>
        <a
          className="options-line hover-white-border"
          href="https://www.amazon.com/b/?_encoding=UTF8&ld=AZUSSOA-sell&node=12766669011&ref_=nav_cs_sell_9321d964d1ab428b8d83e204c043fc01"
        >
          <div className="">Sell</div>
        </a>
      </div>
      <div className="nav-right"></div>
    </div>
  );
}

export default Header;
