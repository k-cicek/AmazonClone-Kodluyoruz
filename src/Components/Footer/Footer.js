import React from "react";
import FooterGoUp from "./FooterGoUp";
import FooterNavAccessibility from "./FooterNavAccessibility";
import FooterNavLink from "./FooterNavLink"
import FooterNavNavigation from "./FooterNavNavigation"
import FooterNavCopyright from "./FooterNavCopyright"

function Footer() {
  return (
    <div>
      <FooterGoUp />
      <FooterNavAccessibility />
      <FooterNavLink/>
      <FooterNavNavigation/>
      <FooterNavCopyright/>
    </div>
  );
}

export default Footer;
