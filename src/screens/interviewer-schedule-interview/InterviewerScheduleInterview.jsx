import React, { useState, Fragment, useEffect } from "react";
import { Autocomplete, TextField } from "@mui/material";
import styled from "styled-components";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { DatePicker } from "@mui/x-date-pickers";
import { Combobox, Transition } from "@headlessui/react";
import AuthService from "auth/authService";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";

const InterviewerScheduleInterview = () => {
  const { userResponse } = useSelector((state) => state.auth);
  const [selected, setSelected] = useState("");
  const [query, setQuery] = useState("");
  const [intervieweeNames, setIntervieweeNames] = useState([]);
  const initialState = {
    createdBy: "",
    interviewerId: "",
    intervieweeId: "",
    category: "",
    date: "",
    interviewee: "",
    interviewer: "",
    timeSlot: "",
  };
  const [inputs, setInputs] = useState(initialState);

  const filteredPeople =
    query === ""
      ? intervieweeNames
      : intervieweeNames.filter((person) =>
          person.username
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  useEffect(() => {
    AuthService.getIntervieweeName()
      .then((response) => {
        setIntervieweeNames(response?.intervieweesName);
        console.log(response);
      })
      .catch((err) => {
        console.log("interviewee name err", err);
        toast.error(err?.data?.message);
      });
  }, []);

  //   useEffect(() => {

  //   }, [inputs.date])

  const handleClick = () => {
    inputs.interviewee = selected.username;
    inputs.intervieweeId = selected.id;
    inputs.interviewer = userResponse.username;
    inputs.interviewerId = userResponse.userId;
    inputs.createdBy = userResponse.userId;
    console.log(inputs);
    AuthService.scheduleInterview(inputs)
      .then((response) => {
        console.log(response);
        toast.success(response?.message);
      })
      .catch((err) => {
        console.log("schedule interview err", err);
        toast.error(err?.data?.error);
      });
  };

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1>Schedule an Interview</h1>
        <p className="text-sm">
          Hello chandan! Plaese fill the form to schedule an interview
        </p>
      </div>
      {/* Select interviewee section */}
      <div className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow flex flex-col gap-6">
        <h1>Schelude an interview</h1>

        <div className="px-8">
          <div className="flex gap-16 items-center">
            <label className="block mb-2 text-sm font-bold text-gray-900">
              Select an Interview Type
            </label>
            <div className="flex gap-4">
              <div className="flex items-center">
                <button
                  type="button"
                  onClick={() => {
                    setInputs({ ...inputs, category: "Behavioral" });
                  }}
                  className="text-black hover:text-white border border-limeGreen hover:bg-limeGreen focus:ring-4 focus:outline-none focus:ring-[#dbff4a] font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
                >
                  Behavioral
                </button>
              </div>
              <div className="flex items-center">
                <button
                  type="button"
                  onClick={() => {
                    setInputs({ ...inputs, category: "Technical" });
                  }}
                  className="text-black hover:text-white border border-limeGreen hover:bg-limeGreen focus:ring-4 focus:outline-none focus:ring-[#dbff4a] font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
                >
                  Technical
                </button>
              </div>
              <div className="flex items-center">
                <button
                  type="button"
                  onClick={() => {
                    setInputs({ ...inputs, category: "Special" });
                  }}
                  className="text-black hover:text-white border border-limeGreen hover:bg-limeGreen focus:ring-4 focus:outline-none focus:ring-[#dbff4a] font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
                >
                  Special
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-36">
            <label className="block mb-2 text-sm font-bold text-gray-900">
              Select date
            </label>
            {/* material ui date selesctor */}
            <input
              type="date"
              name="date"
              value={inputs.date}
              onChange={(e) => {
                setInputs({ ...inputs, [e.target.name]: e.target.value });
              }}
            />
          </div>
          <div className="flex items-center gap-24">
            <label className="block mb-2 text-sm font-bold text-gray-900">
              Select Interviewee
            </label>
            {/* material ui search selesctor */}
            <Combobox value={selected} onChange={setSelected}>
              <div className="relative mt-1">
                <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                  <Combobox.Input
                    className="w-full outline-none border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
                    displayValue={(person) => person.username}
                    onChange={(event) => setQuery(event.target.value)}
                  />
                  <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                    {/* <ChevronUpDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                /> */}
                    d
                  </Combobox.Button>
                </div>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                  afterLeave={() => setQuery("")}
                >
                  <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {filteredPeople.length === 0 && query !== "" ? (
                      <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                        Nothing found.
                      </div>
                    ) : (
                      filteredPeople.map((person) => (
                        <Combobox.Option
                          key={person.id}
                          className={({ active }) =>
                            `relative cursor-default select-none py-2 pl-10 pr-4 ${
                              active
                                ? "bg-teal-600 text-white"
                                : "text-gray-900"
                            }`
                          }
                          value={person}
                        >
                          {({ selected, active }) => (
                            <>
                              <span
                                className={`block truncate ${
                                  selected ? "font-medium" : "font-normal"
                                }`}
                              >
                                {person.username}
                              </span>
                              {selected ? (
                                <span
                                  className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                    active ? "text-white" : "text-teal-600"
                                  }`}
                                >
                                  {/* <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              /> */}
                                  d
                                </span>
                              ) : null}
                            </>
                          )}
                        </Combobox.Option>
                      ))
                    )}
                  </Combobox.Options>
                </Transition>
              </div>
            </Combobox>
          </div>
        </div>
      </div>

      {/* Select time slot section */}
      <div className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow flex flex-col gap-6">
        <h1>Select an Available Time Slot</h1>
        <div className="flex gap-48 px-8">
          <div>
            <label className="block mb-2 text-sm font-bold text-gray-900">
              {inputs.date}
            </label>
          </div>
          <div className="grid grid-cols-3 grid-flow-row gap-4 grow">
            <button
              type="button"
              onClick={() => {
                setInputs({ ...inputs, timeSlot: "09:00" });
              }}
              className="text-black hover:text-white border border-limeGreen hover:bg-limeGreen focus:ring-4 focus:outline-none focus:ring-[#dbff4a] font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
            >
              09:00
            </button>
            <button
              type="button"
              onClick={() => {
                setInputs({ ...inputs, timeSlot: "10:00" });
              }}
              className="text-black hover:text-white border border-limeGreen hover:bg-limeGreen focus:ring-4 focus:outline-none focus:ring-[#dbff4a] font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
            >
              10:00
            </button>
            <button
              type="button"
              onClick={() => {
                setInputs({ ...inputs, timeSlot: "11:00" });
              }}
              className="text-black hover:text-white border border-limeGreen hover:bg-limeGreen focus:ring-4 focus:outline-none focus:ring-[#dbff4a] font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
            >
              11:00
            </button>
            <button
              type="button"
              onClick={() => {
                setInputs({ ...inputs, timeSlot: "12:00" });
              }}
              className="text-black hover:text-white border border-limeGreen hover:bg-limeGreen focus:ring-4 focus:outline-none focus:ring-[#dbff4a] font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
            >
              12:00
            </button>
            <button
              type="button"
              onClick={() => {
                setInputs({ ...inputs, timeSlot: "13:00" });
              }}
              className="text-black hover:text-white border border-limeGreen hover:bg-limeGreen focus:ring-4 focus:outline-none focus:ring-[#dbff4a] font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
            >
              13:00
            </button>
            <button
              type="button"
              onClick={() => {
                setInputs({ ...inputs, timeSlot: "14:00" });
              }}
              className="text-black hover:text-white border border-limeGreen hover:bg-limeGreen focus:ring-4 focus:outline-none focus:ring-[#dbff4a] font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
            >
              14:00
            </button>
            <button
              type="button"
              onClick={() => {
                setInputs({ ...inputs, timeSlot: "15:00" });
              }}
              className="text-black hover:text-white border border-limeGreen hover:bg-limeGreen focus:ring-4 focus:outline-none focus:ring-[#dbff4a] font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
            >
              15:00
            </button>
            <button
              type="button"
              onClick={() => {
                setInputs({ ...inputs, timeSlot: "16:00" });
              }}
              className="text-black hover:text-white border border-limeGreen hover:bg-limeGreen focus:ring-4 focus:outline-none focus:ring-[#dbff4a] font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
            >
              16:00
            </button>
            <button
              type="button"
              onClick={() => {
                setInputs({ ...inputs, timeSlot: "17:00" });
              }}
              className="text-black hover:text-white border border-limeGreen hover:bg-limeGreen focus:ring-4 focus:outline-none focus:ring-[#dbff4a] font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
            >
              17:00
            </button>
          </div>
        </div>
      </div>
      <button
        type="button"
        onClick={handleClick}
        className="text-black hover:text-white border border-limeGreen hover:bg-limeGreen focus:ring-4 focus:outline-none focus:ring-[#dbff4a] font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
      >
        Schedule Interview
      </button>
    </div>
  );
};

export default InterviewerScheduleInterview;
