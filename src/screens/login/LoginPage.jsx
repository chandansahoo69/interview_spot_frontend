import React, { useState } from "react";
import { setToken } from "utils/token";
import AuthService from "auth/authService";
import { login } from "state/AuthSlice";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const handleClick = () => {
    // setIsSubmitting(true);

    if (inputs.email === "") {
      toast.error("Please enter an email");
      return;
    }

    if (inputs.password === "") {
      toast.error("Please enter a password");
      return;
    }

    AuthService.login(inputs)
      .then((response) => {
        toast.success("Logged in successfully!");

        if (response) {
          //   console.log("login response", response.user, response);
          setToken({ name: "token", value: response.accessToken });
          setToken({
            name: "refresh",
            value: response.refreshToken,
          });
          setToken({
            name: "currentUser",
            value: JSON.stringify(response.user),
          });
          dispatch(login(response?.user));
          navigate("/");
        }
      })
      .catch((err) => {
        console.log("login err", err);
        toast.error("Email and password do not match.");
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
      <section className="bg-[#d1e552] flex-1 flex justify-center items-center">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
          <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                Sign in to your account
              </h1>
              <div className="space-y-4 md:space-y-6">
                <div>
                  <label
                    for="email"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={inputs.email}
                    onChange={(e) => {
                      setInputs({ ...inputs, email: e.target.value });
                    }}
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="name@company.com"
                    required=""
                  />
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
                    name="emapasswordil"
                    value={inputs.password}
                    onChange={(e) => {
                      setInputs({ ...inputs, password: e.target.value });
                    }}
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    required=""
                  />
                </div>
                <div className="flex items-center justify-end">
                  <a
                    href="#"
                    className="text-sm font-medium text-primary-600 hover:underline"
                  >
                    Forgot password?
                  </a>
                </div>
                <button
                  onClick={handleClick}
                  className="w-full text-white bg-[#7b6e5b] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Sign in
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <NavLink
                    to="/signup"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Sign up
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

export default LoginPage;
