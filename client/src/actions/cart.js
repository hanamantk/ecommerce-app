import Axios from "axios";
import { ADD_TO_CART, ADD_TO_CART_FAIL } from "./types";

export const addToCart = (product, Qty) => async (dispatch) => {
  try {
    dispatch({ type: ADD_TO_CART, payload: { product: product, Qty: Qty } });
  } catch (error) {}
};
