import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import createSageMiddleware from "redux-saga";

import rootReducer from "./rootReducer";
// import rootSaga from "./rootSagas";
import { fetchDataStart } from "./COVID/covidSagas";

const sagaMiddleWare = createSageMiddleware();

const middlewares = [sagaMiddleWare];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleWare.run(fetchDataStart);

export default store;
