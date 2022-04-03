import React, { useState } from "react";
import { Login } from "components/Login";
import { Register } from "components/Register";

export const Session = () => {
  const [logView, setLogView] = useState(true);
  return (
    <>
      {logView && <Login />}
      {!logView && <Register />}
      <button
        className="session-btn"
        onClick={() => setLogView((state) => !state)}
      >
        {logView ? "Go Register" : "Go Login"}
      </button>
    </>
  );
};
