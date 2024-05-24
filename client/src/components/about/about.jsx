import "./about.scss";

import aboutBgImage from "assets/images/about-bg.jpg";

import React from "react";
import Slide from "react-reveal/Slide";
import { string } from "prop-types";
import Benefit from "../benefits/benefit";
import { money, suitcase, puzzlePiece } from "../icons/font-awesome-icons";

const benefits = [
  {
    icon: money,
    title: "Good Prices",
    subtitle: "Here you can find some of the best prices.",
  },
  {
    icon: suitcase,
    title: "Trusted Clients",
    subtitle: "Thanks to all our trusted clients.",
  },
  {
    icon: puzzlePiece,
    title: "Large Network",
    subtitle: "The largest network of providers.",
  },
];

const About = ({ mainTitle, mainSubtitle, description }) => (
  <div className="about">
    <h2>{mainTitle}</h2>
    <div className="about-wrapper">
      <section className="about-content-wrapper">
        <p className="about-subtitle">{mainSubtitle}</p>
        <p className="about-description">{description}</p>
        {benefits.map(({ icon, title, subtitle }) => (
          <Benefit icon={icon} title={title} subtitle={subtitle} />
        ))}
      </section>
      <Slide right>
        <img className="about-image" src={aboutBgImage} alt="about-img" />
      </Slide>
    </div>
  </div>
);

About.propTypes = {
  mainTitle: string.isRequired,
  mainSubtitle: string.isRequired,
  description: string.isRequired,
};

export default About;
