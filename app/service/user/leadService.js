import http from '../../utils/http/http.common';

export const createLead = async (leadData) => {
  let response;
  try {
    response = await http.post('/lead', leadData);
  } catch (error) {
    console.error(error);
  }
  return response.data;
};

export const getLeadsByUser = async () => {
  let response;
  try {
    response = await http.get('/lead');
  } catch (error) {
    console.error(error);
  }
  return response.data;
};
