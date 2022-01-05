import http from '../../utils/http/http.common';

const createUser = async (userData) => {
  let response;
  try {
    response = await http.post('/user', userData);
  } catch (error) {
    console.error(error);
  }
  return response.data;
};

export default createUser;
