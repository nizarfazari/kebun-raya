import React from "react";
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/lib/styles.css";
import "react-owl-carousel2/src/owl.theme.default.css";
import "./owlCarousel.scss";

import { gambar } from "../../../assets";

const owlCarousel = () => {
  const options = {
    nav: true,
    navText: ['<i class="fa-solid fa-2x fa-chevron-left"></i>', '<i class="fa-solid fa-2x fa-chevron-right"></i>'],
    slideBy: 2,
    margin: 10,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
        nav: false,
      },
      900: {
        items: 2,
      },
      1300: {
        items: 3,
      },
      1400: {
        items: 4,
      },
    },
  };

  return (
    <section className="category">
      <div className="container1">
        <h1 className="text-center header-category">Category Produk</h1>
        <OwlCarousel options={options}>
          <div>
            <img src={gambar} alt="The Last of us" />
          </div>
          <div>
            <img src={gambar} alt="GTA V" />
          </div>
          <div>
            <img src={gambar} alt="Mirror Edge" />
          </div>
          <div>
            <img src={gambar} alt="The Last of us" />
          </div>

          <div>
            <img src={gambar} alt="The Last of us" />
          </div>
          <div>
            <img src={gambar} alt="The Last of us" />
          </div>
        </OwlCarousel>
      </div>
    </section>
  );
};

export default owlCarousel;
