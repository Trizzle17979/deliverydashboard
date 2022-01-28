import React from "react";

const DashboardHome: React.FC = () => {
  return (
    <div className="space-y-4 flex flex-col items-center">
      <h2 className="text-2xl mb-8">Home Dashboard</h2>
      <div className="grid grid-cols-3 gap-8">
        <div className="flex flex-col items-center p-4 text-center shadow-md rounded-md hover:scale-105">
          <img src="./src/assets/bank.svg" className="w-6 h-6" />
          <p>Total Pay</p>
          <p className="text-green-600">$500.00</p>
        </div>
        <div className="flex flex-col items-center p-4 text-center shadow-md rounded-md hover:scale-105">
          <img src="./src/assets/moneybag.svg" className="w-6 h-6" />
          <p>Total Net Pay</p>
          <p className="text-green-600">$415.75</p>
        </div>
        <div className="flex flex-col items-center p-4 text-center shadow-md rounded-md hover:scale-105">
          <img src="./src/assets/moneybag.svg" className="w-6 h-6" />
          <p>Average Net $ / Hr</p>
          <p className="text-green-600">$22.97</p>
        </div>
        <div className="flex flex-col items-center p-4 text-center shadow-md rounded-md hover:scale-105">
          <img src="./src/assets/graph.svg" className="w-6 h-6" />
          <p>Total Orders</p>
          <p>40</p>
        </div>
        <div className="flex flex-col items-center p-4 text-center shadow-md rounded-md hover:scale-105">
          <img src="./src/assets/truck.svg" className="w-6 h-6" />
          <p>Average MPG</p>
          <p>26.7 mpg</p>
        </div>
        <div className="flex flex-col items-center p-4 text-center shadow-md rounded-md hover:scale-105">
          <img src="./src/assets/car.svg" className="w-6 h-6" />
          <p>Total Miles Driven</p>
          <p>263.2 mi</p>
        </div>
        <div className="flex flex-col items-center p-4 text-center shadow-md rounded-md hover:scale-105">
          <img src="./src/assets/dollar.svg" className="w-6 h-6" />
          <p>Total Gas Cost</p>
          <p className="text-red-600">$40.50</p>
        </div>
        <div className="flex flex-col items-center p-4 text-center shadow-md rounded-md hover:scale-105">
          <img src="./src/assets/dollar.svg" className="w-6 h-6" />
          <p>Avg Gas Price</p>
          <p className="text-red-600">$4.23</p>
        </div>
        <div className="flex flex-col items-center p-4 text-center shadow-md rounded-md hover:scale-105">
          <img src="./src/assets/dollar.svg" className="w-6 h-6" />
          <p>Avg Cost per Order</p>
          <p className="text-red-600">$1.17</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
