import axios from "axios";

import { GET_ALL_STATE } from "../actionTypes/action_types";

export const getAllState = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/state`);

    dispatch({ type: GET_ALL_STATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
