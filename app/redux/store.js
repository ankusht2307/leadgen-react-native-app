import { createStore, applyMiddleware, combineReducers } from 'redux';
import ReduxThunk from 'redux-thunk';
import leadReducer from './lead/leadReducer';
import loginReducer from './login/loginReducer';
import registerReducer from './register/registerReducer';
import userReducer from './user/userReducer';

const appReducer = combineReducers({
  login: loginReducer,
  register: registerReducer,
  user: userReducer,
  lead: leadReducer
});

const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    return appReducer(undefined, action);
  }

  return appReducer(state, action);
};

/* eslint-disable no-underscore-dangle */
const store = createStore(
  rootReducer,
  applyMiddleware(ReduxThunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */

export default store;
