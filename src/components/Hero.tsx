import React from "react";

const Hero = () => {
  return (
    <div className="flex justify-between items-center px-24 py-36">
      <div className="w-1/2 flex flex-col space-y-8">
        <p className="text-blue-100 font-mono">Modern dashboards & tracking</p>
        <h2 className="text-white font-bold text-4xl">
          Understand Your Earnings
        </h2>
        <h4 className="text-white">
          Simple, easy to use earnings dashboard thoughtfully designed for
          delivery drivers of all kinds
        </h4>
        <div className="flex gap-4 items-center">
          <a
            href="#"
            className="text-white py-3 px-6 w-1/2 text-center bg-blue-500 rounded-md hover:bg-blue-400 hover:-translate-y-0.5 transform transition"
          >
            Sign Up
          </a>
          <a
            href="#"
            className="text-blue-500 py-3 px-6 w-1/2 text-center bg-white rounded-md hover:text-blue-600"
          >
            Learn More
          </a>
        </div>
      </div>
      <video
        className="h-80 w-80 rounded-full shadow-lg hover:scale-105 transition"
        autoPlay
        loop
        muted
      >
        <source src="./src/assets/deliveryLog.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Hero;
