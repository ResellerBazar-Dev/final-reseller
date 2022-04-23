import axios from "axios";
import {
  CREATE_PRODUCT,
  ADD_PRODUCT_IMAGE,
  GET_ALL_DATA,
  LOADING_PRODUCT_DATA,
} from "../actionTypes/action_types";

export const createProduct = (product_data) => async (dispatch) => {
  try {
    const { data } = await axios.post(`/api/products`, product_data);
    dispatch({ type: CREATE_PRODUCT, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getAllProducts = () => async (dispatch) => {
  try {
    dispatch(setProductsData);
    const { data } = await axios.get(`/api/allProducts`);
    dispatch({ type: GET_ALL_DATA, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getProduct = (id) => async (dispatch) => {
  try {
    dispatch(setProductsData);
    const { data } = await axios.get(`/api/allProducts/:id`, id);
    dispatch({ type: GET_ALL_DATA, payload: id });
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};

// export const addProductImage = (product_img) => async (dispatch) => {
//   try {
//     const data = new FormData();
//     data.append("product_images", product_img);
//     const imageArray = axios.post(`/api/products_images`, data);
//     console.log(imageArray);
//     dispatch({ type: ADD_PRODUCT_IMAGE, payload: data });
//   } catch (error) {
//     console.log(error.message);
//   }
// };

export const setProductsData = () => {
  return {
    type: LOADING_PRODUCT_DATA,
  };
};
