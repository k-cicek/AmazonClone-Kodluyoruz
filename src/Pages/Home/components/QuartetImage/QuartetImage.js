import React from "react";
import { Link } from "react-router-dom";
import { quatretCategories } from "../../assets/homeData";
import "./QuartetImage.css";
const QuartetImage = () => {
  return (
    <div className="card-container">
      <div className="card-header">
        <h1>{quatretCategories[2].value}</h1>
      </div>
      <div id="quartet-image-container">
        <div className="single-container">
          <a to="/product">
            <div className="image">image</div>
            <div className="text">{quatretCategories[3].value}</div>
          </a>
        </div>
        <div className="single-container">
          <a to="/product">
            <div className="image">image</div>
            <div className="text">{quatretCategories[3].value}</div>
          </a>
        </div>
        <div className="single-container">
          <a to="/product">
            <div className="image">image</div>
            <div className="text">{quatretCategories[3].value}</div>
          </a>
        </div>
        <div className="single-container">
          <a to="/product">
            <div className="image">image</div>
            <div className="text">{quatretCategories[3].value}</div>
          </a>
        </div>
      </div>

      <div className="card-footer">
        <Link to="/products">
          <span>See more</span>
        </Link>
      </div>
    </div>
  );
};

export default QuartetImage;
