import AuthService from "auth/authService";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const Feedback = () => {
  const { state } = useLocation();
  const { userResponse } = useSelector((state) => state.auth);
  const [interviewDetails, setInterviewDetails] = useState({});
  const initialState = {
    id: "",
    punctuality: "",
    communicationSkill: "",
    professionalism: "",
    technicalSkill: "",
    problemSolvingSkill: "",
    additionalComment: "",
  };
  const [inputs, setInputs] = useState(initialState);

  useEffect(() => {
    const inputs = {
      id: state.interview,
    };

    AuthService.getInterviewDetails(inputs)
      .then((response) => {
        setInterviewDetails(response?.interview);
        console.log(response);
      })
      .catch((err) => {
        console.log("pending interviews err", err);
        toast.error(err?.data?.message);
      });
  }, []);

  const handleSubmit = () => {
    inputs.id = state.interview;
    console.log(inputs);
    AuthService.postFeedback(inputs)
      .then((response) => {
        console.log(response);
        toast.success(response?.message);
        window.location.href = `http://localhost:3000/${userResponse.role}/dashboard`;
      })
      .catch((err) => {
        console.log("feedback err", err);
        toast.error(err?.data?.message);
      });
  };

  console.log("inside feedback", state);
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1>Interview Feedback</h1>
        <p className="text-sm text-slate-500">
          Hello, Chandan! Please share your feedback
        </p>
      </div>
      <div className="flex gap-4">
        <div class="w-full p-6 bg-white border border-gray-200 rounded-lg shadow">
          <h1 className="mb-8">Meeting Details</h1>
          <div className="px-8 grid grid-cols-1 gap-2">
            <div className="grid grid-cols-3 text-sm">
              <p className="font-normal ">Interviewee Name</p>
              <p className="col-span-2">{interviewDetails?.interviewee}</p>
            </div>
            <div className="grid grid-cols-3 text-sm">
              <p className="font-normal ">Interviewer Name</p>
              <p className="col-span-2">{interviewDetails?.interviewer}</p>
            </div>
            <div className="grid grid-cols-3 text-sm">
              <p className="font-normal ">Date & Time</p>
              <p className="">
                {moment(interviewDetails?.date).format("DD-MM-YY")}
              </p>
              <p className="">{interviewDetails?.timeSlot}</p>
            </div>
            <div className="grid grid-cols-3 text-sm">
              <p className="font-normal ">Interview Type</p>
              <p className="col-span-2">{interviewDetails?.category}</p>
            </div>
          </div>
        </div>
        <div class="w-full"></div>
      </div>
      {/* Feedback Form */}
      <div className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow">
        <div>
          <div>
            {/* Punctuality rating */}
            <fieldset className="flex gap-4">
              <label
                for=""
                class="w-[150px] ml-2 text-sm font-medium text-gray-900 "
              >
                Punctuality :
              </label>

              <div class="flex items-center mb-4">
                <button
                  type="button"
                  onClick={() => {
                    setInputs({ ...inputs, punctuality: "poor" });
                  }}
                  className={`${
                    inputs.punctuality === "poor" && "bg-limeGreen"
                  } text-black hover:text-white border border-limeGreen hover:bg-limeGreen focus:ring-4 focus:outline-none focus:ring-[#dbff4a] font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2`}
                >
                  Poor
                </button>
              </div>
              <div class="flex items-center mb-4">
                <button
                  type="button"
                  onClick={() => {
                    setInputs({ ...inputs, punctuality: "fair" });
                  }}
                  className={`${
                    inputs.punctuality === "fair" && "bg-limeGreen"
                  } text-black hover:text-white border border-limeGreen hover:bg-limeGreen focus:ring-4 focus:outline-none focus:ring-[#dbff4a] font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2`}
                >
                  Fair
                </button>
              </div>
              <div class="flex items-center mb-4">
                <button
                  type="button"
                  onClick={() => {
                    setInputs({ ...inputs, punctuality: "good" });
                  }}
                  className={`${
                    inputs.punctuality === "good" && "bg-limeGreen"
                  } text-black hover:text-white border border-limeGreen hover:bg-limeGreen focus:ring-4 focus:outline-none focus:ring-[#dbff4a] font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2`}
                >
                  Good
                </button>
              </div>
              <div class="flex items-center mb-4">
                <button
                  type="button"
                  onClick={() => {
                    setInputs({ ...inputs, punctuality: "excellent" });
                  }}
                  className={`${
                    inputs.punctuality === "excellent" && "bg-limeGreen"
                  } text-black hover:text-white border border-limeGreen hover:bg-limeGreen focus:ring-4 focus:outline-none focus:ring-[#dbff4a] font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2`}
                >
                  Excellent
                </button>
              </div>
            </fieldset>
            {/* Communication skill rating */}
            <fieldset className="flex gap-4">
              <label
                for=""
                class="w-[150px] ml-2 text-sm font-medium text-gray-900 "
              >
                Communication Skill :
              </label>

              <div class="flex items-center mb-4">
                <button
                  type="button"
                  onClick={() => {
                    setInputs({ ...inputs, communicationSkill: "poor" });
                  }}
                  className={`${
                    inputs.communicationSkill === "poor" && "bg-limeGreen"
                  } text-black hover:text-white border border-limeGreen hover:bg-limeGreen focus:ring-4 focus:outline-none focus:ring-[#dbff4a] font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2`}
                >
                  Poor
                </button>
              </div>
              <div class="flex items-center mb-4">
                <button
                  type="button"
                  onClick={() => {
                    setInputs({ ...inputs, communicationSkill: "fair" });
                  }}
                  className={`${
                    inputs.communicationSkill === "fair" && "bg-limeGreen"
                  } text-black hover:text-white border border-limeGreen hover:bg-limeGreen focus:ring-4 focus:outline-none focus:ring-[#dbff4a] font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2`}
                >
                  Fair
                </button>
              </div>
              <div class="flex items-center mb-4">
                <button
                  type="button"
                  onClick={() => {
                    setInputs({ ...inputs, communicationSkill: "good" });
                  }}
                  className={`${
                    inputs.communicationSkill === "good" && "bg-limeGreen"
                  } text-black hover:text-white border border-limeGreen hover:bg-limeGreen focus:ring-4 focus:outline-none focus:ring-[#dbff4a] font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2`}
                >
                  Good
                </button>
              </div>
              <div class="flex items-center mb-4">
                <button
                  type="button"
                  onClick={() => {
                    setInputs({ ...inputs, communicationSkill: "excellent" });
                  }}
                  className={`${
                    inputs.communicationSkill === "excellent" && "bg-limeGreen"
                  } text-black hover:text-white border border-limeGreen hover:bg-limeGreen focus:ring-4 focus:outline-none focus:ring-[#dbff4a] font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2`}
                >
                  Excellent
                </button>
              </div>
            </fieldset>
            {/* Proffesionalism rating */}
            <fieldset className="flex gap-4">
              <label
                for=""
                class="w-[150px] ml-2 text-sm font-medium text-gray-900 "
              >
                Proffesionalism :
              </label>

              <div class="flex items-center mb-4">
                <button
                  type="button"
                  onClick={() => {
                    setInputs({ ...inputs, professionalism: "poor" });
                  }}
                  className={`${
                    inputs.professionalism === "poor" && "bg-limeGreen"
                  } text-black hover:text-white border border-limeGreen hover:bg-limeGreen focus:ring-4 focus:outline-none focus:ring-[#dbff4a] font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2`}
                >
                  Poor
                </button>
              </div>
              <div class="flex items-center mb-4">
                <button
                  type="button"
                  onClick={() => {
                    setInputs({ ...inputs, professionalism: "fair" });
                  }}
                  className={`${
                    inputs.professionalism === "fair" && "bg-limeGreen"
                  } text-black hover:text-white border border-limeGreen hover:bg-limeGreen focus:ring-4 focus:outline-none focus:ring-[#dbff4a] font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2`}
                >
                  Fair
                </button>
              </div>
              <div class="flex items-center mb-4">
                <button
                  type="button"
                  onClick={() => {
                    setInputs({ ...inputs, professionalism: "good" });
                  }}
                  className={`${
                    inputs.professionalism === "good" && "bg-limeGreen"
                  } text-black hover:text-white border border-limeGreen hover:bg-limeGreen focus:ring-4 focus:outline-none focus:ring-[#dbff4a] font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2`}
                >
                  Good
                </button>
              </div>
              <div class="flex items-center mb-4">
                <button
                  type="button"
                  onClick={() => {
                    setInputs({ ...inputs, professionalism: "excellent" });
                  }}
                  className={`${
                    inputs.professionalism === "excellent" && "bg-limeGreen"
                  } text-black hover:text-white border border-limeGreen hover:bg-limeGreen focus:ring-4 focus:outline-none focus:ring-[#dbff4a] font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2`}
                >
                  Excellent
                </button>
              </div>
            </fieldset>
            {/* Technical Skill rating */}
            <fieldset className="flex gap-4">
              <label
                for=""
                class="w-[150px] ml-2 text-sm font-medium text-gray-900 "
              >
                Technical Skill :
              </label>

              <div class="flex items-center mb-4">
                <button
                  type="button"
                  onClick={() => {
                    setInputs({ ...inputs, technicalSkill: "poor" });
                  }}
                  className={`${
                    inputs.technicalSkill === "poor" && "bg-limeGreen"
                  } text-black hover:text-white border border-limeGreen hover:bg-limeGreen focus:ring-4 focus:outline-none focus:ring-[#dbff4a] font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2`}
                >
                  Poor
                </button>
              </div>
              <div class="flex items-center mb-4">
                <button
                  type="button"
                  onClick={() => {
                    setInputs({ ...inputs, technicalSkill: "fair" });
                  }}
                  className={`${
                    inputs.technicalSkill === "fair" && "bg-limeGreen"
                  } text-black hover:text-white border border-limeGreen hover:bg-limeGreen focus:ring-4 focus:outline-none focus:ring-[#dbff4a] font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2`}
                >
                  Fair
                </button>
              </div>
              <div class="flex items-center mb-4">
                <button
                  type="button"
                  onClick={() => {
                    setInputs({ ...inputs, technicalSkill: "good" });
                  }}
                  className={`${
                    inputs.technicalSkill === "good" && "bg-limeGreen"
                  } text-black hover:text-white border border-limeGreen hover:bg-limeGreen focus:ring-4 focus:outline-none focus:ring-[#dbff4a] font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2`}
                >
                  Good
                </button>
              </div>
              <div class="flex items-center mb-4">
                <button
                  type="button"
                  onClick={() => {
                    setInputs({ ...inputs, technicalSkill: "excellent" });
                  }}
                  className={`${
                    inputs.technicalSkill === "excellent" && "bg-limeGreen"
                  } text-black hover:text-white border border-limeGreen hover:bg-limeGreen focus:ring-4 focus:outline-none focus:ring-[#dbff4a] font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2`}
                >
                  Excellent
                </button>
              </div>
            </fieldset>
            {/* Problem Solving Skill rating */}
            <fieldset className="flex gap-4">
              <label
                for=""
                class="w-[150px] ml-2 text-sm font-medium text-gray-900 "
              >
                Problem Solving Skill :
              </label>

              <div class="flex items-center mb-4">
                <button
                  type="button"
                  onClick={() => {
                    setInputs({ ...inputs, problemSolvingSkill: "poor" });
                  }}
                  className={`${
                    inputs.problemSolvingSkill === "poor" && "bg-limeGreen"
                  } text-black hover:text-white border border-limeGreen hover:bg-limeGreen focus:ring-4 focus:outline-none focus:ring-[#dbff4a] font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2`}
                >
                  Poor
                </button>
              </div>
              <div class="flex items-center mb-4">
                <button
                  type="button"
                  onClick={() => {
                    setInputs({ ...inputs, problemSolvingSkill: "fair" });
                  }}
                  className={`${
                    inputs.problemSolvingSkill === "fair" && "bg-limeGreen"
                  } text-black hover:text-white border border-limeGreen hover:bg-limeGreen focus:ring-4 focus:outline-none focus:ring-[#dbff4a] font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2`}
                >
                  Fair
                </button>
              </div>
              <div class="flex items-center mb-4">
                <button
                  type="button"
                  onClick={() => {
                    setInputs({ ...inputs, problemSolvingSkill: "good" });
                  }}
                  className={`${
                    inputs.problemSolvingSkill === "good" && "bg-limeGreen"
                  } text-black hover:text-white border border-limeGreen hover:bg-limeGreen focus:ring-4 focus:outline-none focus:ring-[#dbff4a] font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2`}
                >
                  Good
                </button>
              </div>
              <div class="flex items-center mb-4">
                <button
                  type="button"
                  onClick={() => {
                    setInputs({ ...inputs, problemSolvingSkill: "excellent" });
                  }}
                  className={`${
                    inputs.problemSolvingSkill === "excellent" && "bg-limeGreen"
                  } text-black hover:text-white border border-limeGreen hover:bg-limeGreen focus:ring-4 focus:outline-none focus:ring-[#dbff4a] font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2`}
                >
                  Excellent
                </button>
              </div>
            </fieldset>
          </div>
          <fieldset>
            <div className="flex">
              <label
                for=""
                class="w-[200px] ml-2 text-sm font-medium text-gray-900 "
              >
                Message :
              </label>
              <textarea
                id="additionalComment"
                rows="4"
                name="additionalComment"
                value={inputs.additionalComment}
                onChange={(e) => {
                  setInputs({ ...inputs, additionalComment: e.target.value });
                }}
                class="p-2.5 w-full h-[240px] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Write your additional feedback here..."
              ></textarea>
            </div>
          </fieldset>
          <button
            onClick={handleSubmit}
            class="text-white bg-limeGreen hover:bg-[#adbf38] focus:ring-4 focus:outline-none focus:ring-[#dbff4a] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
