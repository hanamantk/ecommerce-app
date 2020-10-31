import {
  PRODUCT_REQUEST,
  PRODUCT_SUCCESS,
  PRODUCT_FAIL,
  ADD_TO_CART,
} from "../actions/types";

let initial = {
  Qty: 0,
  totalPrice: 0,
  cartItems: [],
};
export const cartReducer = (state = initial, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      let { product, Qty } = action.payload;

      let ITEM_FOUND = state.cartItems.find((item) => item._id === product._id);
      let newSate = { ...state };
      let totalPrice = newSate.totalPrice + Number(product.price),
        cartItems;
      if (!ITEM_FOUND) {
        cartItems = [...state.cartItems, product];
      } else {
        cartItems = [...state.cartItems];
      }
      return { ...state, Qty, totalPrice, cartItems };
    default:
      return state;
  }
};
