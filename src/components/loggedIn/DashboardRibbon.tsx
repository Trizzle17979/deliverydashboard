import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import AddDelivery from "./AddDelivery";

const DashboardRibbon: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };
  return (
    <div className="flex justify-end mb-6">
      <button
        onClick={handleShowModal}
        className="text-white py-3 px-6 bg-blue-500 rounded-md hover:bg-blue-400"
      >
        New Delivery
      </button>
      <NavLink
        to="/profile"
        className="text-white py-3 px-6 bg-red-500 rounded-md hover:bg-red-400 ml-4"
      >
        Profile
      </NavLink>
      <AddDelivery showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default DashboardRibbon;
