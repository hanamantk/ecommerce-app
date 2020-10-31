import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAIL,
  VERIFY_USER_SUCCESS,
  VERIFY_USER_FAIL,
} from "../actions/types";

let initial = {
  loading: false,
};
const userReducer = (state = initial, action) => {
  switch (action.type) {
    case USER_SIGNUP_REQUEST:
      return { ...state, loading: true };
    case USER_SIGNUP_SUCCESS:
      return { ...state, loading: false, user: action.payload };
    case USER_SIGNUP_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const loginReducer = (state = initial, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { ...state, loading: true };
    case USER_LOGIN_SUCCESS:
      return { ...state, loading: false, loginInfo: action.payload };
    case USER_LOGIN_FAIL:
      return { ...state, loading: false, error: action.payload };
    case VERIFY_USER_SUCCESS:
      return { ...state, loading: false, verifiedUser: action.payload };
    case VERIFY_USER_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
export { userReducer, loginReducer };
