import React from "react";
import { produkGambar } from "../../../assets";
import "./produkColumn.scss";

const produkColumn = ({ title, desc, style }) => {
  if (style) {
    console.log("test");
  }
  return (
    <div class="row">
      <div class="col-md-6 col-sm-12 kolom-1" style={style}>
        <div class="gambar">
          <img class="img-fluid" src={produkGambar} alt="" />
        </div>
        <div class="wrap">
          <button class="button">Buy Now</button>
        </div>
      </div>
      <div class="col-md-6 col-sm-12 kolom-2">
        <div class="deskripsi">
          <h2 class="judul-produk">{title}</h2>
          <p class="text-produk">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default produkColumn;
