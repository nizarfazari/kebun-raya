import React from "react";
import "./navlinks.scss";

const Navlinks = () => {
  return (
    <div className="nav">
      <ul className="links">
        <li className="item">
          <a className="nav-link" aria-current="page" href="#">
            Home
          </a>
        </li>
        <li className="item">
          <a className="nav-link" href="#">
            Category
          </a>
        </li>
        <li className="item">
          <a className="nav-link" href="#">
            Contact
          </a>
        </li>
      </ul>
      <div className="menu-toggle">
        <span className="line1"></span>
        <span className="line2"></span>
        <span className="line3"></span>
      </div>
    </div>
  );
};

export default Navlinks;
