import React from "react";
import Flip from "react-reveal/Flip";
import { string } from "prop-types";

const Slide = ({ title, img, text }) => (
  <>
    <img src={img} alt="slide-img" />
    <div className="header-slider-center">
      <Flip top cascade>
        <h1>{title}</h1>
        <p className="header-slider-text">{text}</p>
      </Flip>
    </div>
  </>
);

Slide.defaultProps = {
  title: "RSA",
  text:
    "This is a platform that helps people in need of roadside assistance or various transportation services.",
};

Slide.propTypes = {
  img: string.isRequired,
  title: string,
  text: string,
};

export default Slide;
