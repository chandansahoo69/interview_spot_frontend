import React from "react";

const InterviewerScheduleInterview = () => {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1>Schedule an Interview</h1>
        <p className="text-sm">
          Hello chandan! Plaese fill the form to schedule an interview
        </p>
      </div>
      {/* Select interviewee section */}
      <div className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow flex flex-col gap-6">
        <h1>Schelude an interview</h1>

        <div className="px-8">
          <div className="flex gap-16 items-center">
            <label className="block mb-2 text-sm font-bold text-gray-900">
              Select an Interview Type
            </label>
            <div className="flex gap-4">
              <div className="flex items-center">
                <input
                  id="behaviour-radio"
                  type="radio"
                  value=""
                  name="default-radio"
                  className="w-4 h-4 "
                />
                <label
                  for="behaviour-radio"
                  className="ml-2 text-sm font-medium text-gray-900 ">
                  Behavioral
                </label>
              </div>
              <div className="flex items-center">
                <input
                  checked
                  id="technical-radio"
                  type="radio"
                  value=""
                  name="default-radio"
                  className="w-4 h-4 "
                />
                <label
                  for="technical-radio"
                  className="ml-2 text-sm font-medium text-gray-900 ">
                  Technical
                </label>
              </div>
              <div className="flex items-center">
                <input
                  checked
                  id="special-radio"
                  type="radio"
                  value=""
                  name="default-radio"
                  className="w-4 h-4 "
                />
                <label
                  for="special-radio"
                  className="ml-2 text-sm font-medium text-gray-900 ">
                  Special
                </label>
              </div>
            </div>
          </div>
          <div>
            <label className="block mb-2 text-sm font-bold text-gray-900">
              Select date
            </label>
            {/* material ui date selesctor */}
          </div>
          <div>
            <label className="block mb-2 text-sm font-bold text-gray-900">
              Select Interviewee
            </label>
            {/* material ui search selesctor */}
          </div>
        </div>
      </div>

      {/* Select time slot section */}
      <div className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow flex flex-col gap-6">
        <h1>Select an Available Time Slot</h1>
        <div className="flex gap-48 px-8">
          <div>
            <label className="block mb-2 text-sm font-bold text-gray-900">
              24-03-23
            </label>
          </div>
          <div className="grid grid-cols-3 grid-flow-row gap-4 grow">
            <button
              type="button"
              className="text-black hover:text-white border border-limeGreen hover:bg-limeGreen focus:ring-4 focus:outline-none focus:ring-[#dbff4a] font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">
              09:00
            </button>
            <button
              type="button"
              className="text-black hover:text-white border border-limeGreen hover:bg-limeGreen focus:ring-4 focus:outline-none focus:ring-[#dbff4a] font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">
              10:00
            </button>
            <button
              type="button"
              className="text-black hover:text-white border border-limeGreen hover:bg-limeGreen focus:ring-4 focus:outline-none focus:ring-[#dbff4a] font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">
              11:00
            </button>
            <button
              type="button"
              className="text-black hover:text-white border border-limeGreen hover:bg-limeGreen focus:ring-4 focus:outline-none focus:ring-[#dbff4a] font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">
              12:00
            </button>
            <button
              type="button"
              className="text-black hover:text-white border border-limeGreen hover:bg-limeGreen focus:ring-4 focus:outline-none focus:ring-[#dbff4a] font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">
              13:00
            </button>
            <button
              type="button"
              className="text-black hover:text-white border border-limeGreen hover:bg-limeGreen focus:ring-4 focus:outline-none focus:ring-[#dbff4a] font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">
              14:00
            </button>
            <button
              type="button"
              className="text-black hover:text-white border border-limeGreen hover:bg-limeGreen focus:ring-4 focus:outline-none focus:ring-[#dbff4a] font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">
              15:00
            </button>
            <button
              type="button"
              className="text-black hover:text-white border border-limeGreen hover:bg-limeGreen focus:ring-4 focus:outline-none focus:ring-[#dbff4a] font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">
              16:00
            </button>
            <button
              type="button"
              className="text-black hover:text-white border border-limeGreen hover:bg-limeGreen focus:ring-4 focus:outline-none focus:ring-[#dbff4a] font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">
              17:00
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterviewerScheduleInterview;
