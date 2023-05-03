/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const InterviewerDashboard = () => {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1>Dashboard</h1>
        <p className="text-sm text-slate-500">
          Hello, Chandan! Welcome to Interview Spot
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
              <tr className="bg-white border-b">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  Special
                </th>
                <td className="px-6 py-4">Subrata Samartha</td>
                <td className="px-6 py-4">23-04-23</td>
                <td className="px-6 py-4">13:00</td>
                <td className="px-6 py-4 text-center">
                  <button
                    type="button"
                    className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-3 py-1.5 mr-2 mb-2">
                    Approve
                  </button>
                  <button
                    type="button"
                    className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-1.5 mr-2 mb-2">
                    Reject
                  </button>
                  {/* <button
                    type="button"
                    className="focus:outline-none text-white bg-yellow-300 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-1 mr-2 mb-2 cursor-not-allowed"
                    disabled>
                    <p className="text-lg font-bold inline mr-2">!</p>
                    Pending
                  </button> */}
                </td>
                <td class="px-6 py-4 text-center">
                  <a
                    href="#"
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                    View
                  </a>
                </td>
              </tr>
              <tr className="bg-white border-b">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  Behavioral
                </th>
                <td className="px-6 py-4">Nirmalya Prasad Patra</td>
                <td className="px-6 py-4">10-04-23</td>
                <td className="px-6 py-4">09:00</td>
                <td className="px-6 py-4 text-center">
                  <button
                    type="button"
                    className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-3 py-1.5 mr-2 mb-2">
                    Approve
                  </button>
                  <button
                    type="button"
                    className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-1.5 mr-2 mb-2">
                    Reject
                  </button>
                  {/* <button
                    type="button"
                    className="focus:outline-none text-white bg-yellow-300 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-1 mr-2 mb-2 cursor-not-allowed"
                    disabled>
                    <p className="text-lg font-bold inline mr-2">!</p>
                    Pending
                  </button> */}
                </td>
                <td class="px-6 py-4 text-center">
                  <a
                    href="#"
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                    View
                  </a>
                </td>
              </tr>
              <tr className="bg-white border-b">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  Technical
                </th>
                <td className="px-6 py-4">Swity Sweta Gini</td>
                <td className="px-6 py-4">23-04-23</td>
                <td className="px-6 py-4">15:00</td>
                <td className="px-6 py-4 text-center">
                  {/* <button
                    type="button"
                    className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-3 py-1.5 mr-2 mb-2">
                    Approve
                  </button>
                  <button
                    type="button"
                    className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-1.5 mr-2 mb-2">
                    Reject
                  </button> */}
                  <button
                    type="button"
                    className="focus:outline-none text-white bg-yellow-300 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-1 mr-2 mb-2 cursor-not-allowed"
                    disabled>
                    <p className="text-lg font-bold inline pr-2">!</p>
                    Pending
                  </button>
                </td>
                <td class="px-6 py-4 text-center">
                  <a
                    href="#"
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                    View
                  </a>
                </td>
              </tr>
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
              <tr className="bg-white border-b">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  Special
                </th>
                <td className="px-6 py-4">Subrata Samartha</td>
                <td className="px-6 py-4">23-04-23</td>
                <td className="px-6 py-4">13:00</td>
                <td className="px-6 py-4 text-center">
                  <button
                    type="button"
                    className="focus:outline-none text-black bg-limeGreen hover:bg-[#adbf38] focus:ring-4 focus:ring-limeGreen font-medium rounded-lg text-sm px-3 py-1.5 mr-2 mb-2">
                    join now
                  </button>
                </td>
                <td class="px-6 py-4 text-center">
                  <a
                    href="#"
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                    View
                  </a>
                </td>
              </tr>
              <tr className="bg-white border-b">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  Behavioral
                </th>
                <td className="px-6 py-4">Nirmalya Prasad Patra</td>
                <td className="px-6 py-4">10-04-23</td>
                <td className="px-6 py-4">09:00</td>
                <td className="px-6 py-4 text-center">
                  <button
                    type="button"
                    className="focus:outline-none text-black bg-limeGreen hover:bg-[#adbf38] focus:ring-4 focus:ring-limeGreen font-medium rounded-lg text-sm px-3 py-1.5 mr-2 mb-2">
                    join now
                  </button>
                </td>
                <td class="px-6 py-4 text-center">
                  <a
                    href="#"
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                    View
                  </a>
                </td>
              </tr>
              <tr className="bg-white border-b">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  Technical
                </th>
                <td className="px-6 py-4">Swity Sweta Gini</td>
                <td className="px-6 py-4">23-04-23</td>
                <td className="px-6 py-4">15:00</td>
                <td className="px-6 py-4 text-center">
                  <button
                    type="button"
                    className="focus:outline-none text-black bg-limeGreen hover:bg-[#adbf38] focus:ring-4 focus:ring-limeGreen font-medium rounded-lg text-sm px-3 py-1.5 mr-2 mb-2">
                    join now
                  </button>
                </td>
                <td class="px-6 py-4 text-center">
                  <a
                    href="#"
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                    View
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default InterviewerDashboard;
