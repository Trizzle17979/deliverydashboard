import { supabase } from "../supabaseClient";

export const FETCH_USER = "FETCH_USER";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_ERROR = "FETCH_ERROR";
export const LOGOUT_USER = "LOGOUT_USER";

export const loginUser = (email: string, password: string) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_USER });

    const { user, session, error } = await supabase.auth.signIn({
      email: email,
      password: password,
    });

    if (user) {
      dispatch({ type: FETCH_SUCCESS, payload: user });
    } else if (error) {
      dispatch({ type: FETCH_ERROR, payload: error.message });
    }
  };
};

export const logoutUser = (isLoggedIn: boolean) => {
  return async (dispatch) => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.log(error);
    }
    dispatch({ type: LOGOUT_USER, payload: isLoggedIn });
  };
};
