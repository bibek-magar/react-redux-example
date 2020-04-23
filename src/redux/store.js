import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import createSageMiddleware from "redux-saga";

import rootReducer from "./rootReducer";
// import rootSaga from "./rootSagas";

// const sagaMiddleWare = createSageMiddleware();

const middlewares = [];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// sagaMiddleWare.run(rootSaga);

export default store;
