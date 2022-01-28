import React, { useState } from "react";
import TableDetails from "./TableDetails";

function DashboardTable() {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  return (
    <div className="flex justify-center items-center">
      <table className="shadow-2xl font-mono border-2 border-blue-200 w-6/12 overflow-hidden">
        <thead className="text-white">
          <tr>
            <th className="py-3 bg-blue-800">Date</th>
            <th className="py-3 bg-blue-800">Total Pay</th>
            <th className="py-3 bg-blue-800">Total Orders</th>
            <th className="py-3 bg-blue-800">Total Miles</th>
            <th className="py-3 bg-blue-800">MPG</th>
            <th className="py-3 bg-blue-200 text-blue-800">Details</th>
            <th className="py-3 bg-blue-200 text-red-400">Delete</th>
          </tr>
        </thead>
        <tbody className="text-blue-900 text-center">
          <tr className="bg-blue-200 cursor-pointer duration-300">
            <td className="py-3 px-6">1-1-2021</td>
            <td className="py-3 px-6">$45</td>
            <td className="py-3 px-6">12</td>
            <td className="py-3 px-6">27</td>
            <td className="py-3 px-6">29.9</td>
            <td className="py-3 px-6 text-blue-800">
              <button onClick={handleShowModal} className="hover:scale-105">
                details
              </button>
            </td>
            <td className="py-3 px-6 text-red-400">
              <button
                onClick={() => console.log("pressed")}
                className="hover:scale-105"
              >
                delete
              </button>
            </td>
          </tr>
          <tr className="bg-blue-200 cursor-pointer duration-300">
            <td className="py-3 px-6">1-5-2021</td>
            <td className="py-3 px-6">$30</td>
            <td className="py-3 px-6">9</td>
            <td className="py-3 px-6">20</td>
            <td className="py-3 px-6">26.4</td>
            <td className="py-3 px-6 text-blue-800">
              <button onClick={handleShowModal} className="hover:scale-105">
                details
              </button>
            </td>
            <td className="py-3 px-6 text-red-400">
              <button
                onClick={() => console.log("pressed")}
                className="hover:scale-105"
              >
                delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <TableDetails showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}

export default DashboardTable;
