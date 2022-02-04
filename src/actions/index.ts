import { Dispatch } from "redux";
import { supabase } from "../supabaseClient";

export const FETCH_USER = "FETCH_USER";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_ERROR = "FETCH_ERROR";
export const LOGOUT_USER = "LOGOUT_USER";
export const FETCH_DELIVERY_DATA = "FETCH_DELIVERY_DATA";

export const loginUser = (email: string, password: string) => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: FETCH_USER });

    const { user, session, error } = await supabase.auth.signIn({
      email: email,
      password: password,
    });

    if (user) {
      dispatch({ type: FETCH_SUCCESS, payload: supabase.auth.user() });
    } else if (error) {
      dispatch({ type: FETCH_ERROR, payload: error.message });
    }
  };
};

export const signUpUser = (
  email: string,
  password: string,
  firstName: string,
  lastName: string,
  termsAndPrivacy: boolean
) => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: FETCH_USER });

    const { user, session, error } = await supabase.auth.signUp(
      {
        email: email,
        password: password,
      },
      {
        data: {
          first_name: firstName,
          last_name: lastName,
          termsAndPrivacy: termsAndPrivacy,
        },
      }
    );

    if (user) {
      dispatch({ type: FETCH_SUCCESS, payload: supabase.auth.user() });
    } else if (error) {
      console.log(error);
      dispatch({ type: FETCH_ERROR, payload: error.message });
    }
  };
};

export const logoutUser = (isLoggedIn: boolean) => {
  return async (dispatch: Dispatch) => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.log(error);
    }
    dispatch({ type: LOGOUT_USER, payload: isLoggedIn });
  };
};

export const getDeliveryData = () => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: FETCH_USER });
    const { data, error } = await supabase.from("deliveries").select("*");
    console.log("RAN");

    if (data) {
      console.log("getDeliveryData: ", data);
      dispatch({ type: FETCH_DELIVERY_DATA, payload: data });
    } else if (error) {
      console.log(error);
      dispatch({ type: FETCH_ERROR, payload: error.message });
    }
  };
};
