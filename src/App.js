import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./views/Login";
import { Main } from "./views/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
