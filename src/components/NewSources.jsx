import { IoArrowBack } from "react-icons/io5";

export default function NewSources() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      {/* Form Container */}
      <div className="relative bg-white border border-gray-300 w-full max-w-md p-6 rounded-md shadow-md">
        {/* Back Button */}
        <button className="absolute left-4 top-4 text-gray-600">
          <IoArrowBack className="text-2xl" />
        </button>

        {/* Heading */}
        <h2 className="text-xl font-bold text-center mb-4">Add A New Sources</h2>

        {/* Form Inputs */}
        <form className="space-y-3">
           <select className="w-full p-2 border border-gray-300 rounded">
              <option>Source</option>
            </select>
            <input
            type="text"
            placeholder="location"
            className="w-full p-2 border border-gray-300 rounded"
          /> 

          <div className="flex gap-3">
             <select className="w-1/2 p-2 border border-gray-300 rounded">
              <option>Contact Person</option>
            </select>
            <input
              type="number"
              placeholder="Contact Number"

              className="w-1/2 p-2 border border-gray-300 rounded"
            />
           
          </div>

          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Ash Cost"
              className="w-1/2 p-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              placeholder="Current Bill"
              className="w-1/2 p-2 border border-gray-300 rounded"
            />
          </div>

          <input
            type="text"
            placeholder="Ash Cost"
            className="w-full p-2 border border-gray-300 rounded"
          />
             <input
            type="text"
            placeholder="TOT Pending"
            className="w-full p-2 border border-gray-300 rounded"
          />
          {/* Submit Button */}
          <button className="w-full bg-yellow-500 text-white font-semibold py-2 rounded mt-2 hover:bg-yellow-600">
            Add Sourses 
          </button>
        </form>
      </div>
    </div>
  );
}
