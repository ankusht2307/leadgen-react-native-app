import {
  FETCH_LEAD_FAILURE,
  FETCH_LEAD_REQUEST,
  FETCH_LEAD_SUCCESS,
} from './leadTypes';

const initialState = {
  loading: false,
  lead: null,
  error: '',
};

const leadReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LEAD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_LEAD_SUCCESS:
      return {
        loading: false,
        lead: action.payload,
        error: '',
      };
    case FETCH_LEAD_FAILURE:
      return {
        loading: false,
        lead: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default leadReducer;
