import React from "react";
import "./footer.scss";

const footer = () => {
  return (
    <footer className="footer">
      <div className="social">
        <div className="about">
          <h4 className="title">About Us</h4>
          <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci beatae libero nostrum delectus iure, dolor eveniet sit praesentium temporibus quae qui iste dicta, quos doloremque ipsam</p>
        </div>
        <a href="" className="test">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="">
          <i className="fab fa-snapchat"></i>
        </a>
        <a href="">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="">
          <i className="fab fa-facebook"></i>
        </a>
      </div>
      <ul className="list">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Services</a>
        </li>
        <li>
          <a href="">Terms</a>
        </li>
      </ul>
      <p className="copyright">
        Made with <i className="fa-solid fa-heart"></i> by Nizar Fazari
      </p>
    </footer>
  );
};

export default footer;
