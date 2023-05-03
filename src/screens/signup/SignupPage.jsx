import AuthService from "auth/authService";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { NavLink, useNavigate } from "react-router-dom";

const SignupPage = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    confirm_password: "",
    role: "",
  });

  const handleClick = () => {
    // setIsSubmitting(true);

    if (inputs.username === "") {
      toast.error("Please enter an username");
      return;
    }

    if (inputs.email === "") {
      toast.error("Please enter an email");
      return;
    }

    if (inputs.password === "") {
      toast.error("Please enter a password");
      return;
    }

    if (inputs.role === "") {
      toast.error("Please select a role");
      return;
    }

    if (inputs.confirm_password === "") {
      toast.error("Please enter a confirm password");
      return;
    }

    if (inputs.confirm_password !== inputs.password) {
      toast.error("Password not matching with confirm password");
      return;
    }

    AuthService.register(inputs)
      .then((response) => {
        toast.success(response?.message);
        navigate("/login");
      })
      .catch((err) => {
        console.log("register err", err);
        toast.error(err?.data?.message);
      });

    // setIsSubmitting(false);
  };

  return (
    <div className="h-screen flex flex-col">
      <nav className="px-3 py-2 flex flex-0 justify-between md:px-5 md:py-2">
        <div className="flex flex-row gap-2">
          <img src="./Assets/logo-interviewspot.png" alt="" />
          <div className="flex flex-col font-jakarta text-2xl font-bold">
            <p className="text-[#d1e552]">Interview</p>
            <p className="mt-[-4px]">Spot</p>
          </div>
        </div>
      </nav>
      <section className="bg-[#d1e552] flex-1 flex items-center p-5 md:p-0">
        <div className="flex flex-col items-center justify-center mx-auto md:h-screen">
          <div className="w-full bg-white rounded-lg shadow">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                Create and account
              </h1>
              <div className="space-y-4 md:space-y-6">
                <div>
                  <label
                    for="username"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    User Name
                  </label>
                  <input
                    type="text"
                    name="username"
                    value={inputs.username}
                    onChange={(e) => {
                      setInputs({ ...inputs, [e.target.name]: e.target.value });
                    }}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="user name"
                    required=""
                  />
                </div>
                <div>
                  <label
                    for="email"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={inputs.email}
                    onChange={(e) => {
                      setInputs({ ...inputs, [e.target.name]: e.target.value });
                    }}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <div>
                  <label for="role" className="block mb-2 text-sm font-medium">
                    Select your role
                  </label>
                  <select
                    name="role"
                    value={inputs.role}
                    onChange={(e) => {
                      setInputs({ ...inputs, [e.target.name]: e.target.value });
                    }}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  >
                    <option selected>Choose your role</option>
                    <option value="interviewee">interviewee</option>
                    <option value="interviewer">Interviewer</option>
                  </select>
                </div>
                <div>
                  <label
                    for="password"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={inputs.password}
                    onChange={(e) => {
                      setInputs({ ...inputs, [e.target.name]: e.target.value });
                    }}
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    required=""
                  />
                </div>
                <div>
                  <label
                    for="confirm_password"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Confirm password
                  </label>
                  <input
                    type="password"
                    name="confirm_password"
                    value={inputs.confirm_password}
                    onChange={(e) => {
                      setInputs({ ...inputs, [e.target.name]: e.target.value });
                    }}
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    required=""
                  />
                </div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 "
                      required=""
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label for="terms" className="font-light text-gray-500">
                      I accept the{" "}
                      <a
                        className="font-medium text-primary-600 hover:underline"
                        href="#"
                      >
                        Terms and Conditions
                      </a>
                    </label>
                  </div>
                </div>
                <button
                  onClick={handleClick}
                  className="w-full text-white bg-[#7b6e5b] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Create an account
                </button>
                <p className="text-sm font-light text-gray-500">
                  Already have an account?{" "}
                  <NavLink
                    to="/login"
                    className="font-medium text-primary-600 hover:underline"
                  >
                    Login here
                  </NavLink>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignupPage;
