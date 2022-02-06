import React, { useRef, useState } from "react";
import { supabase } from "../../supabaseClient";

interface Props {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddDelivery: React.FC<Props> = ({ showModal, setShowModal }) => {
  let currentUser = supabase.auth.user();
  let currentUserId = currentUser?.id;

  const [values, setValues] = useState({
    gasPrice: "",
    totalMiles: "",
    totalMpg: "",
    totalOrders: "",
    totalPay: "",
    totalTime: "",
    deliveryDate: "",
    uuid: currentUserId,
  });
  const modalRef = useRef<HTMLDivElement>(null);

  const closeModal = (e: React.FormEvent) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    let gasCost = (+values.totalMiles / +values.totalMpg) * +values.gasPrice;
    let milesPerOrder = +values.totalMiles / +values.totalOrders;
    // --> Change the 0.19 when you want to calculate larger than sedan <--
    let costToOperate = gasCost + +values.totalMiles * 0.19;
    let costPerOrder = costToOperate / +values.totalOrders;
    let netPay = +values.totalPay - costToOperate;
    let netPayPerHour = netPay / (+values.totalTime / 60);

    gasCost = +gasCost.toFixed(2);
    milesPerOrder = +milesPerOrder.toFixed(2);
    costToOperate = +costToOperate.toFixed(2);
    costPerOrder = +costPerOrder.toFixed(2);
    netPay = +netPay.toFixed(2);
    netPayPerHour = +netPayPerHour.toFixed(2);

    const { data, error } = await supabase.from("deliveries").insert([
      {
        cost_per_order: costPerOrder,
        cost_to_operate: costToOperate,
        gas_cost: gasCost,
        gas_price: values.gasPrice,
        miles_per_order: milesPerOrder,
        net_pay: netPay,
        total_miles: values.totalMiles,
        total_mpg: values.totalMpg,
        total_orders: values.totalOrders,
        total_pay: values.totalPay,
        total_time: values.totalTime,
        delivery_date: values.deliveryDate,
        net_pay_per_hour: netPayPerHour,
        user_id: values.uuid,
      },
    ]);

    if (error) {
      console.log(error);
    }
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
            <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
              <label>
                Date:
                <input
                  className="ml-4 p-1 border border-black rounded-md"
                  type="date"
                  onChange={handleChange}
                  value={values.deliveryDate}
                  name="deliveryDate"
                />
              </label>
              <label>
                Total Time (mins):
                <input
                  className="ml-4 p-1 border border-black rounded-md"
                  type="decimal"
                  onChange={handleChange}
                  value={values.totalTime}
                  name="totalTime"
                />
              </label>
              <label>
                Number of Orders:
                <input
                  className="ml-4 p-1 border border-black rounded-md"
                  type="decimal"
                  onChange={handleChange}
                  value={values.totalOrders}
                  name="totalOrders"
                />
              </label>
              <label>
                Total Miles:
                <input
                  className="ml-4 p-1 border border-black rounded-md"
                  type="decimal"
                  onChange={handleChange}
                  value={values.totalMiles}
                  name="totalMiles"
                />
              </label>
              <label>
                MPG:
                <input
                  className="ml-4 p-1 border border-black rounded-md"
                  type="decimal"
                  onChange={handleChange}
                  value={values.totalMpg}
                  name="totalMpg"
                />
              </label>
              <label>
                Local Gas Price ($ per gal):
                <input
                  className="ml-4 p-1 border border-black rounded-md"
                  type="decimal"
                  onChange={handleChange}
                  value={values.gasPrice}
                  name="gasPrice"
                />
              </label>
              <label>
                Total Pay ($):
                <input
                  className="ml-4 p-1 border border-black rounded-md"
                  type="decimal"
                  onChange={handleChange}
                  value={values.totalPay}
                  name="totalPay"
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
