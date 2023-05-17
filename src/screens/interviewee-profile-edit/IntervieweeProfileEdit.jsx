import React, { useState } from "react";

const IntervieweeProfileEdit = () => {
  const [inputs, setInputs] = useState({
    phone: "1234567890",
    gender: "male",
    dob: "04-15-2002",
    address: "NA-164, Nuabazar, Paradeep, 754142",
    skills: ["C++", "Java", "Python", "JS"],
    education: [
      {
        name: "Gandhi Institute For Technonoly, Bhubaneswar",
        course: "Bachelors of Technology in Computer Science and Engineering",
        cgpa: 8.4,
        startDate: "06-19-2019",
        endDate: "07-20-2023",
      },
      {
        name: "Tetrahedron Junior College, Tangi",
        course: "Higher Secondary School",
        cgpa: 7.4,
        startDate: "06-19-2017",
        endDate: "07-20-2019",
      },
    ],
    experience: [
      {
        name: "GlowTechMor",
        position: "Full-Stack Developer",
        description:
          "In addition to your startup experiences, you have undertaken personal projects that showcase your creativity and problem-solving skills. One of your notable projects, BinarySearch, is a coding platform that allows users to register, create contest rooms, and compete with their colleagues. The platform incorporates timed challenges, where participants must solve specific questions within a given time frame. The winner receives points that are reflected in their respective accounts, adding a competitive edge to the platform.",
        startDate: "06-19-2022",
        endDate: "07-20-2022",
      },
    ],
    projects: [
      {
        name: "Binary Search",
        description:
          "An audio chat room that accommodates thousands of users and includes features to create a club tohost events for multiple groups.",
        startDate: "06-19-2022",
        endDate: "07-20-2022",
      },
    ],
  });

  return (
    <>
      <div class="flex h-screen bg-gray-100">
        <div class="m-auto">
          <div>
            <div class="mt-5 bg-white rounded-lg shadow">
              <div class="flex">
                <div class="flex-1 py-5 pl-5 overflow-hidden">
                  <svg
                    class="inline align-text-top"
                    height="24px"
                    viewBox="0 0 24 24"
                    width="24px"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#000000"
                  >
                    <g>
                      <path
                        d="m4.88889,2.07407l14.22222,0l0,20l-14.22222,0l0,-20z"
                        fill="none"
                        id="svg_1"
                        stroke="null"
                      ></path>
                      <path
                        d="m7.07935,0.05664c-3.87,0 -7,3.13 -7,7c0,5.25 7,13 7,13s7,-7.75 7,-13c0,-3.87 -3.13,-7 -7,-7zm-5,7c0,-2.76 2.24,-5 5,-5s5,2.24 5,5c0,2.88 -2.88,7.19 -5,9.88c-2.08,-2.67 -5,-7.03 -5,-9.88z"
                        id="svg_2"
                      ></path>
                      <circle
                        cx="7.04807"
                        cy="6.97256"
                        r="2.5"
                        id="svg_3"
                      ></circle>
                    </g>
                  </svg>
                  <h1 class="inline text-2xl font-semibold leading-none">
                    Sender
                  </h1>
                </div>
              </div>
              <div class="px-5 pb-5">
                <input
                  placeholder="Name"
                  class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                />
                <input
                  placeholder="Address"
                  class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                />
                <div class="flex">
                  <div class="flex-grow w-1/4 pr-2">
                    <input
                      placeholder="PLZ"
                      class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                    />
                  </div>
                  <div class="flex-grow">
                    <input
                      placeholder="City"
                      class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                    />
                  </div>
                </div>
              </div>
              <div class="flex">
                <div class="flex-1 py-5 pl-5 overflow-hidden">
                  <svg
                    class="inline align-text-top"
                    width="21"
                    height="20.5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#000000"
                  >
                    <g>
                      <path
                        d="m4.88889,2.07407l14.22222,0l0,20l-14.22222,0l0,-20z"
                        fill="none"
                        id="svg_1"
                        stroke="null"
                      ></path>
                      <path
                        d="m7.07935,0.05664c-3.87,0 -7,3.13 -7,7c0,5.25 7,13 7,13s7,-7.75 7,-13c0,-3.87 -3.13,-7 -7,-7zm-5,7c0,-2.76 2.24,-5 5,-5s5,2.24 5,5c0,2.88 -2.88,7.19 -5,9.88c-2.08,-2.67 -5,-7.03 -5,-9.88z"
                        id="svg_2"
                      ></path>
                      <circle
                        cx="7.04807"
                        cy="6.97256"
                        r="2.5"
                        id="svg_3"
                      ></circle>
                    </g>
                  </svg>
                  <h1 class="inline text-2xl font-semibold leading-none">
                    Receiver
                  </h1>
                </div>
                <div class="flex-none pt-2.5 pr-2.5 pl-1"></div>
              </div>
              <div class="px-5 pb-5">
                <input
                  placeholder="Name"
                  class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                />
                <input
                  placeholder="Address"
                  class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                />
                <div class="flex">
                  <div class="flex-grow w-1/4 pr-2">
                    <input
                      placeholder="PLZ"
                      class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                    />
                  </div>
                  <div class="flex-grow">
                    <input
                      placeholder="City"
                      class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                    />
                  </div>
                </div>
              </div>
              <hr class="mt-4" />
              <div class="flex flex-row-reverse p-3">
                <div class="flex-initial pl-3">
                  <button
                    type="button"
                    class="flex items-center px-5 py-2.5 font-medium tracking-wide text-white capitalize   bg-black rounded-md hover:bg-gray-800  focus:outline-none focus:bg-gray-900  transition duration-300 transform active:scale-95 ease-in-out"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 0 24 24"
                      width="24px"
                      fill="#FFFFFF"
                    >
                      <path d="M0 0h24v24H0V0z" fill="none"></path>
                      <path
                        d="M5 5v14h14V7.83L16.17 5H5zm7 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-8H6V6h9v4z"
                        opacity=".3"
                      ></path>
                      <path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm2 16H5V5h11.17L19 7.83V19zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM6 6h9v4H6z"></path>
                    </svg>
                    <span class="pl-2 mx-1">Save</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IntervieweeProfileEdit;
