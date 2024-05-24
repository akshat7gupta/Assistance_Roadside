import React from "react";
import TopBar from "components/common/header/topbar/top-bar";
import Navbar from "components/common/header/navigation/navbar";
import Footer from "components/common/footer/footer";
import About from "components/about/about";
import Partners from "components/partners/partners";

const AboutPage = () => (
  <>
    <TopBar />
    <Navbar />
    <About
      mainSubtitle="We offer high-quality transportation services and road assistance at incredible prices."
      description="We offer services related to cargo transportation in Mumbai, across the country, and internationally. We rely on our experience and reliable fleet to provide quality and accurate service. Over the years, we have transported many goods for companies, partners, and individuals, and we know that everyone expects speed, accuracy, and good price, regardless of the nature of the shipment."
    />
    <Partners />
    <Footer />
  </>
);

export default AboutPage;
