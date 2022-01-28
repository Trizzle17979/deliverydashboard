import React, { useState } from "react";
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
      <AddDelivery showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default DashboardRibbon;
// <div className="col-start-1 col-end-5 row-start-1 row-end-2 justify-self-end self-center">
