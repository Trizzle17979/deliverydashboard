import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = (props) => {
  return props.isLoggedIn ? <Outlet /> : <Navigate to="/" />;
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.isLoggedIn,
  };
};

export default connect(mapStateToProps)(PrivateRoute);
