import {
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
} from "./types";

const INITIAL_STATE = {
  data: null,
  isFetching: false,
  errorMessage: undefined,
};

const covidReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_DATA_START:
      return { ...state, isFetching: true };

    case FETCH_DATA_SUCCESS:
      return { ...state, data: action.payload, isFetching: false };
    case FETCH_DATA_FAILURE:
      return { ...state, isFetching: false, errorMessage: action.payload };

    default:
      return state;
  }
};

export default covidReducer;
