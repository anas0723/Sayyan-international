import React from "react";
import Signin from "./components/signin";
import "/src/index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Forget from "./components/Forget";
import Email from "./components/Email";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Signin />} />
      <Route path="/forget" element={<Forget/>} />
      <Route path="/email" element={<Email />} />
    </Routes>
  );
}

export default App;
