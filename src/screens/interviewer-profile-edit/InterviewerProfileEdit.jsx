import React, { useEffect, useState } from "react";
import profileImage from "assets/images/profile-female.jpg";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import AuthService from "auth/authService";
import { toast } from "react-hot-toast";

const InterviewerProfileEdit = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const a = location.pathname.split("/");

  const id = a[a.length - 2];
  const [user, setUser] = useState({});
  const [image, setImage] = useState(null);
  const [input, setInput] = useState({
    avatar: "",
    phone: "",
    username: "",
    gender: "",
    linkedIn: "",
    department: "",
  });

  function captureImage(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function () {
      setImage(reader.result);
      setInput({ ...input, avatar: reader.result });
    };
  }

  //   console.log("image loaded", input.avatar);

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log(input);
    AuthService.updateInterviewerProfile(input)
      .then((response) => {
        toast.success(response?.message);
        console.log(response);
        navigate(-1);
      })
      .catch((err) => {
        console.log("Interviewer Profile edit err", err);
        toast.error(err?.data?.message);
      });
  };

  useEffect(() => {
    AuthService.getInterviewerProfile(id)
      .then((response) => {
        const obj = {
          phone: response.phone,
          email: response.userId.email,
          username: response.userId.username,
          gender: response.gender,
          avatar: response.avatar,
          linkedIn: response.linkedIn,
          department: response.department,
        };
        setInput(obj);
        setUser(response);
        console.log(response);
      })
      .catch((err) => {
        console.log("Interviewer Profile edit err", err);
        toast.error(err?.data?.message);
      });
  }, []);

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
                  src={image ? image : profileImage}
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
                    onChange={captureImage}
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
                  placeholder="Enter User name"
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
                  name="linkedIn"
                  value={input.linkedIn}
                  onChange={(e) => handleChange(e)}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="linkedin.com"
                />
              </div>
            </div>
            <button
              onClick={handleSubmit}
              class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-black bg-lime-200 rounded-lg focus:ring-4 focus:ring-primary-200"
            >
              Update{" "}
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default InterviewerProfileEdit;
