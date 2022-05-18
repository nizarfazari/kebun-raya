import React from "react";
import { Hero, Navbar } from "../../moleculs";
import "./header.scss";

const Header = () => {
  return (
    <section className="hero">
      <div className="container">
        <Navbar />
        <Hero />
      </div>
    </section>
  );
};

export default Header;
