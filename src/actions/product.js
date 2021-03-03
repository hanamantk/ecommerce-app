import { PRODUCT_REQUEST, PRODUCT_SUCCESS, PRODUCT_FAIL } from "./types";
import products from "../data";
export const productList = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_REQUEST });
    setTimeout(() => {
      dispatch({ type: PRODUCT_SUCCESS, payload: products });
    }, 100);
  } catch (error) {
    console.log(error);
    dispatch({ type: PRODUCT_FAIL, payload: error.message });
  }
};
