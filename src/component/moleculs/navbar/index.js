import React from "react";
import { Navlinks } from "../../atoms";
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
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
