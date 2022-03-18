import axios from "axios";

import { GET_ALL_SUB_CATEGORIES } from "../actionTypes/action_types";

export const getAllSubCategories = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/subCategories`);

    dispatch({ type: GET_ALL_SUB_CATEGORIES, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
