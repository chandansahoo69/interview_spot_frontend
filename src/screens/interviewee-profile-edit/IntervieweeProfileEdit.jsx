import React, { useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { MdDeleteForever } from "react-icons/md";
import profileImage from "assets/images/profile-female.jpg";
import { useLocation, useNavigate } from "react-router-dom";
import AuthService from "auth/authService";
import { toast } from "react-hot-toast";
import moment from "moment";

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
        cgpa: "In addition to your startup experiences, you have undertaken personal projects that showcase your creativity and problem-solving skills. One of your notable projects, BinarySearch, is a coding platform that allows users to register, create contest rooms, and compete with their colleagues. The platform incorporates timed challenges, where participants must solve specific questions within a given time frame. The winner receives points that are reflected in their respective accounts, adding a competitive edge to the platform.",
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

  const navigate = useNavigate();
  const location = useLocation();
  const a = location.pathname.split("/");

  const id = a[a.length - 2];
  const [user, setUser] = useState({});
  const [skill, setSkill] = useState("");
  const experienceInputState = {
    description: "",
    endDate: "",
    name: "",
    position: "",
    startDate: "",
  };
  const [experienceInput, setExperienceInput] = useState(experienceInputState);

  const projectInputState = {
    description: "",
    endDate: "",
    name: "",
    technology: "",
    startDate: "",
  };
  const [projectInput, setProjectInput] = useState(projectInputState);

  const educationInputState = {
    cgpa: "",
    endDate: "",
    name: "",
    course: "",
    startDate: "",
  };
  const [educationInput, setEducationInput] = useState(educationInputState);

  const [input, setInput] = useState({
    username: "",
    email: "",
    phone: "",
    gender: "",
    dob: "",
    address: "",
    skills: null,
    education: null,
    experience: null,
    projects: null,
  });

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // console.log(input);
    AuthService.updateIntervieweeProfile(input)
      .then((response) => {
        toast.success(response?.message);
        console.log(response);
        navigate(-1);
      })
      .catch((err) => {
        console.log("Interviewee Profile edit err", err);
        toast.error(err?.data?.message);
      });
  };

  useEffect(() => {
    AuthService.getIntervieweeProfile(id)
      .then((response) => {
        const obj = {
          username: response.userId.username,
          email: response.userId.email,
          phone: response.phone,
          gender: response.gender,
          dob: moment(response.dob).format("YYYY-MM-DD"),
          address: response.address,
          skills: response.skills,
          education: response.education,
          experience: response.experience,
          projects: response.projects,
        };
        setInput(obj);
        setUser(response);
      })
      .catch((err) => {
        console.log("Interviewee Profile edit err", err);
        toast.error(err?.data?.message);
      });
  }, []);

  function truncate(source, size) {
    return source.length > size ? source.slice(0, size - 1) + "…" : source;
  }

  const handleExperience = (id) => {
    let filteredExperience = input.experience.filter(
      (experience) => experience._id !== id
    );

    setInput({ ...input, experience: filteredExperience });
  };

  const handleAddExperience = () => {
    let experiences = input.experience;
    experiences.push(experienceInput);
    setInput({ ...input, experience: experiences });
    setExperienceInput(experienceInputState);
  };

  const handleProject = (id) => {
    let filteredProjects = input.projects.filter(
      (project) => project._id !== id
    );

    setInput({ ...input, projects: filteredProjects });
  };

  const handleAddProject = () => {
    let projects = input.projects;
    projects.push(projectInput);
    setInput({ ...input, projects: projects });
    setProjectInput(projectInputState);
  };

  const handleEducation = (id) => {
    let filteredEducation = input.education.filter(
      (education) => education._id !== id
    );

    setInput({ ...input, education: filteredEducation });
  };

  const handleAddEducation = () => {
    let educations = input.education;
    educations.push(educationInput);
    setInput({ ...input, education: educations });
    setEducationInput(educationInputState);
  };

  const handleSkills = (val) => {
    let filteredSkills = input.skills.filter((skill) => skill !== val);

    setInput({ ...input, skills: filteredSkills });
  };

  const handleAddSkill = () => {
    let skills = input.skills;
    skills.push(skill);
    setInput({ ...input, skills: skills });
    setSkill("");
  };

  return (
    <>
      <section class="bg-white rounded-lg shadow-sm">
        <h2 class="pt-8 text-xl font-bold text-gray-900 px-16">
          General Information
        </h2>
        <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
          <div>
            <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div class="sm:col-span-2 flex items-end gap-5">
                <img
                  class="rounded w-36 h-36"
                  src={profileImage}
                  alt="Extra large avatar"
                />

                <div className="w-full">
                  <label
                    class="block mb-2 text-sm font-medium text-gray-900"
                    for="image-input"
                  >
                    Upload file
                  </label>
                  <input
                    class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    id="image-input"
                    type="file"
                  />
                </div>
              </div>
              <div class="sm:col-span-2">
                <label
                  for="username"
                  class="block mb-2 text-sm font-medium text-gray-900"
                >
                  User Name
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  value={input.username}
                  onChange={(e) => handleChange(e)}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Enter user name"
                  required
                />
              </div>

              <div class="sm:col-span-2">
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={input.email}
                  onChange={(e) => handleChange(e)}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Enter your email address"
                  required
                />
              </div>
              <div class="sm:col-span-2">
                <label
                  for="phone"
                  class="block mb-2 text-sm font-medium text-gray-900"
                >
                  Phone/Mobile No.
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={input.phone}
                  onChange={(e) => handleChange(e)}
                  pattern="[0-9]{10}"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Enter your phone/mobile"
                  required
                />
              </div>
              <div>
                <label
                  for="gender"
                  class="block mb-2 text-sm font-medium text-gray-900"
                >
                  Gender
                </label>
                <select
                  id="gender"
                  name="gender"
                  value={input.gender}
                  onChange={(e) => handleChange(e)}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                >
                  <option selected="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label
                  for="dob"
                  class="block mb-2 text-sm font-medium text-gray-900"
                >
                  Date of Birth
                </label>
                <input
                  type="date"
                  name="dob"
                  id="dob"
                  value={input.dob}
                  onChange={(e) => handleChange(e)}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder=""
                  required
                />
              </div>
              <div className="col-span-2">
                <label
                  for="github"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Github URL
                </label>
                <input
                  type="url"
                  id="github"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Github.com"
                />
              </div>
              <div className="col-span-2">
                <label
                  for="linkedin"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Linkedin URL
                </label>
                <input
                  type="url"
                  id="linkedin"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="linkedin.com"
                />
              </div>
              <div className="col-span-2">
                <label
                  for="portfolio"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Portfolio URL
                </label>
                <input
                  type="url"
                  id="portfolio"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="personal-website.com"
                />
              </div>
              <div class="sm:col-span-2">
                <label
                  for="address"
                  class="block mb-2 text-sm font-medium text-gray-900"
                >
                  Address
                </label>
                <textarea
                  id="address"
                  rows="5"
                  name="address"
                  value={input.address}
                  onChange={(e) => handleChange(e)}
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Your address here"
                ></textarea>
              </div>
            </div>
            {/* <button
              type="submit"
              class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-black bg-lime-200 rounded-lg focus:ring-4 focus:ring-primary-200"
            >
              Save General Information
            </button> */}
          </div>
        </div>
      </section>
      <section class="bg-white mt-10 rounded-lg shadow-sm">
        <h2 class="pt-8 text-xl font-bold text-gray-900 px-16">
          Candidate Information
        </h2>
        <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
          <div>
            <div class="grid gap-4 sm:grid-cols-2">
              <div class="sm:col-span-2">
                <label
                  for="objective"
                  class="block  text-xl font-bold text-gray-900"
                >
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
                  placeholder="Your objective here"
                ></textarea>
                <button className="mt-4 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-black bg-lime-200 rounded-lg focus:ring-4 focus:ring-primary-200">
                  Update
                </button>
              </div>
              {/* Skills */}
              <div class="sm:col-span-2">
                <label
                  for="skills"
                  class="block mb-4 text-xl font-bold text-gray-900"
                >
                  Skills
                </label>
                <div className="flex gap-3 flex-wrap">
                  {input.skills?.map((skill) => (
                    <div className="w-fit flex gap-1 items-center p-2 rounded-lg text-sm bg-gray-300">
                      <p className="border-r-2 border-gray-400 border-solid pr-1">
                        {skill}
                      </p>
                      <RxCross1
                        className="cursor-pointer"
                        onClick={() => handleSkills(skill)}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-5 mt-3 w-full">
                  <input
                    type="text"
                    name="skill"
                    id="skill"
                    value={skill}
                    onChange={(e) => setSkill(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 blocks p-1 h-10"
                    placeholder="Enter your skill"
                    required=""
                  />
                  <button
                    onClick={handleAddSkill}
                    className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-black bg-lime-200 rounded-lg focus:ring-4 focus:ring-primary-200"
                  >
                    Add Skill
                  </button>
                </div>
              </div>

              {/* Internships */}
              <div class="sm:col-span-2 py-10">
                <label
                  for="internship"
                  class="block mb-4 text-xl font-bold text-gray-900"
                >
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
                      {input.experience?.map((experience, index) => (
                        <>
                          <tr class="bg-white border-b">
                            <th
                              scope="row"
                              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                            >
                              {experience?.position}
                            </th>
                            <td class="px-6 py-4 truncate">
                              {experience?.name}
                            </td>
                            <td class="px-6 py-4 truncate">
                              {moment(experience?.startDate).format(
                                "MMMM YYYY"
                              )}
                            </td>
                            <td class="px-6 py-4 truncate">
                              {moment(experience?.endDate).format("MMMM YYYY")}
                            </td>
                            <td class="px-6 py-4 truncate">
                              {truncate(`${experience?.description}`, 32)}
                            </td>
                            <td class="px-6 py-4">
                              <button
                                onClick={() => handleExperience(experience._id)}
                              >
                                <MdDeleteForever className="text-xl text-red-600" />
                              </button>
                            </td>
                          </tr>
                        </>
                      ))}
                    </tbody>
                  </table>
                </div>

                <section class="bg-white">
                  <div class="py-8 px-4 mx-auto max-w-2xl">
                    <h2 class="mb-2 text-md font-regular text-gray-900">
                      Add a new Intenship/Work experince
                    </h2>
                    <div>
                      <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
                        <div class="sm:col-span-2">
                          <label
                            for="position"
                            class="block mb-2 text-sm font-medium text-gray-900"
                          >
                            Job Title
                          </label>
                          <input
                            type="text"
                            name="position"
                            id="position"
                            value={experienceInput.position}
                            onChange={(e) =>
                              setExperienceInput({
                                ...experienceInput,
                                [e.target.name]: e.target.value,
                              })
                            }
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                            placeholder="Type job title"
                          />
                        </div>
                        <div class="sm:col-span-2">
                          <label
                            for="company-name"
                            class="block mb-2 text-sm font-medium text-gray-900"
                          >
                            Company Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            id="company-name"
                            value={experienceInput.name}
                            onChange={(e) =>
                              setExperienceInput({
                                ...experienceInput,
                                [e.target.name]: e.target.value,
                              })
                            }
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                            placeholder="Type company name"
                          />
                        </div>
                        <div class="w-full">
                          <label
                            for="startDate"
                            class="block mb-2 text-sm font-medium text-gray-900"
                          >
                            Start Month
                          </label>
                          <input
                            type="month"
                            name="startDate"
                            id="startDate"
                            value={experienceInput.startDate}
                            onChange={(e) =>
                              setExperienceInput({
                                ...experienceInput,
                                [e.target.name]: e.target.value,
                              })
                            }
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                            placeholder="start month"
                            required=""
                          />
                        </div>
                        <div class="w-full">
                          <label
                            for="endDate"
                            class="block mb-2 text-sm font-medium text-gray-900"
                          >
                            End Month
                          </label>
                          <input
                            type="month"
                            name="endDate"
                            id="endDate"
                            value={experienceInput.endDate}
                            onChange={(e) =>
                              setExperienceInput({
                                ...experienceInput,
                                [e.target.name]: e.target.value,
                              })
                            }
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                            placeholder="end month"
                            required=""
                          />
                        </div>
                        <div class="sm:col-span-2">
                          <label
                            for="description"
                            class="block mb-2 text-sm font-medium text-gray-900"
                          >
                            Description
                          </label>
                          <textarea
                            id="description"
                            name="description"
                            rows="5"
                            value={experienceInput.description}
                            onChange={(e) =>
                              setExperienceInput({
                                ...experienceInput,
                                [e.target.name]: e.target.value,
                              })
                            }
                            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                            placeholder="Your description here"
                          ></textarea>
                        </div>
                      </div>
                      <button
                        onClick={handleAddExperience}
                        class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-black bg-lime-200 rounded-lg focus:ring-4 focus:ring-primary-200"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </section>
              </div>

              {/* Projects */}
              <div class="sm:col-span-2">
                <label
                  for="internship"
                  class="block mb-4 text-xl font-bold text-gray-900"
                >
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
                      {input.projects?.map((project, index) => (
                        <>
                          <tr class="bg-white border-b">
                            <td class="px-6 py-4 truncate">{project?.name}</td>
                            <td class="px-6 py-4 truncate">
                              {moment(project?.startDate).format("MMMM YYYY")}
                            </td>
                            <td class="px-6 py-4 truncate">
                              {moment(project?.endDate).format("MMMM YYYY")}
                            </td>
                            <td class="px-6 py-4 truncate">
                              {truncate(`${project?.description}`, 32)}
                            </td>
                            <th
                              scope="row"
                              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                            >
                              {project?.technology}
                            </th>
                            <td class="px-6 py-4">
                              <button
                                onClick={() => handleProject(project._id)}
                              >
                                <MdDeleteForever className="text-xl text-red-600" />
                              </button>
                            </td>
                          </tr>
                        </>
                      ))}
                    </tbody>
                  </table>
                </div>

                <section class="bg-white">
                  <div class="py-8 px-4 mx-auto max-w-2xl">
                    <h2 class="mb-2 text-md font-regular text-gray-900">
                      Add a new Project
                    </h2>
                    <div>
                      <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
                        <div class="sm:col-span-2">
                          <label
                            for="name"
                            class="block mb-2 text-sm font-medium text-gray-900"
                          >
                            Project Title
                          </label>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            value={projectInput.name}
                            onChange={(e) =>
                              setProjectInput({
                                ...projectInput,
                                [e.target.name]: e.target.value,
                              })
                            }
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                            placeholder="Type job title"
                          />
                        </div>
                        <div class="w-full">
                          <label
                            for="startDate"
                            class="block mb-2 text-sm font-medium text-gray-900"
                          >
                            Start Month
                          </label>
                          <input
                            type="month"
                            name="startDate"
                            id="startDate"
                            value={projectInput.startDate}
                            onChange={(e) =>
                              setProjectInput({
                                ...projectInput,
                                [e.target.name]: e.target.value,
                              })
                            }
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                            placeholder="start month"
                          />
                        </div>
                        <div class="w-full">
                          <label
                            for="endDate"
                            class="block mb-2 text-sm font-medium text-gray-900"
                          >
                            End Month
                          </label>
                          <input
                            type="month"
                            name="endDate"
                            id="endDate"
                            value={projectInput.endDate}
                            onChange={(e) =>
                              setProjectInput({
                                ...projectInput,
                                [e.target.name]: e.target.value,
                              })
                            }
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                            placeholder="end month"
                            required=""
                          />
                        </div>
                        <div class="sm:col-span-2">
                          <label
                            for="description"
                            class="block mb-2 text-sm font-medium text-gray-900"
                          >
                            Description
                          </label>
                          <textarea
                            id="description"
                            name="description"
                            rows="5"
                            value={projectInput.description}
                            onChange={(e) =>
                              setProjectInput({
                                ...projectInput,
                                [e.target.name]: e.target.value,
                              })
                            }
                            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                            placeholder="Your description here"
                          ></textarea>
                        </div>
                        <div class="sm:col-span-2">
                          <label
                            for="company-name"
                            class="block mb-2 text-sm font-medium text-gray-900"
                          >
                            Technology
                          </label>
                          <input
                            type="text"
                            name="technology"
                            id="company-name"
                            value={projectInput.technology}
                            onChange={(e) =>
                              setProjectInput({
                                ...projectInput,
                                [e.target.name]: e.target.value,
                              })
                            }
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                            placeholder="Type company name"
                          />
                        </div>
                      </div>
                      <button
                        onClick={handleAddProject}
                        class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-black bg-lime-200 rounded-lg focus:ring-4 focus:ring-primary-200"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </section>
              </div>

              {/* Education */}
              <div class="sm:col-span-2 py-10">
                <label
                  for="internship"
                  class="block mb-4 text-xl font-bold text-gray-900"
                >
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
                      {input.education?.map((education, index) => (
                        <>
                          <tr class="bg-white border-b">
                            <td class="px-6 py-4 truncate">
                              {education?.course}
                            </td>
                            <td class="px-6 py-4 truncate">
                              {moment(education?.startDate).format("MMMM YYYY")}
                            </td>
                            <td class="px-6 py-4 truncate">
                              {moment(education?.endDate).format("MMMM YYYY")}
                            </td>
                            <td class="px-6 py-4 truncate">
                              {truncate(`${education?.name}`, 32)}
                            </td>
                            <th
                              scope="row"
                              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                            >
                              {education?.cgpa}
                            </th>
                            <td class="px-6 py-4">
                              <button
                                onClick={() => handleEducation(education._id)}
                              >
                                <MdDeleteForever className="text-xl text-red-600" />
                              </button>
                            </td>
                          </tr>
                        </>
                      ))}
                    </tbody>
                  </table>
                </div>

                <section class="bg-white">
                  <div class="py-8 px-4 mx-auto max-w-2xl">
                    <h2 class="mb-2 text-md font-regular text-gray-900">
                      Add a new Education
                    </h2>
                    <div>
                      <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
                        <div class="sm:col-span-2">
                          <label
                            for="name"
                            class="block mb-2 text-sm font-medium text-gray-900"
                          >
                            Course Title
                          </label>
                          <input
                            type="text"
                            name="course"
                            id="course"
                            value={educationInput.course}
                            onChange={(e) =>
                              setEducationInput({
                                ...educationInput,
                                [e.target.name]: e.target.value,
                              })
                            }
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                            placeholder="Type job title"
                          />
                        </div>
                        <div class="sm:col-span-2">
                          <label
                            for="company-name"
                            class="block mb-2 text-sm font-medium text-gray-900"
                          >
                            College Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            id="company-name"
                            value={educationInput.name}
                            onChange={(e) =>
                              setEducationInput({
                                ...educationInput,
                                [e.target.name]: e.target.value,
                              })
                            }
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                            placeholder="Type company name"
                          />
                        </div>
                        <div class="w-full">
                          <label
                            for="startDate"
                            class="block mb-2 text-sm font-medium text-gray-900"
                          >
                            Start Month
                          </label>
                          <input
                            type="month"
                            name="startDate"
                            id="startDate"
                            value={educationInput.startDate}
                            onChange={(e) =>
                              setEducationInput({
                                ...educationInput,
                                [e.target.name]: e.target.value,
                              })
                            }
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                            placeholder="start month"
                          />
                        </div>
                        <div class="w-full">
                          <label
                            for="endDate"
                            class="block mb-2 text-sm font-medium text-gray-900"
                          >
                            End Month
                          </label>
                          <input
                            type="month"
                            name="endDate"
                            id="endDate"
                            value={educationInput.endDate}
                            onChange={(e) =>
                              setEducationInput({
                                ...educationInput,
                                [e.target.name]: e.target.value,
                              })
                            }
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                            placeholder="end month"
                            required=""
                          />
                        </div>
                        <div class="sm:col-span-2">
                          <label
                            for="cgpa"
                            class="block mb-2 text-sm font-medium text-gray-900"
                          >
                            CGPA
                          </label>
                          <input
                            type="number"
                            name="cgpa"
                            id="cgpa"
                            value={educationInput.cgpa}
                            onChange={(e) =>
                              setEducationInput({
                                ...educationInput,
                                [e.target.name]: e.target.value,
                              })
                            }
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                            placeholder="CGPA/percentage"
                            required=""
                          />
                        </div>
                      </div>
                      <button
                        onClick={handleAddEducation}
                        class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-black bg-lime-200 rounded-lg focus:ring-4 focus:ring-primary-200"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </section>
              </div>
            </div>

            <button
              onClick={handleSubmit}
              className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-black bg-lime-200 rounded-lg focus:ring-4 focus:ring-primary-200"
            >
              Save Candidate Information
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default IntervieweeProfileEdit;
