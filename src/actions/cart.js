import { ADD_TO_CART, ADD_TO_CART_FAIL,INC_QTY,DEC_QTY } from "./types";

export const addToCart = (product, Qty) => async (dispatch) => {
  try {
    dispatch({ type: ADD_TO_CART, payload: { product: product } });
  } catch (error) {}
};

export const increament_qty = (product) => async (dispatch) => {
  try {
    dispatch({ type: ADD_TO_CART, payload: { product: product } });
  } catch (error) {}
};

export const decreament_qty = (product) => async (dispatch) => {
  try {
    dispatch({ type: DEC_QTY, payload: { product: product } });
  } catch (error) {}
};