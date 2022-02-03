import React, { useState, useEffect } from "react";
import * as yup from "yup";
import { supabase } from "../supabaseClient";
import formSchema from "./formSchema";

interface valuesInterface {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  termsAndPrivacy: boolean;
}

interface errorsInterface {
  name: unknown;
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  termsAndPrivacy?: boolean;
}

interface errObj {
  errors: string;
}

const Signup: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [disabled, setDisabled] = useState(true);
  const [formErrors, setFormErrors] = useState<errorsInterface>({
    name: "",
  });
  const [values, setValues] = useState<valuesInterface>({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    termsAndPrivacy: false,
  });

  const validateForm = (name: string, value: string) => {
    yup
      .reach(formSchema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch((err: errObj) =>
        setFormErrors({ ...formErrors, [name]: err.errors[0] })
      );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.type === "checkbox") {
      const isChecked = "" + e.target.checked;
      validateForm(e.target.name, isChecked);
      setValues({
        ...values,
        [e.target.name]: e.target.checked,
      });
    } else {
      validateForm(e.target.name, e.target.value);
      setValues({
        ...values,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleLogin = async (e: React.ChangeEvent<HTMLFormElement>) => {
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
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    formSchema.isValid(values).then((valid) => setDisabled(!valid));
  }, [values]);

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
              First Name*
              <p className="text-red-400 text-sm">{formErrors.firstName}</p>
              <input
                className="border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                type="text"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
              />
            </label>
            <label className="flex flex-col text-lg">
              Last Name*
              <p className="text-red-400 text-sm">{formErrors.lastName}</p>
              <input
                className="border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                type="text"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
              />
            </label>
            <label className="flex flex-col text-lg">
              Email Address*
              <p className="text-red-400 text-sm">{formErrors.email}</p>
              <input
                className="border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
              />
            </label>
            <label className="flex flex-col text-lg">
              Password*
              <p className="text-red-400 text-sm">{formErrors.password}</p>
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
                <p className="text-red-400 text-sm">
                  {formErrors.termsAndPrivacy}
                </p>
                <input
                  className="mr-2 rounded border-gray-300 text-blue-500"
                  type="checkbox"
                  name="termsAndPrivacy"
                  onChange={handleChange}
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
                *
              </label>
            </div>
            <button
              disabled={disabled}
              className="bg-blue-900 text-white px-2 py-3 rounded-md hover:bg-blue-500 disabled:bg-gray-600 disabled:cursor-not-allowed"
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
