import React from "react";
import { BannerColumn } from "../../atoms";
import "./banner.scss";

const Banner = () => {
  return (
    <section className="langkah-tanam">
      <div className="container">
        <div className="heading-tanam">
          <h1>Steps to start Your plants off Right</h1>
          <p>Follow instruction for more</p>
        </div>
        <div class="row">
          <BannerColumn title="Put the pots" deskripsi=" We own two of these blockers,one with a seed pin that makes" />
          <BannerColumn title="Put the pots" deskripsi=" We own two of these blockers,one with a seed pin that makes" />
          <BannerColumn title="Put the pots" deskripsi=" We own two of these blockers,one with a seed pin that makes" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
