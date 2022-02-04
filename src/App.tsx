import React, { useEffect } from "react";
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

import { sessionCheck, tokenCheck } from "./actions";
import { Dispatch } from "redux";

interface Props {
  user: string;
  isLoggedIn: boolean;
  dispatch: Dispatch<any>;
}

const App: React.FC<Props> = ({ user, isLoggedIn, dispatch }) => {
  useEffect(() => {
    dispatch(sessionCheck);
  }, [user]);

  useEffect(() => {
    dispatch(tokenCheck);
  }, []);

  console.log("APP USER: ", supabase.auth.user());

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
  user: string;
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
