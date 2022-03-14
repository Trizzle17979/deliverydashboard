import React, { useState } from "react";
import { Dispatch } from "redux";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../actions";
import { connect } from "react-redux";
import { supabase } from "../supabaseClient";

interface Props {
  dispatch: Dispatch<any>;
}

const NavBar: React.FC<Props> = ({ dispatch }) => {
  const [showMenu, setShowMenu] = useState(false);
  const supabaseLoggedIn = supabase.auth.user();
  const navigate = useNavigate();

  const handleLogout = async () => {
    dispatch(logoutUser(false));
    supabase.auth.signOut();
    navigate("/");
  };

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="bg-blue-900">
      <div className="flex justify-between items-center md:px-24 px-12 py-4">
        <div>
          <NavLink to="/" className="text-white text-2xl font-bold">
            Delivery Dashboard
          </NavLink>
        </div>
        <div className="hidden md:flex">
          {!supabaseLoggedIn ? (
            <NavLink
              to="/signup"
              className="text-white py-3 px-6 bg-blue-500 rounded-md hover:bg-blue-400 ml-4"
            >
              Sign Up
            </NavLink>
          ) : null}
          {!supabaseLoggedIn ? (
            <NavLink
              to="/login"
              className="text-white py-3 px-6 bg-blue-500 rounded-md hover:bg-blue-400 ml-4"
            >
              Log In
            </NavLink>
          ) : null}
          {supabaseLoggedIn && (
            <NavLink
              to="/dashboard"
              className="text-white py-3 px-6 bg-blue-500 rounded-md hover:bg-blue-400 ml-4"
            >
              Dashboard
            </NavLink>
          )}
          {supabaseLoggedIn ? (
            <button
              onClick={handleLogout}
              className="text-white py-3 px-6 bg-red-500 rounded-md hover:bg-red-400 ml-4"
            >
              Logout
            </button>
          ) : null}
        </div>
        <div className="md:hidden flex flex-col items-center">
          {!showMenu ? (
            <button onClick={handleShowMenu}>
              <img
                className="w-6 h-6"
                src="../src/assets/hamburger.svg"
                alt="menu icon"
              />
            </button>
          ) : (
            <button onClick={handleShowMenu}>
              <img
                className="w-6 h-6"
                src="../src/assets/cancel.svg"
                alt="menu icon"
              />
            </button>
          )}
        </div>
      </div>
      {showMenu && (
        <div className="md:hidden flex flex-col gap-4 items-center py-4 px-4">
          {!supabaseLoggedIn ? (
            <NavLink
              to="/signup"
              className="w-full text-center text-white py-3 px-6 rounded-md hover:bg-blue-400"
              onClick={handleShowMenu}
            >
              Sign Up
            </NavLink>
          ) : null}
          {!supabaseLoggedIn ? (
            <NavLink
              to="/login"
              className="w-full text-center text-white py-3 px-6 rounded-md hover:bg-blue-400"
              onClick={handleShowMenu}
            >
              Log In
            </NavLink>
          ) : null}
          {supabaseLoggedIn && (
            <NavLink
              to="/dashboard"
              className="w-full text-center text-white py-3 px-6 rounded-md hover:bg-blue-400"
              onClick={handleShowMenu}
            >
              Dashboard
            </NavLink>
          )}
          {supabaseLoggedIn ? (
            <button
              onClick={handleLogout}
              className="w-full text-center text-white py-3 px-6 rounded-md hover:bg-red-400"
              onClick={handleShowMenu}
            >
              Logout
            </button>
          ) : null}
        </div>
      )}
    </nav>
  );
};

export default connect()(NavBar);
