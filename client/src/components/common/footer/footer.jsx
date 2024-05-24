import tlogo from "assets/images/dark-logo.jpg";

import "./footer.scss";

import React from "react";
import Copyright from "./copyright/copyright";

const Footer = () => (
  <footer className="footer">
    <section className="main-footer-wrapper">
      <article>
        <img className="footer-logo" src={tlogo} alt="logo" />
      </article>
      <article>
        <h6>Useful Links</h6>
        <ul>
          <li>
            <a href="/about">About Us</a>
          </li>
          <li>
            <a href="/home">Types of Transport</a>
          </li>
          <li>
            <a href="/about">Information</a>
          </li>
          <li>
            <a href="/contact">Contacts</a>
          </li>
        </ul>
      </article>
      <article>
        <h6>Where to Find Us</h6>
        <p>Sec-33, Gurgaon </p>
        <p>Phone: +91 9876543210</p>
        <p>E-mail: info@RSA.com</p>
      </article>
    </section>
    <section className="bottom-footer-wrapper">
      <Copyright />
    </section>
  </footer>
);

export default Footer;
