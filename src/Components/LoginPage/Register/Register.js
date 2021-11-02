import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import { useAuth } from "../../../Context/AuthContext";
import { useHistory } from "react-router-dom";

function Register() {
  const { signup } = useAuth();
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [reEnterPassword, SetreEnterPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Sign up code here.
    try {
      if (password === reEnterPassword) {
        await signup(email, password);
        history.push("/login");
      } else {
        alert("password yanlış");
      }
    } catch {
      alert("maili tekrar giriniz");
    }
  };

  return (
    <div className="register">
      <Link to="/">
        <img
          className="register_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="amazon-logo"
        />
      </Link>
      <div className="register_container">
        <h1>Create account</h1>
        <form onSubmit={handleSubmit}>
          <h5>Your name</h5>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="name"
            required
          />
          <h5>Email </h5>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
          />
          <h5>Password </h5>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            required
          />
          <h5>Re-enter password </h5>
          <input
            value={reEnterPassword}
            onChange={(e) => SetreEnterPassword(e.target.value)}
            type="Re-enter password"
            required
          />

          <button type="submit" className="register_signIn">
            Create your Amazon account
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

        <div className="register_divider">
          <p>
            Already have an account?{" "}
            <a href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&nodeId=508088">
              Conditions of Use
            </a>{" "}
          </p>
          <p>
            Buying for work?{" "}
            <a href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&nodeId=468496">
              Privacy Notice.
            </a>
          </p>
        </div>
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

export default Register;
