import React, { useRef } from "react";

function TableDetails(props: boolean) {
  const { showModal, setShowModal } = props;

  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal ? (
        <div
          ref={modalRef}
          onClick={closeModal}
          className="bg-black bg-opacity-75 absolute inset-0 flex justify-center items-center"
        >
          <div className="bg-white p-8">
            <div className="flex justify-between mb-4">
              <h2 className="text-2xl">Delivery Details</h2>
              <img
                onClick={handleCloseModal}
                src="./src/assets/close.svg"
                className="w-6 h-6 cursor-pointer hover:scale-105"
              />
            </div>
            <div className="space-y-4">
              <div className="flex gap-4">
                <h4 className="text-xl">Date:</h4>
                <h4 className="text-xl">1-1-2021</h4>
              </div>
              <div className="flex gap-4">
                <h4 className="text-xl">Total Time (mins):</h4>
                <h4 className="text-xl">70</h4>
              </div>
              <div className="flex gap-4">
                <h4 className="text-xl"># of Orders</h4>
                <h4 className="text-xl">12</h4>
              </div>
              <div className="flex gap-4">
                <h4 className="text-xl">MPG:</h4>
                <h4 className="text-xl">29.9</h4>
              </div>
              <div className="flex gap-4">
                <h4 className="text-xl">Total Pay:</h4>
                <h4 className="text-xl">$45</h4>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default TableDetails;
