import React, { useState } from "react";
import { supabase } from "../supabaseClient";

const Signup: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [values, setValues] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      const { user, session, error } = await supabase.auth.signUp({
        email: values.email,
        password: values.password,
      });
      console.log("USER: ", user);
      console.log("SESSION: ", session);

      if (error) throw error;
    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex justify-center bg-gray-200 text-slate-700 pb-64">
      <div className="flex flex-col items-center gap-8 p-8 border-2">
        <h2 className="text-6xl font-semibold">Sign Up</h2>
        <p className="">
          Already have an account?{" "}
          <a className="text-blue-400 hover:text-slate-700" href="/login">
            Log In
          </a>
        </p>
        <div className="bg-white p-4 rounded-md shadow-lg w-96">
          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <label className="flex flex-col text-lg">
              First Name
              <input
                className="border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                type="text"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
              />
            </label>
            <label className="flex flex-col text-lg">
              Last Name
              <input
                className="border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                type="text"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
              />
            </label>
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
            <div className="flex items-center">
              <label className="text-sm text-gray-900">
                <input
                  className="mr-2 rounded border-gray-300 text-blue-500"
                  type="checkbox"
                  name="terms-and-privacy"
                />
                I agree to the
                <a href="#" className="text-blue-900 hover:text-blue-500">
                  {" "}
                  Terms{" "}
                </a>
                and
                <a href="#" className="text-blue-900 hover:text-blue-500">
                  {" "}
                  Privacy Policy
                </a>
              </label>
            </div>
            <button
              disabled={loading}
              className="bg-blue-900 text-white px-2 py-3 rounded-md hover:bg-blue-500"
            >
              {loading ? <span>Loading</span> : <span>Sign Up</span>}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
