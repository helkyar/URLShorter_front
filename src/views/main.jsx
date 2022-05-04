import Context from "contexts/user";
import postUrl from "helpers/urls/postUrl";
import React, { useContext, useState } from "react";

export const Main = () => {
  //(!) get user if exists
  const [url, setUrl] = useState("");
  const handleSubmit = async () => {
    await postUrl({ url });
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
      </form>
    </div>
  );
};
