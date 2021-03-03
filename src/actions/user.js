import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT
} from "./types";

const user = {
  email: "hkj@gmail.com",
  password: "hkj022",
  name: "Hanamant",
};
const TOKEN = "eyJpc3MiOiJ0b3B0YWwuY29tIiwiZXhwIjo";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });

    setTimeout(() => {
      if (email == user.email && password == user.password) {
        dispatch({
          type: USER_LOGIN_SUCCESS,
          payload: { token: TOKEN, name: user.name },
        });
      } else {
        dispatch({
          type: USER_LOGIN_FAIL,
          payload: { error: "Invalid login" },
        });
      }
    }, 100);
  } catch (error) {}
};

export const userLogOut = () => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGOUT, payload: { } });
  } catch (error) {}
};