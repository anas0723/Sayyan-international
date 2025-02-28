import { IoArrowBack } from "react-icons/io5";

export default function CompanyDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Header */}
      <div className="flex items-center mb-4">
        <IoArrowBack className="text-2xl cursor-pointer" />
        <h2 className="text-xl font-bold ml-2">Company Name</h2>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 shadow rounded text-center">
          <h3 className="text-2xl font-bold">112,633</h3>
          <p className="text-gray-500">Pending Bill</p>
        </div>
        <div className="bg-white p-4 shadow rounded text-center">
          <h3 className="text-2xl font-bold">76,675</h3>
          <p className="text-gray-500">Curr. Month Bill</p>
        </div>
        <div className="bg-white p-4 shadow rounded text-center">
          <h3 className="text-2xl font-bold">4</h3>
          <p className="text-gray-500">Curr. Month Trips</p>
        </div>
      </div>

      {/* Contact Info */}
      <div className="bg-white p-4 shadow rounded mb-6">
        <p><strong>Contact Person:</strong> Syed Haider</p>
        <p><strong>Cell#:</strong> 03674132416</p>
        <p><strong>Price:</strong> 11,466</p>
      </div>

      {/* Ledger Table */}
      <div className="bg-white p-4 shadow rounded mb-6">
        <h3 className="font-semibold mb-2">Ledger</h3>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b">
              <th className="p-2">#</th>
              <th className="p-2">Name</th>
              <th className="p-2">Date</th>
              <th className="p-2">Debit</th>
              <th className="p-2">Credit</th>
              <th className="p-2">Balance</th>
              <th className="p-2">Reason</th>
              <th className="p-2">Edit</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4].map((num) => (
              <tr key={num} className="border-b">
                <td className="p-2">{num}</td>
                <td className="p-2">Jamal Ahmed</td>
                <td className="p-2">12/07/21</td>
                <td className="p-2">4367</td>
                <td className="p-2">11,675</td>
                <td className="p-2">11,675</td>
                <td className="p-2">Lorem Ipsum Doler Sit Emit</td>
                <td className="p-2 text-blue-500 cursor-pointer">Edit</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Trips Table */}
      <div className="bg-white p-4 shadow rounded">
        <h3 className="font-semibold mb-2">Trips</h3>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b">
              <th className="p-2">#</th>
              <th className="p-2">Name</th>
              <th className="p-2">Date</th>
              <th className="p-2">Truck</th>
              <th className="p-2">Weight</th>
              <th className="p-2">Price</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4].map((num) => (
              <tr key={num} className="border-b">
                <td className="p-2">{num}</td>
                <td className="p-2">ABC</td>
                <td className="p-2">12/07/21</td>
                <td className="p-2">XYZ</td>
                <td className="p-2">1.5 Ton</td>
                <td className="p-2">100,775</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
