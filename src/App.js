import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Session } from "views/Session";
import { Main } from "views/Main";
import { Error } from "views/Error";
import { Redirect } from "components/Redirect";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Session />} />
        <Route path="/*" element={<Error />} />
      </Routes>
      {/* Protects routes from not loged users */}
      {/* <Redirect /> */}
    </BrowserRouter>
  );
}

export default App;
