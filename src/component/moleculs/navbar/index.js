import React from "react";
import { Navlinks, Search } from "../../atoms";
import "./navbar.scss";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="logo">
        <a href="#" className="navbar-brand">
          LOGO
          <img src="#" alt="" />
        </a>
      </div>
      <Navlinks />

      <div className="tombol">
        <Search />
      </div>
    </nav>
  );
};

export default Navbar;
