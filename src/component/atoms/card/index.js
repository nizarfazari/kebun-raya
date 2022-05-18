import React from "react";
import { gambar } from "../../../assets";
import "./card.scss";

const card = () => {
  return (
    <div class="card">
      <img src={gambar} alt="" />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus repudiandae velit eaque vel quibusdam eius fugiat recusa delectus libero.</p>
      <h2>Sandar Bullock</h2>
      <h4>Finance Advisor</h4>
      <i class="fa fa-quote-left"></i>
    </div>
  );
};

export default card;
