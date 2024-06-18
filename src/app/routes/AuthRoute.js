import React from "react";
import { Navigate, Outlet, Route } from "react-router-dom";

const AuthRoute = ({ auth, isAuthenticated }) => {
  if (auth && !isAuthenticated) {
    return <Navigate to="/login" />;
  }

  // Nếu đã xác thực và đã đăng nhập, render Route component
  return (
    <>
      <Outlet />
    </>
  );
};

export default AuthRoute;
