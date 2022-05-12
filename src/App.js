import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Views _____________________________________
import { Main } from "views/Main";
import { Shorty } from "views/Shorty";
import { Error } from "views/Error";
// Context ___________________________________
import { UserContextProvider } from "./contexts/user";

function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/shorty/*" element={<Shorty />} />
          <Route path="/" element={<Main />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
