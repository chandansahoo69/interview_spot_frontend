import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

const Acknowledgement = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { userResponse } = useSelector((state) => state.auth);

  const [seconds, setSeconds] = useState(5);

  React.useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else {
      //   setSeconds('BOOOOM!');
      if (userResponse.role === "interviewer") {
        navigate("/feedback", {
          state: {
            userId: userResponse?.username,
            interview: state.interview,
          },
        });
      } else {
        navigate("/");
      }
    }
  });

  return <>Acknowledgement</>;
};

export default Acknowledgement;
