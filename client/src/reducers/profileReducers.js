import {
  UPDATE_PROFILE,
  UPDATE_PROFILE_IMAGE,
} from "../actionTypes/action_types";

const initialState = {
  profileData: [],
  profileImage: [],
  loading: false,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PROFILE:
      return {
        ...state,
        profileData: state.profileData.map((profile) =>
          profile._id === action.payload._id ? action.payload : profile
        ),
        loading: false,
      };
    case UPDATE_PROFILE_IMAGE:
      return {
        ...state,
        // profileImage: state.profileImage.map((profile) =>
        //   profile._id === action.payload._id ? action.payload : profile
        // ),
        profileImage:[...state,action.payload],
        loading: false,
      };
    default:
      return state;
  }
};
