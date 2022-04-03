import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useSession } from "../helpers/useSession";

export const Login = () => {
  const navigate = useNavigate();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const { loger, isLogged, logfail } = useSession();

  const userLogin = async (e) => {
    e.preventDefault();
    await loger({ login, password });
    setLogin("");
    setPassword("");
  };

  useEffect(() => {
    if (isLogged) navigate("/");
    if (logfail) alert("Retry");
  }, [logfail, isLogged, navigate]);

  return (
    <>
      <form className="login-form" onSubmit={userLogin}>
        <input
          className="login-username"
          placeholder="username"
          type="text"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
        <input
          className="login-password"
          placeholder="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={(e) => userLogin(e)}>Login</button>
      </form>
    </>
  );
};
