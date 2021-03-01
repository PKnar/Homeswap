import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import {
  userLoginReducer,
  userRegisterReducer,
} from "./reducers/userReducer.js";

const userInfoLocalStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: {
    userInfo: userInfoLocalStorage,
  },
};

const middleware = [thunk];

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
});

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(...middleware)
);

export default store;
