import React from 'react'
import "./FooterNavAccessibility.css"
import { ListOne, ListTwo, ListThree, ListFour } from "../Footer/assets/FooterData";


function FooterNavAccessibility() {
 return (
  <div className="footer_main">
  <div className="footer_divide"></div>
  <div className="footer_VerticalCol">
    <div className="footer_Col">
      <div className="footer_ColHead">Get To Know Us</div>
      <ul className="footer_ColList">
      {ListOne.map((list) => (
            <li key={list.id}>
              <a href={list.url}>{list.value}</a>
            </li>
          ))}
      </ul>
    </div>
    <div className="footer_ColSpacer"></div>
    <div className="footer_Col">
      <div className="footer_ColHead">Make Money with us</div>

      <ul className="footer_ColList">
      {ListTwo.map((list) => (
            <li key={list.id}>
              <a href={list.url}>{list.value}</a>
            </li>
          ))}
      </ul>
    </div>
    <div className="footer_ColSpacer"></div>
    <div className="footer_Col">
      <div className="footer_ColHead">Amazon Payment Products</div>
      <ul className="footer_ColList">
      {ListThree.map((list) => (
            <li key={list.id}>
              <a href={list.url}>{list.value}</a>
            </li>
          ))}
      </ul>
    </div>
    <div className="footer_ColSpacer"></div>

    <div className="footer_Col">
      <div className="footer_ColHead">Let Us Help You</div>

      <ul className="footer_ColList">
      {ListFour.map((list) => (
            <li key={list.id}>
              <a href={list.url}>{list.value}</a>
            </li>
          ))}
      </ul>
    </div>
  </div>
</div>
 )
}

export default FooterNavAccessibility
