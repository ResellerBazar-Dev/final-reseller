import axios from "axios";

import { GET_ALL_BRANDS } from "../actionTypes/action_types";

export const getAllBrand = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/brands`);

    dispatch({ type: GET_ALL_BRANDS, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
