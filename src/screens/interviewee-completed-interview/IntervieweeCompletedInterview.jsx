import React from "react";

const IntervieweeCompletedInterview = () => {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1>Compeleted Interviews</h1>
        <p className="text-sm text-slate-500">
          Hello Chandan! Go through all your completed interview and proveide
          valualble feedback to peding interview
        </p>
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
                  Interviewer Name
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
              <tr className="bg-white border-b">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  Special
                </th>
                <td className="px-6 py-4">Satya Ranjan Pattanaik</td>
                <td className="px-6 py-4">23-04-23</td>
                <td className="px-6 py-4">13:00</td>
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

export default IntervieweeCompletedInterview;
