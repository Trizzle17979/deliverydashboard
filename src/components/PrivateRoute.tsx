import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { connect } from "react-redux";

interface Props {
  isLoggedIn: boolean;
}

const PrivateRoute = (props: Props) => {
  return props.isLoggedIn ? <Outlet /> : <Navigate to="/" />;
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

export default connect(mapStateToProps)(PrivateRoute);
