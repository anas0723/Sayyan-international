import React from "react";
import Signin from "./components/signin";
import "/src/index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Forget from "./components/Forget";
import Email from "./components/Email";
import DashboardTrips from "./components/DashboardTrips";
import DashboardSourses from "./components/DashboardSourses";
import AllScreen from "./components/AllScreen";
import Companies from "./components/Companies";
import Transpoter from "./components/Transpoter";
import Setting from "./components/Setting";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Signin />} />
      <Route path="/forget" element={<Forget/>} />
      <Route path="/email" element={<Email />} />
      <Route path="/dashboard-trips" element={<DashboardTrips />} />
      <Route path="/dashboard-sourses" element={<DashboardSourses />}/>
      <Route path="/allscreen" element={<AllScreen />}/>
      <Route path="/companies" element={<Companies/>} />
      <Route path="/transpoter" element={<Transpoter/>} />
      <Route path="/setting" element={<Setting />} />

    </Routes>
  );
}

export default App;
