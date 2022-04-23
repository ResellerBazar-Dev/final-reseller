import {
  GET_ALL_WISHLIST,
  CREATE_WISHLIST,
  DELETE_WISHLIST,
} from "../actionTypes/action_types";

const initialState = {
  data: [],
  loading: false,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_WISHLIST:
      return [...state, action.payload];

    case GET_ALL_WISHLIST:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case DELETE_WISHLIST:
      return {
        ...state,
        data: state.data.filter((wishlist) => wishlist._id != action.payload),
      };
    default:
      return state;
  }
};
