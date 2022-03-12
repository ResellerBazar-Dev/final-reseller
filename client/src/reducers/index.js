import { combineReducers } from "redux";
import productReducers from "./productReducers";

export default combineReducers({
  productData: productReducers,
});
