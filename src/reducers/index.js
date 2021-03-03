import { combineReducers } from "redux";
import  loginReducer  from "./userReducer";
import { productReducer } from "./productReducer";
import {cartReducer } from "./cartReducer";

export default combineReducers({
  loginInfo:loginReducer,
  products: productReducer,
  cart:cartReducer
});
