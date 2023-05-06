import React from "react";

const Feedback = () => {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1>Interview Feedback</h1>
        <p className="text-sm text-slate-500">
          Hello, Chandan! Please share your feedback
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
        <div class="w-full"></div>
      </div>
      {/* Feedback Form */}
      <div className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow">
        <form>
          <div>
            {/* Punctuality rating */}
            <fieldset className="flex gap-4">
              <label
                for=""
                class="w-[150px] ml-2 text-sm font-medium text-gray-900 ">
                Punctuality :
              </label>

              <div class="flex items-center mb-4">
                <input
                  id="punctuality-option-1"
                  type="radio"
                  name="punctuality-ratings"
                  value="Poor"
                  class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                />
                <label
                  for="punctuality-option-1"
                  class="block ml-2 text-sm font-medium text-gray-900">
                  Poor
                </label>
              </div>
              <div class="flex items-center mb-4">
                <input
                  id="punctuality-option-2"
                  type="radio"
                  name="punctuality-ratings"
                  value="fair"
                  class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                />
                <label
                  for="punctuality-option-2"
                  class="block ml-2 text-sm font-medium text-gray-900">
                  Fair
                </label>
              </div>
              <div class="flex items-center mb-4">
                <input
                  id="punctuality-option-3"
                  type="radio"
                  name="punctuality-ratings"
                  value="good"
                  class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 "
                />
                <label
                  for="punctuality-option-3"
                  class="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Good
                </label>
              </div>
              <div class="flex items-center mb-4">
                <input
                  id="punctuality-option-4"
                  type="radio"
                  name="punctuality-ratings"
                  value="Excellent"
                  class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring:blue-300 "
                />
                <label
                  for="punctuality-option-4"
                  class="block ml-2 text-sm font-medium text-gray-900">
                  Excellent
                </label>
              </div>
            </fieldset>
            {/* Communication skill rating */}
            <fieldset className="flex gap-4">
              <label
                for=""
                class="w-[150px] ml-2 text-sm font-medium text-gray-900 ">
                Communication Skill :
              </label>

              <div class="flex items-center mb-4">
                <input
                  id="cummunication-option-1"
                  type="radio"
                  name="communication-ratings"
                  value="Poor"
                  class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                />
                <label
                  for="communication-option-1"
                  class="block ml-2 text-sm font-medium text-gray-900">
                  Poor
                </label>
              </div>
              <div class="flex items-center mb-4">
                <input
                  id="communication-option-2"
                  type="radio"
                  name="communication-ratings"
                  value="fair"
                  class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                />
                <label
                  for="communication-option-2"
                  class="block ml-2 text-sm font-medium text-gray-900">
                  Fair
                </label>
              </div>
              <div class="flex items-center mb-4">
                <input
                  id="communication-option-3"
                  type="radio"
                  name="communication-ratings"
                  value="good"
                  class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 "
                />
                <label
                  for="communication-option-3"
                  class="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Good
                </label>
              </div>
              <div class="flex items-center mb-4">
                <input
                  id="communication-option-4"
                  type="radio"
                  name="communication-ratings"
                  value="Excellent"
                  class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring:blue-300 "
                />
                <label
                  for="communication-option-4"
                  class="block ml-2 text-sm font-medium text-gray-900">
                  Excellent
                </label>
              </div>
            </fieldset>
            {/* Proffesionalism rating */}
            <fieldset className="flex gap-4">
              <label
                for=""
                class="w-[150px] ml-2 text-sm font-medium text-gray-900 ">
                Proffesionalism :
              </label>

              <div class="flex items-center mb-4">
                <input
                  id="proffesionalism-option-1"
                  type="radio"
                  name="proffesionalism-ratings"
                  value="Poor"
                  class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                />
                <label
                  for="proffesionalism-option-1"
                  class="block ml-2 text-sm font-medium text-gray-900">
                  Poor
                </label>
              </div>
              <div class="flex items-center mb-4">
                <input
                  id="proffesionalism-option-2"
                  type="radio"
                  name="proffesionalism-ratings"
                  value="fair"
                  class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                />
                <label
                  for="proffesionalism-option-2"
                  class="block ml-2 text-sm font-medium text-gray-900">
                  Fair
                </label>
              </div>
              <div class="flex items-center mb-4">
                <input
                  id="proffesionalism-option-3"
                  type="radio"
                  name="proffesionalism-ratings"
                  value="good"
                  class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 "
                />
                <label
                  for="proffesionalism-option-3"
                  class="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Good
                </label>
              </div>
              <div class="flex items-center mb-4">
                <input
                  id="proffesionalism-option-4"
                  type="radio"
                  name="proffesionalism-ratings"
                  value="Excellent"
                  class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring:blue-300 "
                />
                <label
                  for="proffesionalism-option-4"
                  class="block ml-2 text-sm font-medium text-gray-900">
                  Excellent
                </label>
              </div>
            </fieldset>
            {/* Technical Skill rating */}
            <fieldset className="flex gap-4">
              <label
                for=""
                class="w-[150px] ml-2 text-sm font-medium text-gray-900 ">
                Technical Skill :
              </label>

              <div class="flex items-center mb-4">
                <input
                  id="technical-option-1"
                  type="radio"
                  name="technical-ratings"
                  value="Poor"
                  class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                />
                <label
                  for="technical-option-1"
                  class="block ml-2 text-sm font-medium text-gray-900">
                  Poor
                </label>
              </div>
              <div class="flex items-center mb-4">
                <input
                  id="technical-option-2"
                  type="radio"
                  name="technical-ratings"
                  value="fair"
                  class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                />
                <label
                  for="technical-option-2"
                  class="block ml-2 text-sm font-medium text-gray-900">
                  Fair
                </label>
              </div>
              <div class="flex items-center mb-4">
                <input
                  id="technical-option-3"
                  type="radio"
                  name="technical-ratings"
                  value="good"
                  class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 "
                />
                <label
                  for="technical-option-3"
                  class="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Good
                </label>
              </div>
              <div class="flex items-center mb-4">
                <input
                  id="technical-option-4"
                  type="radio"
                  name="technical-ratings"
                  value="Excellent"
                  class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring:blue-300 "
                />
                <label
                  for="technical-option-4"
                  class="block ml-2 text-sm font-medium text-gray-900">
                  Excellent
                </label>
              </div>
            </fieldset>
            {/* Problem Solving Skill rating */}
            <fieldset className="flex gap-4">
              <label
                for=""
                class="w-[150px] ml-2 text-sm font-medium text-gray-900 ">
                Problem Solving Skill :
              </label>

              <div class="flex items-center mb-4">
                <input
                  id="prolem-solving-option-1"
                  type="radio"
                  name="prolem-solving-ratings"
                  value="Poor"
                  class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                />
                <label
                  for="prolem-solving-option-1"
                  class="block ml-2 text-sm font-medium text-gray-900">
                  Poor
                </label>
              </div>
              <div class="flex items-center mb-4">
                <input
                  id="prolem-solving-option-2"
                  type="radio"
                  name="prolem-solving-ratings"
                  value="fair"
                  class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                />
                <label
                  for="prolem-solving-option-2"
                  class="block ml-2 text-sm font-medium text-gray-900">
                  Fair
                </label>
              </div>
              <div class="flex items-center mb-4">
                <input
                  id="prolem-solving-option-3"
                  type="radio"
                  name="prolem-solving-ratings"
                  value="good"
                  class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 "
                />
                <label
                  for="prolem-solving-option-3"
                  class="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Good
                </label>
              </div>
              <div class="flex items-center mb-4">
                <input
                  id="prolem-solving-option-4"
                  type="radio"
                  name="prolem-solving-ratings"
                  value="Excellent"
                  class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring:blue-300 "
                />
                <label
                  for="prolem-solving-option-4"
                  class="block ml-2 text-sm font-medium text-gray-900">
                  Excellent
                </label>
              </div>
            </fieldset>
          </div>
          <fieldset>
            <div className="flex">
              <label
                for=""
                class="w-[200px] ml-2 text-sm font-medium text-gray-900 ">
                Message :
              </label>
              <textarea
                id="message"
                rows="4"
                class="p-2.5 w-full h-[240px] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Write your additional feedback here..."></textarea>
            </div>
          </fieldset>
          <button
            type="submit"
            class="text-white bg-limeGreen hover:bg-[#adbf38] focus:ring-4 focus:outline-none focus:ring-[#dbff4a] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
