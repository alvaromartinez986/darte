import React from "react";
import HotProducts from "./HotProducts";
import AboutUs from "./AboutUs";
import OurClients from "./OurClients";
import BannerSection from "./BannerSection";

const HomeSection = () => {
  return (
    <>
      <BannerSection />
      <HotProducts />
      <AboutUs />
      <OurClients />
    </>
  );
};

export default HomeSection;
