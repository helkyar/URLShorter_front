import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import register from "helpers/session/session";
import { useSession } from "helpers/session/useSession";
const emailRegEx =
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

export const Register = ({ setOnOpen, logView }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [show, setShow] = useState("");
  const { loger, isLogged } = useSession();

  const userRegister = async (e) => {
    e.preventDefault();
    //(!) Validation logic: should be separated form the view
    if (!username.trim() || !password.trim() || !email.trim()) {
      setErrorMsg("Inputs can't be blank");
      setShow("show");
      return;
    } else if (!email.match(emailRegEx)) {
      setErrorMsg("Wrong email format");
      setShow("show");
      return;
    } else if (password.length < 6) {
      setErrorMsg("Password must be at least 6 characters long");
      setShow("show");
      return;
    }
    const credentials = { username, password, email };
    //------------------------------------------------------
    const data = await register(credentials, "register");
    if (!data) {
      setErrorMsg("Username taken");
      setShow("show");
      return;
    }

    // Maybe an ineficient way to handle login
    await loger(credentials);
    setUsername("");
    setPassword("");
  };

  useEffect(() => {
    if (isLogged) setOnOpen(false);
  }, [isLogged]);

  return (
    <>
      <div className={`register-error error ${show}`}>{errorMsg}</div>
      <form className="register-form session-form" onSubmit={userRegister}>
        <input
          autoFocus="autofocus"
          className="register-username"
          placeholder="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          className="register-email"
          placeholder="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="register-password"
          placeholder="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="btn" onClick={(e) => userRegister(e)}>
          Register
        </button>
      </form>
    </>
  );
};
