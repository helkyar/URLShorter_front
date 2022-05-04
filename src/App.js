import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Views _____________________________________
import { Main } from "views/Main";
import { Shorty } from "views/Shorty";
import { Session } from "views/Session";
import { Error } from "views/Error";
import { Redirect } from "components/Redirect";
// Context ___________________________________
import { UserContextProvider } from "./contexts/user";

function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/shorty/*" element={<Shorty />} />
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Session />} />
          <Route path="/*" element={<Error />} />
        </Routes>
        {/* Protects routes from not loged users */}
        {/* <Redirect /> */}
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
