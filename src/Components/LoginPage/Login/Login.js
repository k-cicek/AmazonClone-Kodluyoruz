import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import downButton from "./downButton.svg";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";

/********  Login ********/
function Login({ loginUser, errorSetting }) {
  const [email, setEmail] = useState("");
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Sign up code here.

    try {
      if (email) {
        alert("success");
        history.push("/signIn");
      } else;
    } catch {
      alert("yan");
    }
  };

  useEffect(() => {
    localStorage.setItem("email", email);
  });

  /********  Dropdown Button ********/
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(selectedOption);
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="amazon-logo"
        />
      </Link>
      <div className="login_container">
        <h1>Sign-In</h1>
        <form onSubmit={handleSubmit}>
          <h5>Email or mobile phone number</h5>
          <input
            type="text"
            name="email"
            placeholder=""
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button type="submit" className="login_signIn">
            Continue
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon's{" "}
          <a href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&nodeId=508088">
            Conditions of Use
          </a>{" "}
          and{" "}
          <a href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&nodeId=468496">
            Privacy Notice.
          </a>
        </p>
        <div className="dropdown_container">
          <img src={downButton} alt="" className={`icon ${isOpen && "open"}`} />

          <span className="dropdown_button" onClick={toggling}>
            {selectedOption || "Need help?"}
          </span>
          {isOpen && (
            <div className="dropdown">
              <div className="dropdown_link" onClick={onOptionClicked}>
                <span>
                  <Link to="/forgotPassword">Forgot your password?</Link>
                </span>
                <span>
                  <Link to="/account">Other issues with Sign-In</Link>
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="login_divider">
        <h5>New to Amazon?</h5>
      </div>
      <Link to="/register">
        <button className="login_register">Create your Amazon account</button>
      </Link>

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

export default Login;
