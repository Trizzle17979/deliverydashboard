import React, { useRef } from "react";

interface Props {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddDelivery: React.FC<Props> = ({ showModal, setShowModal }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const closeModal = (e: React.FormEvent) => {
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
            <div className="flex justify-between mb-6">
              <h4 className="text-2xl">Add Delivery</h4>
              <img
                onClick={handleCloseModal}
                src="./src/assets/close.svg"
                className="w-6 h-6 cursor-pointer hover:scale-105"
              />
            </div>
            <form className="flex flex-col space-y-4">
              <label>
                Date:
                <input
                  className="ml-4 p-1 border border-black rounded-md"
                  type="date"
                />
              </label>
              <label>
                Total Time (mins):
                <input
                  className="ml-4 p-1 border border-black rounded-md"
                  type="number"
                />
              </label>
              <label>
                Number of Orders:
                <input
                  className="ml-4 p-1 border border-black rounded-md"
                  type="number"
                />
              </label>
              <label>
                Total Miles:
                <input
                  className="ml-4 p-1 border border-black rounded-md"
                  type="number"
                />
              </label>
              <label>
                MPG:
                <input
                  className="ml-4 p-1 border border-black rounded-md"
                  type="number"
                />
              </label>
              <label>
                Local Gas Price ($ per gal):
                <input
                  className="ml-4 p-1 border border-black rounded-md"
                  type="decimal"
                />
              </label>
              <label>
                Total Pay ($):
                <input
                  className="ml-4 p-1 border border-black rounded-md"
                  type="decimal"
                />
              </label>
              <button className="text-white py-3 px-6 bg-blue-500 rounded-md hover:bg-blue-400">
                Add Delivery
              </button>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default AddDelivery;
