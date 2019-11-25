import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { TicketsActionTypes } from "./types";
import {
  fetchTicketsError,
  fetchTicketsSuccess,
  fetchSearchIdError,
  fetchSearchIdSuccess
} from "./actions";
import { get } from "../../api/get";

function* handleSearchIdFetch() {
  try {
    const response = yield call(get, "/search");

    if (response.error) {
      yield put(fetchSearchIdError(response.error));
    } else {
      yield put(fetchSearchIdSuccess(response));
    }
  } catch (error) {
    console.warn(error);
    yield put(fetchSearchIdError(error));
  }
}

function* watchSearchIdFetch() {
  yield takeEvery(
    TicketsActionTypes.FETCH_SEARCH_ID_REQUEST,
    handleSearchIdFetch
  );
}

export function* ticketsSaga() {
  yield all([fork(watchSearchIdFetch)]);
}
