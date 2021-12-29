import {
  FETCH_REGISTER_FAILURE,
  FETCH_REGISTER_REQUEST,
  FETCH_REGISTER_SUCCESS,
} from './registerTypes';

const initialState = {
  loading: false,
  user: null,
  error: '',
};

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_REGISTER_SUCCESS:
      return {
        loading: false,
        user: action.payload,
        error: '',
      };
    case FETCH_REGISTER_FAILURE:
      return {
        loading: false,
        user: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default registerReducer;
