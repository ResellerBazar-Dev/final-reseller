import { combineReducers } from "redux";
import categoryReducers from "./categoryReducers";
import productReducers from "./productReducers";
import subCategoryreducers from "./subCategoryreducers";
import brandReducers from "./brandReducers";
import stateReducers from "./stateReducers";
import cityReducers from "./cityReducers";
import wishlistReducers from "./wishlistReducers";
import authReducers from "./authReducers";

export default combineReducers({
  productData: productReducers,
  categoryData: categoryReducers,
  subCategoryData: subCategoryreducers,
  brandData: brandReducers,
  stateData: stateReducers,
  cityData: cityReducers,
  wishlistData: wishlistReducers,
  auth: authReducers,
});
