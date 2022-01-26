import React from "react";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center px-24 py-4">
      <div>
        <h3 className="text-white text-2xl font-bold">Delivery Log</h3>
      </div>
      <div>
        <a
          href="#"
          className="text-white py-3 px-6 bg-blue-500 rounded-md hover:bg-blue-400"
        >
          Sign In
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
