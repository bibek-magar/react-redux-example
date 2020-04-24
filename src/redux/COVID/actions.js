import {
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
} from "./types";

export const fetchDataStart = () => ({
  type: FETCH_DATA_START,
});
export const fetchDataSuccess = (collectionMap) => ({
  type: FETCH_DATA_SUCCESS,
  payload: collectionMap,
});

export const fetchDataFailure = (message) => ({
  type: FETCH_DATA_FAILURE,
  payload: message,
});
