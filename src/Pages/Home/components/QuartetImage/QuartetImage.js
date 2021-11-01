import React from "react";
import "./QuartetImage.css";
import { quatretCategories } from "../../assets/homeData";
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
        <span>See more</span>
      </div>
    </div>
  );
};

export default QuartetImage;
