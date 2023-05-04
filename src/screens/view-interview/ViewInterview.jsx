import React from "react";

const ViewInterview = () => {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h1>Interview Details</h1>
        <p className="text-sm text-slate-500">
          Hello, Chandan! Please go through the Interview Details before you
          join
        </p>
      </div>
      <div className="flex gap-4">
        <div class="w-full p-6 bg-white border border-gray-200 rounded-lg shadow">
          <h1 className="mb-8">Meeting Details</h1>
          <div className="px-8 grid grid-cols-1 gap-2">
            <div className="grid grid-cols-3 text-sm">
              <p className="font-normal ">Interviewee Name</p>
              <p className="col-span-2">Subrata Samartha</p>
            </div>
            <div className="grid grid-cols-3 text-sm">
              <p className="font-normal ">Interviewer Name</p>
              <p className="col-span-2">Chandan Sahoo</p>
            </div>
            <div className="grid grid-cols-3 text-sm">
              <p className="font-normal ">Date & Time</p>
              <p className="">23-04-23</p>
              <p className="">17:00</p>
            </div>
            <div className="grid grid-cols-3 text-sm">
              <p className="font-normal ">Interview Type</p>
              <p className="col-span-2">Behavioral</p>
            </div>
          </div>
        </div>
        <div class="w-full p-6 bg-white border border-gray-200 rounded-lg shadow">
          <h1 className="mb-6">Meeting Status</h1>
          <div className="px-8 grid grid-cols-1 gap-2">
            <p>Rejected</p>
            <div className="grid grid-cols-3 text-sm">
              <p className="font-normal ">Reason(if rejected)</p>
              <p className="col-span-2 opacity-70">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                ea minima ipsa inventore necessitatibus quod fugit consequuntur,
                incidunt, culpa cumque mollitia atque cupiditate molestias rem
                sint nihil eaque aspernatur quibusdam.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* join button */}
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
            className="w-fit focus:outline-none text-black bg-limeGreen hover:bg-[#adbf38] focus:ring-4 focus:ring-limeGreen font-medium rounded-lg text-sm px-12 py-3 mr-2 mb-2">
            join now
          </button>
        </div>
      </div>

      {/* feedback */}
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
                <li className="px-3 py-1">Poor</li>
                <li className="font-bold text-black px-3 py-1  bg-limeGreen rounded-lg">
                  Fair
                </li>
                <li className="px-3 py-1">Good</li>
                <li className="px-3 py-1">Excelent</li>
              </ul>
            </p>
          </div>
          <div className="flex text-sm gap-4 items-center">
            <p className="min-w-[150px] font-normal">Communication Skill :</p>
            <p className="grow">
              <ul className="flex gap-6 font-normal text-gray-400">
                <li className="px-3 py-1">Poor</li>
                <li className="font-bold text-black px-3 py-1  bg-limeGreen rounded-lg">
                  Fair
                </li>
                <li className="px-3 py-1">Good</li>
                <li className="px-3 py-1">Excelent</li>
              </ul>
            </p>
          </div>
          <div className="flex text-sm gap-4 items-center">
            <p className="min-w-[150px] font-normal">Professionalism :</p>
            <p className="grow">
              <ul className="flex gap-6 font-normal text-gray-400">
                <li className="px-3 py-1">Poor</li>
                <li className="font-bold text-black px-3 py-1  bg-limeGreen rounded-lg">
                  Fair
                </li>
                <li className="px-3 py-1">Good</li>
                <li className="px-3 py-1">Excelent</li>
              </ul>
            </p>
          </div>
          <div className="flex text-sm gap-4 items-center">
            <p className="min-w-[150px] font-normal">Technical Skill :</p>
            <p className="grow">
              <ul className="flex gap-6 font-normal text-gray-400">
                <li className="px-3 py-1">Poor</li>
                <li className="font-bold text-black px-3 py-1  bg-limeGreen rounded-lg">
                  Fair
                </li>
                <li className="px-3 py-1">Good</li>
                <li className="px-3 py-1">Excelent</li>
              </ul>
            </p>
          </div>
          <div className="flex text-sm gap-4 items-center">
            <p className="min-w-[150px] font-normal">Problem Solving Skill :</p>
            <p className="grow">
              <ul className="flex gap-6 font-normal text-gray-400">
                <li className="px-3 py-1">Poor</li>
                <li className="font-bold text-black px-3 py-1  bg-limeGreen rounded-lg">
                  Fair
                </li>
                <li className="px-3 py-1">Good</li>
                <li className="px-3 py-1">Excelent</li>
              </ul>
            </p>
          </div>

          <div className="flex text-sm gap-4 items-start">
            <p className="min-w-[150px] font-normal">Communication Skill :</p>
            <p className="w-[70%]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
              voluptatum sit, repudiandae velit placeat saepe odit
              exercitationem quidem dignissimos molestias odio sint quisquam
              rerum sed? Vitae mollitia aliquid voluptates fugit? Lorem ipsum,
              dolor sit amet consectetur adipisicing elit. Voluptate soluta
              explicabo praesentium possimus quod vitae tempora itaque
              repudiandae error sapiente fugiat architecto accusamus corrupti,
              debitis quidem eveniet optio cupiditate doloribus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewInterview;
