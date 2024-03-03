import React from "react";
import Master from "../pages/Layouts/Master";
// import Footer from "../pages/Layouts/footer";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import NoPage from "../pages/NoPage/NoPage";
import Register from "../pages/Auth/Register";
import Login from "../pages/Auth/Login";
import ForgotPassword from "../pages/Auth/ForgotPassword";
import ChangePassword from "../pages/Auth/ChangePassword";
const router = () => {
  return (
    <>
      <Routes>
        <Route element={<Master />}>
          <Route path="/" element={<Home />} />
          <Route path="signup" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="change-password" element={<ChangePassword />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default router;
