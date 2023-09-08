import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeSection from "./sections/HomeSection/HomeSection";
import ErrorPage from "./sections/ErrorPage/ErrorPage";
import Products from "./sections/Products/Products";
import ProductDetail from "./sections/ProductDetail/ProductDetail";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeSection />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<ProductDetail />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default AppRoutes;
