import Axios from "axios";
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAIL,
  VERIFY_USER_FAIL,
  VERIFY_USER_SUCCESS,
} from "./types";

export const signUp = (name, email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_SIGNUP_REQUEST });
    const result = await Axios.post("/api/user/register", {
      name: name,
      email: email,
      password: password,
    });
    dispatch({ type: USER_SIGNUP_SUCCESS, payload: result.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: USER_SIGNUP_FAIL, payload: error.message });
  }
};

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });
    const result = await Axios.post("/api/user/login", {
      email: email,
      password: password,
    });
    dispatch({ type: USER_LOGIN_SUCCESS, payload: result.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: USER_LOGIN_FAIL, payload: error.message });
  }
};
export const verifyUser = () => async (dispatch) => {
  const token = window.localStorage.getItem("token") || "";
  console.log("get token",token);
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  try {
    const result = await Axios.post("/api/user/verifyUser", {}, config);
    dispatch({ type: VERIFY_USER_SUCCESS, payload: result.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: VERIFY_USER_FAIL, payload: error.message });
  }
};
