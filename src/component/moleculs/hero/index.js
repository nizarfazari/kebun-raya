import React from "react";
import { Button } from "../../atoms";
import { heroTanaman } from "../../../assets";
import "./hero.scss";
import Tilt from "react-vanilla-tilt";

const hero = () => {
  return (
    <div>
      <div className="hero-deskripsi mt-4">
        <div className="row mt-4">
          <div className="col-lg-6 pt-3 kolom-1">
            <div className="deskripsi">
              <h1 className="header-1">
                We Love helping <br />
                you to safe the <br />
                earth
              </h1>
              <p className="small-text">
                we help realize your dreams in making a <br />
                garden, lets start with small things that can <br />
                change the world,so you can <br />
                enjoy the fresh air forever
              </p>
              <Button title="Register" />
            </div>
          </div>
          <div className="col-lg-6 kolom-2">
            <Tilt className="tilt" options={{ max: 25, speed: 400, reset: true }}>
              <img className="img-fluid tanaman-img" src={heroTanaman} alt="Foto Tanaman" />
            </Tilt>
          </div>
        </div>
      </div>
    </div>
  );
};

export default hero;
