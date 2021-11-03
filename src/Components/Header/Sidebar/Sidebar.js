import React from "react";
import { Link } from "react-router-dom";
import { SidebarData } from "../Sidebar/SidebarData";
function Sidebar({ ...props }) {
  return (
    <nav id="sidebar">
      <li className="navbar-toggle">
        <Link to="#" className="menu-bars">
          x
        </Link>
      </li>
      <li>
        <div className="sidebar-header">
          {SidebarData.map((item, index) => {
            return (
              <>
                <li key={index} className={item.cName}>
                  {item.title}
                </li>
                <li className={item.cName}>
                  <Link to={item.path}>
                    <div>{item.content.header}</div>{" "}
                    <div content={item.content.header}> </div>
                  </Link>
                </li>
              </>
            );
          })}
        </div>
      </li>
    </nav>
  );
}

export default Sidebar;
