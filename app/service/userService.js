import {
  fetchUserFailure,
  fetchUserRequest,
  fetchUserSuccess,
} from '../redux/user/userActions';
import http from '../utils/http/http.common';

export const createUser = async (userData) => {
  let response;
  try {
    response = await http.post('/user', userData);
  } catch (error) {
    console.error(error);
  }
  return response.data;
};

export const getUsers = () => {
  return async (dispatch) => {
    dispatch(fetchUserRequest);
    // Have to declare the response variable outside the try block
    let response;
    try {
      response = await http.get('/user');
    } catch (error) {
      // Ensure we only catch network errors
      dispatch(fetchUserFailure(error));
      // Bail out early on failure
      return;
    }
    // We now have the result and there's no error. Dispatch "fulfilled".
    dispatch(fetchUserSuccess(response.data));
  };
};
