import { GET_ALL_SUB_CATEGORIES } from "../actionTypes/action_types";

const initialState = {
  data: [],
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_SUB_CATEGORIES:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
