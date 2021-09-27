import axios from 'axios';
import { ApiUrl } from '../../constants/constants';

const RegisterService = (data) => {
  return axios.post(`${ApiUrl}/auth/register`, data);
};

export default RegisterService;
