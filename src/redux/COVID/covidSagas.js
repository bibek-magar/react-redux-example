import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";
import { FETCH_DATA_START } from "./types";
import { fetchDataSuccess, fetchDataFailure } from "./actions";

export function* fetchDataAsync() {
  console.log("Fetch data called");
  try {
    const data = yield axios.get(
      "https://covidtracking.com/api/v1/counties.json"
    );
    console.log("Called");
    yield put(fetchDataSuccess(data.data));
  } catch (error) {
    yield put(fetchDataFailure(error));
  }
}

export function* fetchDataStart() {
  yield takeEvery(FETCH_DATA_START, fetchDataAsync);
}
