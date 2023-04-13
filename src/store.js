import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { userLoginReducer, userRegisterReducer } from './reducers/userReducers'
import { tipsReducer } from './reducers/tipsReducers'

import thunk from "redux-thunk";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  tipsList: tipsReducer
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