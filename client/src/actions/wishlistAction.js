import axios from "axios";

import {
  GET_ALL_WISHLIST,
  CREATE_WISHLIST,
  DELETE_WISHLIST,
} from "../actionTypes/action_types";

export const getAllwishlist = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/wishlist`);

    dispatch({ type: GET_ALL_WISHLIST, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createWishlist = (product_id) => async (dispatch) => {
  try {
    console.log(product_id);

    const { data } = await axios.post(`/api/wishlist`, { product_id });

    dispatch({ type: CREATE_WISHLIST, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteWishlist = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/wishlist/${id}`);

    dispatch({ type: DELETE_WISHLIST, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
