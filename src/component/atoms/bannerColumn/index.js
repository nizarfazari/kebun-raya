import React from "react";
import { ilustrasi } from "../../../assets";
import "./bannerColumn.scss";

const BannerColumn = ({ title, deskripsi }) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12">
      <div className="gambar d-flex justify-content-center">
        <img src={ilustrasi} />
      </div>
      <div className="deskripsi-tanam text-center mt-3">
        <h2 className="judul-tanam">{title}</h2>
        <p className="text-tanam mt-3">{deskripsi}</p>
      </div>
    </div>
  );
};

export default BannerColumn;
