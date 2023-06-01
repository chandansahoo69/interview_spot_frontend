import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { MdDeleteForever } from "react-icons/md";

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

  function truncate(source, size) {
    return source.length > size ? source.slice(0, size - 1) + "…" : source;
  }

  return (
    <>
      {/* <div class="flex h-screen bg-gray-100">
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
                  class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white  focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                />
                <input
                  placeholder="Address"
                  class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white"
                />
                <div class="flex">
                  <div class="flex-grow w-1/4 pr-2">
                    <input
                      placeholder="PLZ"
                      class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white"
                    />
                  </div>
                  <div class="flex-grow">
                    <input
                      placeholder="City"
                      class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white"
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
                  class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white"
                />
                <input
                  placeholder="Address"
                  class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white"
                />
                <div class="flex">
                  <div class="flex-grow w-1/4 pr-2">
                    <input
                      placeholder="PLZ"
                      class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white "
                    />
                  </div>
                  <div class="flex-grow">
                    <input
                      placeholder="City"
                      class=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white"
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
      </div> */}

      <section class="bg-white rounded-lg shadow-sm">
        <h2 class="pt-8 text-xl font-bold text-gray-900 px-16">
          General Information
        </h2>
        <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
          <form action="#">
            <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div class="sm:col-span-2">
                <label
                  for="name"
                  class="block mb-2 text-sm font-medium text-gray-900">
                  First Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Type product name"
                  required=""
                />
              </div>
              <div class="w-full">
                <label
                  for="first_name"
                  class="block mb-2 text-sm font-medium text-gray-900">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="first_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Enter first name"
                  required=""
                />
              </div>
              <div class="w-full">
                <label
                  for="last-name"
                  class="block mb-2 text-sm font-medium text-gray-900">
                  Last Name
                </label>
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="Enter last name"
                  required=""
                />
              </div>
              <div class="sm:col-span-2">
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Enter your email address"
                  required=""
                />
              </div>
              <div class="sm:col-span-2">
                <label
                  for="phone-number"
                  class="block mb-2 text-sm font-medium text-gray-900">
                  Phone/Mobile No.
                </label>
                <input
                  type="tel"
                  name="phone-number"
                  id="phone-number"
                  pattern="[0-9]{10}"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Enter your phone/mobile"
                  required=""
                />
              </div>
              <div>
                <label
                  for="gender"
                  class="block mb-2 text-sm font-medium text-gray-900">
                  Gender
                </label>
                <select
                  id="gender"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5">
                  <option selected="">Select gender</option>
                  <option value="MALE">Male</option>
                  <option value="FEMALE">Female</option>
                  <option value="OTHER">Other</option>
                </select>
              </div>
              <div>
                <label
                  for="dob"
                  class="block mb-2 text-sm font-medium text-gray-900">
                  Date of Birth
                </label>
                <input
                  type="date"
                  name="dob"
                  id="dob"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder=""
                  required=""
                />
              </div>
              <div class="sm:col-span-2">
                <label
                  for="address"
                  class="block mb-2 text-sm font-medium text-gray-900">
                  Address
                </label>
                <textarea
                  id="address"
                  rows="5"
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Your address here"></textarea>
              </div>
            </div>
            <button
              type="submit"
              class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-black bg-lime-200 rounded-lg focus:ring-4 focus:ring-primary-200">
              Save
            </button>
          </form>
        </div>
      </section>
      <section class="bg-white mt-10 rounded-lg shadow-sm">
        <h2 class="pt-8 text-xl font-bold text-gray-900 px-16">
          Candidate Information
        </h2>
        <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
          <form action="#">
            <div class="grid gap-4 sm:grid-cols-2">
              <div class="sm:col-span-2">
                <label
                  for="objective"
                  class="block  text-xl font-bold text-gray-900">
                  Objective
                </label>
                <p className="py-4 text-sm text-justify">
                  An individual with a keen interest in Software programs,
                  possessing good interpersonal and analytical skills, who wish
                  to use technical knowledge catering to the needs of the
                  company. I wish to work with a diverse group of people and see
                  myself heading a group of people over a I-year duration in the
                  company.
                </p>
                <textarea
                  id="objective"
                  rows="3"
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Your objective here"></textarea>
                <button className="mt-4 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-black bg-lime-200 rounded-lg focus:ring-4 focus:ring-primary-200">
                  Update
                </button>
              </div>
              {/* Skills */}
              <div class="sm:col-span-2">
                <label
                  for="skills"
                  class="block mb-4 text-xl font-bold text-gray-900">
                  Skills
                </label>
                <div className="flex gap-3 flex-wrap">
                  <div className="w-fit flex gap-1 items-center p-2 rounded-lg text-sm bg-gray-300">
                    <p className="border-r-2 border-gray-400 border-solid pr-1">
                      React
                    </p>
                    <RxCross1 className="" />
                  </div>
                  <div className="w-fit flex gap-1 items-center p-2 rounded-lg text-sm bg-gray-300">
                    <p className="border-r-2 border-gray-400 border-solid pr-1">
                      React
                    </p>
                    <RxCross1 className="" />
                  </div>
                  <div className="w-fit flex gap-1 items-center p-2 rounded-lg text-sm bg-gray-300">
                    <p className="border-r-2 border-gray-400 border-solid pr-1">
                      React
                    </p>
                    <RxCross1 className="" />
                  </div>
                  <div className="w-fit flex gap-1 items-center p-2 rounded-lg text-sm bg-gray-300">
                    <p className="border-r-2 border-gray-400 border-solid pr-1">
                      React
                    </p>
                    <RxCross1 className="" />
                  </div>
                  <div className="w-fit flex gap-1 items-center p-2 rounded-lg text-sm bg-gray-300">
                    <p className="border-r-2 border-gray-400 border-solid pr-1">
                      React
                    </p>
                    <RxCross1 className="" />
                  </div>
                  <div className="w-fit flex gap-1 items-center p-2 rounded-lg text-sm bg-gray-300">
                    <p className="border-r-2 border-gray-400 border-solid pr-1">
                      React
                    </p>
                    <RxCross1 className="" />
                  </div>
                  <div className="w-fit flex gap-1 items-center p-2 rounded-lg text-sm bg-gray-300">
                    <p className="border-r-2 border-gray-400 border-solid pr-1">
                      React
                    </p>
                    <RxCross1 className="" />
                  </div>
                  <div className="w-fit flex gap-1 items-center p-2 rounded-lg text-sm bg-gray-300">
                    <p className="border-r-2 border-gray-400 border-solid pr-1">
                      React
                    </p>
                    <RxCross1 className="" />
                  </div>
                  <div className="w-fit flex gap-1 items-center p-2 rounded-lg text-sm bg-gray-300">
                    <p className="border-r-2 border-gray-400 border-solid pr-1">
                      React
                    </p>
                    <RxCross1 className="" />
                  </div>
                  <div className="w-fit flex gap-1 items-center p-2 rounded-lg text-sm bg-gray-300">
                    <p className="border-r-2 border-gray-400 border-solid pr-1">
                      React
                    </p>
                    <RxCross1 className="" />
                  </div>
                </div>
                <div className="flex items-center gap-5 mt-3 w-full">
                  <input
                    type="text"
                    name="skill"
                    id="skill"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 blocks p-1 h-10"
                    placeholder="Enter your skill"
                    required=""
                  />
                  <button className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-black bg-lime-200 rounded-lg focus:ring-4 focus:ring-primary-200">
                    Add Skill
                  </button>
                </div>
              </div>

              {/* Internships */}
              <div class="sm:col-span-2 py-10">
                <label
                  for="internship"
                  class="block mb-4 text-xl font-bold text-gray-900">
                  Intenships/Work Experiences
                </label>

                <div class="relative overflow-x-auto w-256">
                  <table class="w-full text-sm text-left text-gray-500">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                      <tr>
                        <th scope="col" class="px-6 py-3">
                          Job Title
                        </th>
                        <th scope="col" class="px-6 py-3 truncate">
                          Compnay Name
                        </th>
                        <th scope="col" class="px-6 py-3 truncate">
                          Start Month
                        </th>
                        <th scope="col" class="px-6 py-3">
                          End Month
                        </th>
                        <th scope="col" class="px-6 py-3">
                          Description
                        </th>
                        <th scope="col" class="px-6 py-3">
                          Remove
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="bg-white border-b">
                        <th
                          scope="row"
                          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                          Frontend Developer
                        </th>
                        <td class="px-6 py-4 truncate">Glowmore Tech</td>
                        <td class="px-6 py-4 truncate">July 2023</td>
                        <td class="px-6 py-4 truncate">August 2023</td>
                        <td class="px-6 py-4 truncate">
                          {truncate(
                            "In addition to your startup experiences, you have undertaken personal projects that showcase your creativity and problem-solving skills. One of your notable projects, BinarySearch, is a coding platform that allows users to register, create contest rooms, and compete with their colleagues. The platform incorporates timed challenges, where participants must solve specific questions within a given time frame. The winner receives points that are reflected in their respective accounts, adding a competitive edge to the platform.",
                            32
                          )}
                        </td>
                        <td class="px-6 py-4">
                          <button>
                            <MdDeleteForever className="text-xl text-red-600" />
                          </button>
                        </td>
                      </tr>
                      <tr class="bg-white border-b">
                        <th
                          scope="row"
                          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                          Microsoft Surface Pro
                        </th>
                        <td class="px-6 py-4">White</td>
                        <td class="px-6 py-4">Laptop PC</td>
                        <td class="px-6 py-4">$1999</td>
                        <td class="px-6 py-4">Description</td>
                        <td class="px-6 py-4">
                          <button>
                            <MdDeleteForever className="text-xl text-red-600" />
                          </button>
                        </td>
                      </tr>
                      <tr class="bg-white">
                        <th
                          scope="row"
                          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                          Magic Mouse 2
                        </th>
                        <td class="px-6 py-4">Black</td>
                        <td class="px-6 py-4">Accessories</td>
                        <td class="px-6 py-4">$99</td>
                        <td class="px-6 py-4">Description</td>
                        <td class="px-6 py-4">
                          <button>
                            <MdDeleteForever className="text-xl text-red-600" />
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <section class="bg-white">
                  <div class="py-8 px-4 mx-auto max-w-2xl">
                    <h2 class="mb-2 text-md font-regular text-gray-900">
                      Add a new Intenship/Work experince
                    </h2>
                    <form action="#">
                      <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
                        <div class="sm:col-span-2">
                          <label
                            for="job-title"
                            class="block mb-2 text-sm font-medium text-gray-900">
                            Job Title
                          </label>
                          <input
                            type="text"
                            name="job-title"
                            id="job-title"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                            placeholder="Type job title"
                            required=""
                          />
                        </div>
                        <div class="sm:col-span-2">
                          <label
                            for="company-name"
                            class="block mb-2 text-sm font-medium text-gray-900">
                            Company Name
                          </label>
                          <input
                            type="text"
                            name="company-name"
                            id="company-name"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                            placeholder="Type company name"
                            required=""
                          />
                        </div>
                        <div class="w-full">
                          <label
                            for="start-month"
                            class="block mb-2 text-sm font-medium text-gray-900">
                            Start Month
                          </label>
                          <input
                            type="month"
                            name="start-month"
                            id="start-month"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                            placeholder="start month"
                            required=""
                          />
                        </div>
                        <div class="w-full">
                          <label
                            for="end-month"
                            class="block mb-2 text-sm font-medium text-gray-900">
                            End Month
                          </label>
                          <input
                            type="month"
                            name="end-month"
                            id="end-month"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                            placeholder="end month"
                            required=""
                          />
                        </div>
                        <div class="sm:col-span-2">
                          <label
                            for="description"
                            class="block mb-2 text-sm font-medium text-gray-900">
                            Description
                          </label>
                          <textarea
                            id="description"
                            rows="5"
                            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                            placeholder="Your description here"></textarea>
                        </div>
                      </div>
                      <button class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-black bg-lime-200 rounded-lg focus:ring-4 focus:ring-primary-200">
                        Add
                      </button>
                    </form>
                  </div>
                </section>
              </div>

              {/* Projects */}
              <div class="sm:col-span-2">
                <label
                  for="internship"
                  class="block mb-4 text-xl font-bold text-gray-900">
                  Projects
                </label>

                <div class="relative overflow-x-auto w-256">
                  <table class="w-full text-sm text-left text-gray-500">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                      <tr>
                        <th scope="col" class="px-6 py-3">
                          Project Title
                        </th>
                        <th scope="col" class="px-6 py-3 truncate">
                          Start Month
                        </th>
                        <th scope="col" class="px-6 py-3">
                          End Month
                        </th>
                        <th scope="col" class="px-6 py-3">
                          Description
                        </th>
                        <th scope="col" class="px-6 py-3 truncate">
                          Technology
                        </th>
                        <th scope="col" class="px-6 py-3">
                          Remove
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="bg-white border-b">
                        <th
                          scope="row"
                          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                          Binary Search
                        </th>
                        <td class="px-6 py-4 truncate">July 2023</td>
                        <td class="px-6 py-4 truncate">August 2023</td>
                        <td class="px-6 py-4 truncate">
                          {truncate(
                            "An audio chat room that accommodates thousands of users and includes features to create a club tohost events for multiple groups.",
                            32
                          )}
                        </td>
                        <td class="px-6 py-4 truncate">
                          React, Socket.io, Netlify
                        </td>
                        <td class="px-6 py-4">
                          <button>
                            <MdDeleteForever className="text-xl text-red-600" />
                          </button>
                        </td>
                      </tr>
                      <tr class="bg-white border-b">
                        <th
                          scope="row"
                          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                          Microsoft Surface Pro
                        </th>
                        <td class="px-6 py-4">White</td>
                        <td class="px-6 py-4">Laptop PC</td>
                        <td class="px-6 py-4">$1999</td>
                        <td class="px-6 py-4">Description</td>
                        <td class="px-6 py-4">
                          <button>
                            <MdDeleteForever className="text-xl text-red-600" />
                          </button>
                        </td>
                      </tr>
                      <tr class="bg-white">
                        <th
                          scope="row"
                          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                          Magic Mouse 2
                        </th>
                        <td class="px-6 py-4">Black</td>
                        <td class="px-6 py-4">Accessories</td>
                        <td class="px-6 py-4">$99</td>
                        <td class="px-6 py-4">Description</td>
                        <td class="px-6 py-4">
                          <button>
                            <MdDeleteForever className="text-xl text-red-600" />
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <section class="bg-white">
                  <div class="py-8 px-4 mx-auto max-w-2xl">
                    <h2 class="mb-2 text-md font-regular text-gray-900">
                      Add a new project
                    </h2>
                    <form action="#">
                      <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
                        <div class="sm:col-span-2">
                          <label
                            for="job-title"
                            class="block mb-2 text-sm font-medium text-gray-900">
                            Project Title
                          </label>
                          <input
                            type="text"
                            name="job-title"
                            id="job-title"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                            placeholder="Type job title"
                            required=""
                          />
                        </div>
                        <div class="w-full">
                          <label
                            for="start-month"
                            class="block mb-2 text-sm font-medium text-gray-900">
                            Start Month
                          </label>
                          <input
                            type="month"
                            name="start-month"
                            id="start-month"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                            placeholder="start month"
                            required=""
                          />
                        </div>
                        <div class="w-full">
                          <label
                            for="end-month"
                            class="block mb-2 text-sm font-medium text-gray-900">
                            End Month
                          </label>
                          <input
                            type="month"
                            name="end-month"
                            id="end-month"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                            placeholder="end month"
                            required=""
                          />
                        </div>
                        <div class="sm:col-span-2">
                          <label
                            for="description"
                            class="block mb-2 text-sm font-medium text-gray-900">
                            Description
                          </label>
                          <textarea
                            id="description"
                            rows="5"
                            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                            placeholder="Your description here"></textarea>
                        </div>
                        <div class="sm:col-span-2">
                          <label
                            for="company-name"
                            class="block mb-2 text-sm font-medium text-gray-900">
                            Technology
                          </label>
                          <input
                            type="text"
                            name="company-name"
                            id="company-name"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                            placeholder="Type company name"
                            required=""
                          />
                        </div>
                      </div>
                      <button class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-black bg-lime-200 rounded-lg focus:ring-4 focus:ring-primary-200">
                        Add
                      </button>
                    </form>
                  </div>
                </section>
              </div>

              {/* Education */}
              <div class="sm:col-span-2 py-10">
                <label
                  for="internship"
                  class="block mb-4 text-xl font-bold text-gray-900">
                  Education
                </label>

                <div class="relative overflow-x-auto w-256">
                  <table class="w-full text-sm text-left text-gray-500">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                      <tr>
                        <th scope="col" class="px-6 py-3">
                          Course Name
                        </th>
                        <th scope="col" class="px-6 py-3 truncate">
                          College Name
                        </th>
                        <th scope="col" class="px-6 py-3 truncate">
                          Start Month
                        </th>
                        <th scope="col" class="px-6 py-3">
                          End Month
                        </th>
                        <th scope="col" class="px-6 py-3">
                          CGPA/Percentage
                        </th>
                        <th scope="col" class="px-6 py-3">
                          Remove
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="bg-white border-b">
                        <th
                          scope="row"
                          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                          B.Tech (Cse)
                        </th>
                        <td class="px-6 py-4 truncate">
                          Gandhi Institute For Technology, Bhubaneswar
                        </td>
                        <td class="px-6 py-4 truncate">July 2023</td>
                        <td class="px-6 py-4 truncate">August 2023</td>
                        <td class="px-6 py-4 truncate">8.3</td>
                        <td class="px-6 py-4">
                          <button>
                            <MdDeleteForever className="text-xl text-red-600" />
                          </button>
                        </td>
                      </tr>
                      <tr class="bg-white border-b">
                        <th
                          scope="row"
                          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                          Microsoft Surface Pro
                        </th>
                        <td class="px-6 py-4">White</td>
                        <td class="px-6 py-4">Laptop PC</td>
                        <td class="px-6 py-4">$1999</td>
                        <td class="px-6 py-4">Description</td>
                        <td class="px-6 py-4">
                          <button>
                            <MdDeleteForever className="text-xl text-red-600" />
                          </button>
                        </td>
                      </tr>
                      <tr class="bg-white">
                        <th
                          scope="row"
                          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                          Magic Mouse 2
                        </th>
                        <td class="px-6 py-4">Black</td>
                        <td class="px-6 py-4">Accessories</td>
                        <td class="px-6 py-4">$99</td>
                        <td class="px-6 py-4">Description</td>
                        <td class="px-6 py-4">
                          <button>
                            <MdDeleteForever className="text-xl text-red-600" />
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <section class="bg-white">
                  <div class="py-8 px-4 mx-auto max-w-2xl">
                    <h2 class="mb-2 text-md font-regular text-gray-900">
                      Add a new Education
                    </h2>
                    <form action="#">
                      <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
                        <div class="sm:col-span-2">
                          <label
                            for="job-title"
                            class="block mb-2 text-sm font-medium text-gray-900">
                            Course Title
                          </label>
                          <input
                            type="text"
                            name="job-title"
                            id="job-title"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                            placeholder="Type job title"
                            required=""
                          />
                        </div>
                        <div class="sm:col-span-2">
                          <label
                            for="company-name"
                            class="block mb-2 text-sm font-medium text-gray-900">
                            College Name
                          </label>
                          <input
                            type="text"
                            name="company-name"
                            id="company-name"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                            placeholder="Type company name"
                            required=""
                          />
                        </div>
                        <div class="w-full">
                          <label
                            for="start-month"
                            class="block mb-2 text-sm font-medium text-gray-900">
                            Start Month
                          </label>
                          <input
                            type="month"
                            name="start-month"
                            id="start-month"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                            placeholder="start month"
                            required=""
                          />
                        </div>
                        <div class="w-full">
                          <label
                            for="end-month"
                            class="block mb-2 text-sm font-medium text-gray-900">
                            End Month
                          </label>
                          <input
                            type="month"
                            name="end-month"
                            id="end-month"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                            placeholder="end month"
                            required=""
                          />
                        </div>
                        <div class="sm:col-span-2">
                          <label
                            for="description"
                            class="block mb-2 text-sm font-medium text-gray-900">
                            Description
                          </label>
                          <input
                            type="number"
                            name="description"
                            id="description"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                            placeholder="CGPA/percentage"
                            required=""
                          />
                        </div>
                      </div>
                      <button class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-black bg-lime-200 rounded-lg focus:ring-4 focus:ring-primary-200">
                        Add
                      </button>
                    </form>
                  </div>
                </section>
              </div>
            </div>

            <button
              type="submit"
              className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-black bg-lime-200 rounded-lg focus:ring-4 focus:ring-primary-200">
              Save
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default IntervieweeProfileEdit;
