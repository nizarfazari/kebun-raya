import React from "react";
import { Banner, CtaBanner, Footer, OwlCarousel, Produk, Testimoni } from "../../component/moleculs";
import { Header } from "../../component/organism";
import "./home.scss";

const index = () => {
  return (
    <div className="home">
      <Header />
      <Banner />
      <OwlCarousel />
      <Produk />
      <Testimoni />
      <CtaBanner />
      <Footer />
    </div>
  );
};

export default index;
