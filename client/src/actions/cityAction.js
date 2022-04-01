import axios from "axios";

import { GET_ALL_CITY } from "../actionTypes/action_types";

export const getAllCity = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/city`);

    dispatch({ type: GET_ALL_CITY, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
