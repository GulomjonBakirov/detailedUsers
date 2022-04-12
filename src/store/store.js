import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  getAllUserReducer,
  authReducer,
  getUserReducer,
} from "./reducers/userReducers";

const reducer = combineReducers({
  users: getAllUserReducer,
  auth: authReducer,
  userDetails: getUserReducer,
});

const middleware = [thunk];
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
