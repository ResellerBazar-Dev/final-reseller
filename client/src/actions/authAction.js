import axios from "axios";
import {
  USER_LOADED,
  USER_LOADING,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
} from "../actionTypes/action_types";

export const loadUser = () => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_LOADING });

    const token = getState().auth?.token;

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    if (token) {
      config.headers["x-auth-token"] = token;
    }

    const { data } = await axios.get("/api/auth/user", config);
    dispatch({ type: USER_LOADED, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const register = (newUser) => async (dispatch) => {
  // header
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  // request body
  const body = JSON.stringify(newUser);
  axios
    .post(`/api/user`, body, config)
    .then((res) => dispatch({ type: REGISTER_SUCCESS, payload: res.data }))
    .catch((err) => console.log(err));
};

export const login =
  ({ email, password }) =>
  async (dispatch) => {
    try {
      const config = { headers: { "Content-Type": "application/json" } };
      const { data } = await axios.post(
        "/api/auth",
        { email, password },
        config
      );
      dispatch({ type: LOGIN_SUCCESS, payload: data });
      window.location.reload();
    } catch (error) {
      console.log(error.message);
    }
  };

export const logOut = () => {
  window.location.reload();
  return {
    type: LOGOUT_SUCCESS,
  };
};

export const tokenConfig = (getState) => {
  const token = getState().auth?.token;
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  if (token) {
    config.headers["x-auth-token"] = token;
  }
  return config;
};
