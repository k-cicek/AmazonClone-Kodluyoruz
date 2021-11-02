import React from "react";
import "./FooterNavCopyright.css";

function FooterNavCopyright() {
  return (
    <div className="footer__line">
      <div className="footer__lineRow1">
        <span className="footer__span" />
        <a
          href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&nodeId=508088"
          alt=""
        >
          <span className="footer__lineText1">Condition of Use</span>
        </a>
        <span className="footer__span" />
        <a
          href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_desktop_footer_privacy_notice?ie=UTF8&nodeId=468496"
          alt=""
        >
          <span className="footer__lineText1">Privacy Notice</span>
        </a>
        <span className="footer__span" />
        <a href="https://www.amazon.com/gp/help/customer/display.html" alt="">
          <span className="footer__lineText1">Interest-Based Ads</span>
        </a>
        <span className="footer__span" />
      </div>
      <div className="footer__lineRow2">
        <span className="footer__lineText2">
          © 1996-2021,Amazon.com, Inc.or its affiliates
        </span>
      </div>
    </div>
  );
}

export default FooterNavCopyright;
