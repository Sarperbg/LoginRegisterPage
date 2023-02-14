import React from "react";
import {Routes, Route, Navigate} from 'react-router-dom'
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/*" element={<Navigate to="login" />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
};

export default PublicRoutes;
