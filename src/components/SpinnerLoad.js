import React from "react";
import Spinner from "react-spinkit";

const SpinnerLoad = () => {
  return (
    <div className="bg-purple w-screen h-screen flex justify-center items-center">
      <Spinner name="ball-pulse-rise" color="pink" />
    </div>
  );
};

export default SpinnerLoad;
