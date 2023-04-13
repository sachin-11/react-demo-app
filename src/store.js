import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { userLoginReducer, userRegisterReducer } from './reducers/userReducers'

import thunk from "redux-thunk";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
});

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null


const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const preloadedState = {};

const store = configureStore({
  reducer,
  initialState,
  preloadedState,
  middleware: [thunk],
});

export default store;