import React from "react";
import { useLocation } from "react-router-dom";

const TestingRoom = () => {
  const { state } = useLocation();
  console.log("testing room", state);

  return <div>TestingRoom</div>;
};

export default TestingRoom;
