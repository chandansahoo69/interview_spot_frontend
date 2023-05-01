import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { getToken } from "utils/token";

const UnAuthRoute = () => {
  const location = useLocation();
  const token = getToken({ name: "token" });

  return (
    <>
      {!token ? (
        <Outlet />
      ) : (
        <Navigate to="/" state={{ from: location }} replace />
      )}
    </>
  );
};

export default UnAuthRoute;
