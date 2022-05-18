import React from "react";
import { Card } from "../../atoms";
import "./testimoni.scss";

const testimoni = () => {
  return (
    <section class="testimoni mt-5">
      <div class="wrapper">
        <h1>Our Happy Customer Reviews</h1>
        <h5>Check what they say about us</h5>
        <div class="cards">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </section>
  );
};

export default testimoni;
