import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT
} from "../actions/types";

let initial = {
  login: false,
  error: "",
};

const loginReducer = (state = initial, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { ...state, login: false };
    case USER_LOGIN_SUCCESS:
      return { ...state, login: true, user: action.payload };
    case USER_LOGIN_FAIL:
      return { ...state, login: false, ...action.payload };
    case USER_LOGOUT:
      return { ...state, login: false, user:action.payload };
    default:
      return state;
  }
};
export default loginReducer;
