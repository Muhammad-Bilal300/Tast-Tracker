import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import SignIn from "../pages/auth/signIn/SignIn";
import SignUp from "../pages/auth/signUp/SignUp";
import ForgotPassword from "../pages/auth/forgotPassword/ForgotPassword";
import ResetPassword from "../pages/auth/resetPassword/ResetPassword";

const Routers = () => {
  return (
    <Routes>
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      {/* <Route path="/admin" element={<Layout />}>
        <Route index element={<Navigate to="/admin/dashboard" replace />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/customers" element={<Users />} />
        <Route path="/admin/categories" element={<Categories />} />
        <Route path="/admin/brands" element={<Brands />} />
        <Route path="/admin/products" element={<Products />} />
        <Route path="/admin/orders" element={<Orders />} />
        <Route path="/admin/vendors" element={<Vendors />} />
        <Route path="/admin/purchases" element={<Purchases />} />
        <Route path="/admin/sales" element={<Sales />} />
        <Route path="/admin/reports" element={<Reports />} />
      </Route> */}
    </Routes>
  );
};

export default Routers;
