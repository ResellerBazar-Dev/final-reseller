import {
  ADD_PRODUCT_IMAGE,
  CREATE_PRODUCT,
  GET_ALL_DATA,
} from "../actionTypes/action_types";

const initialState = {
  data: [],
  loading: false,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PRODUCT:
      return { ...state, data: action.payload, loading: false };

    case GET_ALL_DATA:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };

    case ADD_PRODUCT_IMAGE:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
