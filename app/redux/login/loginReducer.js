import axios from 'axios';
import {
  FETCH_LOGIN_FAILURE,
  FETCH_LOGIN_REQUEST,
  FETCH_LOGIN_SUCCESS,
} from './loginTypes';

import {
  fetchLoginFailure,
  fetchLoginRequest,
  fetchLoginSuccess,
} from './loginActions';
import { ApiUrl } from '../../constants/constants';

const initialState = {
  loading: false,
  user: null,
  error: '',
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_LOGIN_SUCCESS:
      return {
        loading: false,
        user: action.payload,
        error: '',
      };
    case FETCH_LOGIN_FAILURE:
      return {
        loading: false,
        user: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const requestLogin = (userCredentials) => {
  return (dispatch) => {
    dispatch(fetchLoginRequest);
    axios
      .post(`${ApiUrl}/auth/login`, userCredentials)
      .then((res) => {
        const user = res.data;
        dispatch(fetchLoginSuccess(user));
      })
      .catch((error) => {
        dispatch(fetchLoginFailure(error));
      });
  };
};
