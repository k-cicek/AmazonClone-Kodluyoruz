import React from "react";
import { Link } from "react-router-dom";
import { SidebarData } from "../Sidebar/SidebarData";
function Sidebar() {
  return (
    <nav id="sidebar">
      <li className="navbar-toggle">
        <Link to="#" className="menu-bars">
          x
        </Link>
      </li>
      <div className="sidebar-header">
        {SidebarData.map((item, index) => {
          return (
            <li item={item} key={index} className={item.cName}>
              {item.title}
            </li>
          );
        })}
      </div>
      {/*
        couldn't figure out this thing!!!! {[]} how can I get the data inside
      object/array??
      {SidebarData.content ||
        [].map((item, index) => {
          return <li key={index}>{item.content.header}</li>;
        })} */}
    </nav>
  );
}

export default Sidebar;
