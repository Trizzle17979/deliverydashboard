import React from "react";
import { NavLink } from "react-router-dom";
import { supabase } from "../supabaseClient";

const NavBar: React.FC = () => {
  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
  };
  return (
    <nav className="bg-blue-900 flex justify-between items-center px-24 py-4">
      <div>
        <NavLink to="/" className="text-white text-2xl font-bold">
          Delivery Log
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/login"
          className="text-white py-3 px-6 bg-blue-500 rounded-md hover:bg-blue-400"
        >
          Log In
        </NavLink>
        <NavLink
          to="/signup"
          className="text-white py-3 px-6 bg-blue-500 rounded-md hover:bg-blue-400 ml-4"
        >
          Sign Up
        </NavLink>
        <button
          onClick={handleLogout}
          className="text-white py-3 px-6 bg-blue-500 rounded-md hover:bg-blue-400 ml-4"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
