import axios from 'axios';
import { ApiUrl } from '../../constants/constants';

const RegisterService = (data) => {
  return axios
    .post(`${ApiUrl}/auth/register`, data)
    .then((res) => console.log(res))
    .catch((error) => console.log(error));
};

export default RegisterService;
