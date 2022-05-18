import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./button.scss";

const Button = ({ title, ...rest }) => {
  return (
    <button className="button" {...rest}>
      Register
    </button>
  );
};

export default Button;
