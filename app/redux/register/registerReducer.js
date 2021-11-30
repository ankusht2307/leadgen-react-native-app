import axios from 'axios';
import { ApiUrl } from '../../constants/constants';
import {
  fetchRegisterFailure,
  fetchRegisterRequest,
  fetchRegisterSuccess,
} from './registerActions';
import {
  FETCH_REGISTER_FAILURE,
  FETCH_REGISTER_REQUEST,
  FETCH_REGISTER_SUCCESS,
} from './registerTypes';

const initialState = {
  loading: false,
  user: null,
  error: '',
};

export const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_REGISTER_SUCCESS:
      return {
        loading: false,
        user: action.payload,
        error: '',
      };
    case FETCH_REGISTER_FAILURE:
      return {
        loading: false,
        user: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const requestRegister = (userCredentials) => {
  return (dispatch) => {
    dispatch(fetchRegisterRequest);
    axios
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
