import {
  FETCH_LEAD_FAILURE,
  FETCH_LEAD_REQUEST,
  FETCH_LEAD_SUCCESS,
} from './leadTypes';

export const fetchLeadRequest = () => {
  return {
    type: FETCH_LEAD_REQUEST,
  };
};

export const fetchLeadSuccess = (lead) => {
  return {
    type: FETCH_LEAD_SUCCESS,
    payload: lead,
  };
};

export const fetchLeadFailure = (error) => {
  return {
    type: FETCH_LEAD_FAILURE,
    payload: error,
  };
};
