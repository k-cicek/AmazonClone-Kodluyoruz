import React from "react";
import "./LoginModal.css";

function Modal(props) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="modalHeader">
        <div className="title">
          <h4>"Keep Me Signed In" Checkbox</h4>
        </div>
          <button
            onClick={props.hide}
            type="button"
            className="cancelButton"
            data-dismiss="modal"
          >
            X
          </button>
          
        </div>

        
        <div className="body">
          <p>
            Choosing "Keep me signed in" reduces the number of times you're
            asked to Sign-In on this device.
            <p>
              To keep your account secure, use this option only on your personal
              devices.
            </p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Modal;
