import React, { useState, useEffect } from "react";
import { supabase } from "./supabaseClient";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
import PrivateRoute from "./components/PrivateRoute";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import MainPage from "./components/loggedOut/MainPage";
import Dashboard from "./components/loggedIn/Dashboard";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Profile from "./components/loggedIn/Profile";

import { sessionCheck } from "./actions";

const App: React.FC = ({ user, dispatch }) => {
  useEffect(() => {
    dispatch(sessionCheck);
  }, [user]);

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

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(App);
