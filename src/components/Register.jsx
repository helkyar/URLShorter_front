import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const userRegister = async (e) => {
    e.preventDefault();
    // await register({ username, password });
    setUsername("");
    setPassword("");
  };

  return (
    <>
      <form className="register-form session-form" onSubmit={userRegister}>
        <input
          className="register-username"
          placeholder="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="register-password"
          placeholder="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={(e) => userRegister(e)}>register</button>
      </form>
    </>
  );
};
