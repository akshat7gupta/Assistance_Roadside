import brands from "assets/images/brands.png";

import "./partners.scss";

import React from "react";
import Flip from "react-reveal/Flip";

const Partners = () => (
  <div className="partners">
    <h2 className="partners-title">Partners</h2>
    <span className="partners-line">-</span>
    <p className="partners-subtitle">COMPANIES THAT TRUSTED US</p>
    <span className="partners-line">-</span>
    <Flip top>
      <img src={brands} alt="brand-img" />
    </Flip>
  </div>
);

export default Partners;
