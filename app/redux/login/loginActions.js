import {
  FETCH_LOGIN_FAILURE,
  FETCH_LOGIN_REQUEST,
  FETCH_LOGIN_SUCCESS,
} from './loginTypes';

export const fetchLoginRequest = () => {
  return {
    type: FETCH_LOGIN_REQUEST,
  };
};

export const fetchLoginSuccess = (user) => {
  return {
    type: FETCH_LOGIN_SUCCESS,
    payload: user,
  };
};

export const fetchLoginFailure = (error) => {
  return {
    type: FETCH_LOGIN_FAILURE,
    payload: error,
  };
};
