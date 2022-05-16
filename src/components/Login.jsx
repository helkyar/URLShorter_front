import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useSession } from "helpers/session/useSession";

export const Login = ({ setOnOpen, logView }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [pswd, setPswd] = useState("");
  const [show, setShow] = useState("");
  const { loger, isLogged, logfail } = useSession();

  const userLogin = async (e) => {
    e.preventDefault();

    //(!) Validation logic: should be separated form the view
    if (!user.trim() || !pswd.trim()) {
      setShow("show");
      return;
    }
    const credentials = { username: user.trim(), password: pswd.trim() };
    //--------------------------------------------------------

    const data = await loger(credentials);
    if (!data) setShow("show");

    setUser("");
    setPswd("");
  };

  useEffect(() => {
    if (isLogged) setOnOpen(false);
    if (logfail) alert("Retry");
  }, [logfail, isLogged, navigate]);

  return (
    <>
      <div className={`login-error error ${show}`}>Wrong credentials</div>
      <form className="login-form session-form" onSubmit={userLogin}>
        <input
          autoFocus="autofocus"
          className="login-username"
          placeholder="username"
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          required
        />
        <input
          className="login-password"
          placeholder="password"
          type="password"
          value={pswd}
          onChange={(e) => setPswd(e.target.value)}
          required
        />
        <button className="btn" onClick={(e) => userLogin(e)}>
          Login
        </button>
      </form>
    </>
  );
};
