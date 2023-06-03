import React from "react";
import profileImage from "assets/images/profile-female.jpg";

const InterviewerProfileEdit = () => {
  return (
    <>
      <section class="bg-white rounded-lg shadow-sm">
        <h2 class="pt-8 text-xl font-bold text-gray-900 px-16">
          General Information
        </h2>
        <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
          <form action="#">
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
                    for="image-input">
                    Upload file
                  </label>
                  <input
                    class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    id="image-input"
                    type="file"
                  />
                </div>
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
              <div className="col-span-2">
                <label
                  for="linkedin"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Linkedin URL
                </label>
                <input
                  type="url"
                  id="linkedin"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="linkedin.com"
                />
              </div>
            </div>
            <button
              type="submit"
              class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-black bg-lime-200 rounded-lg focus:ring-4 focus:ring-primary-200">
              Save General Information
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default InterviewerProfileEdit;
