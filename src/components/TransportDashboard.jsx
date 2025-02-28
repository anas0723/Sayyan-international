import { IoArrowBack } from "react-icons/io5";

export default function TransportDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-4 flex justify-center items-center">
      <div className="w-full max-w-5xl bg-white shadow-md p-6 rounded-md">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <button className="text-gray-600">
            <IoArrowBack className="text-2xl" />
          </button>
          <h2 className="text-xl font-bold">Transporter Name</h2>
          <button className="bg-yellow-500 text-white px-4 py-2 rounded-md">
            Generate bill
          </button>
        </div>

        {/* Stats Section */}
        <div className="flex justify-between mb-6">
          <div className="bg-gray-100 p-4 rounded-md text-center flex-1 mx-2">
            <h3 className="text-xl font-bold">112,633</h3>
            <p className="text-gray-500 text-sm">Pending Bill</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-md text-center flex-1 mx-2">
            <h3 className="text-xl font-bold">76,675</h3>
            <p className="text-gray-500 text-sm">Curr. Month Bill</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-md text-center flex-1 mx-2">
            <h3 className="text-xl font-bold">4</h3>
            <p className="text-gray-500 text-sm">Curr. Month Trips</p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex justify-between bg-gray-100 p-4 rounded-md mb-6">
          <div>
            <h4 className="text-sm font-semibold">Sign Holder</h4>
            <p className="text-gray-500 text-sm">Syed Haider</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Cell#</h4>
            <p className="text-gray-500 text-sm">03671432146</p>
          </div>
        </div>

        {/* Ledger Table */}
        <div className="mb-6">
          <h3 className="font-semibold text-lg mb-2">Ledger</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-200 text-left">
                  <th className="border p-2">S#</th>
                  <th className="border p-2">Name</th>
                  <th className="border p-2">Date</th>
                  <th className="border p-2">Debit</th>
                  <th className="border p-2">Credit</th>
                  <th className="border p-2">Balance</th>
                  <th className="border p-2">Reason</th>
                  <th className="border p-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, 4].map((index) => (
                  <tr key={index} className="text-sm">
                    <td className="border p-2">{index}</td>
                    <td className="border p-2">Jamal Ahmed</td>
                    <td className="border p-2">12/07/21</td>
                    <td className="border p-2">4367</td>
                    <td className="border p-2">11,675</td>
                    <td className="border p-2">11,675</td>
                    <td className="border p-2">Lorem Ipsum</td>
                    <td className="border p-2 text-blue-500 cursor-pointer">Edit</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Trucks Table */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Trucks</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-200 text-left">
                  <th className="border p-2">S#</th>
                  <th className="border p-2">Truck</th>
                  <th className="border p-2">Driver Name</th>
                  <th className="border p-2">Helper Name</th>
                  <th className="border p-2">Trips This Month</th>
                  <th className="border p-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, 4].map((index) => (
                  <tr key={index} className="text-sm">
                    <td className="border p-2">{index}</td>
                    <td className="border p-2">ABC</td>
                    <td className="border p-2">Abid Ali</td>
                    <td className="border p-2">Raheem Naqvi</td>
                    <td className="border p-2">12</td>
                    <td className="border p-2 text-blue-500 cursor-pointer">Edit</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
