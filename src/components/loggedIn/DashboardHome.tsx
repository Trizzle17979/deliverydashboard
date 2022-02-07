import React, { useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";

interface DataArray {
  total_pay: number;
  net_pay: number;
  total_orders: number;
  total_miles: number;
  gas_cost: number;
  total_mpg: number;
  cost_per_order: number;
  gas_price: number;
}

const DashboardHome: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [dataArr, setDataArr] = useState<any[]>([]);
  const [values, setValues] = useState({
    sumTotalPay: 0,
    sumNetPay: 0,
    avgNetPay: 0,
    sumOrders: 0,
    avgMpg: 0,
    sumMiles: 0,
    sumGasCost: 0,
    avgGasPrice: 0,
    avgCostPerOrder: 0,
    sumDeliveries: 0,
    sumMpg: 0,
    sumCostPerOrder: 0,
    sumGasPrice: 0,
  });

  const getData = async () => {
    setLoading(true);
    const { data, error } = await supabase.from("deliveries").select("*");
    if (error) {
      console.log("ERROR: ", error);
    } else if (data) {
      setDataArr(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setValues({
      ...values,
      sumTotalPay: dataArr.reduce(
        (acc, cur: DataArray) => acc + cur.total_pay,
        0
      ),
      sumNetPay: dataArr.reduce((acc, cur: DataArray) => acc + cur.net_pay, 0),

      sumOrders: dataArr.reduce(
        (acc, cur: DataArray) => acc + cur.total_orders,
        0
      ),

      sumMiles: dataArr.reduce(
        (acc, cur: DataArray) => acc + cur.total_miles,
        0
      ),
      sumGasCost: dataArr.reduce(
        (acc, cur: DataArray) => acc + cur.gas_cost,
        0
      ),

      sumDeliveries: dataArr.reduce((acc) => acc + 1, 0),
      sumMpg: dataArr.reduce((acc, cur: DataArray) => acc + cur.total_mpg, 0),
      sumCostPerOrder: dataArr.reduce(
        (acc, cur: DataArray) => acc + cur.cost_per_order,
        0
      ),
      sumGasPrice: dataArr.reduce(
        (acc, cur: DataArray) => acc + cur.gas_price,
        0
      ),
      avgNetPay:
        dataArr.reduce((acc, cur: DataArray) => acc + cur.net_pay, 0) /
        dataArr.reduce((acc) => acc + 1, 0),
      avgMpg:
        dataArr.reduce((acc, cur: DataArray) => acc + cur.total_mpg, 0) /
        dataArr.reduce((acc) => acc + 1, 0),
      avgGasPrice:
        dataArr.reduce((acc, cur: DataArray) => acc + cur.gas_price, 0) /
        dataArr.reduce((acc) => acc + 1, 0),
      avgCostPerOrder:
        dataArr.reduce((acc, cur: DataArray) => acc + cur.cost_per_order, 0) /
        dataArr.reduce((acc, cur: DataArray) => acc + cur.total_orders, 0),
    });
  }, [dataArr]);

  return (
    <div className="space-y-4 flex flex-col items-center">
      <h2 className="text-2xl mb-8">Home Dashboard</h2>
      <div className="grid grid-cols-3 gap-8">
        <div className="flex flex-col items-center p-4 text-center shadow-md rounded-md hover:scale-105">
          <img src="./src/assets/bank.svg" className="w-6 h-6" />
          <p>Total Pay</p>
          <p className="text-green-600">${values.sumTotalPay.toFixed(2)}</p>
        </div>
        <div className="flex flex-col items-center p-4 text-center shadow-md rounded-md hover:scale-105">
          <img src="./src/assets/moneybag.svg" className="w-6 h-6" />
          <p>Total Net Pay</p>
          <p className="text-green-600">${values.sumNetPay.toFixed(2)}</p>
        </div>
        <div className="flex flex-col items-center p-4 text-center shadow-md rounded-md hover:scale-105">
          <img src="./src/assets/moneybag.svg" className="w-6 h-6" />
          <p>Average Net $ / Hr</p>
          <p className="text-green-600">${values.avgNetPay.toFixed(2)}</p>
        </div>
        <div className="flex flex-col items-center p-4 text-center shadow-md rounded-md hover:scale-105">
          <img src="./src/assets/graph.svg" className="w-6 h-6" />
          <p>Total Orders</p>
          <p>{values.sumOrders.toFixed(0)}</p>
        </div>
        <div className="flex flex-col items-center p-4 text-center shadow-md rounded-md hover:scale-105">
          <img src="./src/assets/truck.svg" className="w-6 h-6" />
          <p>Average MPG</p>
          <p>{values.avgMpg.toFixed(1)} mpg</p>
        </div>
        <div className="flex flex-col items-center p-4 text-center shadow-md rounded-md hover:scale-105">
          <img src="./src/assets/car.svg" className="w-6 h-6" />
          <p>Total Miles Driven</p>
          <p>{values.sumMiles.toFixed(1)} mi</p>
        </div>
        <div className="flex flex-col items-center p-4 text-center shadow-md rounded-md hover:scale-105">
          <img src="./src/assets/dollar.svg" className="w-6 h-6" />
          <p>Total Gas Cost</p>
          <p className="text-red-600">${values.sumGasCost.toFixed(2)}</p>
        </div>
        <div className="flex flex-col items-center p-4 text-center shadow-md rounded-md hover:scale-105">
          <img src="./src/assets/dollar.svg" className="w-6 h-6" />
          <p>Avg Gas Price</p>
          <p className="text-red-600">${values.avgGasPrice.toFixed(2)}</p>
        </div>
        <div className="flex flex-col items-center p-4 text-center shadow-md rounded-md hover:scale-105">
          <img src="./src/assets/dollar.svg" className="w-6 h-6" />
          <p>Avg Cost per Order</p>
          <p className="text-red-600">${values.avgCostPerOrder.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
