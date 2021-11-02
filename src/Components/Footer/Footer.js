import React from "react";
import FooterGoUp from "./FooterGoUp";
import FooterNavAccessibility from "./FooterNavAccessibility";
import FooterNavLink from "./FooterNavLink";
import FooterNavNavigation from "./FooterNavNavigation";
import FooterNavCopyright from "./FooterNavCopyright";
import "./Footer.css";
function Footer() {
  return (
    <div className="main-footer">
      <FooterGoUp />
      <FooterNavAccessibility />
      <FooterNavLink />
      <FooterNavNavigation />
      <FooterNavCopyright />
    </div>
  );
}

export default Footer;
