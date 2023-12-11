import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Descripcion</div>
        <div className="descriptionbox-nav-box fade">Reseñas (48)</div>
      </div>
      <div className="descriptionbox-description">
        <p>Descripcion muy random aquiiii </p>
        <p>E-co</p>
      </div>
    </div>
  );
};

export default DescriptionBox;
