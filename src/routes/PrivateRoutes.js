import React from "react";
import {Routes, Route, Navigate} from 'react-router-dom'
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path='/*' element={<Navigate to='/homepage' />} />
      <Route path='homepage' element={<HomePage />} />
      <Route path='productpage' element={<ProductPage />} />

    </Routes>
  );
};

export default PrivateRoutes;
