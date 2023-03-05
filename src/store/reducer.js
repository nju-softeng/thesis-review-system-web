// import { combineReducers } from "redux";
import { combineReducers } from "@reduxjs/toolkit";
// import { reducer as loginReducer } from "@/pages/login/store";
import counterSlice from "./slice/counter";
import userSlice from "./slice/userSlice";
const rootRducer = combineReducers({
  // login: loginReducer,
  user: userSlice,
  counter: counterSlice,
});

export default rootRducer;

// console.log(rootRducer);
