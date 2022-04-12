import axios from "axios";
import {
  LOGIN_REQUEST,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  REGISTER_USER_REQUEST,
  REGISTER_USER_FAIL,
  REGISTER_USER_SUCCESS,
  ALL_USERS_REQUEST,
  ALL_USERS_SUCCESS,
  ALL_USERS_FAIL,
  GET_USER_DETAILS_REQUEST,
  GET_USER_DETAILS_SUCCESS,
  GET_USER_DETAILS_FAIL,
  CLEAR_ERRORS,
} from "../constants/userConstants";
import {
  getUsers,
  login as Login,
  getSingleUser,
  register as Register,
} from "../constants/api";

export const getAllUser = (page) => async (dispatch) => {
  try {
    dispatch({
      type: ALL_USERS_REQUEST,
    });

    const { data } = await axios.get(getUsers(page));

    dispatch({
      type: ALL_USERS_SUCCESS,
      payload: data,
      users: data.data,
    });
  } catch (error) {
    dispatch({
      type: ALL_USERS_FAIL,
      payload: error.message,
    });
  }
};

// UserDetails
export const getUserDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_USER_DETAILS_REQUEST });

    const { data } = await axios.get(getSingleUser(id));

    dispatch({ type: GET_USER_DETAILS_SUCCESS, payload: data.data });
  } catch (error) {
    dispatch({
      type: GET_USER_DETAILS_FAIL,
      error: error.message,
    });
  }
};

//Login
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: LOGIN_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(Login, { email, password }, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: data,
    });
    localStorage.setItem("Login", data.token);
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.message,
    });
  }
};

//Register user
export const register = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: REGISTER_USER_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(Register, { email, password }, config);
    dispatch({
      type: REGISTER_USER_SUCCESS,
      payload: data,
    });
    localStorage.setItem("Registration", data.token);
  } catch (error) {
    dispatch({
      type: REGISTER_USER_FAIL,
      payload: error.message,
    });
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
