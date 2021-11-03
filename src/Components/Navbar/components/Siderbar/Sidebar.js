import React from "react";
import "./Sidebar.css"

function Sidebar(props) {
  return (
    <nav id="sidebar">
    <div className="brand">{props.brand}</div>
    <ul>
      <li><a href="#nowhere">Item 1</a></li>
      <li><a href="#nowhere">Item 2</a></li>
      <li><a href="#nowhere">Item 3</a></li>
    </ul>
  </nav>
  );
}

export default Sidebar;
