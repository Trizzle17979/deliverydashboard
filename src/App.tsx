import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
import PrivateRoute from "./components/PrivateRoute";
import { supabase } from "./supabaseClient";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import MainPage from "./components/loggedOut/MainPage";
import Dashboard from "./components/loggedIn/Dashboard";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Profile from "./components/loggedIn/Profile";

import { Dispatch } from "redux";

interface User {
  email: string;
  user_metadata: {
    first_name: string;
    last_name: string;
  };
}

interface Props {
  user: User;
  isLoggedIn: boolean;
  dispatch: Dispatch<any>;
}

const App: React.FC<Props> = ({ user, isLoggedIn, dispatch }) => {
  console.log(user);

  return (
    <Router>
      <NavBar />

      <Routes>
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/profile" element={<Profile session={session} />} /> */}
        <Route path="/" element={<MainPage />} />
      </Routes>

      <Footer />
    </Router>
  );
};

interface mappedInterface {
  user: User;
  isFetching: boolean;
  error: string;
  isLoggedIn: boolean;
}

const mapStateToProps = (state: mappedInterface) => {
  return {
    user: state.user,
    isLoggedIn: state.isLoggedIn,
  };
};

export default connect(mapStateToProps)(App);
