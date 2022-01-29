import { ApiUrl } from '../../constants/constants';
import httpCommon from '../../utils/http/http.common';

const logout = async (props) => {
  console.log(props);
  await httpCommon
    .post(`${ApiUrl}/auth/logout`)
    .then((response) => {
      //   console.log(response);
    })
    .catch((error) => {
      //   console.log(error);
    });
};

export default logout;
