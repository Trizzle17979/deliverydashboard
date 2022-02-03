import {
  FETCH_USER,
  FETCH_SUCCESS,
  FETCH_ERROR,
  LOGOUT_USER,
  SESSION_ACTIVE,
  TOKEN_ACTIVE,
} from "../actions";

const initialState = {
  user: "",
  isFetching: false,
  error: "",
  isLoggedIn: false,
};

interface Action {
  type:
    | "FETCH_USER"
    | "FETCH_SUCCESS"
    | "FETCH_ERROR"
    | "LOGOUT_USER"
    | "SESSION_ACTIVE"
    | "TOKEN_ACTIVE";
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
    case SESSION_ACTIVE:
      return {
        ...state,
        isLoggedIn: true,
      };
    case TOKEN_ACTIVE:
      return {
        ...state,
        isLoggedIn: true,
      };
    default:
      return state;
  }
};

export default reducer;
