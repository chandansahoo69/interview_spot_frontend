import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import LogoInterviewspot from "assets/images/logoInterviewspot.png";

const Acknowledgement = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { userResponse } = useSelector((state) => state.auth);

  const [seconds, setSeconds] = useState(10);

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

  return (
    <section className="bg-white h-[100vh] flex flex-col justify-center items-center gap-6">
      <div className="flex justify-center">
        <img src={LogoInterviewspot} alt="" className="pt-1" />
        <div className="flex flex-col font-jakarta text-2xl font-bold">
          <p className="text-[#dcf247]">Interview</p>
          <p className="mt-[-4px] text-[#000]">Spot</p>
        </div>
      </div>
      <div className="w-[860px] h-[1px] bg-slate-300 rounded"></div>
      <div className="text-black flex flex-col items-center">
        <h1 className="font-bold text-3xl">
          Your Interview is successfully completed
        </h1>
        <p className="text-lg">
          Redirecting to{" "}
          <span className="underline text-[#ddeb7f] hover:text-[#adb763] hover:cursor-pointer">
            Dashboard
          </span>{" "}
          in {seconds} sec...
        </p>
      </div>
    </section>
  );
};

export default Acknowledgement;
