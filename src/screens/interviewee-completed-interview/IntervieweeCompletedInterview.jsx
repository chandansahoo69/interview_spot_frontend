import React, { useEffect, useState } from "react";
import AuthService from "auth/authService";
import moment from "moment";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const IntervieweeCompletedInterview = () => {
  const navigate = useNavigate();
  const [completedInterviews, setCompletedInterviews] = useState([]);
  const [pendingFeedbacks, setPendingFeedbacks] = useState([]);

  const getAllCompletedInterviews = () => {
    AuthService.getCompletedInterviewForInterviewee()
      .then((response) => {
        setCompletedInterviews(response);
        console.log(response);
      })
      .catch((err) => {
        console.log("pending interviews err", err);
        toast.error(err?.data?.message);
      });
  };

  const getAllPendingFeedbacks = () => {
    AuthService.pendingFeedbacksForInterviewee()
      .then((response) => {
        setPendingFeedbacks(response);
        console.log(response);
      })
      .catch((err) => {
        console.log("pending feedbacks err", err);
        toast.error(err?.data?.message);
      });
  };

  useEffect(() => {
    getAllPendingFeedbacks();
    getAllCompletedInterviews();
  }, []);

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1>Compeleted Interviews</h1>
        <p className="text-sm text-slate-500">
          Hello Chandan! Go through all your completed interview and proveide
          valualble feedback to peding interview
        </p>
      </div>
      {/* Pending Feedback Table */}
      <div className="w-full bg-white border border-gray-200 rounded-lg shadow flex flex-col">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 ">
            <caption className="p-5 text-lg font-semibold text-left  bg-white ">
              Pending Feedback
              <p className="mt-1 text-sm font-normal text-gray-500 ">
                Provide feedback to each completed interview
              </p>
            </caption>
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Interview Type
                </th>
                <th scope="col" className="px-6 py-3">
                  Interviewee Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Time
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Pending
                </th>
              </tr>
            </thead>
            <tbody>
              {pendingFeedbacks.length === 0 && (
                <span>No pending feedbacks are there.</span>
              )}
              {pendingFeedbacks.map((feedback, index) => (
                <tr className="bg-white border-b" key={index}>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    {feedback.category}
                  </th>
                  <td className="px-6 py-4">{feedback?.interviewer}</td>
                  <td className="px-6 py-4">
                    {moment(feedback?.date).format("DD-MM-YY")}
                  </td>
                  <td className="px-6 py-4">{feedback?.timeSlot}</td>
                  <td className="px-6 py-4 text-center">
                    <button
                      onClick={() =>
                        navigate("/feedback", {
                          state: { interview: feedback._id },
                        })
                      }
                      type="button"
                      className="focus:outline-none text-black bg-yellow-300 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-1 mr-2 mb-2 cursor-pointer"
                    >
                      feedback
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* Completed Interview Table */}
      <div className="w-full bg-white border border-gray-200 rounded-lg shadow flex flex-col">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 ">
            <caption className="p-5 text-lg font-semibold text-left  bg-white ">
              Completed Interviews
              <p className="mt-1 text-sm font-normal text-gray-500 ">
                All completed interviews can be viewed
              </p>
            </caption>
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Interview Type
                </th>
                <th scope="col" className="px-6 py-3">
                  Interviewee Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Time
                </th>

                <th scope="col" className="px-6 py-3 text-center"></th>
              </tr>
            </thead>
            <tbody>
              {completedInterviews.length === 0 && (
                <span>No Interviews are there.</span>
              )}
              {completedInterviews.map((interview, index) => (
                <tr className="bg-white border-b" key={index}>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    {interview.category}
                  </th>
                  <td className="px-6 py-4">{interview?.interviewee}</td>
                  <td className="px-6 py-4">
                    {moment(interview?.date).format("DD-MM-YY")}
                  </td>
                  <td className="px-6 py-4">{interview?.timeSlot}</td>
                  <td class="px-6 py-4 text-center">
                    <a
                      href="#"
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      View
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default IntervieweeCompletedInterview;
