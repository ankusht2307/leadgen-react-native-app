import {
  fetchLeadFailure,
  fetchLeadRequest,
  fetchLeadSuccess,
} from '../redux/lead/leadActions';
import http from '../utils/http/http.common';

export const createLead = async (leadData) => {
  let response;
  try {
    response = await http.post('/lead', leadData);
  } catch (error) {
    console.error(error);
  }
  return response.data;
};

export const getLeadsByUser = () => {
  return async (dispatch) => {
    dispatch(fetchLeadRequest);
    // Have to declare the response variable outside the try block
    let response;
    try {
      response = await http.get('/lead');
    } catch (error) {
      // Ensure we only catch network errors
      dispatch(fetchLeadFailure(error));
      // Bail out early on failure
      return;
    }
    // We now have the result and there's no error. Dispatch "fulfilled".
    dispatch(fetchLeadSuccess(response.data));
  };
};

export const getLeadById = (leadId) => {
  return async (dispatch) => {
    dispatch(fetchLeadRequest);
    // Have to declare the response variable outside the try block
    let response;
    try {
      response = await http.get(`/lead/${leadId}`);
    } catch (error) {
      // Ensure we only catch network errors
      dispatch(fetchLeadFailure(error));
      // Bail out early on failure
      return;
    }
    // We now have the result and there's no error. Dispatch "fulfilled".
    dispatch(fetchLeadSuccess(response.data));
  };
};

export const getTotalLeads = () => {
  return async (dispatch) => {
    dispatch(fetchLeadRequest);
    // Have to declare the response variable outside the try block
    let response;
    try {
      response = await http.get('/lead/all');
    } catch (error) {
      // Ensure we only catch network errors
      dispatch(fetchLeadFailure(error));
      // Bail out early on failure
      return;
    }
    // We now have the result and there's no error. Dispatch "fulfilled".
    dispatch(fetchLeadSuccess(response.data));
  };
};
