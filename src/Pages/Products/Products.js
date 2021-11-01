import React from "react";
import { Link } from "react-router-dom";
import "./Products.css";

function Products() {
  return (
    <div id="products-container">
      <div id="products-sidebar">
        <div className="top-sidebar">
          <span>
            <b> Departments</b>
          </span>
          <ul>
            <li>Deals</li>
            <li>Amazon International Shopping</li>
            <li>Arts & Crafts</li>
            <li>Automotive</li>
            <li>Baby</li>
            <li>Beauty & Personal Care</li>
            <li>Books</li>
            <li>Computers</li>
            <li>Electronics</li>
            <li>Women's Fashion</li>
            <li>Men's Fashion</li>
            <li>Girls' Fashion</li>
            <li>Boys' Fashion</li>
            <li>Health & Household</li>
            <li>Home & Kitchen</li>
            <li>Industrial & Scientific</li>
            <li>Luggage</li>
            <li>Movies & Television</li>
            <li>Music, CDs & Vinyl</li>
            <li>Pet Supplies</li>
            <li>Software</li>
            <li>Sports & Outdoors</li>
            <li>Tools & Home Improvement</li>
            <li>Toys & Games</li>
            <li>Video Games</li>
          </ul>
        </div>
        <div className="bottom-sidebar"></div>
      </div>
      <div id="product-listing">
        <div className="listing-header">
          <b>International Best Sellers</b>
        </div>
        <div className="listing-info-header">
          <span>
            Top products shipped internationally including electronics, baby,
            books, and more
          </span>
          <div className="listing-header"></div>
          <div className="listing-results-info-table"></div>
          <div className="listing-triple-products">
            <div>
              <Link to="/products/:productId">
                <div>
                  <img
                    src="https://m.media-amazon.com/images/I/71IdKRlm8+L._AC_UL320_.jpg"
                    alt="duracel"
                  />
                </div>
                <div></div>
              </Link>
            </div>
            <div>
              <Link to="/products/:productId"> product2 </Link>
            </div>
            <div>
              <Link to="/products/:productId"> product3 </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
