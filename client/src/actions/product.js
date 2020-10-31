import Axios from "axios";
import { PRODUCT_REQUEST, PRODUCT_SUCCESS, PRODUCT_FAIL } from "./types";

export const productList = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_REQUEST });
    const result = await Axios.get("/api/products");
    dispatch({ type: PRODUCT_SUCCESS, payload: result.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: PRODUCT_FAIL, payload: error.message });
  }
};

