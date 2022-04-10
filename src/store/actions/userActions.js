import axios from "axios";
import {
  ALL_USERS_REQUEST,
  ALL_USERS_SUCCESS,
  ALL_USERS_FAIL,
  CLEAR_ERRORS,
} from "../constants/userConstants";
import { getUsers } from "../constants/api";

export const getAllUser = (page) => async (dispatch) => {
  try {
    dispatch({
      type: ALL_USERS_REQUEST,
    });

    const { data } = await axios.get(getUsers(page));

    dispatch({
      type: ALL_USERS_SUCCESS,
      payload: data,
    });
    console.log(data);
  } catch (error) {
    dispatch({
      type: ALL_USERS_FAIL,
      payload: error.response.data.errMessage,
    });
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
