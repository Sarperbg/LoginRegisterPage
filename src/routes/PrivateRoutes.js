import React from "react";
import {Routes, Route, Navigate} from 'react-router-dom'
import HomePage from "../pages/HomePage";
const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="/*" element={<Navigate to="/homepage" />} />
      <Route path="/homepage" element={<HomePage />} />
    </Routes>
  );
};

export default PrivateRoutes;
