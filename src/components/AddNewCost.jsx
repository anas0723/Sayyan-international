import React from "react";
import { IoArrowBack } from "react-icons/io5";

function AddNewCost() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      {/* Form Container */}
      <div className="relative bg-white border border-gray-300 w-full max-w-md p-6 rounded-md shadow-md">
        {/* Back Button */}
        <button className="absolute left-4 top-4 text-gray-600">
          <IoArrowBack className="text-2xl" />
        </button>

        {/* Heading */}
        <h2 className="text-xl font-bold text-center mb-4">
          Add A New Transpoter
        </h2>

        {/* Form Inputs */}
        <form className="space-y-3">
          <select className="w-full p-2 border border-l-2 border-l-amber-300 border-gray-300 rounded">
            <option>Transpoter</option>
          </select>
          <select className="w-full p-2 border border-l-2 border-l-amber-300 border-gray-300 rounded">
            <option>Source</option>
          </select>
          <input
            type="text"
            placeholder="Last Trip"
            className="w-full p-2 border border-l-2 border-l-amber-300 border-gray-300 rounded"
          />
          {/* Submit Button */}
          <button className="w-full bg-yellow-500 text-white font-semibold py-2 rounded mt-2 hover:bg-yellow-600">
            Add Cost
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddNewCost;
