import React, { useEffect, useState } from "react";
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

import { User, MappedInterface } from "./types";

import { Dispatch } from "redux";

interface Props {
  user: User;
  isLoggedIn: boolean;
  dispatch: Dispatch<any>;
}

const App: React.FC<Props> = ({ user, isLoggedIn, dispatch }) => {
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

const mapStateToProps = (state: MappedInterface) => {
  return {
    user: state.user,
    isLoggedIn: state.isLoggedIn,
  };
};

export default connect(mapStateToProps)(App);
