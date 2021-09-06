import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

// const rootReducer = combineReducers({});
const store = createStore(applyMiddleware(ReduxThunk));

export default store;
