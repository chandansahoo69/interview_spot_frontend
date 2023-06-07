import React, { useEffect, useState } from "react";
import profileFemalePic from "assets/images/profile-female.jpg";
import { MdEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { AiOutlineEdit } from "react-icons/ai";
import AuthService from "auth/authService";
import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import moment from "moment/moment";

const IntervieweeProfile = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    AuthService.getIntervieweeProfile(id)
      .then((response) => {
        setUser(response);
        console.log(response);
      })
      .catch((err) => {
        console.log("Interviewee Profile err", err);
        toast.error(err?.data?.message);
      });
  }, []);

  return (
    <>
      <div className="flex gap-5">
        <div className="grow">
          <div class="w-full p-5 bg-white border border-gray-200 rounded-lg shadow">
            <h1>Profile Details</h1>
            <div className="mt-6 grid grid-cols-2 grid-rows-2 gap-5">
              <div>
                <p className="text-xs font-normal">User Name</p>
                <p className="text-sm">{user?.userId?.username}</p>
              </div>

              <div>
                <p className="text-xs font-normal">Gender</p>
                <p className="text-sm">{user?.gender}</p>
              </div>
              <div>
                <p className="text-xs font-normal">Date of Birth</p>
                <div className="text-sm flex gap-1 items-center">
                  <p>{moment(user?.dob).format("MMMM DD, YYYY")}</p>
                  <p className="text-xs text-slate-400">(23 years old)</p>
                </div>
              </div>
            </div>
            <div className="my-6 w-full h-[1px] bg-slate-400 rounded"></div>
            {/* Objective / summery */}
            <div className="flex flex-col gap-4">
              <h1>Objective</h1>
              <p className="text-sm font-normal text-justify">
                An individual with a keen interest in Software programs,
                possessing good interpersonal and analytical skills, who wish to
                use technical knowledge catering to the needs of the company. I
                wish to work with a diverse group of people and see myself
                heading a group of people over a 1-year duration in the company.
              </p>
            </div>
            <div className="my-6 w-full h-[1px] bg-slate-400 rounded"></div>
            {/* Skills */}
            <div className="flex flex-col gap-4">
              <h2>Skills</h2>
              <div className="w-fit text-sm grid grid-cols-4 grid-flow-row gap-5 justify-between items-center">
                {user?.skills?.map((skill) => (
                  <p className="min-w-[90px] w-fit px-4 py-1 bg-slate-300 rounded-lg text-center">
                    {skill}
                  </p>
                ))}
              </div>
            </div>
            <div className="my-6 w-full h-[1px] bg-slate-400 rounded"></div>
            {/* Work experience / Internships */}
            <div className="flex flex-col gap-4">
              <h1>Work experiences / Internships</h1>
              {user?.experience?.map((experience) => (
                <div className="flex flex-col gap-2">
                  <h2 className="text-md">{experience?.position}</h2>
                  <h2 className="inline text-sm">{experience?.name}</h2>
                  <p className="text-sm text-slate-500 font-normal">
                    {moment(experience?.startDate).format("MMMM YYYY")} -{" "}
                    {moment(experience?.endDate).format("MMMM YYYY")}
                    (2 months)
                  </p>
                  <p className="text-sm font-normal text-justify">
                    {experience?.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="my-6 w-full h-[1px] bg-slate-400 rounded"></div>
            {/* Projects */}
            <div className="flex flex-col gap-4">
              <h1>Projects</h1>
              {user?.projects?.map((project) => (
                <div className="flex flex-col gap-2">
                  <h2 className="text-md">{project?.name}</h2>
                  <p className="text-sm text-slate-500 font-normal">
                    {moment(project?.startDate).format("MMMM YYYY")} -{" "}
                    {moment(project?.endDate).format("MMMM YYYY")}
                    (2 months)
                  </p>
                  <p className="text-sm font-normal text-justify">
                    {project?.description}
                  </p>
                  <div className="flex gap-2">
                    <p className="text-sm">Technology :</p>
                    <p className="text-sm">React, Socket.io, Netlify</p>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href="#"
                      className="items-center px-10 py-2 text-xs font-medium text-white text-center rounded-lg bg-black hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-white"
                    >
                      Github
                    </a>
                    <a
                      href="#"
                      className="items-center px-10 py-2 text-xs font-medium text-white text-center rounded-lg bg-limeGreen hover:bg-[#dbff4a] focus:ring-4 focus:outline-none focus:ring-white"
                    >
                      Hosted Link
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <div className="my-6 w-full h-[1px] bg-slate-400 rounded"></div>
            {/* Education */}
            <div className="flex flex-col gap-4">
              <h1>Education</h1>
              {user?.education?.map((education) => (
                <div className="flex flex-col gap-1">
                  <h2 className="text-md">{education?.course}</h2>
                  <h2 className="inline text-sm">{education?.name}</h2>
                  <p className="text-sm text-slate-500 font-normal">
                    2019 - 2023
                    {moment(education?.startDate).format("YYYY")} -
                    {moment(education?.endDate).format("YYYY")}
                    (2 months)
                  </p>
                  <div className="flex gap-2">
                    <p className="text-sm text-justify">CGPA :</p>
                    <p className="text-sm text-justify">{education?.cgpa}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Right side profile div */}
        <div className="min-w-[280px] flex flex-col items-center gap-6">
          <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">
            <div className="flex flex-col items-center px-5 py-10">
              <img
                className="w-24 h-24 rounded-full shadow-lg"
                src={user.avatar ? user.avatar : profileFemalePic}
              />
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                Subrata Samartha
              </h5>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {user?.userId?.username}
              </span>
              <div className="m-5 w-full h-[1px] bg-slate-200 rounded"></div>
              <div className="flex flex-col gap-2 mt-4 md:mt-2">
                <a
                  href="#"
                  className="items-center px-16 py-2 text-sm font-medium text-white text-center bg-limeGreen rounded-lg hover:bg-[#dbff4a] focus:ring-4 focus:outline-none focus:ring-white"
                >
                  Portfolio
                </a>
                <a
                  href="#"
                  className="items-center px-20 py-2 text-white text-sm font-medium text-center  
                  bg-[#0077b4] rounded-lg hover:bg-[#0090da] focus:ring-4 focus:outline-none focus:ring-white"
                >
                  LinkedIn
                </a>
                <a
                  href="#"
                  className="items-center px-20 py-2 text-sm font-medium text-white text-center rounded-lg bg-black hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-white"
                >
                  Github
                </a>
              </div>
              <div className="mx-5 mt-6 mb-6 w-full h-[1px] bg-slate-200 rounded"></div>
              <div className="relative w-full">
                <p className="absolute left-0 top-0 text-xs text-slate-400">
                  Contact Details
                </p>
                <div className="mt-8 flex items-start gap-2">
                  <MdEmail className="text-2xl" />
                  <div className="flex flex-col text-sm font-normal text-slate-800">
                    <p>Email</p>
                    <p>{user?.userId?.email}</p>
                  </div>
                </div>
                <div className="mt-4 ml-1 flex items-start gap-2">
                  <BsTelephoneFill className="text-xl" />
                  <div className="flex flex-col text-sm font-normal text-slate-800">
                    <p>Phone</p>
                    <p>+91-{user?.phone}</p>
                  </div>
                </div>
                <div className="mt-4 flex items-start gap-2">
                  <FaHome className="text-2xl" />
                  <div className="flex flex-col text-sm font-normal text-slate-800">
                    <p>Address</p>
                    <p className="w-48">{user?.address}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={() => navigate("edit")}
            className="min-w-[280px] py-2 bg-slate-500 text-sm rounded-lg shadow-sm text-white hover:bg-slate-400 hover:text-white flex items-center justify-center gap-2"
          >
            <AiOutlineEdit className="text-lg" />
            Edit
          </button>
        </div>
      </div>
    </>
  );
};

export default IntervieweeProfile;
