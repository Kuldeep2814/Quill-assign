import React from "react";
import hero from "./assets/hero.png";

const Hero = () => {
  return (
    <div className="hero-parent">
      <div className="hero">
        <img src={hero} alt="Hero-img" />
      </div>
    </div>
  );
};

export default Hero;
