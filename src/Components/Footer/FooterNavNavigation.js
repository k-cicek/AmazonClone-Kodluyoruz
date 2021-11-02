import React from "react";
import "./FooterNavNavigation.css";
import { ListFive } from "../Footer/assets/FooterData";

function FooterNavNavigation() {
  return (
    <div className="footer__main">
      <div className="footer__table">
        <div className="footer__row">
          {ListFive.map((lists, index) => (
            <ul className="footer__item">
              {lists.map((list) => (
                <div className="footer_list">
                  <li key={list.id}>
                    <a href={list.url}>{list.name}</a>
                    <br />
                    <span className="footer__text">{list.value}</span>
                  </li>
                </div>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FooterNavNavigation;
