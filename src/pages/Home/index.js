import React from "react";
import { Banner, OwlCarousel, Produk } from "../../component/moleculs";
import { Header } from "../../component/organism";
import "./home.scss";

const index = () => {
  return (
    <div className="home">
      <Header />
      <Banner />
      <OwlCarousel />
      <Produk />
    </div>
  );
};

export default index;
