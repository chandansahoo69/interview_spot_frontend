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
import { useNavigate } from "react-router-dom";

const timeSlots = [
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
];

const IntervieweeScheduleInterview = () => {
  const { userResponse } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [selected, setSelected] = useState("");
  const [query, setQuery] = useState("");
  const [interviewerNames, setInterviewerNames] = useState([]);
  const [bookedSlot, setBookedSlot] = useState([]);
  const [checkBookedSlot, setCheckBookedSlot] = useState([]);
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
      ? interviewerNames
      : interviewerNames.filter((person) =>
          person.username
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  useEffect(() => {
    AuthService.getInterviewerName()
      .then((response) => {
        setInterviewerNames(response?.interviewersName);
        console.log(response);
      })
      .catch((err) => {
        console.log("interviewee name err", err);
        toast.error(err?.data?.message);
      });
  }, []);

  console.log("available booked slot", checkBookedSlot);
  console.log("available booked slot1", bookedSlot);
  useEffect(() => {
    let isSlotAvailable = false;
    console.log("checking available", bookedSlot);
    bookedSlot &&
      bookedSlot.map((slot) => {
        const previousDate = new Date(slot?.date);
        previousDate.setDate(previousDate.getDate() - 1);

        if (
          new Date(slot?.date).toLocaleDateString() ===
          new Date(inputs?.date).toLocaleDateString()
        ) {
          console.log("matched slot", slot);
          isSlotAvailable = true;
          setCheckBookedSlot(slot?.timeSlot);
        }
      });

    if (!isSlotAvailable) {
      setCheckBookedSlot([]);
    }
  }, [inputs.date, bookedSlot]);

  useEffect(() => {
    if (selected !== "") {
      const obj = {
        id: selected.id,
      };
      AuthService.getInterviewerBookedSlot(obj)
        .then((response) => {
          setBookedSlot(response);
          console.log("log", response);
        })
        .catch((err) => {
          console.log("interviewee slot err", err);
          toast.error(err?.data?.message);
        });
    }
  }, [selected]);

  const handleClick = () => {
    inputs.interviewer = selected.username;
    inputs.interviewerId = selected.id;
    inputs.interviewee = userResponse.username;
    inputs.intervieweeId = userResponse.userId;
    inputs.createdBy = userResponse.userId;
    console.log(inputs);
    AuthService.scheduleInterview(inputs)
      .then((response) => {
        console.log(response);
        toast.success(response?.message);
        // navigate({ pathname: `${userResponse?.role}/dashboard` });
        setInputs(initialState);
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
                    {filteredPeople &&
                    filteredPeople.length === 0 &&
                    query !== "" ? (
                      <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                        Nothing found.
                      </div>
                    ) : (
                      filteredPeople &&
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
      <div
        className={`${
          inputs.date === "" ? "hidden" : "flex"
        }  w-full p-6 bg-white border border-gray-200 rounded-lg shadow flex-col gap-6`}
      >
        <h1>Select an Available Time Slot</h1>
        <div className="flex gap-48 px-8">
          <div>
            <label className="block mb-2 text-sm font-bold text-gray-900">
              {inputs.date}
            </label>
          </div>
          <div className="grid grid-cols-3 grid-flow-row gap-4 grow">
            {timeSlots.map((timeSlot, index) => (
              <>
                {!checkBookedSlot.includes(timeSlot) ? (
                  <button
                    key={index}
                    type="button"
                    onClick={() => {
                      setInputs({ ...inputs, timeSlot: timeSlot });
                    }}
                    className="text-black hover:text-white border border-limeGreen hover:bg-limeGreen focus:ring-4 focus:outline-none focus:ring-[#dbff4a] font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
                  >
                    {timeSlot}
                  </button>
                ) : (
                  <button
                    key={index}
                    disabled
                    type="button"
                    // onClick={() => {
                    //   setInputs({ ...inputs, timeSlot: timeSlot });
                    // }}
                    className="text-black hover:text-white border border-gray-600 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
                  >
                    {timeSlot}
                  </button>
                )}
              </>
            ))}
            {/* <button
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
              </button> */}
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

export default IntervieweeScheduleInterview;
