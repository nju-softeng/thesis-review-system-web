import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware, compose } from "redux";
import rootRducer from "./reducer";
import thunk from "redux-thunk";

// 这里让项目支持浏览器插件Redux DevTools
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = configureStore({ reducer: rootRducer }, enhancer);

export default store;
