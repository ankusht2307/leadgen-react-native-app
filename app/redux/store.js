import { createStore, applyMiddleware, combineReducers } from 'redux';
import ReduxThunk from 'redux-thunk';
import { loginReducer } from './login/loginReducer';

const rootReducer = combineReducers({
  login: loginReducer,
});

/* eslint-disable no-underscore-dangle */
const store = createStore(
  rootReducer,
  applyMiddleware(ReduxThunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */

export default store;
