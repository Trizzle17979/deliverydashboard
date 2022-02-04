import {
  FETCH_USER,
  FETCH_SUCCESS,
  FETCH_ERROR,
  LOGOUT_USER,
  FETCH_DELIVERY_DATA,
} from "../actions";

import { supabase } from "../supabaseClient";

const initialState = {
  user: supabase.auth.user(),
  isFetching: false,
  error: "",
  isLoggedIn: false,
  deliveryData: [],
};

interface Action {
  type:
    | "FETCH_USER"
    | "FETCH_SUCCESS"
    | "FETCH_ERROR"
    | "LOGOUT_USER"
    | "SESSION_ACTIVE"
    | "TOKEN_ACTIVE"
    | "FETCH_DELIVERY_DATA";
  payload: string | boolean;
}

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case FETCH_USER:
      return {
        ...state,
        isFetching: true,
        error: "",
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: "",
        user: action.payload,
        isLoggedIn: true,
      };
    case FETCH_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case LOGOUT_USER:
      return {
        ...state,
        isLoggedIn: action.payload,
      };
    case FETCH_DELIVERY_DATA:
      return {
        ...state,
        deliveyData: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
