import { all, call, fork, put } from "redux-saga/effects";
import {
  fetchSearchIdError,
  fetchSearchIdSuccess,
  fetchSearchIdRequest,
  fetchTicketsError,
  fetchTicketsSuccess,
  fetchTicketsRequest
} from "./actions";
import { getSearchId, getTickets } from "../../api/api";

function* handleSearchIdFetch() {
  try {
    yield put(fetchSearchIdRequest());
    const response = yield call(getSearchId);

    if (response.error) {
      yield put(fetchSearchIdError(response.error));
    } else {
      yield put(fetchSearchIdSuccess(response));
      const { searchId } = response;
      yield call(handleTicketsPolling, searchId);
    }
  } catch (error) {
    console.warn(error);
    yield put(fetchSearchIdError(error));
  }
}

function* handleTicketsPolling(searchId: string) {
  let stop = false;
  while (!stop) {
    try {
      yield put(fetchTicketsRequest());
      const response = yield call(getTickets, searchId);

      if (response.error) {
        yield put(fetchTicketsError(response.error));
      } else {
        const { tickets } = response;
        stop = response.stop;
        yield put(fetchTicketsSuccess(tickets));
      }
    } catch (error) {
      // console.warn(error);
      yield put(fetchTicketsError(error));
    }
  }
}

export function* ticketsSaga() {
  yield all([fork(handleSearchIdFetch)]);
}
