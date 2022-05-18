import React from "react";
import { Button } from "../../atoms";
import "./ctaBanner.scss";

const ctaBanner = () => {
  return (
    <div className="cta">
      <h3>
        Tunggu apalagi segera belikan tanaman anda <br /> <div className="cta-desc">Bisa di beli dari dimanapun dan kapanpun</div>
      </h3>
      <Button title="Get Now" />
    </div>
  );
};

export default ctaBanner;
