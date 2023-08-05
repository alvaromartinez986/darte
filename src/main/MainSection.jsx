import React from 'react';
import IconContactWS from './IconContactWS';
import Header from './Header';
import { MenuHeader } from './MenuHeader';
import Footer from './Footer';

const MainSection = ({ routes }) => {
  return (
    <>
      <IconContactWS />
      <Header />
      <MenuHeader />
      {routes}
      <Footer />
    </>
  );
};

export default MainSection;
