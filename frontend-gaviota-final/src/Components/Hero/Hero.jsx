import React from "react";
import "./Hero.css";
import hero from "../Assets/hero.jpg";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-izq">
        <img src={hero} alt="" height="350px" width="320px" />
      </div>
      <div className="hero-derecha">
        <div className="hero-arriba">
          <p>El nuevo libro de</p>
        </div>
        <div className="hero-centro">
          <h1>STEPHEN KING</h1>
        </div>
        <div className="hero-abajo">
          <p>
            La nueva novela del Rey del Terror recuerda a joyas como Misery y
            cuenta con un personaje muy querido por sus fans: Holly Gibney, la
            detective privada que, por primera vez, protagoniza una novela en
            solitario.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
