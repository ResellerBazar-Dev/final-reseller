import axios from "axios";

import { GET_ALL_CATEGORIES } from "../actionTypes/action_types";

export const getAllCategories = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/categories`);

    dispatch({ type: GET_ALL_CATEGORIES, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
