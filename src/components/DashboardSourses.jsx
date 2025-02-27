import React, { useState } from "react";
import { IoSettingsSharp, IoAdd, IoMenu, IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Dashboardsourses() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:flex flex-col w-64 bg-yellow-500 text-black p-6 fixed md:relative h-full z-10 transition-transform duration-300`}
      >
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">SAYYAM</h1>
          {/* Close Button  */}
          <button
            className="md:hidden text-black"
            onClick={() => setSidebarOpen(false)}
          >
            <IoClose className="text-2xl" />
          </button>
        </div>
        <p className="text-sm">International Traders</p>
        <nav className="mt-8 flex flex-col space-y-4">
          <a href="#" className="font-medium">
            Trips
          </a>
          <a href="#">Sources</a>
          <a href="#">Transporter</a>
          <a href="#">Companies</a>
          <a href="#" className="mt-auto text-red-600 font-semibold">
            Log Out
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-8 bg-gray-100 relative">
        {/* Mobile Menu Button */}
        <button
          className="md:hidden bg-yellow-500 p-2 rounded text-white mb-4"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? (
            <IoClose className="text-2xl" />
          ) : (
            <IoMenu className="text-2xl" />
          )}
        </button>

        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Trips</h2>
          <Link to={"/email"} className="block">
          <IoSettingsSharp className="itext-gray-600 text-xl" />
          </Link>
        </div>

        {/* Filters */}
        <div className="flex justify-between flex-wrap gap-2 mt-4">
          <select className="border p-2 rounded bg-white">
            <option>Sort By: Ascending</option>
          </select>
          <div className="w-[153px] h-10 bg-gray-500 p-2 rounded  ">
            <Link to={"/forget"} className="   flex justify-center text-white">
              Relase Money
            </Link>
          </div>
        </div>

        {/* Table Scrool on small screen */}
        <div className="bg-white mt-4 p-4 rounded shadow overflow-auto">
          <table className="w-full border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b text-left">
                <th className="p-2">S#</th>
                <th className="p-2">NAME</th>
                <th className="p-2">CONTACT PERSON</th>
                <th className="p-2">CELL#</th>
                <th className="p-2">ASH COST</th>
                <th className="p-2">CURRENT BILL</th>
                <th className="p-2">TOT PENDING</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4].map((num) => (
                <tr key={num} className="border-b">
                  <td className="p-2">{num}.</td>
                  <td className="p-2">ABC</td>
                  <td className="p-2">Jamal Ahmed</td>
                  <td className="p-2">03462142135</td>
                  <td className="p-2">88,345</td>
                  <td className="p-2">100,775</td>
                  <td className="p-2">128,754</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Floating Action Button */}
        <button className="fixed bottom-8 right-8 bg-yellow-500 text-white p-4 rounded-full shadow-lg hover:bg-yellow-600 md:bottom-12 md:right-12">
          <IoAdd className="text-2xl" />
        </button>
      </main>
    </div>
  );
}
