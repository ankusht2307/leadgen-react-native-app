import {
  fetchLoginFailure,
  fetchLoginRequest,
  fetchLoginSuccess,
} from '../redux/login/loginActions';
import {
  fetchRegisterFailure,
  fetchRegisterRequest,
  fetchRegisterSuccess,
} from '../redux/register/registerActions';
import http from '../utils/http/http.common';
import Toaster from './toasterService';

export const login = (userCredentials) => {
  return async (dispatch) => {
    dispatch(fetchLoginRequest);
    http
      .post('/auth/login', userCredentials)
      .then((res) => {
          Toaster(res.data.message, 'success');
          dispatch(fetchLoginSuccess(res.data));
        })
        .catch((error) => {
        Toaster(error.response.data.message, 'error');
        dispatch(fetchLoginFailure(error));
      });
  };
};

export const logout = () => {
  return async (dispatch) => {
    dispatch(fetchLoginRequest);
    http
      .post('/auth/logout')
      .then((res) => {
        dispatch(fetchLoginSuccess(res.data.data));
      })
      .catch((error) => {
        dispatch(fetchLoginFailure(error));
      });
  };
};

export const register = (userCredentials) => {
  return async (dispatch) => {
    dispatch(fetchRegisterRequest);
    http
      .post('auth/register', userCredentials)
      .then((res) => {
        if (res.data.data) {
          Toaster(res.data.message, 'success');
        } else {
          Toaster(res.data.message, 'error');
        }
        dispatch(fetchRegisterSuccess(res.data));
      })
      .catch((error) => {
        dispatch(fetchRegisterFailure(error));
      });
  };
};
