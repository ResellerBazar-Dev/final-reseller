import axios from "axios";

import {
  GET_ALL_PROFILE,
  EDIT_WISHLIST_PROFILE,
  DELETE_WISHLIST,
  UPDATE_PROFILE,
  UPDATE_PROFILE_IMAGE,
} from "../actionTypes/action_types";

// export const getAllProfile = () => async (dispatch) => {
//   try {
//     const { data } = await axios.get(`/api/wishlist`);

//     dispatch({ type: GET_ALL_WISHLIST, payload: data });
//   } catch (error) {
//     console.log(error.message);
//   }
// };

export const updateProfile = (id, profile_id) => async (dispatch) => {
  try {
    // console.log(product_id);

    const { data } = await axios.put(`/api/profile/${id}`, { profile_id });

    dispatch({ type: UPDATE_PROFILE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateProfileImage =
  (id, profile_image_id) => async (dispatch) => {
    try {
      // console.log(product_id);

      const { data } = await axios.post(`/api/profile/image`, {
        profile_image_id,
      });

      dispatch({ type: UPDATE_PROFILE_IMAGE, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };

// export const deleteWishlist = (id) => async (dispatch) => {
//   try {
//     await axios.delete(`/api/wishlist/${id}`);

//     dispatch({ type: DELETE_WISHLIST, payload: id });
//   } catch (error) {
//     console.log(error.message);
//   }
// };
