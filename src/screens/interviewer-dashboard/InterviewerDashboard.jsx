import AuthService from "auth/authService";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";

const InterviewerDashboard = () => {
  const { userResponse } = useSelector((state) => state.auth);
  const [pendingInterviews, setPendingInterviews] = useState([]);
  const [scheduledInterviews, setScheduledInterviews] = useState([]);

  const getAllPendingInterviews = () => {
    AuthService.getPendingInterview()
      .then((response) => {
        setPendingInterviews(response);
        console.log(response);
      })
      .catch((err) => {
        console.log("pending interviews err", err);
        toast.error(err?.data?.message);
      });
  };

  const getAllScheduledInterviews = () => {
    AuthService.getScheduledInterview()
      .then((response) => {
        setScheduledInterviews(response);
        console.log(response);
      })
      .catch((err) => {
        console.log("pending interviews err", err);
        toast.error(err?.data?.message);
      });
  };

  useEffect(() => {
    getAllPendingInterviews();
    getAllScheduledInterviews();
  }, []);

  const handleAcceptInterview = (id) => {
    const inputs = {
      interviewId: id,
    };
    console.log("accept", id);

    AuthService.acceptInterview(inputs)
      .then((response) => {
        console.log(response);
        getAllPendingInterviews();
        getAllScheduledInterviews();
      })
      .catch((err) => {
        console.log("pending interviews err", err);
        toast.error(err?.data?.message);
      });
  };

  const handleRejectInterview = (id) => {
    const inputs = {
      interviewId: id,
      reason: "",
    };
    console.log("reject", id);
    return;
    AuthService.rejectInterview(inputs)
      .then((response) => {
        console.log(response);
        getAllPendingInterviews();
      })
      .catch((err) => {
        console.log("pending interviews err", err);
        toast.error(err?.data?.message);
      });
  };

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1>Dashboard</h1>
        <p className="text-sm text-slate-500">
          Hello, {userResponse?.username}! Welcome to Interview Spot
        </p>
      </div>
      {/* Pending Approval Table */}
      <div className="w-full bg-white border border-gray-200 rounded-lg shadow flex flex-col">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 ">
            <caption className="p-5 text-lg font-semibold text-left  bg-white ">
              Pending Approvals
              <p className="mt-1 text-sm font-normal text-gray-500 ">
                Approve or reject each interview
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
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-center"></th>
              </tr>
            </thead>
            <tbody>
              {pendingInterviews.length === 0 && (
                <span>No Interviews are there.</span>
              )}
              {pendingInterviews.map((interview, index) => (
                <tr className="bg-white border-b" key={index}>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    {interview?.category}
                  </th>
                  <td className="px-6 py-4">{interview?.interviewee}</td>
                  <td className="px-6 py-4">
                    {moment(interview?.date).format("DD-MM-YY")}
                  </td>
                  <td className="px-6 py-4">{interview?.timeSlot}</td>
                  <td className="px-6 py-4 text-center">
                    {userResponse?.userId === interview?.createdBy ? (
                      <button
                        type="button"
                        className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-3 py-1.5 mr-2 mb-2"
                      >
                        Pending
                      </button>
                    ) : (
                      <>
                        <button
                          onClick={() => handleAcceptInterview(interview._id)}
                          type="button"
                          className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-3 py-1.5 mr-2 mb-2"
                        >
                          Approve
                        </button>
                        <button
                          onClick={() => handleRejectInterview(interview._id)}
                          type="button"
                          className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-1.5 mr-2 mb-2"
                        >
                          Reject
                        </button>
                      </>
                    )}
                  </td>
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
      {/* Scheduled Interview Table */}
      <div className="w-full bg-white border border-gray-200 rounded-lg shadow flex flex-col">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 ">
            <caption className="p-5 text-lg font-semibold text-left  bg-white ">
              Scheduled Interviews
              <p className="mt-1 text-sm font-normal text-gray-500 ">
                All approved ready to join interviews
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
                  join
                </th>
                <th scope="col" className="px-6 py-3 text-center"></th>
              </tr>
            </thead>
            <tbody>
              {scheduledInterviews.length === 0 && (
                <span>No Interviews are there.</span>
              )}
              {scheduledInterviews.map((interview, index) => (
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
                  <td className="px-6 py-4 text-center">
                    <button
                      type="button"
                      className="focus:outline-none text-black bg-limeGreen hover:bg-[#adbf38] focus:ring-4 focus:ring-limeGreen font-medium rounded-lg text-sm px-3 py-1.5 mr-2 mb-2"
                    >
                      join now
                    </button>
                  </td>
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

export default InterviewerDashboard;
