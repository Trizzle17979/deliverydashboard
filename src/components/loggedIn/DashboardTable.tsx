import React, { useEffect, useState } from "react";
import TableDetails from "./TableDetails";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { supabase } from "../../supabaseClient";
import { DataArray, MappedInterface } from "../../types";

interface Props {
  dispatch: Dispatch<any>;
  deliveryData: DataArray;
}

const DashboardTable: React.FC<Props> = ({ dispatch, deliveryData }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [deleted, setDeleted] = useState({});
  const [showModal, setShowModal] = useState<boolean>(false);
  const [dataArr, setDataArr] = useState<DataArray[]>([]);
  const [table, setTable] = useState<JSX.Element[]>([]);
  const [delivery, setDelivery] = useState<DataArray>({
    id: 0,
    delivery_date: "",
    total_pay: 0,
    total_orders: 0,
    total_miles: 0,
    total_mpg: 0,
    total_time: 0,
    gas_price: 0,
    gas_cost: 0,
    miles_per_order: 0,
    cost_per_order: 0,
    cost_to_operate: 0,
    net_pay: 0,
    net_pay_per_hour: 0,
  });

  const handleShowModal = (deliveryInput: DataArray) => {
    setShowModal(true);
    setDelivery(deliveryInput);
  };

  const handleDelete = async (deleteDelivery: DataArray) => {
    const { data, error } = await supabase
      .from("deliveries")
      .delete()
      .match({ id: deleteDelivery.id });

    if (error) {
      console.log(error);
    }

    setDeleted(deleteDelivery);
  };

  const getData = async () => {
    const { data, error } = await supabase.from("deliveries").select("*");
    if (error) {
      console.log("ERROR: ", error);
    } else if (data) {
      setDataArr(data);
    }
  };

  useEffect(() => {
    getData();
  }, [deleted]);

  useEffect(() => {
    setLoading(true);
    let tableOutput = dataArr?.map((delivery) => {
      return (
        <tr
          className="bg-blue-200 cursor-pointer duration-300"
          key={delivery.id}
        >
          <td className="py-3 px-6">{delivery.delivery_date}</td>
          <td className="py-3 px-6">${delivery.total_pay}</td>
          <td className="py-3 px-6">{delivery.total_orders}</td>
          <td className="py-3 px-6">{delivery.total_miles} mi</td>
          <td className="py-3 px-6">{delivery.total_mpg} mpg</td>
          <td className="py-3 px-6 text-blue-800">
            <button
              onClick={() => handleShowModal(delivery)}
              className="hover:scale-105"
            >
              details
            </button>
          </td>
          <td className="py-3 px-6 text-red-400">
            <button
              onClick={() => handleDelete(delivery)}
              className="hover:scale-105"
            >
              delete
            </button>
          </td>
        </tr>
      );
    });
    setTable(tableOutput);
    setLoading(false);
  }, [dataArr]);

  return (
    <div className="flex justify-center items-center">
      {loading ? (
        <h2>Loading...</h2>
      ) : (
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
          <tbody className="text-blue-900 text-center">{table}</tbody>
        </table>
      )}
      <TableDetails
        showModal={showModal}
        setShowModal={setShowModal}
        delivery={delivery}
      />
    </div>
  );
};

const mapStateToProps = (state: MappedInterface) => {
  return {
    user: state.user,
    deliveryData: state.deliveryData,
  };
};

export default connect(mapStateToProps)(DashboardTable);
