import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { getAllUserReducer } from "./reducers/userReducers";

const reducer = combineReducers({
  users: getAllUserReducer,
});

const middleware = [thunk];
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
