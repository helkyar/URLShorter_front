import React, { useState } from "react";
import { Login } from "components/Login";
import { Register } from "components/Register";

export const Session = ({ setOnOpen, logView, setLogView }) => {
  return (
    <>
      {logView && <Login setOnOpen={setOnOpen} />}
      {!logView && <Register setOnOpen={setOnOpen} />}
      <button
        className="session-btn btn-second"
        onClick={() => setLogView((state) => !state)}
      >
        {logView ? "Go Register" : "Go Login"}
      </button>
    </>
  );
};
