import React, { useEffect } from "react";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import auth from "config/auth";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "auth/auth";
import { removeToken } from "utils/token";
import { isEmpty } from "lodash";

const ProtectedRoute = () => {
  const location = useLocation();

  const history = useNavigate();
  const isAuthed = auth.isAuthenticated();
  const dispatch = useDispatch();

  const { userResponse } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isAuthed && isEmpty(userResponse)) {
      (async () => {
        const response = await dispatch(getCurrentUser());
        console.log("Protected Route", response);
        if (response.meta.requestStatus !== "fulfilled") {
          removeToken({
            name: "token",
          });
          removeToken({
            name: "refresh",
          });

          history("/login");
        }
      })();
    }
  }, [isAuthed, history, userResponse, dispatch]);

  return (
    <>
      {isAuthed ? (
        <Outlet />
      ) : (
        <Navigate to="/login" state={{ from: location }} replace />
      )}
    </>
  );
};

export default ProtectedRoute;
