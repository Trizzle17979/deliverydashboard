import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-blue-900 flex justify-between items-center px-24 py-4">
      <div>
        <NavLink to="/" className="text-white text-2xl font-bold">
          Delivery Log
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/dashboard"
          className="text-white py-3 px-6 bg-blue-500 rounded-md hover:bg-blue-400"
        >
          Sign In
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
