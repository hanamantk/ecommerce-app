import { ADD_TO_CART, INC_QTY, DEC_QTY } from "../actions/types";

let initial = {
  Qty: 0,
  totalPrice: 0,
  cartItems: [],
};
export const cartReducer = (state = initial, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      let { product } = action.payload;
      let newState = { ...state };

      let totalPrice = incPrice(newState.totalPrice, product.price),
        cartItems = updateProductList(false, newState, product);

      return { ...state, Qty: incQty(newState.Qty), totalPrice, cartItems };
    case DEC_QTY:
      let nwProduct  = action.payload && action.payload.product;
      if (nwProduct.selectedQty > 1) {
        let newState = { ...state };

        let totalPrice = decPrice(newState.totalPrice, nwProduct.price),
          dec = true,
          cartItems = updateProductList(dec, newState, nwProduct);

        return {
          ...state,
          Qty: Number(newState.Qty) - 1,
          totalPrice,
          cartItems,
        };
      }
      return state;
    default:
      return state;
  }
};

function updateProductList(dec = false, newSate, product) {
  let cartItems;
  let index = newSate.cartItems.findIndex((item) => item.id === product.id);
  if (index !== -1) {
    // increament quantity of product
    let item = newSate.cartItems[index];
    newSate.cartItems[index] = {
      ...item,
      selectedQty: dec ? decQty(item.selectedQty) : incQty(item.selectedQty),
      qtyprice: dec
        ? decPrice(item.qtyprice, product.price)
        : incPrice(item.qtyprice, product.price),
    };
    cartItems = newSate.cartItems;
  } else {
    cartItems = [
      ...newSate.cartItems,
      {
        ...product,
        selectedQty: incQty(product.selectedQty),
        qtyprice: product.price,
      },
    ];
  }
  return cartItems;
}

function incQty(prevQty) {
  return Number(prevQty) + 1;
}
function decQty(prevQty) {
  return Number(prevQty) - 1;
}
function incPrice(prevPrice, curPrice) {
  return prevPrice + curPrice;
}
function decPrice(prevPrice, curPrice) {
  return prevPrice - curPrice;
}
