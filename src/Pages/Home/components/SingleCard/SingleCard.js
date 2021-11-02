import React from "react";
import { Link } from "react-router-dom";
import { homeSingleCategories } from "../../assets/homeData";
import "./SingleCard.css";

const SingleCard = () => {
  return (
    <div className="card-container">
      <div className="card-header">
        <h1>{homeSingleCategories[2].value}</h1>
      </div>
      <div className="card-image"></div>
      <div className="card-footer">
        <Link to="/products">
          <span>See more</span>
        </Link>
      </div>
    </div>
  );
};

export default SingleCard;
