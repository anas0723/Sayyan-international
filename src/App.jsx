import React from "react";
import Signin from "./components/signin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Forget from "./components/Forget";
import Email from "./components/Email";
import DashboardTrips from "./components/DashboardTrips";
import DashboardSourses from "./components/DashboardSourses";
import AllScreen from "./components/AllScreen";
import Companies from "./components/Companies";
import Transpoter from "./components/Transpoter";
import Setting from "./components/Setting";
import ChangePassword from "./components/ChangePassword";
import NewTrip from "./components/NewTrip";
import EditTrip from "./components/EditTrip";
import NewSources from "./components/NewSources";
import AddTranspoter from "./components/AddTranspoter";
import NewCompany from "./components/NewCompany";
import ReleaseMoney from "./components/ReleaseMoney";
import ReleaseTransport from "./components/ReleaseTransport";
import ReceiveCompanyBill from "./components/ReceiveCompanyBill";
import CompanyName from "./components/CompanyName";
import AddNewTruck from "./components/AddNewTruck";
import AddNewCost from "./components/AddNewCost";
import TransportDashboard from "./components/TransportDashboard";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Signin />} />
      <Route path="/forget" element={<Forget />} />
      <Route path="/email" element={<Email />} />
      <Route path="/dashboard-trips" element={<DashboardTrips />} />
      <Route path="/dashboard-sourses" element={<DashboardSourses />} />
      <Route path="/allscreen" element={<AllScreen />} />
      <Route path="/companies" element={<Companies />} />
      <Route path="/transpoter" element={<Transpoter />} />
      <Route path="/setting" element={<Setting />} />
      <Route path="/change-password" element={<ChangePassword />} />
      <Route path="/new-trip" element={<NewTrip />} />
      <Route path="/edit-trip" element={<EditTrip />} />
      <Route path="/new-sources" element={<NewSources />} />
      <Route path="/add-new-transpoter" element={<AddTranspoter />} />
      <Route path="/add-new-company" element={<NewCompany />} />
      <Route path="/release-money" element={<ReleaseMoney />} />
      <Route path="/release-transport" element={<ReleaseTransport />} />
      <Route path="/receive-company-bill" element={<ReceiveCompanyBill />} />
      <Route path="/company-name-dashboard" element={<CompanyName />} />
      <Route path="/add-new-truck" element={<AddNewTruck />} />
      <Route path="/add-new-cost" element={<AddNewCost />} />
      <Route path="/transport-dashboard" element={<TransportDashboard />} />
    </Routes>
  );
}
export default App;
