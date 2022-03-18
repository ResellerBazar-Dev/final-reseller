import { combineReducers } from "redux";
import categoryReducers from "./categoryReducers";
import productReducers from "./productReducers";
import subCategoryreducers from "./subCategoryreducers";

export default combineReducers({
  productData: productReducers,
  categoryData: categoryReducers,
  subCategoryData: subCategoryreducers,
});
