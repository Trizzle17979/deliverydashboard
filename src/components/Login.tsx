import React, { useState, useEffect } from "react";

import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../actions";

interface valuesInterface {
  email: string;
  password: string;
}

const Login: React.FC = ({ isFetching, error, dispatch, isLoggedIn }) => {
  const [values, setValues] = useState<valuesInterface>({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    await dispatch(loginUser(values.email, values.password));
  };

  // if (isLoggedIn) {
  //   navigate("/dashboard");
  // }
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/dashboard");
    }
  }, [isLoggedIn]);

  return (
    <div className="flex justify-center bg-gray-200 text-slate-700 pb-64">
      <div className="flex flex-col items-center gap-8 p-8 border-2">
        <h2 className="text-6xl font-semibold">Log In</h2>
        <div className="bg-white p-4 rounded-md shadow-lg w-96">
          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <label className="flex flex-col text-lg">
              Email Address
              <input
                className="border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
              />
            </label>
            <label className="flex flex-col text-lg">
              Password
              <input
                className="border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
              />
            </label>
            <button
              disabled={isFetching}
              className="bg-blue-900 text-white px-2 py-3 rounded-md hover:bg-blue-500"
            >
              {isFetching ? <span>Loading</span> : <span>Login</span>}
            </button>
          </form>
          {error ? <p>{error}</p> : null}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isFetching: state.isFetching,
    error: state.error,
    isLoggedIn: state.isLoggedIn,
  };
};

export default connect(mapStateToProps)(Login);
