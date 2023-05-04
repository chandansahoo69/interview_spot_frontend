import React from "react";
import ProfileFemale from "assets/images/profile-female.jpg";
import { MdEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { ImLinkedin } from "react-icons/im";
import { AiFillEdit } from "react-icons/ai";

const InterviewerProfile = () => {
  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="w-[640px] flex justify-between">
        <h1>My Profile</h1>
        <button
          type="button"
          class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-xs px-3 py-1.5 flex gap-1 items-center">
          <AiFillEdit />
          Edit
        </button>
      </div>
      <div class="w-[640px] p-6 mx-auto bg-white border border-gray-200 rounded-lg shadow flex justify-center">
        <div className="flex justify-center grow">
          <div class="flex flex-col items-center">
            <img
              class="w-24 h-24 mb-3 rounded-full shadow-lg"
              src={ProfileFemale}
              alt="Chandan Sahoo"
            />
            <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              Chandan Sahoo
            </h5>
            <span class="text-sm text-gray-500 ">Interviewer</span>
          </div>
        </div>
        <div className="w-[1px]  bg-slate-300 rounded-lg"></div>
        <div className="flex flex-col items-center grow">
          <div className="flex flex-col gap-2">
            <div>
              <p className="text-sm font-normal">Department:</p>
              <p className="text-sm">Computer Science and Engineering</p>
            </div>
            <div className="flex items-start gap-2 mt-2">
              <MdEmail className="text-2xl" />
              <div>
                <p className="text-sm font-normal">Email</p>
                <p className="text-sm">chandansahoo@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <BsTelephoneFill className="text-2xl pt-[5px]" />
              <div>
                <p className="text-sm font-normal">Phone</p>
                <p className="text-sm">+91 9658205350</p>
              </div>
            </div>
            <button
              type="button"
              class="w-full text-white bg-[#0a66c2] hover:bg-[#0a66c2]/90 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 items-center mr-2 mb-2 flex justify-center gap-2 mt-2">
              <ImLinkedin />
              Linkedin
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterviewerProfile;
