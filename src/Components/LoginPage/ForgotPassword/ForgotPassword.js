import React from "react";
import { Link } from "react-router-dom";
import "./ForgotPassword.css";

function ForgotPassword() {
  return (
    <div className="forgotPassword">
      <Link to="/">
        <img
          className="forgotPassword_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="amazon-logo"
        />
      </Link>
      <div className="forgotPassword_container">
        <h1>Password assistance</h1>
        <p>
          Enter the email address or mobile phone number associated with your
          Amazon account.
        </p>
        <form>
          <h5>Email or mobile phone number</h5>
          <input type="text" name="email" placeholder="" value="" />
          <button type="submit" className="forgotPassword_signIn">
            Continue
          </button>
        </form>
      </div>
      <div className="forgotPassword_change">
      <h4>Has your email or mobile number changed?</h4>
        <p>
          If you no longer use the email address associated with your Amazon
          account, you may contact{" "}
          <a href="https://www.amazon.com/gp/help/customer/account-issues/ref=ap_cs_forgot_pwd?ie=UTF8">
            Customer Service
          </a>{" "}
          for help restoring access to your account.
        </p>
      </div>

      <hr className="line" />
      <div class="footer">
        <p>
          <a href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_desktop_footer_cou?ie=UTF8&nodeId=508088">
            Conditions of Use
          </a>
          <a href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_desktop_footer_privacy_notice?ie=UTF8&nodeId=468496">
            Notice of Use
          </a>
          <a href="https://www.amazon.com/gp/help/customer/display.html">
            Help
          </a>
        </p>
        <p>© 1996-2021, Amazon.com, Inc. or its affiliates</p>
      </div>
    </div>
  );
}

export default ForgotPassword;
