import React from "react";
import "./ProductDetail.css";
const ProductDetail = () => {
  return (
    <div>
      <header className="advertisement">
        <span>International Kindler Paperwhite</span>
        <span>Buy Now ▸ </span>
      </header>
      <center className="product-details">
        <section className="product-photos">
          <div className="product-leftside-photos"></div>
          <div className="product-main-photo"></div>
        </section>
        <section className="product-detail-container">
          <div className="product-detail">
            <div className="product-name"></div>
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
              <span>
                <b>Estimated Total cost: $48.29</b> including Shipping & Import
                Fees Deposit to Turkey
              </span>
              <span>Free Deposit to Turkey</span>
              <span>Details</span>
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
        <section className="product-detail-container">
          <div className="product-main-detail"></div>
          <div className="product-store"></div>
          <div className="product-main-photo"></div>
        </section>
      </center>
      <footer className="comments"></footer>
    </div>
  );
};

export default ProductDetail;
