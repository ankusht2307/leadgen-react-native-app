import axios from 'axios';
import { ApiUrl } from '../../constants/constants';
import {
  FETCH_REGISTER_FAILURE,
  FETCH_REGISTER_REQUEST,
  FETCH_REGISTER_SUCCESS,
} from './registerTypes';

export const fetchRegisterRequest = () => {
  return {
    type: FETCH_REGISTER_REQUEST,
  };
};

export const fetchRegisterSuccess = (user) => {
  return {
    type: FETCH_REGISTER_SUCCESS,
    payload: user,
  };
};

export const fetchRegisterFailure = (error) => {
  return {
    type: FETCH_REGISTER_FAILURE,
    payload: error,
  };
};

export const requestRegister = (userCredentials) => {
  return async (dispatch) => {
    await dispatch(fetchRegisterRequest);
    await axios
      .post(`${ApiUrl}/auth/register`, userCredentials)
      .then((res) => {
        const user = res.data;
        dispatch(fetchRegisterSuccess(user));
      })
      .catch((error) => {
        dispatch(fetchRegisterFailure(error));
      });
  };
};
