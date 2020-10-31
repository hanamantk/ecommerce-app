import {
  PRODUCT_REQUEST,
  PRODUCT_SUCCESS,
  PRODUCT_FAIL,
} from "../actions/types";

let initial = {
  loading: false,
  products: [],
};
export const productReducer = (state = initial, action) => {
  switch (action.type) {
    case PRODUCT_REQUEST:
      return { ...state, loading: true };
    case PRODUCT_SUCCESS:
      return { ...state, loading: false, products: action.payload };
    case PRODUCT_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
