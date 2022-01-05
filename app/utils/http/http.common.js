import axios from 'axios';
import { ApiUrl } from '../../constants/constants';

export default axios.create({
  baseURL: ApiUrl,
  headers: {
    'Content-type': 'application/json',
  },
});
