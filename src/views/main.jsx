import Context from "contexts/user";
import postUrl from "helpers/urls/postUrl";
import React, { useContext, useState } from "react";
// import { useSession } from "helpers/session/useSession";
// import { useNavigate } from "react-router";

export const Main = () => {
  // const navigate = useNavigate();
  // const { logout } = useSession();
  const { jwt } = useContext(Context)
  const [text, setText] = useState("");
  const handleSubmit = async () => {};
    await postUrl({ url: text }, jwt);
  return (
    <div className="app">
      {/* <h1>Make History</h1>
      <button onClick={() => navigate("/template")}>templates</button>
      <button onClick={() => logout()}>logout</button> */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </form>
    </div>
  );
};
