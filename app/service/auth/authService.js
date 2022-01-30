import {
  fetchLoginFailure,
  fetchLoginRequest,
  fetchLoginSuccess,
} from '../../redux/login/loginActions';
import {
  fetchRegisterFailure,
  fetchRegisterRequest,
  fetchRegisterSuccess,
} from '../../redux/register/registerActions';
import http from '../../utils/http/http.common';

export const login = (userCredentials) => {
  return async (dispatch) => {
    dispatch(fetchLoginRequest);
    http
      .post('/auth/login', userCredentials)
      .then((res) => {
        dispatch(fetchLoginSuccess(res.data));
      })
      .catch((error) => {
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
        dispatch(fetchRegisterSuccess(res.data));
      })
      .catch((error) => {
        dispatch(fetchRegisterFailure(error));
      });
  };
};
