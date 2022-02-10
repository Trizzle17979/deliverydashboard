import React, { useRef } from "react";
import { DataArray } from "../../types";

interface Props {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  delivery: DataArray;
}

const TableDetails: React.FC<Props> = ({
  showModal,
  setShowModal,
  delivery,
}) => {
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
                <h4 className="text-xl">{delivery.delivery_date}</h4>
              </div>
              <div className="flex gap-4">
                <h4 className="text-xl">Total Time (mins):</h4>
                <h4 className="text-xl">{delivery.total_time} mins</h4>
              </div>
              <div className="flex gap-4">
                <h4 className="text-xl"># of Orders</h4>
                <h4 className="text-xl">{delivery.total_orders}</h4>
              </div>
              <div className="flex gap-4">
                <h4 className="text-xl">Total Miles</h4>
                <h4 className="text-xl">{delivery.total_miles}</h4>
              </div>
              <div className="flex gap-4">
                <h4 className="text-xl">MPG:</h4>
                <h4 className="text-xl">{delivery.total_mpg}</h4>
              </div>
              <div className="flex gap-4">
                <h4 className="text-xl">Gas Price (est):</h4>
                <h4 className="text-xl">${delivery.gas_price}</h4>
              </div>
              <div className="flex gap-4">
                <h4 className="text-xl">Gas Cost:</h4>
                <h4 className="text-xl">${delivery.gas_cost}</h4>
              </div>
              <div className="flex gap-4">
                <h4 className="text-xl">Miles per Order:</h4>
                <h4 className="text-xl">{delivery.miles_per_order} mi</h4>
              </div>
              <div className="flex gap-4">
                <h4 className="text-xl">Cost per Order:</h4>
                <h4 className="text-xl">${delivery.cost_per_order}</h4>
              </div>
              <div className="flex gap-4">
                <h4 className="text-xl">Total Pay:</h4>
                <h4 className="text-xl">${delivery.total_pay}</h4>
              </div>
              <div className="flex gap-4">
                <h4 className="text-xl">Cost to Operate:</h4>
                <h4 className="text-xl">${delivery.cost_to_operate}</h4>
              </div>
              <div className="flex gap-4">
                <h4 className="text-xl">Net Pay:</h4>
                <h4 className="text-xl">${delivery.net_pay}</h4>
              </div>
              <div className="flex gap-4">
                <h4 className="text-xl">Net Pay per Hour:</h4>
                <h4 className="text-xl">${delivery.net_pay_per_hour}</h4>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default TableDetails;
