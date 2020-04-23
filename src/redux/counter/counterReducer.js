import { INCREASE_NUMBER, DECREASE_NUMBER } from "./types";

const INITIAL_STATE = {
  count: 0,
};

const counterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INCREASE_NUMBER:
      return {
        ...state,
        count: state.count + 1,
      };

    case DECREASE_NUMBER:
      return {
        ...state,
        count: state.count - 1,
      };

    default:
      return state;
  }
};

export default counterReducer;
