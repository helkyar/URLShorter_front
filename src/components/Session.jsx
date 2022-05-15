import React, { useState } from "react";
import { Login } from "components/Login";
import { Register } from "components/Register";

export const Session = ({ setOnOpen, logView, setLogView }) => {
  return (
    <>
      {logView && <Login setOnOpen={setOnOpen} logView={logView} />}
      {!logView && <Register setOnOpen={setOnOpen} logView={logView} />}
      <button
        className="session-btn btn-second"
        onClick={() => setLogView((state) => !state)}
      >
        {logView ? "Go Register" : "Go Login"}
      </button>
    </>
  );
};
