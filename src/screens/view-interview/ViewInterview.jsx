import AuthService from "auth/authService";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ViewInterview = () => {
  const { userResponse } = useSelector((state) => state.auth);
  const [interviewDetails, setInterviewDetails] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const inputs = {
      id: id,
    };

    AuthService.getInterviewDetails(inputs)
      .then((response) => {
        setInterviewDetails(response?.interview);
        console.log(response.interview);
      })
      .catch((err) => {
        console.log("pending interviews err", err);
        toast.error(err?.data?.message);
      });
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <div>
        <h1>Interview Details</h1>
        <p className="text-sm text-slate-500">
          Hello,{userResponse?.username} Please go through the Interview Details
          before you join
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
        {interviewDetails?.status === "Rejected" && (
          <div class="w-full p-6 bg-white border border-gray-200 rounded-lg shadow">
            <h1 className="mb-6">Meeting Status</h1>
            <div className="px-8 grid grid-cols-1 gap-2">
              <p>Rejected</p>
              <div className="grid grid-cols-3 text-sm">
                <p className="col-span-2 opacity-70">
                  {interviewDetails?.rejectReason}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* join button */}
      {interviewDetails?.status === "Accepted" && (
        <div class="w-full p-6 bg-white border border-gray-200 rounded-lg shadow grid grid-cols-2 items-center">
          <div className="text-center">
            <h1>Join Meeting</h1>
            <p className="text-sm text-slate-500">
              Please click the button to join the meeting
            </p>
          </div>
          <div className="text-center">
            <button
              type="button"
              className="w-fit focus:outline-none text-black bg-limeGreen hover:bg-[#adbf38] focus:ring-4 focus:ring-limeGreen font-medium rounded-lg text-sm px-12 py-3 mr-2 mb-2"
            >
              join now
            </button>
          </div>
        </div>
      )}

      {/* feedback */}
      {!interviewDetails.feedback ? (
        <div>
          {interviewDetails?.status === "Pending" ? (
            <div>Interview Was not Accepted yet.</div>
          ) : (
            <div>No feedback given.</div>
          )}
        </div>
      ) : (
        <div class="w-full p-6 bg-white border border-gray-200 rounded-lg shadow">
          <div className="mb-8">
            <h1>Feedback</h1>
            <p className="text-sm text-slate-500">
              Please go through the feedback and try to improve accordingly
            </p>
          </div>
          <div className="px-8 grid grid-cols-1 gap-2">
            <div className="flex text-sm gap-4 items-center">
              <p className="min-w-[150px] font-normal">Punctuality :</p>
              <p className="grow">
                <ul className="flex gap-6 font-normal text-gray-400">
                  <li
                    className={`px-3 py-1 font-bold ${
                      interviewDetails?.feedback?.punctuality === "poor" &&
                      "text-black bg-limeGreen rounded-lg"
                    }`}
                  >
                    Poor
                  </li>
                  <li
                    className={`px-3 py-1 font-bold ${
                      interviewDetails?.feedback?.punctuality === "fair" &&
                      "text-black bg-limeGreen rounded-lg"
                    }`}
                  >
                    Fair
                  </li>
                  <li
                    className={`px-3 py-1 font-bold ${
                      interviewDetails?.feedback?.punctuality === "good" &&
                      "text-black bg-limeGreen rounded-lg"
                    }`}
                  >
                    Good
                  </li>
                  <li
                    className={`px-3 py-1 font-bold ${
                      interviewDetails?.feedback?.punctuality === "excellent" &&
                      "text-black bg-limeGreen rounded-lg"
                    }`}
                  >
                    Excelent
                  </li>
                </ul>
              </p>
            </div>
            <div className="flex text-sm gap-4 items-center">
              <p className="min-w-[150px] font-normal">Communication Skill :</p>
              <p className="grow">
                <ul className="flex gap-6 font-normal text-gray-400">
                  <li
                    className={`px-3 py-1 font-bold ${
                      interviewDetails?.feedback?.communicationSkill ===
                        "poor" && "text-black bg-limeGreen rounded-lg"
                    }`}
                  >
                    Poor
                  </li>
                  <li
                    className={`px-3 py-1 font-bold ${
                      interviewDetails?.feedback?.communicationSkill ===
                        "fair" && "text-black bg-limeGreen rounded-lg"
                    }`}
                  >
                    Fair
                  </li>
                  <li
                    className={`px-3 py-1 font-bold ${
                      interviewDetails?.feedback?.communicationSkill ===
                        "good" && "text-black bg-limeGreen rounded-lg"
                    }`}
                  >
                    Good
                  </li>
                  <li
                    className={`px-3 py-1 font-bold ${
                      interviewDetails?.feedback?.communicationSkill ===
                        "excellent" && "text-black bg-limeGreen rounded-lg"
                    }`}
                  >
                    Excelent
                  </li>
                </ul>
              </p>
            </div>
            <div className="flex text-sm gap-4 items-center">
              <p className="min-w-[150px] font-normal">Professionalism :</p>
              <p className="grow">
                <ul className="flex gap-6 font-normal text-gray-400">
                  <li
                    className={`px-3 py-1 font-bold ${
                      interviewDetails?.feedback?.professionalism === "poor" &&
                      "text-black bg-limeGreen rounded-lg"
                    }`}
                  >
                    Poor
                  </li>
                  <li
                    className={`px-3 py-1 font-bold ${
                      interviewDetails?.feedback?.professionalism === "fair" &&
                      "text-black bg-limeGreen rounded-lg"
                    }`}
                  >
                    Fair
                  </li>
                  <li
                    className={`px-3 py-1 font-bold ${
                      interviewDetails?.feedback?.professionalism === "good" &&
                      "text-black bg-limeGreen rounded-lg"
                    }`}
                  >
                    Good
                  </li>
                  <li
                    className={`px-3 py-1 font-bold ${
                      interviewDetails?.feedback?.professionalism ===
                        "excellent" && "text-black bg-limeGreen rounded-lg"
                    }`}
                  >
                    Excelent
                  </li>
                </ul>
              </p>
            </div>
            <div className="flex text-sm gap-4 items-center">
              <p className="min-w-[150px] font-normal">Technical Skill :</p>
              <p className="grow">
                <ul className="flex gap-6 font-normal text-gray-400">
                  <li
                    className={`px-3 py-1 font-bold ${
                      interviewDetails?.feedback?.technicalSkill === "poor" &&
                      "text-black bg-limeGreen rounded-lg"
                    }`}
                  >
                    Poor
                  </li>
                  <li
                    className={`px-3 py-1 font-bold ${
                      interviewDetails?.feedback?.technicalSkill === "fair" &&
                      "text-black bg-limeGreen rounded-lg"
                    }`}
                  >
                    Fair
                  </li>
                  <li
                    className={`px-3 py-1 font-bold ${
                      interviewDetails?.feedback?.technicalSkill === "good" &&
                      "text-black bg-limeGreen rounded-lg"
                    }`}
                  >
                    Good
                  </li>
                  <li
                    className={`px-3 py-1 font-bold ${
                      interviewDetails?.feedback?.technicalSkill ===
                        "excellent" && "text-black bg-limeGreen rounded-lg"
                    }`}
                  >
                    Excelent
                  </li>
                </ul>
              </p>
            </div>
            <div className="flex text-sm gap-4 items-center">
              <p className="min-w-[150px] font-normal">
                Problem Solving Skill :
              </p>
              <p className="grow">
                <ul className="flex gap-6 font-normal text-gray-400">
                  <li
                    className={`px-3 py-1 font-bold ${
                      interviewDetails?.feedback?.problemSolvingSkill ===
                        "poor" && "text-black bg-limeGreen rounded-lg"
                    }`}
                  >
                    Poor
                  </li>
                  <li
                    className={`px-3 py-1 font-bold ${
                      interviewDetails?.feedback?.problemSolvingSkill ===
                        "fair" && "text-black bg-limeGreen rounded-lg"
                    }`}
                  >
                    Fair
                  </li>
                  <li
                    className={`px-3 py-1 font-bold ${
                      interviewDetails?.feedback?.problemSolvingSkill ===
                        "good" && "text-black bg-limeGreen rounded-lg"
                    }`}
                  >
                    Good
                  </li>
                  <li
                    className={`px-3 py-1 font-bold ${
                      interviewDetails?.feedback?.problemSolvingSkill ===
                        "excellent" && "text-black bg-limeGreen rounded-lg"
                    }`}
                  >
                    Excelent
                  </li>
                </ul>
              </p>
            </div>

            <div className="flex text-sm gap-4 items-start">
              <p className="min-w-[150px] font-normal">Comments :</p>
              <p className="w-[70%]">
                {interviewDetails?.feedback?.additionalComment}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewInterview;
