import { combineReducers } from "redux";
import { userReducer,loginReducer } from "./userReducer";
import { productReducer } from "./productReducer";
import {cartReducer } from "./cartReducer";

export default combineReducers({
  userInfo: userReducer,
  loginInfo:loginReducer,
  products: productReducer,
  cart:cartReducer
});
