import { fetchTickets } from "../api/api";
import { put, call, takeEvery } from "redux-saga/effects";

import {
  getTicketsSuccess,
  getTicketsFailure
} from "../tickets";
import {
  GET_CURRENCY_RATE_REQUEST,
  GET_TICKETS_REQUEST
} from "../tickets/types";

export function* fetchTicketsSaga() {
  try {
    const tickets = yield call(() => fetchTickets());
    yield put(getTicketsSuccess(tickets));
  } catch (err) {
    yield put(getTicketsFailure(err.toString));
  }
}

export function* rootSaga() {
  yield [yield takeEvery(GET_TICKETS_REQUEST, fetchTicketsSaga)];
}
