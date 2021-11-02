import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../LoginModal/LoginModal";
import "./SignIn.css";
import downButton from "../Login/downButton.svg";
import { useEffect } from "react";
import { useAuth } from "../../../Context/AuthContext";
import { useHistory } from "react-router-dom";

function SignIn({ loginUser, errorSetting }) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const { login } = useAuth();
  const history = useHistory();

  useEffect(() => {
    const email = localStorage.getItem("email");
    setEmail(email);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  console.log(email);

  const signIn = (e) => {
    e.preventDefault();

    if (password && email) {
      login(email.trim(), password);
      history.push("/login");
    } else {
      console.log("sas");
    }
  };

  // ********* Modal *************** //
  const [show, setShow] = useState(false);
  const openModal = () => {
    setShow(true);
  };
  return (
    <div className="signIn">
      <Link to="/">
        <img
          className="signIn_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="amazon-logo"
        />
      </Link>
      <div className="signIn_container">
        <h1>Sign-In</h1>
        <form onSubmit={handleSubmit}>
          <div className="signIn_text">
            <h5>Password</h5>
            <p>
              <a href="/">Forgot your password?</a>{" "}
            </p>
          </div>

          <input
            type="password"
            placeholder=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" onClick={signIn} className="signIn_signIn">
            Sign In
          </button>
        </form>
        <div className="signIn_checkbox">
          <label>
            <input type="checkbox" />
            Keep me signed in.
          </label>
          <button type="button" className="signIn_button" onClick={openModal}>
            <h5>Details</h5>
          </button>
          <img src={downButton} alt="" className="icon" />
          {show === true ? (
            <Modal
              show={show}
              closeModal={openModal}
              hide={() => setShow(false)}
            />
          ) : (
            ""
          )}
        </div>
      </div>

      <hr className="line" />
      <div className="footer">
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

export default SignIn;
