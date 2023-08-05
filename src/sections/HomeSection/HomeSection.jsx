import React from 'react';
import CustomCarousel from './CustomCarousel';
import HotProducts from './HotProducts';
import AboutUs from './AboutUs';
import OurClients from './OurClients';

const HomeSection = () => {
  return (
    <>
      <CustomCarousel />
      <HotProducts />
      <AboutUs />
      <OurClients />
    </>
  );
};

export default HomeSection;
