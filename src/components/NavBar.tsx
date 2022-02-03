import React, { useState } from "react";
import { Dispatch } from "redux";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../actions";
import { connect } from "react-redux";
import { supabase } from "../supabaseClient";

interface Props {
  isLoggedIn: boolean;
  dispatch: Dispatch<any>;
}

const NavBar: React.FC<Props> = ({ isLoggedIn, dispatch }) => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    dispatch(logoutUser(false));
    supabase.auth.signOut();
    navigate("/");
  };
  return (
    <nav className="bg-blue-900 flex justify-between items-center px-24 py-4">
      <div>
        <NavLink to="/" className="text-white text-2xl font-bold">
          Delivery Dashboard
        </NavLink>
      </div>
      <div>
        {!isLoggedIn ? (
          <NavLink
            to="/signup"
            className="text-white py-3 px-6 bg-blue-500 rounded-md hover:bg-blue-400 ml-4"
          >
            Sign Up
          </NavLink>
        ) : null}
        {!isLoggedIn ? (
          <NavLink
            to="/login"
            className="text-white py-3 px-6 bg-blue-500 rounded-md hover:bg-blue-400 ml-4"
          >
            Log In
          </NavLink>
        ) : null}
        {isLoggedIn && (
          <NavLink
            to="/dashboard"
            className="text-white py-3 px-6 bg-blue-500 rounded-md hover:bg-blue-400 ml-4"
          >
            Dashboard
          </NavLink>
        )}
        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="text-white py-3 px-6 bg-red-500 rounded-md hover:bg-red-400 ml-4"
          >
            Logout
          </button>
        ) : null}
      </div>
    </nav>
  );
};

interface mappedInterface {
  user: string;
  isFetching: boolean;
  error: string;
  isLoggedIn: boolean;
}

const mapStateToProps = (state: mappedInterface) => {
  return {
    isLoggedIn: state.isLoggedIn,
  };
};

export default connect(mapStateToProps)(NavBar);
