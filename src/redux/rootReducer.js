import { combineReducers } from "redux";

import counterReducer from "./counter/counterReducer";
import covidReducer from "./COVID/reducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  covid: covidReducer,
});

export default rootReducer;
