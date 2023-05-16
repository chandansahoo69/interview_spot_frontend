import React from "react";
import lodash from "lodash";
import { useSelector } from "react-redux";

const RoutePage = () => {
  const { userResponse } = useSelector((state) => state.auth);
  console.log("radha krishna", userResponse, lodash.isEmpty(userResponse));

  const navigateUser = () => {
    if (userResponse.role === "interviewer") {
      window.location.href = "http://localhost:3000/interviewer/dashboard";
    } else {
      window.location.href = "http://localhost:3000/interviewee/dashboard";
    }
  };

  return <>{lodash.isEmpty(userResponse) ? "loading" : navigateUser()}</>;
};

export default RoutePage;
