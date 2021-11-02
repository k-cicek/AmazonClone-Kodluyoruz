import React from "react";
import "./TextBox.css";
import { Link } from "react-router-dom";
const TextBox = () => {
  return (
    <div className="text-box-container">
      <span>You are on amazon.com. </span>
      <span>You can also shop on Amazon</span>
      <span>Turkey</span>
      <span> for millions of products with fast local delivery. </span>
      <div className="card-footer">
        <Link to="/">
          <span>Click here to go to amazon.com.tr</span>
        </Link>
      </div>
    </div>
  );
};

export default TextBox;
