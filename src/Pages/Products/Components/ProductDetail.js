import React from "react";
import "./ProductDetail.css";
const ProductDetail = () => {
  return (
    <div id="product-detail-container">
      <header className="advertisement">
        <span>International Kindler Paperwhite</span>
        <span>Buy Now ▸ </span>
      </header>
      <div className="product-path">
        <span>
          Health & Household›Household Supplies›Household Batteries›AA
        </span>
      </div>
      <section id="product-feature-container">
        <section className="product-left-col">
          <div className="product-leftside-photos">
            <div className="small-photo"> small box</div>
            <div className="small-photo"> small box</div>
            <div className="small-photo"> small box</div>
            <div className="small-photo"> small box</div>
          </div>
          <div className="product-main-photo">
            <div className="main-photo"> big box</div>
          </div>
        </section>
        <section className="product-middle-col">
          <div className="product-detail">
            <div className="product-name">
              Amazon Basics 48 Pack AA High-Performance Alkaline Batteries,
              10-Year Shelf Life, Easy to Open Value Pack
            </div>
            <div className="product-store"></div>
            <div className="product-raiting"></div>
          </div>
          <div className="product-price">
            <div className="product-price-table">
              <table>
                <tbody>
                  <tr>
                    <td>Price:</td>
                    <td>
                      <span>$14.99</span>
                      <span>($0.31 / Count)</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="product-estimated-total-cost">
              <span>$33.30 Shipping & Import Fees Deposit to Turkey</span>
              <span>Details</span> <span>˅</span>
            </div>
            <div className="product-raiting"></div>
          </div>
          <div className="product-size">
            <span>Size: </span>
            <span>
              <b> 48 Count (Pack of 1)</b>{" "}
            </span>
          </div>
        </section>
        <section className="product-right-col">
          <div className="product-price-table"></div>
          <div className="product-store"></div>
          <div className="product-main-photo"></div>
        </section>
      </section>
      <section className="comments"></section>
    </div>
  );
};

export default ProductDetail;
