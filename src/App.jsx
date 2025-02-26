import React from "react";
import Signin from "./components/signin";
import "/src/index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Forget from "./components/Forget";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Signin />} />
      <Route path="/forget" element={<Forget/>} />
    </Routes>
  );
}

export default App;
