import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomeSection from './sections/HomeSection/HomeSection';
import ErrorPage from './sections/ErrorPage/ErrorPage';
import Products from './sections/Products/Products';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeSection />} />
      <Route path="/products" element={<Products />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default AppRoutes;
