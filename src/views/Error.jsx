import React from "react";
import { useNavigate } from "react-router";

export const Error = () => {
  const navigate = useNavigate();
  return (
    <div className="error-page">
      <h1>ERROR: 404</h1>
      <p>Page not found</p>
      <button className="btn" onClick={() => navigate("/")}>
        Go Back
      </button>
    </div>
  );
};
