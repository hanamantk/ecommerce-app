import Axios from "axios";
import { PAYMENT_SUCCESS, PAYMENT_FAIL } from "./types";

export const makePay = (orderSummury) => async (dispatch) => {
  try {
    const payment = await Axios.post("/api/payment/buy", {});
    dispatch({ type: PAYMENT_SUCCESS, payload: payment });
  } catch (error) {
    dispatch({ type: PAYMENT_FAIL, payload: error });
  }
};
