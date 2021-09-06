import { createStore, applyMiddleware, combineReducers } from 'redux';
import ReduxThunk from 'redux-thunk';
import signInReducer from './reducers/AuthReducers';

const rootReducer = combineReducers({
  auth: signInReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default store;
