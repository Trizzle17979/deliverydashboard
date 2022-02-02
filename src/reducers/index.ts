import {
  FETCH_USER,
  FETCH_SUCCESS,
  FETCH_ERROR,
  LOGOUT_USER,
} from "../actions";

const initialState = {
  user: "",
  isFetching: false,
  error: "",
  isLoggedIn: false,
};

const reducer = (state = initialState, action) => {
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
    default:
      return state;
  }
};

export default reducer;
